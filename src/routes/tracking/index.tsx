import { createFileRoute, useNavigate } from '@tanstack/react-router'
import { Loader2 } from 'lucide-react'
import { useEffect } from 'react'
import { useAuthContext } from '@/components/auth/auth-provider'

export const Route = createFileRoute('/tracking/')({
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
  return <div>Hello "/tracking/"!</div>
}
