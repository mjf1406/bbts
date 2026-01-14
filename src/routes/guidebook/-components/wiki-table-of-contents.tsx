import * as React from 'react'
import { cn } from '@/lib/utils'

interface TocItem {
  id: string
  title: string
  level?: number
}

interface WikiTableOfContentsProps {
  items: TocItem[]
  className?: string
}

export function WikiTableOfContents({ items, className }: WikiTableOfContentsProps) {
  const [activeId, setActiveId] = React.useState<string>('')

  React.useEffect(() => {
    const handleScroll = () => {
      const sections = items.map((item) => {
        const element = document.getElementById(item.id)
        if (element) {
          return {
            id: item.id,
            top: element.getBoundingClientRect().top,
          }
        }
        return null
      }).filter(Boolean) as Array<{ id: string; top: number }>

      const current = sections.find((section) => section.top <= 100 && section.top >= -200)
      if (current) {
        setActiveId(current.id)
      } else if (sections.length > 0) {
        // If scrolled to top, highlight first item
        if (window.scrollY < 100) {
          setActiveId(sections[0].id)
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    handleScroll() // Initial check

    return () => window.removeEventListener('scroll', handleScroll)
  }, [items])

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault()
    const element = document.getElementById(id)
    if (element) {
      const offset = 80
      const elementPosition = element.getBoundingClientRect().top
      const offsetPosition = elementPosition + window.pageYOffset - offset

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      })
    }
  }

  return (
    <nav
      className={cn(
        'sticky top-20 h-[calc(100vh-5rem)] overflow-y-auto',
        'hidden md:block',
        'w-64 pr-4',
        className
      )}
    >
      <div className="text-sm font-medium mb-4 text-foreground">Table of Contents</div>
      <ul className="space-y-2">
        {items.map((item) => {
          const isActive = activeId === item.id
          const level = item.level || 0
          return (
            <li key={item.id} style={{ paddingLeft: `${level * 16}px` }}>
              <a
                href={`#${item.id}`}
                onClick={(e) => handleClick(e, item.id)}
                className={cn(
                  'block py-1 text-sm transition-colors',
                  'hover:text-foreground',
                  isActive
                    ? 'text-foreground font-medium'
                    : 'text-muted-foreground'
                )}
              >
                {item.title}
              </a>
            </li>
          )
        })}
      </ul>
    </nav>
  )
}
