/** @format */

import { readFileSync } from 'node:fs'
import { join } from 'node:path'
import { parse } from 'csv-parse/sync'
import { id, init } from '@instantdb/admin'
import schema from '../src/instant.schema'

const appId = process.env.VITE_INSTANT_APP_ID
const adminToken = process.env.INSTANT_APP_ADMIN_TOKEN

if (!appId) {
  console.error(
    'VITE_INSTANT_APP_ID is not set. Please set it in your .env file.',
  )
  process.exit(1)
}

if (!adminToken) {
  console.error(
    'INSTANT_APP_ADMIN_TOKEN is not set. Please set it in your .env file.',
  )
  process.exit(1)
}

const db = init({
  appId,
  adminToken,
  schema,
  useDateObjects: true,
})

interface ExerciseRow {
  name: string
  'url - c': string
  'url - o': string
  'url - p': string
  note: string
  substitutions: string
}

async function importExercises() {
  try {
    // Read and parse CSV
    const csvPath = join(process.cwd(), 'data', 'exercises.csv')
    const csvContent = readFileSync(csvPath, 'utf-8')

    const records: Array<ExerciseRow> = parse(csvContent, {
      columns: true,
      skip_empty_lines: true,
      trim: true,
    })

    console.log(`Found ${records.length} exercises to import`)

    // Create a map to store exercise IDs by name for linking substitutions
    const exerciseIdMap = new Map<string, string>()

    // First pass: Create all exercises
    for (const record of records) {
      // Collect all non-empty URLs
      const videoURLs: Array<string> = []
      if (record['url - c'].trim()) {
        videoURLs.push(record['url - c'].trim())
      }
      if (record['url - o'].trim()) {
        videoURLs.push(record['url - o'].trim())
      }
      if (record['url - p'].trim()) {
        videoURLs.push(record['url - p'].trim())
      }

      // Create exercise
      const exerciseId = id()
      const exerciseData: {
        name: string
        videoURLs?: Array<string>
        note?: string
        created?: Date
      } = {
        name: record.name.trim(),
        created: new Date(),
      }

      if (videoURLs.length > 0) {
        exerciseData.videoURLs = videoURLs
      }

      if (record.note.trim()) {
        exerciseData.note = record.note.trim()
      }

      // Store the ID for later linking
      exerciseIdMap.set(record.name.trim(), exerciseId)

      // Create the exercise
      await db.transact(db.tx.exercises[exerciseId].create(exerciseData))
      console.log(`Created exercise: ${record.name}`)
    }

    console.log('\nCreating substitution links...')

    // Second pass: Create substitution links
    for (const record of records) {
      if (!record.substitutions.trim()) {
        continue
      }

      const exerciseName = record.name.trim()
      const exerciseId = exerciseIdMap.get(exerciseName)

      if (!exerciseId) {
        console.warn(`Could not find ID for exercise: ${exerciseName}`)
        continue
      }

      // Parse substitutions (comma-separated list)
      const substitutionNames = record.substitutions
        .split(',')
        .map((s) => s.trim())
        .filter((s) => s.length > 0)

      // Collect all valid substitution IDs
      const substitutionIds: Array<string> = []
      for (const subName of substitutionNames) {
        const subId = exerciseIdMap.get(subName)

        if (!subId) {
          console.warn(
            `Could not find substitution exercise "${subName}" for exercise "${exerciseName}"`,
          )
          continue
        }

        substitutionIds.push(subId)
      }

      // Create all links in one transaction if there are any
      if (substitutionIds.length > 0) {
        await db.transact(
          db.tx.exercises[exerciseId].link({ substitutions: substitutionIds }),
        )
        console.log(`Linked ${exerciseName} -> ${substitutionNames.join(', ')}`)
      }
    }

    console.log('\n✅ Import completed successfully!')
  } catch (error) {
    console.error('Error importing exercises:', error)
    process.exit(1)
  }
}

// Run the import
importExercises()
