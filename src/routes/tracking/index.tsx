/** @format */

import { createFileRoute, useNavigate } from '@tanstack/react-router'
import { Loader2 } from 'lucide-react'
import { useEffect, useRef } from 'react'
import { MondayCheck } from './-components/monday-check'
import { ExerciseCard } from './-components/exercise-card'
import { useAuthContext } from '@/components/auth/auth-provider'
import { useTracking } from '@/lib/tracking/use-tracking'
import { db } from '@/lib/db/db'
import { getDayName } from '@/lib/tracking/utils'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

export const Route = createFileRoute('/tracking/')({
  component: RouteComponent,
})

function RouteComponent() {
  const { user, isLoading: authLoading } = useAuthContext()
  const navigate = useNavigate()
  const containerRef = useRef<HTMLDivElement>(null)
  const cardRefs = useRef<Map<number, HTMLDivElement>>(new Map())

  // Query user data to get trackingStartDate
  const { data: userData, isLoading: userDataLoading } = db.useQuery(
    user.id
      ? {
          $users: {
            $: {
              where: { id: user.id },
            },
          },
        }
      : null,
  )

  const trackingStartDate = userData?.$users[0]?.trackingStartDate
    ? new Date(userData.$users[0].trackingStartDate)
    : null

  const {
    exercisesWithTracking,
    isLoading: trackingLoading,
    updateTrackingRecord,
  } = useTracking(user.id, trackingStartDate)

  useEffect(() => {
    if (!authLoading && !user.id) {
      navigate({ to: '/blocked' })
    }
  }, [user.id, authLoading, navigate])

  // Check if today is a rest day (Wednesday or Sunday)
  const today = new Date()
  const dayName = getDayName(today)
  const isRestDay = dayName === 'Wednesday' || dayName === 'Sunday'

  // Show loading immediately while checking auth or if not authenticated (will redirect)
  if (authLoading || userDataLoading || !user.id) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <Loader2 className="h-8 w-8 animate-spin" />
      </div>
    )
  }

  // Handle smooth scrolling to next card
  const scrollToNext = (currentIndex: number) => {
    const nextIndex = currentIndex + 1
    const nextCard = cardRefs.current.get(nextIndex)
    if (nextCard && containerRef.current) {
      nextCard.scrollIntoView({
        behavior: 'smooth',
        block: 'nearest',
        inline: 'center',
      })
    }
  }

  // Handle smooth scrolling to previous card
  const scrollToPrevious = (currentIndex: number) => {
    const prevIndex = currentIndex - 1
    const prevCard = cardRefs.current.get(prevIndex)
    if (prevCard && containerRef.current) {
      prevCard.scrollIntoView({
        behavior: 'smooth',
        block: 'nearest',
        inline: 'center',
      })
    }
  }

  return (
    <MondayCheck trackingStartDate={trackingStartDate}>
      <div className="h-screen w-full overflow-hidden">
        {trackingLoading ? (
          <div className="flex justify-center items-center h-full">
            <Loader2 className="h-8 w-8 animate-spin" />
          </div>
        ) : isRestDay && trackingStartDate ? (
          // Rest day card
          <div className="h-full w-full flex items-center justify-center p-4">
            <Card className="max-w-md w-full">
              <CardHeader>
                <CardTitle>Rest Day</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Enjoy your day off! Make sure to get lots of good stretching
                  in.
                </p>
              </CardContent>
            </Card>
          </div>
        ) : exercisesWithTracking.length === 0 ? (
          <div className="flex justify-center items-center h-full">
            <Card className="max-w-md w-full">
              <CardHeader>
                <CardTitle>No Exercises Today</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  There are no exercises scheduled for today.
                </p>
              </CardContent>
            </Card>
          </div>
        ) : (
          <div
            ref={containerRef}
            className="h-full w-full flex overflow-x-auto snap-x snap-mandatory scroll-smooth"
          >
            {exercisesWithTracking.map((exercise, index) => (
              <div
                key={`${exercise.exerciseId}-${exercise.programId}`}
                ref={(el) => {
                  if (el) {
                    cardRefs.current.set(index, el)
                  }
                }}
                className="h-full w-full flex-shrink-0"
              >
                <ExerciseCard
                  exercise={exercise}
                  onNext={() => scrollToNext(index)}
                  onPrevious={() => scrollToPrevious(index)}
                  updateTrackingRecord={updateTrackingRecord}
                  isLast={index === exercisesWithTracking.length - 1}
                  isFirst={index === 0}
                />
              </div>
            ))}
          </div>
        )}
      </div>
    </MondayCheck>
  )
}
