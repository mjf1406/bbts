import { createFileRoute } from '@tanstack/react-router'
import { GoogleOAuthButton } from '@/components/auth/google-oauth'
import TryAsGuestButton from '@/components/auth/guest-auth'
import { MagicCodeAuth } from '@/components/auth/magic-code-auth'
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
          <div className="flex flex-col items-center gap-2">
            <img
              src="/brand/logo.webp"
              alt="BBTS Logo"
              className="h-24 w-auto"
            />
            <img src="/brand/text.webp" alt="" className="h-8 w-auto" />
          </div>
          <CardDescription className="text-base">
            Organize your recipes, plan meals, and manage your pantry
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <GoogleOAuthButton />
          <MagicCodeAuth />
          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <span className="w-full border-t border-border" />
            </div>
            <div className="relative flex justify-center text-xs uppercase">
              <span className="bg-card px-2 text-muted-foreground">Or</span>
            </div>
          </div>
          <TryAsGuestButton />
        </CardContent>
      </Card>
    </div>
  )
}
