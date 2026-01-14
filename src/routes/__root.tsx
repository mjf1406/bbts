import { Link, Outlet, createRootRoute } from '@tanstack/react-router'
import { TanStackRouterDevtoolsPanel } from '@tanstack/react-router-devtools'
import { TanStackDevtools } from '@tanstack/react-devtools'
import { GoogleOAuthProvider } from '@react-oauth/google'
import { ThemeProvider } from '@/components/themes/theme-provider'
import Navbar from '@/components/navigation/app-navbar'
import AuthProvider from '@/components/auth/auth-provider'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import LoadingPage from '@/components/navigation/loading-page'

const GOOGLE_CLIENT_ID = import.meta.env.VITE_GOOGLE_CLIENT_ID!

function NotFound() {
  return (
    <div className="flex min-h-[calc(100vh-4rem)] items-center justify-center px-4 py-12">
      <Card className="w-full max-w-md">
        <CardHeader className="text-center">
          <div className="mb-4 text-6xl font-bold text-muted-foreground/20">
            404
          </div>
          <CardTitle className="text-2xl">Page Not Found</CardTitle>
          <CardDescription className="text-base">
            The page you're looking for doesn't exist or has been moved.
          </CardDescription>
        </CardHeader>
        <CardContent className="text-center">
          <p className="text-sm text-muted-foreground">
            Don't worry, even the best training programs need rest days. Let's
            get you back on track.
          </p>
        </CardContent>
        <CardFooter className="justify-center">
          <Button asChild size="lg">
            <Link to="/">Go Home</Link>
          </Button>
        </CardFooter>
      </Card>
    </div>
  )
}

export const Route = createRootRoute({
  component: () => (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <GoogleOAuthProvider clientId={GOOGLE_CLIENT_ID}>
        {' '}
        <AuthProvider>
          <Navbar />
          <Outlet />
        </AuthProvider>
      </GoogleOAuthProvider>
      <TanStackDevtools
        config={{
          position: 'bottom-right',
        }}
        plugins={[
          {
            name: 'Tanstack Router',
            render: <TanStackRouterDevtoolsPanel />,
          },
        ]}
      />
    </ThemeProvider>
  ),
  notFoundComponent: NotFound,
  pendingComponent: LoadingPage,
})
