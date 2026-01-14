/** @format */

import { HelpCircle } from 'lucide-react'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover'

interface ProgramEntry {
  id: string
  idx?: number
  week: string
  day?: string
  type?: string
  exercise?:
    | string
    | {
        id: string
        name: string
        videoURLs?: string[]
        substitutions?: Array<{
          id: string
          name: string
          videoURLs?: string[]
        }>
      }
  lastSetIntensityTechnique?: string
  warmupSets?: string
  workingSets?: string
  targetReps?: string
  earlySetRPE?: string
  lastSetRPE?: string
  rest?: string
}

interface ProgramTableProps {
  programEntries: Array<ProgramEntry>
}

function RPEHelpPopover() {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <button
          type="button"
          className="inline-flex items-center justify-center ml-1 h-4 w-4 text-muted-foreground hover:text-foreground transition-colors"
          aria-label="RPE Help"
        >
          <HelpCircle className="h-4 w-4" />
        </button>
      </PopoverTrigger>
      <PopoverContent className="w-96 max-h-[600px] overflow-y-auto">
        <div className="space-y-3">
          <div>
            <h3 className="font-semibold text-sm mb-1">
              Rating of Perceived Exertion
            </h3>
            <p className="text-xs text-muted-foreground">
              Rating of Perceived Exertion uses a 1-10 scale to measure reps in
              reserve.
            </p>
          </div>
          <div>
            <h4 className="font-medium text-xs mb-2">RPE Scale</h4>
            <div className="overflow-x-auto">
              <table className="w-full text-xs border-collapse">
                <thead>
                  <tr className="border-b">
                    <th className="text-left p-1.5 font-medium">RPE</th>
                    <th className="text-left p-1.5 font-medium">Meaning</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b">
                    <td className="p-1.5 font-medium">10</td>
                    <td className="p-1.5">
                      You reached failure. You actually tried and failed to get
                      the weight all the way up.
                    </td>
                  </tr>
                  <tr className="border-b">
                    <td className="p-1.5 font-medium">9-10</td>
                    <td className="p-1.5">
                      You didn't actually reach failure, but you were very
                      close. You might have been able to add a little more
                      weight, but you definitely didn't leave more than 1 rep in
                      the tank.
                    </td>
                  </tr>
                  <tr className="border-b">
                    <td className="p-1.5 font-medium">9</td>
                    <td className="p-1.5">
                      You could've done one more rep if you really tried. This
                      is still a hard set.
                    </td>
                  </tr>
                  <tr className="border-b">
                    <td className="p-1.5 font-medium">8-9</td>
                    <td className="p-1.5">
                      You could've done 1 or 2 more reps if you really tried. It
                      wasn't a brutal set, but you're still pretty close to
                      failure here.
                    </td>
                  </tr>
                  <tr className="border-b">
                    <td className="p-1.5 font-medium">8</td>
                    <td className="p-1.5">
                      You probably had 2 reps left in the tank. It wasn't a
                      super hard set, but will still certainly stimulate
                      hypertrophy.
                    </td>
                  </tr>
                  <tr className="border-b">
                    <td className="p-1.5 font-medium">7-8</td>
                    <td className="p-1.5">
                      There are 2 or 3 reps in the tank here. Depending on the
                      exercise, this is usually not going to feel like a truly
                      hard set.
                    </td>
                  </tr>
                  <tr className="border-b">
                    <td className="p-1.5 font-medium">7</td>
                    <td className="p-1.5">
                      You have 3 reps left in the tank. On most exercises, this
                      would feel like something between a tough warm up set and
                      an easy working set.
                    </td>
                  </tr>
                  <tr className="border-b">
                    <td className="p-1.5 font-medium">6-7</td>
                    <td className="p-1.5">
                      You have 3 or maybe 4 reps left in the tank.
                    </td>
                  </tr>
                  <tr className="border-b">
                    <td className="p-1.5 font-medium">6</td>
                    <td className="p-1.5">
                      You could've done 4 more if you really tried.
                    </td>
                  </tr>
                  <tr className="border-b">
                    <td className="p-1.5 font-medium">5</td>
                    <td className="p-1.5">
                      You could've done 5 more if you really tried.
                    </td>
                  </tr>
                  <tr>
                    <td className="p-1.5 font-medium">1-4</td>
                    <td className="p-1.5">
                      More than 5 reps left in the tank. These are warm-up sets,
                      not working sets.
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </PopoverContent>
    </Popover>
  )
}

