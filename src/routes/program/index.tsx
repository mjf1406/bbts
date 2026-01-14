/** @format */

import { createFileRoute, useNavigate, useSearch } from '@tanstack/react-router'
import { useEffect, useState } from 'react'
import { Loader2 } from 'lucide-react'
import { db } from '@/lib/db/db'
import { useProgram } from '@/lib/program/use-program'
import { importProgramFromCSV } from '@/lib/program/import-program'
import { ProgramHeader } from '@/lib/program/-components/program-header'
import { ProgramTable } from '@/lib/program/-components/program-table'
import { ProgramPagination } from '@/lib/program/-components/program-pagination'
import { ProgramActions } from '@/lib/program/-components/program-actions'
import { ProgramMessage } from '@/lib/program/-components/program-message'
import { useAuthContext } from '@/components/auth/auth-provider'

export const Route = createFileRoute('/program/')({
  validateSearch: (search: Record<string, unknown>) => {
    const page = search.page
    const pageNum =
      typeof page === 'string' ? parseInt(page, 10) : typeof page === 'number' ? page : 1
    return {
      page: pageNum >= 1 ? pageNum : 1,
    }
  },
  component: RouteComponent,
})

function RouteComponent() {
  const search = useSearch({ from: '/program/' })
  const navigate = useNavigate()
  const pageFromQuery = search.page ?? 1

  const {
    programEntries,
    allProgramEntries,
    isLoading,
    error,
    currentPage,
    totalPages,
    totalCount,
    totalWeeks,
    currentWeek,
    hasNextPage,
    hasPreviousPage,
    goToPage,
    goToNextPage,
    goToPreviousPage,
    goToFirstPage,
  } = useProgram(pageFromQuery, (page: number) => {
    navigate({
      to: '/program',
      search: { page },
      replace: true,
    })
  })

  // Query exercises for linking
  const exercisesQuery = {
    exercises: {
      $: {
        first: 10000,
      },
    },
  }
  const { data: exercisesData } = db.useQuery(exercisesQuery)
  const exercises = exercisesData?.exercises || []

  const [isImporting, setIsImporting] = useState(false)
  const [importMessage, setImportMessage] = useState<string | null>(null)
  const [showConfirmDialog, setShowConfirmDialog] = useState(false)
  const [showDeleteDialog, setShowDeleteDialog] = useState(false)
  const [isDeleting, setIsDeleting] = useState(false)
  const { user, isLoading: authLoading } = useAuthContext()

  useEffect(() => {
    if (!authLoading && !user.id) {
      navigate({ to: '/blocked' })
    }
  }, [user.id, authLoading, navigate])

  const hasExistingEntries = totalCount > 0

  const handleImportClick = () => {
    if (hasExistingEntries) {
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
      const result = await importProgramFromCSV(exercises)
      setImportMessage(result.message)
      if (result.success) {
        // Refresh the query after a short delay
        setTimeout(() => {
          window.location.reload()
        }, 1000)
      }
    } catch (err) {
      setImportMessage(
        err instanceof Error ? err.message : 'Failed to import program',
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
      if (allProgramEntries.length === 0) {
        setImportMessage('No program entries to delete')
        setIsDeleting(false)
        return
      }

      // Delete all program entries in transactions
      for (const entry of allProgramEntries) {
        await db.transact(db.tx.program[entry.id].delete())
      }

      setImportMessage(
        `Successfully deleted ${allProgramEntries.length} program entr${allProgramEntries.length === 1 ? 'y' : 'ies'}`,
      )

      // Reset to first page and reload
      goToFirstPage()

      // Refresh the query after a short delay
      setTimeout(() => {
        window.location.reload()
      }, 1000)
    } catch (err) {
      setImportMessage(
        err instanceof Error ? err.message : 'Failed to delete program entries',
      )
    } finally {
      setIsDeleting(false)
    }
  }

  return (
    <div className="container mx-auto py-8 px-4">
      <ProgramHeader
        hasExistingEntries={hasExistingEntries}
        isDeleting={isDeleting}
        isImporting={isImporting}
        onDeleteClick={() => setShowDeleteDialog(true)}
        onImportClick={handleImportClick}
      />

      <ProgramMessage message={importMessage} />

      {isLoading ? (
        <div className="flex justify-center items-center py-12">
          <Loader2 className="h-6 w-6 animate-spin" />
        </div>
      ) : error ? (
        <div className="text-red-500">
          Error loading program: {error.message}
        </div>
      ) : programEntries.length === 0 ? (
        <div className="text-center py-12 text-muted-foreground">
          No program entries found. Click "Seed Program" to import program
          entries from CSV.
        </div>
      ) : (
        <>
          <ProgramPagination
            currentPage={currentPage}
            totalPages={totalPages}
            hasNextPage={hasNextPage}
            hasPreviousPage={hasPreviousPage}
            onPageChange={goToPage}
            onNextPage={goToNextPage}
            onPreviousPage={goToPreviousPage}
            currentWeek={currentWeek}
            totalWeeks={totalWeeks}
          />

          <ProgramTable programEntries={programEntries} />
        </>
      )}

      <ProgramActions
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
