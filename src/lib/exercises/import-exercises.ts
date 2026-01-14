/** @format */

import { db } from '@/lib/db/db';
import { id } from '@instantdb/react';

interface ExerciseRow {
  name: string;
  'url - c': string;
  'url - o': string;
  'url - p': string;
  note: string;
  substitutions: string;
}

function parseCSV(csvContent: string): ExerciseRow[] {
  const lines = csvContent.split('\n').filter((line) => line.trim());
  if (lines.length === 0) return [];

  // Parse header
  const headers = lines[0].split(',').map((h) => h.trim());
  const records: ExerciseRow[] = [];

  // Parse data rows
  for (let i = 1; i < lines.length; i++) {
    const line = lines[i];
    const values: string[] = [];
    let currentValue = '';
    let inQuotes = false;

    for (let j = 0; j < line.length; j++) {
      const char = line[j];
      if (char === '"') {
        inQuotes = !inQuotes;
      } else if (char === ',' && !inQuotes) {
        values.push(currentValue.trim());
        currentValue = '';
      } else {
        currentValue += char;
      }
    }
    values.push(currentValue.trim()); // Add last value

    if (values.length === headers.length) {
      const record: any = {};
      headers.forEach((header, index) => {
        record[header] = values[index] || '';
      });
      records.push(record as ExerciseRow);
    }
  }

  return records;
}

export async function importExercisesFromCSV(): Promise<{
  success: boolean;
  message: string;
  count?: number;
}> {
  try {
    // Fetch CSV from public folder
    const response = await fetch('/exercises.csv');
    if (!response.ok) {
      throw new Error('Failed to fetch exercises.csv');
    }

    const csvContent = await response.text();

    // Parse CSV
    const records = parseCSV(csvContent);

    console.log(`Found ${records.length} exercises to import`);

    // Create a map to store exercise IDs by name for linking substitutions
    const exerciseIdMap = new Map<string, string>();

    // First pass: Create all exercises
    for (const record of records) {
      // Collect all non-empty URLs
      const videoURLs: string[] = [];
      if (record['url - c']?.trim()) {
        videoURLs.push(record['url - c'].trim());
      }
      if (record['url - o']?.trim()) {
        videoURLs.push(record['url - o'].trim());
      }
      if (record['url - p']?.trim()) {
        videoURLs.push(record['url - p'].trim());
      }

      // Create exercise
      const exerciseId = id();
      const exerciseData: {
        name: string;
        videoURLs?: string[];
        note?: string;
        created?: Date;
      } = {
        name: record.name.trim(),
        created: new Date(),
      };

      if (videoURLs.length > 0) {
        exerciseData.videoURLs = videoURLs;
      }

      if (record.note?.trim()) {
        exerciseData.note = record.note.trim();
      }

      // Store the ID for later linking
      exerciseIdMap.set(record.name.trim(), exerciseId);

      // Create the exercise using db.transact (await each transaction)
      await db.transact(db.tx.exercises[exerciseId].create(exerciseData));
    }

    // Second pass: Create substitution links
    for (const record of records) {
      if (!record.substitutions?.trim()) {
        continue;
      }

      const exerciseName = record.name.trim();
      const exerciseId = exerciseIdMap.get(exerciseName);

      if (!exerciseId) {
        console.warn(`Could not find ID for exercise: ${exerciseName}`);
        continue;
      }

      // Parse substitutions (comma-separated list)
      const substitutionNames = record.substitutions
        .split(',')
        .map((s) => s.trim())
        .filter((s) => s.length > 0);

      // Collect all valid substitution IDs
      const substitutionIds: string[] = [];
      for (const subName of substitutionNames) {
        const subId = exerciseIdMap.get(subName);

        if (!subId) {
          console.warn(
            `Could not find substitution exercise "${subName}" for exercise "${exerciseName}"`
          );
          continue;
        }

        substitutionIds.push(subId);
      }

      // Create all links in one transaction if there are any
      if (substitutionIds.length > 0) {
        await db.transact(
          db.tx.exercises[exerciseId].link({ substitutions: substitutionIds })
        );
      }
    }

    return {
      success: true,
      message: `Successfully imported ${records.length} exercises`,
      count: records.length,
    };
  } catch (error) {
    console.error('Error importing exercises:', error);
    return {
      success: false,
      message: error instanceof Error ? error.message : 'Unknown error occurred',
    };
  }
}
