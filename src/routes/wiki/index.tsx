import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/wiki/')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/login/"!</div>
}
