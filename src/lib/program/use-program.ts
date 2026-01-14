/** @format */

import { useState, useMemo, useEffect } from 'react'
import { db } from '@/lib/db/db'

export function useProgram(
  initialPage: number = 1,
  onPageChange?: (page: number) => void,
) {
  const [currentPage, setCurrentPage] = useState(initialPage)

  // Sync with initial page from query params
  useEffect(() => {
    setCurrentPage(initialPage)
  }, [initialPage])

  // Query all program entries (no pagination from InstantDB - use large limit)
  const query = {
    program: {
      $: {
        order: { idx: 'asc' as const },
        first: 10000, // Large number to get all program entries
      },
      exercise: {},
    },
  }

  const { isLoading, error, data } = db.useQuery(query)

  // Group entries by week and calculate pagination
  const { programEntries, allProgramEntries, totalWeeks, currentWeek } =
    useMemo(() => {
      // Entries are already sorted by idx from the query, no need for client-side sorting
      const sortedEntries = data?.program || []

      // Group entries by week
      const entriesByWeek = new Map<number, typeof sortedEntries>()
      for (const entry of sortedEntries) {
        const weekNum = parseInt(entry.week || '0', 10)
        if (!entriesByWeek.has(weekNum)) {
          entriesByWeek.set(weekNum, [])
        }
        entriesByWeek.get(weekNum)!.push(entry)
      }

      // Get unique weeks sorted
      const weeks = Array.from(entriesByWeek.keys()).sort((a, b) => a - b)
      const totalWeeks = weeks.length

      // Get entries for current week (page = week number)
      const weekEntries =
        currentPage > 0 && currentPage <= totalWeeks
          ? entriesByWeek.get(weeks[currentPage - 1]) || []
          : []

      return {
        programEntries: weekEntries,
        allProgramEntries: sortedEntries,
        totalWeeks,
        currentWeek: currentPage <= totalWeeks ? currentPage : null,
      }
    }, [data?.program, currentPage])

  const totalCount = allProgramEntries.length
  const hasNextPage = currentPage < totalWeeks
  const hasPreviousPage = currentPage > 1

  const goToPage = (page: number) => {
    if (page >= 1 && page <= totalWeeks) {
      setCurrentPage(page)
      onPageChange?.(page)
    }
  }

  const goToNextPage = () => {
    if (hasNextPage) {
      const nextPage = currentPage + 1
      setCurrentPage(nextPage)
      onPageChange?.(nextPage)
    }
  }

  const goToPreviousPage = () => {
    if (hasPreviousPage) {
      const prevPage = currentPage - 1
      setCurrentPage(prevPage)
      onPageChange?.(prevPage)
    }
  }

  const goToFirstPage = () => {
    setCurrentPage(1)
    onPageChange?.(1)
  }

  return {
    programEntries,
    allProgramEntries,
    isLoading,
    error,
    currentPage,
    totalPages: totalWeeks,
    totalCount,
    totalWeeks,
    currentWeek,
    hasNextPage,
    hasPreviousPage,
    goToPage,
    goToNextPage,
    goToPreviousPage,
    goToFirstPage,
    itemsPerPage: programEntries.length, // For backward compatibility
  }
}