export function ProgramTable({ programEntries }: ProgramTableProps) {
  return (
    <div className="border rounded-lg overflow-hidden">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="w-16">#</TableHead>
            <TableHead className="w-20">Week</TableHead>
            <TableHead className="w-24">Day</TableHead>
            <TableHead className="max-w-[200px]">Type</TableHead>
            <TableHead className="max-w-[200px]">Exercise</TableHead>
            <TableHead className="max-w-[200px]">Substitutes</TableHead>
            <TableHead className="max-w-[150px]">Last Set Intensity</TableHead>
            <TableHead className="w-24">Warm-up Sets</TableHead>
            <TableHead className="w-24">Working Sets</TableHead>
            <TableHead className="w-28">Target Reps</TableHead>
            <TableHead className="w-24">
              <div className="flex items-center">
                Early RPE
                <RPEHelpPopover />
              </div>
            </TableHead>
            <TableHead className="w-24">
              <div className="flex items-center">
                Last RPE
                <RPEHelpPopover />
              </div>
            </TableHead>
            <TableHead className="w-28">Rest</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {programEntries.map((entry) => {
            return (
              <TableRow key={entry.id}>
                <TableCell className="text-muted-foreground text-sm">
                  {entry.idx ?? '-'}
                </TableCell>
                <TableCell className="font-medium">{entry.week}</TableCell>
                <TableCell className="text-sm">{entry.day || '-'}</TableCell>
                <TableCell className="max-w-[200px] whitespace-normal text-xs">
                  {entry.type || '-'}
                </TableCell>
                <TableCell className="max-w-[200px] whitespace-normal font-medium">
                  {typeof entry.exercise === 'object' && entry.exercise !== null ? (
                    entry.exercise.videoURLs &&
                    Array.isArray(entry.exercise.videoURLs) &&
                    entry.exercise.videoURLs.length > 0 ? (
                      <div className="flex flex-col gap-1">
                        <span>{entry.exercise.name}</span>
                        <div className="flex flex-col gap-0.5">
                          {entry.exercise.videoURLs.map((url: string, idx: number) => (
                            <a
                              key={idx}
                              href={url}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-blue-500 hover:underline text-xs break-all"
                            >
                              Video {idx + 1}
                            </a>
                          ))}
                        </div>
                      </div>
                    ) : (
                      entry.exercise.name
                    )
                  ) : typeof entry.exercise === 'string' ? (
                    entry.exercise
                  ) : (
                    '-'
                  )}
                </TableCell>
                <TableCell className="max-w-[200px] whitespace-normal text-xs">
                  {typeof entry.exercise === 'object' &&
                  entry.exercise !== null &&
                  entry.exercise.substitutions &&
                  Array.isArray(entry.exercise.substitutions) &&
                  entry.exercise.substitutions.length > 0 ? (
                    <div className="flex flex-col gap-1">
                      {entry.exercise.substitutions.map((sub: any) => (
                        <div key={sub.id} className="flex flex-col gap-0.5">
                          <span className="font-medium">{sub.name}</span>
                          {sub.videoURLs &&
                          Array.isArray(sub.videoURLs) &&
                          sub.videoURLs.length > 0 ? (
                            <div className="flex flex-col gap-0.5">
                              {sub.videoURLs.map((url: string, idx: number) => (
                                <a
                                  key={idx}
                                  href={url}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="text-blue-500 hover:underline text-xs break-all"
                                >
                                  Video {idx + 1}
                                </a>
                              ))}
                            </div>
                          ) : null}
                        </div>
                      ))}
                    </div>
                  ) : (
                    <span className="text-muted-foreground">None</span>
                  )}
                </TableCell>
                <TableCell className="max-w-[150px] whitespace-normal text-xs">
                  {entry.lastSetIntensityTechnique || '-'}
                </TableCell>
                <TableCell className="text-sm">
                  {entry.warmupSets || '-'}
                </TableCell>
                <TableCell className="text-sm">
                  {entry.workingSets || '-'}
                </TableCell>
                <TableCell className="text-sm">
                  {entry.targetReps || '-'}
                </TableCell>
                <TableCell className="text-sm">
                  {entry.earlySetRPE || '-'}
                </TableCell>
                <TableCell className="text-sm">
                  {entry.lastSetRPE || '-'}
                </TableCell>
                <TableCell className="text-sm">{entry.rest || '-'}</TableCell>
              </TableRow>
            )
          })}
        </TableBody>
      </Table>
    </div>
  )
}
