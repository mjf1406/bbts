import { Link } from '@tanstack/react-router'
import type { ComponentType, SVGProps } from 'react'
import { cn } from '@/lib/utils'

interface NavLinkProps {
  to: string
  icon: ComponentType<SVGProps<SVGSVGElement>>
  label: string
}

export function NavLink({ to, icon: Icon, label }: NavLinkProps) {
  return (
    <Link
      to={to}
      className={cn(
        'flex items-center gap-2 px-4 py-2 rounded-md text-sm font-medium transition-colors',
        'hover:bg-muted hover:text-foreground',
        'text-muted-foreground',
      )}
      activeProps={{
        className: cn(
          'flex items-center gap-2 px-4 py-2 rounded-md text-sm font-medium transition-colors',
          'border-b-4 border-primary hover:bg-muted hover:text-foreground',
          'text-foreground',
        ),
      }}
    >
      <Icon className="size-4" />
      <span className="hidden md:inline">{label}</span>
      <span className="sr-only md:hidden">{label}</span>
    </Link>
  )
}
