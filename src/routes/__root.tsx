import { Outlet, createRootRoute } from '@tanstack/react-router'
import { TanStackRouterDevtoolsPanel } from '@tanstack/react-router-devtools'
import { TanStackDevtools } from '@tanstack/react-devtools'
import { GoogleOAuthProvider } from '@react-oauth/google'
import { ThemeProvider } from '@/components/themes/theme-provider'
import Navbar from '@/components/navigation/app-navbar'
import AuthProvider from '@/components/auth/auth-provider'

const GOOGLE_CLIENT_ID = import.meta.env.VITE_GOOGLE_CLIENT_ID!

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
})
