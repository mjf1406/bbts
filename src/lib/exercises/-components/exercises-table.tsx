/** @format */

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'

interface Exercise {
  id: string
  name: string
  videoURLs?: string[]
  note?: string
  substitutions?: Array<{ id: string; name: string }>
}

interface ExercisesTableProps {
  exercises: Exercise[]
  currentPage: number
  itemsPerPage: number
}

export function ExercisesTable({
  exercises,
  currentPage,
  itemsPerPage,
}: ExercisesTableProps) {
  return (
    <div className="border rounded-lg overflow-hidden">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="w-16">#</TableHead>
            <TableHead className="max-w-[200px]">Name</TableHead>
            <TableHead className="max-w-[150px]">Video URLs</TableHead>
            <TableHead className="max-w-[300px]">Note</TableHead>
            <TableHead className="max-w-[200px]">Substitutions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {exercises.map((exercise, index) => {
            const sequentialIndex = (currentPage - 1) * itemsPerPage + index + 1
            return (
              <TableRow key={exercise.id}>
                <TableCell className="text-muted-foreground text-sm">
                  {sequentialIndex}
                </TableCell>
                <TableCell className="font-medium max-w-[200px] whitespace-normal wrap-break-word">
                  {exercise.name}
                </TableCell>
                <TableCell className="max-w-[150px] whitespace-normal">
                  {exercise.videoURLs && Array.isArray(exercise.videoURLs) ? (
                    <div className="flex flex-col gap-1">
                      {exercise.videoURLs.map((url: string, idx: number) => (
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
                  ) : (
                    <span className="text-muted-foreground text-xs">None</span>
                  )}
                </TableCell>
                <TableCell className="max-w-[300px] whitespace-normal wrap-break-word">
                  <span className="text-xs">{exercise.note || '-'}</span>
                </TableCell>
                <TableCell className="max-w-[200px] whitespace-normal wrap-break-word">
                  {exercise.substitutions && exercise.substitutions.length > 0 ? (
                    <span className="text-xs wrap-break-word">
                      {exercise.substitutions.map((sub: any) => sub.name).join(', ')}
                    </span>
                  ) : (
                    <span className="text-muted-foreground text-xs">None</span>
                  )}
                </TableCell>
              </TableRow>
            )
          })}
        </TableBody>
      </Table>
    </div>
  )
}
