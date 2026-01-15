/** @format */

import { useEffect, useMemo, useState } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { ExerciseHeader } from './exercise-header'
import { ProgramDetails } from './program-details'
import { SetsNavigator } from './sets-navigator'
import type { ExerciseWithTracking } from '@/lib/tracking/use-tracking'
import { Button } from '@/components/ui/button'
import { Textarea } from '@/components/ui/textarea'
import { Field, FieldContent, FieldLabel } from '@/components/ui/field'
import { Card, CardContent } from '@/components/ui/card'
import { Separator } from '@/components/ui/separator'

interface ExerciseCardProps {
  exercise: ExerciseWithTracking
  onNext: () => void
  onPrevious?: () => void
  updateTrackingRecord: (
    trackingId: string,
    updates: {
      weight?: number | null
      reps?: number | null
      earlySetRPE?: number | null
      lastSetRPE?: number | null
      restDuration?: number | null
      notes?: string | null
    },
  ) => Promise<void>
  isLast: boolean
  isFirst?: boolean
}

export function ExerciseCard({
  exercise,
  onNext,
  onPrevious,
  updateTrackingRecord,
  isLast,
  isFirst = false,
}: ExerciseCardProps) {
  const [localSets, setLocalSets] = useState(exercise.sets)
  const [isSaving, setIsSaving] = useState(false)
  const [currentSetIndex, setCurrentSetIndex] = useState(0)

  // Update local state when exercise prop changes
  useEffect(() => {
    setLocalSets(exercise.sets)
    setCurrentSetIndex(0) // Reset to first set when exercise changes
  }, [exercise.sets])

  // Check if all required sets are complete
  const allSetsComplete = useMemo(() => {
    return localSets.every((set) => {
      // Only check required sets (minimum warmup sets + all working sets)
      if (!set.isRequired) {
        return true // Optional sets don't need to be complete
      }
      // Required: weight, reps, lastSetRPE
      return set.weight != null && set.reps != null && set.lastSetRPE != null
    })
  }, [localSets])

  // Update local state only (don't save to DB yet)
  const handleSetUpdate = (
    setIndex: number,
    field: 'weight' | 'reps' | 'earlySetRPE' | 'lastSetRPE' | 'restDuration',
    value: number | null,
  ) => {
    const newSets = [...localSets]
    newSets[setIndex] = {
      ...newSets[setIndex],
      [field]: value,
    }
    setLocalSets(newSets)
  }

  // Update notes (also local only)
  const handleNotesUpdate = (value: string) => {
    if (localSets.length > 0 && localSets[currentSetIndex]?.id) {
      const newSets = [...localSets]
      newSets[currentSetIndex] = {
        ...newSets[currentSetIndex],
        notes: value,
      }
      setLocalSets(newSets)
    }
  }

  // Save all changes to database when clicking Next Exercise
  const handleSaveAndNext = async () => {
    if (!allSetsComplete) {
      return
    }

    setIsSaving(true)
    try {
      // Save all sets that have tracking records
      const savePromises = localSets
        .filter((set) => set.id) // Only save sets that have tracking records
        .map((set) => {
          const updates: {
            weight?: number | null
            reps?: number | null
            earlySetRPE?: number | null
            lastSetRPE?: number | null
            restDuration?: number | null
            notes?: string | null
          } = {
            weight: set.weight,
            reps: set.reps,
            earlySetRPE: set.earlySetRPE,
            lastSetRPE: set.lastSetRPE,
            restDuration: set.restDuration,
            notes: set.notes,
          }

          return updateTrackingRecord(set.id!, updates)
        })

      await Promise.all(savePromises)
      onNext()
    } catch (error) {
      console.error('Error saving tracking records:', error)
      // Don't navigate on error
    } finally {
      setIsSaving(false)
    }
  }

  return (
    <div className="h-fit w-full shrink-0 snap-center p-4 overflow-y-auto">
      <Card className="h-full flex flex-col">
        <ExerciseHeader
          name={exercise.exercise.name}
          note={exercise.exercise.note}
          videoURLs={exercise.exercise.videoURLs}
        />

        <CardContent className="flex flex-col gap-4">
          <ProgramDetails
            type={exercise.program.type}
            warmupSets={exercise.program.warmupSets}
            workingSets={exercise.program.workingSets}
            targetReps={exercise.program.targetReps}
            earlySetRPE={exercise.program.earlySetRPE}
            lastSetRPE={exercise.program.lastSetRPE}
            rest={exercise.program.rest}
          />

          <Separator />

          <SetsNavigator
            sets={localSets}
            currentSetIndex={currentSetIndex}
            onSetIndexChange={setCurrentSetIndex}
            onSetUpdate={handleSetUpdate}
            disabled={isSaving}
          />

          {/* Notes Field - shared across all sets for this exercise */}
          {localSets.length > 0 && localSets[currentSetIndex]?.id && (
            <Field orientation="vertical">
              <FieldLabel>Notes (optional)</FieldLabel>
              <FieldContent>
                <Textarea
                  placeholder="Add any notes about this exercise..."
                  value={localSets[currentSetIndex]?.notes ?? ''}
                  onChange={(e) => handleNotesUpdate(e.target.value)}
                  disabled={isSaving}
                  rows={3}
                />
              </FieldContent>
            </Field>
          )}

          {/* Navigation Buttons */}
          <div className="mt-auto space-y-2">
            <Button
              onClick={handleSaveAndNext}
              disabled={!allSetsComplete || isSaving || isLast}
              className="w-full"
              size="lg"
            >
              {isSaving ? (
                'Saving...'
              ) : isLast ? (
                'Complete'
              ) : (
                <>
                  Next Exercise
                  <ChevronRight className="ml-2 h-4 w-4" />
                </>
              )}
            </Button>
            {onPrevious && (
              <Button
                onClick={onPrevious}
                disabled={isSaving || isFirst}
                variant="outline"
                className="w-full"
                size="lg"
              >
                <ChevronLeft className="mr-2 h-4 w-4" />
                Previous Exercise
              </Button>
            )}
            {!allSetsComplete && (
              <p className="text-xs text-muted-foreground text-center mt-2">
                Please complete all required fields (weight, reps, last set RPE)
                for all required sets
              </p>
            )}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
