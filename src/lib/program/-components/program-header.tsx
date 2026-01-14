/** @format */

import { Button } from '@/components/ui/button'
import { Loader2 } from 'lucide-react'

interface ProgramHeaderProps {
  hasExistingEntries: boolean
  isDeleting: boolean
  isImporting: boolean
  onDeleteClick: () => void
  onImportClick: () => void
}

export function ProgramHeader({
  hasExistingEntries,
  isDeleting,
  isImporting,
  onDeleteClick,
  onImportClick,
}: ProgramHeaderProps) {
  return (
    <div className="flex justify-between items-center mb-6">
      <h1 className="text-2xl font-bold">Program</h1>
      <div className="flex gap-2">
        {hasExistingEntries && (
          <Button
            onClick={onDeleteClick}
            disabled={isDeleting || isImporting}
            variant="destructive"
          >
            {isDeleting ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Deleting...
              </>
            ) : (
              'Delete All'
            )}
          </Button>
        )}
        <Button
          onClick={onImportClick}
          disabled={isImporting || isDeleting}
          variant="default"
        >
          {isImporting ? (
            <>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              Importing...
            </>
          ) : (
            'Seed Program'
          )}
        </Button>
      </div>
    </div>
  )
}
