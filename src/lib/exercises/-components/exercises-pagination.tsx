/** @format */

import {
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from '@/components/ui/pagination'

interface ExercisesPaginationProps {
  currentPage: number
  totalPages: number
  totalCount: number
  itemsPerPage: number
  hasNextPage: boolean
  hasPreviousPage: boolean
  onPageChange: (page: number) => void
  onNextPage: () => void
  onPreviousPage: () => void
}

export function ExercisesPagination({
  currentPage,
  totalPages,
  totalCount,
  itemsPerPage,
  hasNextPage,
  hasPreviousPage,
  onPageChange,
  onNextPage,
  onPreviousPage,
}: ExercisesPaginationProps) {
  // Calculate which 5 page numbers to show (always exactly 5)
  // Center the current page in the middle (3rd position)
  const getPageNumbers = () => {
    const pages: number[] = []

    // Calculate the starting page to center currentPage in the middle
    let startPage = currentPage - 2

    // If we're near the start (currentPage <= 3), start from page 1
    if (currentPage <= 3) {
      startPage = 1
    }

    // Don't go beyond total pages
    if (startPage + 4 > totalPages) {
      startPage = Math.max(1, totalPages - 4)
    }

    // Generate exactly 5 consecutive page numbers (or fewer if totalPages < 5)
    const maxPages = Math.min(5, totalPages)
    for (let i = 0; i < maxPages; i++) {
      const pageNum = startPage + i
      if (pageNum <= totalPages) {
        pages.push(pageNum)
      }
    }

    // Fill remaining slots if we have fewer than 5 pages
    while (pages.length < 5 && pages.length < totalPages) {
      const lastPage = pages[pages.length - 1]
      if (lastPage < totalPages) {
        pages.push(lastPage + 1)
      } else {
        break
      }
    }

    return pages
  }

  const startItem = (currentPage - 1) * itemsPerPage + 1
  const endItem = Math.min(
    (currentPage - 1) * itemsPerPage + itemsPerPage,
    totalCount,
  )

  if (totalPages <= 1) {
    return (
      <div className="mb-4 flex items-center justify-between">
        <div className="text-sm text-muted-foreground min-w-[140px] flex-shrink-0">
          {startItem}-{endItem} of {totalCount}
        </div>
      </div>
    )
  }

  return (
    <div className="mb-4 flex items-center justify-between">
      <div className="text-sm text-muted-foreground min-w-[140px] flex-shrink-0">
        {startItem}-{endItem} of {totalCount}
      </div>
      <div className="flex items-center justify-center w-full">
        <div className="flex items-center gap-2">
          {/* Previous button - fixed width */}
          <div className="w-24 flex-shrink-0">
            <PaginationPrevious
              href="#"
              onClick={(e) => {
                e.preventDefault()
                if (hasPreviousPage) {
                  onPreviousPage()
                }
              }}
              className={
                !hasPreviousPage
                  ? 'pointer-events-none opacity-50 cursor-not-allowed'
                  : 'cursor-pointer'
              }
              aria-disabled={!hasPreviousPage}
            />
          </div>

          {/* 5 page numbers - fixed width, centered */}
          <div className="flex items-center gap-1">
            {getPageNumbers().map((page) => {
              const isActive = page === currentPage

              return (
                <PaginationItem
                  key={page}
                  className="w-10 h-10 flex items-center justify-center flex-shrink-0"
                >
                  <PaginationLink
                    href="#"
                    onClick={(e) => {
                      e.preventDefault()
                      if (!isActive) {
                        onPageChange(page)
                      }
                    }}
                    isActive={isActive}
                    className={
                      isActive
                        ? ''
                        : 'cursor-pointer hover:bg-muted/50 transition-colors'
                    }
                  >
                    {page}
                  </PaginationLink>
                </PaginationItem>
              )
            })}
          </div>

          {/* Next button - fixed width */}
          <div className="w-24 flex-shrink-0">
            <PaginationNext
              href="#"
              onClick={(e) => {
                e.preventDefault()
                if (hasNextPage) {
                  onNextPage()
                }
              }}
              className={
                !hasNextPage
                  ? 'pointer-events-none opacity-50 cursor-not-allowed'
                  : 'cursor-pointer'
              }
              aria-disabled={!hasNextPage}
            />
          </div>
        </div>
      </div>
    </div>
  )
}
