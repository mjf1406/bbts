/** @format */

import { createFileRoute } from '@tanstack/react-router'
import { useState } from 'react'
import { Loader2 } from 'lucide-react'
import { db } from '@/lib/db/db'
import { useExercises } from '@/lib/exercises/use-exercises'
import { importExercisesFromCSV } from '@/lib/exercises/import-exercises'
import { ExercisesHeader } from '@/lib/exercises/-components/exercises-header'
import { ExercisesTable } from '@/lib/exercises/-components/exercises-table'
import { ExercisesPagination } from '@/lib/exercises/-components/exercises-pagination'
import { ExercisesActions } from '@/lib/exercises/-components/exercises-actions'
import { ExercisesMessage } from '@/lib/exercises/-components/exercises-message'

export const Route = createFileRoute('/exercises/')({
  component: RouteComponent,
})

function RouteComponent() {
  const {
    exercises,
    allExercises,
    isLoading,
    error,
    currentPage,
    totalPages,
    totalCount,
    hasNextPage,
    hasPreviousPage,
    goToPage,
    goToNextPage,
    goToPreviousPage,
    goToFirstPage,
    itemsPerPage,
  } = useExercises()

  const [isImporting, setIsImporting] = useState(false)
  const [importMessage, setImportMessage] = useState<string | null>(null)
  const [showConfirmDialog, setShowConfirmDialog] = useState(false)
  const [showDeleteDialog, setShowDeleteDialog] = useState(false)
  const [isDeleting, setIsDeleting] = useState(false)

  const hasExistingExercises = totalCount > 0

  const handleImportClick = () => {
    if (hasExistingExercises) {
      setShowConfirmDialog(true)
    } else {
      handleImport()
    }
  }

  const handleImport = async () => {
    setShowConfirmDialog(false)
    setIsImporting(true)
    setImportMessage(null)
    try {
      const result = await importExercisesFromCSV()
      setImportMessage(result.message)
      if (result.success) {
        // Refresh the query after a short delay
        setTimeout(() => {
          window.location.reload()
        }, 1000)
      }
    } catch (err) {
      setImportMessage(
        err instanceof Error ? err.message : 'Failed to import exercises',
      )
    } finally {
      setIsImporting(false)
    }
  }

  const handleDeleteAll = async () => {
    setShowDeleteDialog(false)
    setIsDeleting(true)
    setImportMessage(null)
    try {
      if (allExercises.length === 0) {
        setImportMessage('No exercises to delete')
        setIsDeleting(false)
        return
      }

      // Delete all exercises in transactions
      for (const exercise of allExercises) {
        await db.transact(db.tx.exercises[exercise.id].delete())
      }

      setImportMessage(
        `Successfully deleted ${allExercises.length} exercise${allExercises.length === 1 ? '' : 's'}`,
      )

      // Reset to first page and reload
      goToFirstPage()

      // Refresh the query after a short delay
      setTimeout(() => {
        window.location.reload()
      }, 1000)
    } catch (err) {
      setImportMessage(
        err instanceof Error ? err.message : 'Failed to delete exercises',
      )
    } finally {
      setIsDeleting(false)
    }
  }

  return (
    <div className="container mx-auto py-8 px-4">
      <ExercisesHeader
        hasExistingExercises={hasExistingExercises}
        isDeleting={isDeleting}
        isImporting={isImporting}
        onDeleteClick={() => setShowDeleteDialog(true)}
        onImportClick={handleImportClick}
      />

      <ExercisesMessage message={importMessage} />

      {isLoading ? (
        <div className="flex justify-center items-center py-12">
          <Loader2 className="h-6 w-6 animate-spin" />
        </div>
      ) : error ? (
        <div className="text-red-500">
          Error loading exercises: {error.message}
        </div>
      ) : exercises.length === 0 ? (
        <div className="text-center py-12 text-muted-foreground">
          No exercises found. Click "Seed Exercises" to import exercises from
          CSV.
        </div>
      ) : (
        <>
          <ExercisesPagination
            currentPage={currentPage}
            totalPages={totalPages}
            totalCount={totalCount}
            itemsPerPage={itemsPerPage}
            hasNextPage={hasNextPage}
            hasPreviousPage={hasPreviousPage}
            onPageChange={goToPage}
            onNextPage={goToNextPage}
            onPreviousPage={goToPreviousPage}
          />

          <ExercisesTable
            exercises={exercises}
            currentPage={currentPage}
            itemsPerPage={itemsPerPage}
          />
        </>
      )}

      <ExercisesActions
        showConfirmDialog={showConfirmDialog}
        showDeleteDialog={showDeleteDialog}
        totalCount={totalCount}
        onConfirmDialogChange={setShowConfirmDialog}
        onDeleteDialogChange={setShowDeleteDialog}
        onImport={handleImport}
        onDeleteAll={handleDeleteAll}
      />
    </div>
  )
}
