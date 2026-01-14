import { createFileRoute } from '@tanstack/react-router'
import { GoogleOAuthButton } from '@/components/auth/google-oauth'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
} from '@/components/ui/card'

export const Route = createFileRoute('/login/')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <div className="flex flex-1 items-center justify-center p-4">
      <Card className="w-full max-w-md">
        <CardHeader className="space-y-1 text-center">
          <div className="flex flex-col items-center">
            <img
              src="/brand/logo-with-text.webp"
              alt="BBTS Logo"
              className="h-16 w-auto"
            />
            <img src="/brand/text.webp" alt="" className="h-8 w-auto" />
          </div>
          <CardDescription className="text-base">
            Understand and track{' '}
            <a
              href="https://jeffnippard.com/products/the-bodybuilding-transformation-system"
              className="text-blue-500 hover:underline"
            >
              Jeff Nippard's Bodybuilding Transformation System
            </a>
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-2">
          <GoogleOAuthButton />
        </CardContent>
      </Card>
    </div>
  )
}
