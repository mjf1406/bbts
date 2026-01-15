/** @format */

import { ChevronLeft, ChevronRight } from 'lucide-react'
import { SetCard } from './set-card'

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

interface SetsNavigatorProps {
  sets: SetData[]
  currentSetIndex: number
  onSetIndexChange: (index: number) => void
  onSetUpdate: (
    setIndex: number,
    field:
      | 'weight'
      | 'reps'
      | 'earlySetRPE'
      | 'lastSetRPE'
      | 'restDuration',
    value: number | null,
  ) => void
  disabled?: boolean
}

export function SetsNavigator({
  sets,
  currentSetIndex,
  onSetIndexChange,
  onSetUpdate,
  disabled = false,
}: SetsNavigatorProps) {
  const goToPreviousSet = () => {
    if (currentSetIndex > 0) {
      onSetIndexChange(currentSetIndex - 1)
    }
  }

  const goToNextSet = () => {
    if (currentSetIndex < sets.length - 1) {
      onSetIndexChange(currentSetIndex + 1)
    }
  }

  return (
    <div className="space-y-4 flex-1 flex flex-col">
      <h3 className="text-sm font-semibold">Record Your Sets</h3>
      <div className="flex-1 flex items-center relative overflow-hidden">
        {/* Previous Set Button */}
        {currentSetIndex > 0 && (
          <button
            type="button"
            onClick={goToPreviousSet}
            className="absolute left-0 z-10 p-2 rounded-full bg-background/80 hover:bg-background border shadow-sm"
            aria-label="Previous set"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
        )}

        {/* Sets Container with Slide Animation */}
        <div
          className="flex flex-1 w-full transition-transform duration-300 ease-in-out"
          style={{
            transform: `translateX(-${currentSetIndex * 100}%)`,
          }}
        >
          {sets.map((set, setIndex) => (
            <SetCard
              key={setIndex}
              set={set}
              onUpdate={(field, value) => onSetUpdate(setIndex, field, value)}
              onRestComplete={() => {
                // Auto-navigate to next set when rest timer stops
                if (setIndex < sets.length - 1) {
                  onSetIndexChange(setIndex + 1)
                }
              }}
              disabled={disabled}
            />
          ))}
        </div>

        {/* Next Set Button */}
        {currentSetIndex < sets.length - 1 && (
          <button
            type="button"
            onClick={goToNextSet}
            className="absolute right-0 z-10 p-2 rounded-full bg-background/80 hover:bg-background border shadow-sm"
            aria-label="Next set"
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        )}
      </div>

      {/* Set Indicator */}
      <div className="flex justify-center gap-1">
        {sets.map((_, index) => (
          <button
            key={index}
            type="button"
            onClick={() => onSetIndexChange(index)}
            className={`h-2 rounded-full transition-all ${
              index === currentSetIndex ? 'w-8 bg-primary' : 'w-2 bg-muted'
            }`}
            aria-label={`Go to set ${index + 1}`}
          />
        ))}
      </div>
    </div>
  )
}
