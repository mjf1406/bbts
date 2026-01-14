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

interface ExercisesActionsProps {
  showConfirmDialog: boolean
  showDeleteDialog: boolean
  totalCount: number
  onConfirmDialogChange: (open: boolean) => void
  onDeleteDialogChange: (open: boolean) => void
  onImport: () => void
  onDeleteAll: () => void
}

export function ExercisesActions({
  showConfirmDialog,
  showDeleteDialog,
  totalCount,
  onConfirmDialogChange,
  onDeleteDialogChange,
  onImport,
  onDeleteAll,
}: ExercisesActionsProps) {
  return (
    <>
      <AlertDialog open={showConfirmDialog} onOpenChange={onConfirmDialogChange}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Confirm Import</AlertDialogTitle>
            <AlertDialogDescription>
              There are already exercises in the database. Importing will add
              new exercises which may create duplicates. Are you sure you want
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
            <AlertDialogTitle>Delete All Exercises</AlertDialogTitle>
            <AlertDialogDescription>
              Are you sure you want to delete all {totalCount} exercise
              {totalCount === 1 ? '' : 's'}? This action cannot be undone.
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
