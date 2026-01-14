/** @format */

import { useState } from 'react'
import { db } from '@/lib/db/db'

const ITEMS_PER_PAGE = 10

export function useExercises() {
  const [currentPage, setCurrentPage] = useState(1)

  // Query all exercises (no pagination from InstantDB - use large limit)
  const query = {
    exercises: {
      $: {
        order: { name: 'asc' as const },
        first: 10000, // Large number to get all exercises
      },
      substitutions: {},
    },
  }

  const { isLoading, error, data } = db.useQuery(query)

  const allExercises = data?.exercises || []
  const totalCount = allExercises.length

  // Calculate pagination
  const totalPages = Math.ceil(totalCount / ITEMS_PER_PAGE)
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE
  const endIndex = startIndex + ITEMS_PER_PAGE
  const exercises = allExercises.slice(startIndex, endIndex)

  const hasNextPage = currentPage < totalPages
  const hasPreviousPage = currentPage > 1

  const goToPage = (page: number) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page)
    }
  }

  const goToNextPage = () => {
    if (hasNextPage) {
      setCurrentPage((prev) => prev + 1)
    }
  }

  const goToPreviousPage = () => {
    if (hasPreviousPage) {
      setCurrentPage((prev) => prev - 1)
    }
  }

  const goToFirstPage = () => {
    setCurrentPage(1)
  }

  return {
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
    itemsPerPage: ITEMS_PER_PAGE,
  }
}
