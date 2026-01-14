import { WikiSection } from './wiki-section'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

export function WikiExerciseSubstitutions() {
  return (
    <WikiSection id="exercise-substitutions" title="Exercise Substitutions">
      <p className="mb-4">
        For each exercise, there are two alternative substitution options given. Here is a list of suitable reasons for
        making a substitution:
      </p>

      <Card className="mb-6">
        <CardHeader>
          <CardTitle>Suitable Reasons for Substitution</CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="list-disc list-inside space-y-2">
            <li>You don't have access to the main exercise</li>
            <li>The main exercise causes you pain</li>
            <li>You really dislike the main exercise (but love one of the substitutions)</li>
            <li>You just don't "feel" the main exercise working at all, even after giving it an honest shot for several weeks (and you do "feel" one of the substitutions really well)</li>
          </ul>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Less Suitable Reasons for Substitution</CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="list-disc list-inside space-y-2">
            <li>You haven't done the main exercise before (no better time than now to learn! Watch the exercise demo and give it a shot!)</li>
            <li>Someone at your gym is using the main exercise (instead of swapping, move onto a different exercise and come back to it later. If it's still unavailable and that's derailing your workout, then you can feel free to make the swap).</li>
            <li>The main exercise is harder than one of the subs. Don't be tempted to always go for the easiest exercise option! Your hard work will pay off.</li>
          </ul>
        </CardContent>
      </Card>

      <p className="mt-6">
        You can substitute either Option 1 or Option 2. They aren't arranged so that Option 1 is necessarily better than
        Option 2. They are just different options!
      </p>
    </WikiSection>
  )
}
