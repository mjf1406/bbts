/** @format */

import { useMemo } from 'react'
import type { ReactNode } from 'react'
import { getNextMonday, isMonday } from '@/lib/tracking/utils'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

interface MondayCheckProps {
  trackingStartDate: Date | null | undefined
  children: ReactNode
}

export function MondayCheck({ trackingStartDate, children }: MondayCheckProps) {
  const today = new Date()
  const todayIsMonday = isMonday(today)

  const { nextMonday, daysUntil } = useMemo(() => {
    const next = getNextMonday(today)
    const days = Math.ceil(
      (next.getTime() - today.getTime()) / (1000 * 60 * 60 * 24),
    )
    return { nextMonday: next, daysUntil: days }
  }, [today])

  // Format the date
  const formattedDate = useMemo(() => {
    return nextMonday.toLocaleDateString('en-US', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    })
  }, [nextMonday])

  // If user has a trackingStartDate, they can proceed
  // If today is Monday, they can proceed
  // Otherwise, show message
  // TEMPORARILY DISABLED FOR TESTING
  if (!trackingStartDate && !todayIsMonday) {
    // if (false) {
    return (
      <div className="flex items-center justify-center min-h-screen p-4">
        <Card className="max-w-md w-full">
          <CardHeader>
            <CardTitle>Program Starts on Monday</CardTitle>
          </CardHeader>
          <CardContent className="space-y-2">
            <p className="text-sm text-muted-foreground">
              The program starts on Monday. Please wait until the following
              Monday to begin tracking.
            </p>
            <div className="pt-2 border-t">
              <p className="text-sm font-medium">
                Next Monday: {formattedDate}
              </p>
              <p className="text-sm text-muted-foreground">
                {daysUntil === 1 ? '1 day away' : `${daysUntil} days away`}
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    )
  }

  return <>{children}</>
}
