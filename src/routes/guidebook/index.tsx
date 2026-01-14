import { createFileRoute, useNavigate } from '@tanstack/react-router'
import { useEffect } from 'react'
import { Loader2 } from 'lucide-react'
import { WikiPage } from './-components/wiki-page'
import { useAuthContext } from '@/components/auth/auth-provider'

export const Route = createFileRoute('/guidebook/')({
  component: RouteComponent,
})

function RouteComponent() {
  const { user, isLoading } = useAuthContext()
  const navigate = useNavigate()

  useEffect(() => {
    if (!isLoading && !user.id) {
      navigate({ to: '/blocked' })
    }
  }, [user.id, isLoading, navigate])

  // Show loading immediately while checking auth or if not authenticated (will redirect)
  if (isLoading || !user.id) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <Loader2 className="h-8 w-8 animate-spin" />
      </div>
    )
  }

  return <WikiPage />
}
