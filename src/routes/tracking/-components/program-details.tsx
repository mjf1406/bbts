/** @format */

import { RPEHelpPopover } from './rpe-help-popover'

interface ProgramDetailsProps {
  type: string | null
  warmupSets: string | null
  workingSets: string | null
  targetReps: string | null
  earlySetRPE: string | null
  lastSetRPE: string | null
  rest: string | null
}

export function ProgramDetails({
  type,
  warmupSets,
  workingSets,
  targetReps,
  earlySetRPE,
  lastSetRPE,
  rest,
}: ProgramDetailsProps) {
  return (
    <div className="space-y-2">
      <h3 className="text-sm font-semibold">Program Details</h3>
      <div className="grid grid-cols-2 gap-2 text-xs">
        {type && (
          <div>
            <span className="text-muted-foreground">Type:</span> <span>{type}</span>
          </div>
        )}
        {warmupSets && (
          <div>
            <span className="text-muted-foreground">Warmup Sets:</span>{' '}
            <span>{warmupSets}</span>
          </div>
        )}
        {workingSets && (
          <div>
            <span className="text-muted-foreground">Working Sets:</span>{' '}
            <span>{workingSets}</span>
          </div>
        )}
        {targetReps && (
          <div>
            <span className="text-muted-foreground">Target Reps:</span>{' '}
            <span>{targetReps}</span>
          </div>
        )}
        {earlySetRPE && (
          <div>
            <span className="text-muted-foreground">Early Set RPE:</span>{' '}
            <span>{earlySetRPE}</span>
          </div>
        )}
        {lastSetRPE && (
          <div className="flex items-center">
            <span className="text-muted-foreground">Last Set RPE:&nbsp;</span>
            <span>{lastSetRPE}</span>
            <RPEHelpPopover />
          </div>
        )}
        {rest && (
          <div>
            <span className="text-muted-foreground">Rest:</span> <span>{rest}</span>
          </div>
        )}
      </div>
    </div>
  )
}
