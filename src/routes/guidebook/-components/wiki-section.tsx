import * as React from 'react'
import { cn } from '@/lib/utils'

interface WikiSectionProps {
  id: string
  title: string
  children: React.ReactNode
  className?: string
}

export function WikiSection({ id, title, children, className }: WikiSectionProps) {
  return (
    <section id={id} className={cn('scroll-mt-20 mb-12', className)}>
      <h2 className="text-3xl font-bold mb-6 text-foreground">{title}</h2>
      <div className="prose prose-sm max-w-none dark:prose-invert">
        {children}
      </div>
    </section>
  )
}
