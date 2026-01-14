import { createFileRoute, useNavigate } from '@tanstack/react-router'
import { AlertTriangle } from 'lucide-react'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { DataAccessNotice } from '@/components/ui/data-access-notice'

export const Route = createFileRoute('/blocked/')({
  component: RouteComponent,
})

function RouteComponent() {
  const navigate = useNavigate()

  return (
    <div className="min-h-screen">
      <div className="flex min-h-[60vh] items-center justify-center p-4">
        <Card className="w-full max-w-md">
          <CardHeader className="space-y-1 text-center">
            <div className="flex justify-center mb-4">
              <AlertTriangle className="h-16 w-16 text-destructive" />
            </div>
            <CardTitle className="text-2xl">403 Forbidden</CardTitle>
            <CardDescription className="text-base">
              Access to this application is restricted to authorized users only.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <DataAccessNotice />
            <Button
              onClick={() => navigate({ to: '/' })}
              className="w-full"
              variant="outline"
            >
              Return to Home
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
