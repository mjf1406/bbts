/** @format */

import { useEffect, useMemo, useState } from 'react'
import { db } from '@/lib/db/db'
import { id } from '@instantdb/react'
import {
  getCurrentWeekAndDay,
  parseWorkingSets,
  parseWarmupSets,
} from './utils'

export interface ExerciseWithTracking {
  exerciseId: string
  programId: string
  exercise: {
    id: string
    name: string
    note: string | null
    videoURLs: string[] | null
    imageURLs: string[] | null
  }
  program: {
    id: string
    idx: number
    week: string
    day: string | null
    type: string | null
    warmupSets: string | null
    workingSets: string | null
    targetReps: string | null
    earlySetRPE: string | null
    lastSetRPE: string | null
    rest: string | null
    lastSetIntensityTechnique: string | null
  }
  sets: Array<{
    id: string | null // tracking record id, null if not created yet
    setNumber: number // 1, 2, 3, etc. (global across warmup + working)
    setType: 'warmup' | 'working' // Type of set
    isRequired: boolean // Whether this set is required (minimum warmup sets are required)
    weight: number | null
    reps: number | null
    earlySetRPE: number | null
    lastSetRPE: number | null
    restDuration: number | null
    notes: string | null
  }>
}

export function useTracking(
  userId: string,
  trackingStartDate: Date | null | undefined,
) {
  const [isCreatingRecords, setIsCreatingRecords] = useState(false)
  const [creationError, setCreationError] = useState<Error | null>(null)

  // Calculate current week and day
  const weekAndDay = useMemo(
    () => getCurrentWeekAndDay(trackingStartDate),
    [trackingStartDate],
  )

  // For testing: if no trackingStartDate, default to week 1, Monday
  const effectiveWeekAndDay = useMemo(() => {
    if (weekAndDay) {
      return weekAndDay
    }
    // Default to week 1, Monday for testing
    const today = new Date()
    const dayName = today.toLocaleDateString('en-US', { weekday: 'long' })
    return { week: 1, day: dayName }
  }, [weekAndDay])

  // Build query for today's program entries
  const programQuery = useMemo(() => {
    return {
      program: {
        $: {
          where: {
            week: effectiveWeekAndDay.week.toString(),
            day: effectiveWeekAndDay.day,
          },
          order: { idx: 'asc' as const },
          first: 1000,
        },
        exercise: {},
      },
    }
  }, [effectiveWeekAndDay])

  const { data: programData, isLoading: programLoading, error: programError } = db.useQuery(
    programQuery,
  )

  // Debug logging
  useEffect(() => {
    if (programError) {
      console.error('Program query error:', programError)
    }
    if (programData) {
      console.log('Program data:', programData)
    }
  }, [programData, programError])


  // Build query for existing tracking records
  const trackingQuery = useMemo(() => {
    if (!userId || !programData?.program) {
      return null
    }

    const programIds = programData.program.map((p) => p.id)

    return {
      tracking: {
        $: {
          where: {
            'owner.id': userId,
            'program.id': { $in: programIds },
          },
          first: 10000,
        },
        exercise: {},
        program: {},
      },
    }
  }, [userId, programData?.program])

  const { data: trackingData, isLoading: trackingLoading, error: trackingError } = db.useQuery(
    trackingQuery,
  )

  // Debug logging
  useEffect(() => {
    if (trackingError) {
      console.error('Tracking query error:', trackingError)
    }
  }, [trackingError])

  // Create tracking records if they don't exist
  useEffect(() => {
    if (
      isCreatingRecords ||
      programLoading ||
      trackingLoading ||
      !programData?.program ||
      !userId ||
      !effectiveWeekAndDay
    ) {
      return
    }

    const programEntries = programData.program
    const existingTracking = trackingData?.tracking || []
    const existingByProgram = new Map<string, number>()

    // Count existing tracking records per program entry
    for (const tracking of existingTracking) {
      const programId = tracking.program?.id
      if (programId) {
        existingByProgram.set(
          programId,
          (existingByProgram.get(programId) || 0) + 1,
        )
      }
    }

    // Find program entries that need tracking records
    const recordsToCreate: Array<{
      programId: string
      exerciseId: string
      numSets: number
    }> = []

    for (const programEntry of programEntries) {
      const programId = programEntry.id
      const exerciseId = programEntry.exercise?.id

      if (!exerciseId) {
        continue
      }

      const warmupSets = parseWarmupSets(programEntry.warmupSets)
      const workingSets = parseWorkingSets(programEntry.workingSets)
      const totalSets = warmupSets.max + workingSets
      const existingCount = existingByProgram.get(programId) || 0

      if (existingCount < totalSets) {
        recordsToCreate.push({
          programId,
          exerciseId,
          numSets: totalSets - existingCount,
        })
      }
    }

    // Create missing tracking records
    if (recordsToCreate.length > 0) {
      setIsCreatingRecords(true)
      setCreationError(null)

      const createPromises = recordsToCreate.flatMap(({ programId, exerciseId, numSets }) => {
        return Array.from({ length: numSets }, () => {
          const trackingId = id()
          const now = new Date()
          return db.transact(
            db.tx.tracking[trackingId].create({
              created: now,
              updated: now,
            }).link({
              exercise: exerciseId,
              program: programId,
              owner: userId,
            }),
          )
        })
      })

      Promise.all(createPromises)
        .then(() => {
          setIsCreatingRecords(false)
        })
        .catch((error) => {
          console.error('Error creating tracking records:', error)
          setCreationError(error)
          setIsCreatingRecords(false)
        })
    }
  }, [
    programData,
    trackingData,
    programLoading,
    trackingLoading,
    userId,
    effectiveWeekAndDay,
    isCreatingRecords,
  ])

  // Merge exercise, program, and tracking data
  const exercisesWithTracking = useMemo(() => {
    if (!programData?.program) {
      return []
    }

    type TrackingArray = NonNullable<typeof trackingData>['tracking']
    const trackingByProgram = new Map<string, TrackingArray>()
    if (trackingData?.tracking) {
      for (const tracking of trackingData.tracking) {
        const programId = tracking.program?.id
        if (programId) {
          if (!trackingByProgram.has(programId)) {
            trackingByProgram.set(programId, [])
          }
          trackingByProgram.get(programId)!.push(tracking)
        }
      }
    }

    const result: ExerciseWithTracking[] = []

    for (const programEntry of programData.program) {
      const programId = programEntry.id
      const exercise = programEntry.exercise

      if (!exercise) {
        continue
      }

      const trackingRecords = trackingByProgram.get(programId) || []
      const warmupSets = parseWarmupSets(programEntry.warmupSets)
      const workingSets = parseWorkingSets(programEntry.workingSets)

      // Create sets array - warmup sets first, then working sets
      const sets = []
      let globalSetNumber = 1

      // Add warmup sets (min required, max optional)
      for (let i = 0; i < warmupSets.max; i++) {
        const trackingRecord = trackingRecords[globalSetNumber - 1] || null
        const isRequired = i < warmupSets.min

        sets.push({
          id: trackingRecord?.id || null,
          setNumber: globalSetNumber,
          setType: 'warmup' as const,
          isRequired,
          weight: trackingRecord?.weight || null,
          reps: trackingRecord?.reps || null,
          earlySetRPE: trackingRecord?.earlySetRPE || null,
          lastSetRPE: trackingRecord?.lastSetRPE || null,
          restDuration: trackingRecord?.restDuration || null,
          notes: trackingRecord?.notes || null,
        })
        globalSetNumber++
      }

      // Add working sets (all required)
      for (let i = 0; i < workingSets; i++) {
        const trackingRecord = trackingRecords[globalSetNumber - 1] || null

        sets.push({
          id: trackingRecord?.id || null,
          setNumber: globalSetNumber,
          setType: 'working' as const,
          isRequired: true,
          weight: trackingRecord?.weight || null,
          reps: trackingRecord?.reps || null,
          earlySetRPE: trackingRecord?.earlySetRPE || null,
          lastSetRPE: trackingRecord?.lastSetRPE || null,
          restDuration: trackingRecord?.restDuration || null,
          notes: trackingRecord?.notes || null,
        })
        globalSetNumber++
      }

      result.push({
        exerciseId: exercise.id,
        programId,
        exercise: {
          id: exercise.id,
          name: exercise.name,
          note: exercise.note || null,
          videoURLs: exercise.videoURLs || null,
          imageURLs: exercise.imageURLs || null,
        },
        program: {
          id: programEntry.id,
          idx: programEntry.idx,
          week: programEntry.week || '',
          day: programEntry.day || null,
          type: programEntry.type || null,
          warmupSets: programEntry.warmupSets || null,
          workingSets: programEntry.workingSets || null,
          targetReps: programEntry.targetReps || null,
          earlySetRPE: programEntry.earlySetRPE || null,
          lastSetRPE: programEntry.lastSetRPE || null,
          rest: programEntry.rest || null,
          lastSetIntensityTechnique:
            programEntry.lastSetIntensityTechnique || null,
        },
        sets,
      })
    }

    return result
  }, [programData, trackingData])

  // Function to update a tracking record
  const updateTrackingRecord = async (
    trackingId: string,
    updates: {
      weight?: number | null
      reps?: number | null
      sets?: number | null
      earlySetRPE?: number | null
      lastSetRPE?: number | null
      restDuration?: number | null
      notes?: string | null
    },
  ) => {
    try {
      await db.transact(
        db.tx.tracking[trackingId].update({
          ...updates,
          updated: new Date(),
        }),
      )
    } catch (error) {
      console.error('Error updating tracking record:', error)
      throw error
    }
  }

  // Only show loading if we're actually loading or creating records
  // If programData is empty but not loading, that's a valid state (no exercises today)
  const isLoading =
    (programQuery && programLoading) ||
    (trackingQuery && trackingLoading) ||
    isCreatingRecords

  return {
    exercisesWithTracking,
    isLoading,
    error: creationError || programError || trackingError,
    weekAndDay: effectiveWeekAndDay,
    updateTrackingRecord,
  }
}
