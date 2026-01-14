/** @format */

import { id } from '@instantdb/react'
import { db } from '@/lib/db/db'

interface ProgramRow {
  idx: string
  week: string
  day: string
  type: string
  exercise: string
  'last-set intensity technique': string
  'warm-up sets': string
  'working sets': string
  'target reps': string
  'early set RPE': string
  'last set RPE': string
  rest: string
}

function parseCSV(csvContent: string): Array<ProgramRow> {
  const lines = csvContent.split('\n').filter((line) => line.trim())
  if (lines.length === 0) return []

  // Parse header
  const headers = lines[0].split(',').map((h) => h.trim())
  const records: Array<ProgramRow> = []

  // Parse data rows
  for (let i = 1; i < lines.length; i++) {
    const line = lines[i]
    const values: Array<string> = []
    let currentValue = ''
    let inQuotes = false

    for (let j = 0; j < line.length; j++) {
      const char = line[j]
      if (char === '"') {
        inQuotes = !inQuotes
      } else if (char === ',' && !inQuotes) {
        values.push(currentValue.trim())
        currentValue = ''
      } else {
        currentValue += char
      }
    }
    values.push(currentValue.trim()) // Add last value

    if (values.length === headers.length) {
      const record: any = {}
      headers.forEach((header, index) => {
        record[header] = values[index] || ''
      })
      records.push(record as ProgramRow)
    }
  }

  return records
}

export async function importProgramFromCSV(
  exercises: Array<{ id: string; name: string }>,
): Promise<{
  success: boolean
  message: string
  count?: number
}> {
  try {
    // Fetch CSV from public folder
    const response = await fetch('/program.csv')
    if (!response.ok) {
      throw new Error('Failed to fetch program.csv')
    }

    const csvContent = await response.text()

    // Parse CSV
    const records = parseCSV(csvContent)

    console.log(`Found ${records.length} program entries to import`)

    // Create a map from exercise name to exercise ID
    const exerciseIdMap = new Map<string, string>()
    exercises.forEach((ex) => {
      exerciseIdMap.set(ex.name.trim(), ex.id)
    })

    // Create all program entries
    for (const record of records) {
      const programId = id()
      const programData: {
        idx: number
        week: string
        day?: string
        type?: string
        lastSetIntensityTechnique?: string
        warmupSets?: string
        workingSets?: string
        targetReps?: string
        earlySetRPE?: string
        lastSetRPE?: string
        rest?: string
        created?: Date
      } = {
        idx: parseInt(record.idx.trim(), 10),
        week: record.week.trim() || '',
        created: new Date(),
      }

      if (record.day.trim()) {
        programData.day = record.day.trim()
      }
      if (record.type.trim()) {
        programData.type = record.type.trim()
      }
      if (record['last-set intensity technique'].trim()) {
        programData.lastSetIntensityTechnique =
          record['last-set intensity technique'].trim()
      }
      if (record['warm-up sets'].trim()) {
        programData.warmupSets = record['warm-up sets'].trim()
      }
      if (record['working sets'].trim()) {
        programData.workingSets = record['working sets'].trim()
      }
      if (record['target reps'].trim()) {
        programData.targetReps = record['target reps'].trim()
      }
      if (record['early set RPE'].trim()) {
        programData.earlySetRPE = record['early set RPE'].trim()
      }
      if (record['last set RPE'].trim()) {
        programData.lastSetRPE = record['last set RPE'].trim()
      }
      if (record.rest.trim()) {
        programData.rest = record.rest.trim()
      }

      // Create the program entry
      await db.transact(db.tx.program[programId].create(programData))

      // Link to exercise if it exists
      if (record.exercise.trim()) {
        const exerciseId = exerciseIdMap.get(record.exercise.trim())
        if (exerciseId) {
          await db.transact(
            db.tx.program[programId].link({ exercise: exerciseId }),
          )
        } else {
          console.warn(
            `Could not find exercise "${record.exercise.trim()}" for program entry`,
          )
        }
      }
    }

    return {
      success: true,
      message: `Successfully imported ${records.length} program entries`,
      count: records.length,
    }
  } catch (error) {
    console.error('Error importing program:', error)
    return {
      success: false,
      message:
        error instanceof Error ? error.message : 'Unknown error occurred',
    }
  }
}
