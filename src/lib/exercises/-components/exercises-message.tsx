/** @format */

interface ExercisesMessageProps {
  message: string | null
}

export function ExercisesMessage({ message }: ExercisesMessageProps) {
  if (!message) return null

  return (
    <div
      className={`mb-4 p-3 rounded-md ${
        message.includes('Successfully')
          ? 'bg-green-500/10 text-green-500 border border-green-500/20'
          : 'bg-red-500/10 text-red-500 border border-red-500/20'
      }`}
    >
      {message}
    </div>
  )
}
