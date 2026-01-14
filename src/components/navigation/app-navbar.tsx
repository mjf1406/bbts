import { Link } from '@tanstack/react-router'
import { BarChart3, Book, CalendarDays, Dumbbell } from 'lucide-react'
import { NavLink } from './nav-link'
import { NavUser } from './nav-user'

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-backdrop-filter:bg-background/60">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 py-2">
        {/* Logo and Text - Left */}
        <Link
          to="/"
          className="flex items-center gap-2 justify-center hover:opacity-80 transition-opacity"
        >
          <img
            src="/brand/logo.webp"
            alt="BBTS Logo"
            className="h-8 md:hidden w-auto"
          />
          <img
            src="/brand/logo-with-text.webp"
            alt="BBTS Logo"
            className="hidden md:block h-10 w-auto"
          />
        </Link>

        {/* Navigation Links - Middle */}
        <div className="flex items-center gap-1">
          <NavLink to="/exercises" icon={Dumbbell} label="Exercises" />
          <NavLink to="/program" icon={CalendarDays} label="Program" />
          <NavLink to="/guidebook" icon={Book} label="Guidebook" />
          <NavLink to="/tracking" icon={BarChart3} label="Tracking" />
        </div>

        {/* User Menu - Right */}
        <div className="flex items-center">
          <NavUser />
        </div>
      </div>
    </nav>
  )
}
