/** @format */

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from '@/components/ui/alert-dialog'

interface ProgramActionsProps {
  showConfirmDialog: boolean
  showDeleteDialog: boolean
  totalCount: number
  onConfirmDialogChange: (open: boolean) => void
  onDeleteDialogChange: (open: boolean) => void
  onImport: () => void
  onDeleteAll: () => void
}

export function ProgramActions({
  showConfirmDialog,
  showDeleteDialog,
  totalCount,
  onConfirmDialogChange,
  onDeleteDialogChange,
  onImport,
  onDeleteAll,
}: ProgramActionsProps) {
  return (
    <>
      <AlertDialog open={showConfirmDialog} onOpenChange={onConfirmDialogChange}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Confirm Import</AlertDialogTitle>
            <AlertDialogDescription>
              There are already program entries in the database. Importing will
              add new entries which may create duplicates. Are you sure you want
              to continue?
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction onClick={onImport}>Continue</AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>

      <AlertDialog open={showDeleteDialog} onOpenChange={onDeleteDialogChange}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Delete All Program Entries</AlertDialogTitle>
            <AlertDialogDescription>
              Are you sure you want to delete all {totalCount} program entr
              {totalCount === 1 ? 'y' : 'ies'}? This action cannot be undone.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction
              onClick={onDeleteAll}
              className="bg-destructive text-destructive-foreground hover:bg-destructive/90"
            >
              Delete All
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </>
  )
}
