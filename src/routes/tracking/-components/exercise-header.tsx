/** @format */

import { ExternalLink } from 'lucide-react'
import { CardDescription, CardHeader, CardTitle } from '@/components/ui/card'

interface ExerciseHeaderProps {
  name: string
  note: string | null
  videoURLs: Array<string> | null
}

export function ExerciseHeader({ name, note, videoURLs }: ExerciseHeaderProps) {
  return (
    <CardHeader>
      <CardTitle className="text-lg">{name}</CardTitle>
      {note && (
        <CardDescription className="text-sm mt-2">{note}</CardDescription>
      )}
      {videoURLs && videoURLs.length > 0 && (
        <div className="flex flex-wrap gap-2 mt-3">
          {videoURLs.map((url, idx) => (
            <a
              key={idx}
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-xs text-primary hover:underline"
            >
              <ExternalLink className="h-3 w-3" />
              Watch Video {idx + 1}
            </a>
          ))}
        </div>
      )}
    </CardHeader>
  )
}
