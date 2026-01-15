/** @format */

import { useState, useEffect, useRef } from 'react'
import { Timer } from 'lucide-react'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { Field, FieldContent, FieldLabel } from '@/components/ui/field'

interface SetData {
  id: string | null
  setNumber: number
  setType: 'warmup' | 'working'
  isRequired: boolean
  weight: number | null
  reps: number | null
  earlySetRPE: number | null
  lastSetRPE: number | null
  restDuration: number | null
  notes: string | null
}

interface SetCardProps {
  set: SetData
  onUpdate: (
    field:
      | 'weight'
      | 'reps'
      | 'earlySetRPE'
      | 'lastSetRPE'
      | 'restDuration',
    value: number | null,
  ) => void
  onRestComplete?: () => void // Called when stopwatch stops
  disabled?: boolean
}

export function SetCard({
  set,
  onUpdate,
  onRestComplete,
  disabled = false,
}: SetCardProps) {
  const [isRunning, setIsRunning] = useState(false)
  const [elapsedSeconds, setElapsedSeconds] = useState(0)
  const startTimeRef = useRef<number | null>(null)
  const intervalRef = useRef<NodeJS.Timeout | null>(null)

  // Update elapsed time while running
  useEffect(() => {
    if (isRunning && startTimeRef.current !== null) {
      intervalRef.current = setInterval(() => {
        const elapsed = Math.floor(
          (Date.now() - startTimeRef.current!) / 1000,
        )
        setElapsedSeconds(elapsed)
      }, 100) // Update every 100ms for smooth display
    } else {
      if (intervalRef.current) {
        clearInterval(intervalRef.current)
        intervalRef.current = null
      }
    }

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current)
      }
    }
  }, [isRunning])

  const handleStopwatchClick = () => {
    if (isRunning) {
      // Stop the timer
      setIsRunning(false)
      if (startTimeRef.current !== null) {
        const elapsed = Math.floor(
          (Date.now() - startTimeRef.current) / 1000,
        )
        // Update rest duration
        onUpdate('restDuration', elapsed)
        // Reset timer state
        startTimeRef.current = null
        setElapsedSeconds(0)
        // Navigate to next set
        onRestComplete?.()
      }
    } else {
      // Start the timer
      startTimeRef.current = Date.now()
      setElapsedSeconds(0)
      setIsRunning(true)
    }
  }

  // Format seconds as MM:SS
  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60)
    const secs = seconds % 60
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`
  }

  return (
    <div className="shrink-0 w-full space-y-3 p-3 border rounded-lg" style={{ minWidth: '100%' }}>
      <div className="font-medium text-sm flex items-center gap-2">
        <span>
          Set {set.setNumber} - {set.setType === 'warmup' ? 'Warmup' : 'Working'}
        </span>
        {!set.isRequired && (
          <span className="text-xs text-muted-foreground">(optional)</span>
        )}
      </div>
      <div className="grid grid-cols-2 gap-3">
        <Field orientation="vertical">
          <FieldLabel>Weight (lbs)</FieldLabel>
          <FieldContent>
            <Input
              type="number"
              placeholder="0"
              value={set.weight ?? ''}
              onChange={(e) =>
                onUpdate('weight', e.target.value === '' ? null : Number(e.target.value))
              }
              disabled={disabled || !set.id}
            />
          </FieldContent>
        </Field>

        <Field orientation="vertical">
          <FieldLabel>Reps</FieldLabel>
          <FieldContent>
            <Input
              type="number"
              placeholder="0"
              value={set.reps ?? ''}
              onChange={(e) =>
                onUpdate('reps', e.target.value === '' ? null : Number(e.target.value))
              }
              disabled={disabled || !set.id}
            />
          </FieldContent>
        </Field>

        <Field orientation="vertical">
          <FieldLabel>Early Set RPE (optional)</FieldLabel>
          <FieldContent>
            <Input
              type="number"
              placeholder="0"
              min="0"
              max="10"
              step="0.5"
              value={set.earlySetRPE ?? ''}
              onChange={(e) =>
                onUpdate(
                  'earlySetRPE',
                  e.target.value === '' ? null : Number(e.target.value),
                )
              }
              disabled={disabled || !set.id}
            />
          </FieldContent>
        </Field>

        <Field orientation="vertical">
          <FieldLabel>Last Set RPE *</FieldLabel>
          <FieldContent>
            <Input
              type="number"
              placeholder="0"
              min="0"
              max="10"
              step="0.5"
              value={set.lastSetRPE ?? ''}
              onChange={(e) =>
                onUpdate(
                  'lastSetRPE',
                  e.target.value === '' ? null : Number(e.target.value),
                )
              }
              disabled={disabled || !set.id}
            />
          </FieldContent>
        </Field>

        <Field orientation="vertical" className="col-span-2">
          <FieldLabel>Rest Duration (seconds, optional)</FieldLabel>
          <FieldContent>
            <div className="flex gap-2">
              <Input
                type="number"
                placeholder="0"
                value={set.restDuration ?? ''}
                onChange={(e) =>
                  onUpdate(
                    'restDuration',
                    e.target.value === '' ? null : Number(e.target.value),
                  )
                }
                disabled={disabled || !set.id || isRunning}
                className="flex-1"
              />
              <Button
                type="button"
                onClick={handleStopwatchClick}
                disabled={disabled || !set.id}
                variant={isRunning ? 'destructive' : 'outline'}
                size="default"
                className="shrink-0"
              >
                <Timer className="h-4 w-4 mr-1" />
                {isRunning ? formatTime(elapsedSeconds) : 'Start'}
              </Button>
            </div>
          </FieldContent>
        </Field>
      </div>
    </div>
  )
}
