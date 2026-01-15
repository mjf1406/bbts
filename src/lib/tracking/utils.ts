/** @format */

/**
 * Check if a date is a Monday
 */
export function isMonday(date: Date): boolean {
  return date.getDay() === 1
}

/**
 * Get the next Monday from a given date
 */
export function getNextMonday(date: Date): Date {
  const nextMonday = new Date(date)
  const daysUntilMonday = (8 - date.getDay()) % 7 || 7
  nextMonday.setDate(date.getDate() + daysUntilMonday)
  nextMonday.setHours(0, 0, 0, 0)
  return nextMonday
}

/**
 * Get day name from a date (Monday, Tuesday, etc.)
 */
export function getDayName(date: Date): string {
  const days = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
  ]
  return days[date.getDay()]
}

/**
 * Calculate the current week (1-12) and day name based on tracking start date
 * Returns null if trackingStartDate is not set
 */
export function getCurrentWeekAndDay(
  trackingStartDate: Date | null | undefined,
): { week: number; day: string } | null {
  if (!trackingStartDate) {
    return null
  }

  const startDate = new Date(trackingStartDate)
  startDate.setHours(0, 0, 0, 0)

  const today = new Date()
  today.setHours(0, 0, 0, 0)

  // Calculate days since start
  const daysSinceStart = Math.floor(
    (today.getTime() - startDate.getTime()) / (1000 * 60 * 60 * 24),
  )

  if (daysSinceStart < 0) {
    return null // Start date is in the future
  }

  // Calculate week (1-12, each week is 7 days)
  const week = Math.floor(daysSinceStart / 7) + 1

  if (week > 12) {
    return null // Program is complete (12 weeks)
  }

  // Get day name
  const day = getDayName(today)

  return { week, day }
}

/**
 * Parse working sets string to determine number of sets
 * Handles formats like "3", "1-3", "2-4", etc.
 * Returns the maximum number if it's a range
 */
export function parseWorkingSets(workingSets: string | null | undefined): number {
  if (!workingSets) {
    return 1 // Default to 1 set if not specified
  }

  const trimmed = workingSets.trim()

  // Check if it's a range (e.g., "1-3")
  if (trimmed.includes('-')) {
    const parts = trimmed.split('-').map((p) => parseInt(p.trim(), 10))
    if (parts.length === 2 && !isNaN(parts[0]) && !isNaN(parts[1])) {
      // Return the maximum (working sets)
      return Math.max(parts[0], parts[1])
    }
  }

  // Try to parse as a single number
  const num = parseInt(trimmed, 10)
  if (!isNaN(num) && num > 0) {
    return num
  }

  // Default to 1 if parsing fails
  return 1
}

/**
 * Parse warmup sets string to determine minimum and maximum number of sets
 * Handles formats like "2", "2-3", "1-2", etc.
 * Returns an object with min (required) and max (optional) counts
 */
export function parseWarmupSets(warmupSets: string | null | undefined): {
  min: number
  max: number
} {
  if (!warmupSets) {
    return { min: 0, max: 0 } // No warmup sets
  }

  const trimmed = warmupSets.trim()

  // Check if it's a range (e.g., "2-3")
  if (trimmed.includes('-')) {
    const parts = trimmed.split('-').map((p) => parseInt(p.trim(), 10))
    if (parts.length === 2 && !isNaN(parts[0]) && !isNaN(parts[1])) {
      // Min is required, max is optional
      return { min: Math.min(parts[0], parts[1]), max: Math.max(parts[0], parts[1]) }
    }
  }

  // Try to parse as a single number
  const num = parseInt(trimmed, 10)
  if (!isNaN(num) && num > 0) {
    return { min: num, max: num }
  }

  // Default to 0 if parsing fails
  return { min: 0, max: 0 }
}
