/** @format */

import { LogIn } from 'lucide-react'
import { Button } from '../ui/button'
import { db } from '@/lib/db/db'
import { useNavigate } from '@tanstack/react-router'

const handleGuestSignIn = (navigate: ReturnType<typeof useNavigate>) => {
  db.auth
    .signInAsGuest()
    .then((result) => {
      if (result.user) {
        db.transact(
          db.tx.$users[result.user.id].update({
            created: new Date(),
            lastLogon: new Date(),
          }),
        )
        // Redirect to exercises after successful login
        navigate({ to: '/exercises', search: { page: 1 } })
      }
    })
    .catch((err) => {
      console.error('Error signing in as guest:', err)
      alert('Failed to sign in as guest: ' + (err.body?.message || err.message))
    })
}

export default function TryAsGuestButton() {
  const navigate = useNavigate()
  return (
    <Button
      onClick={() => handleGuestSignIn(navigate)}
      variant="outline"
      className="w-full items-center gap-2 justify-start"
      size="lg"
    >
      <LogIn />
      Try as Guest
    </Button>
  )
}
