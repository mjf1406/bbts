import { WikiSection } from './wiki-section'
import { Card, CardContent } from '@/components/ui/card'

export function WikiProgramOverview() {
  return (
    <WikiSection id="program-overview" title="Understanding The Program">
      <p className="mb-4">
        The program is laid out in a PDF and an Excel spreadsheet. Below is a brief explanation of what each column
        in the program means.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
        <Card>
          <CardContent className="pt-6">
            <div className="space-y-4">
              <div>
                <span className="font-semibold">1.</span>
                <p className="mt-1">Each exercise has a clickable demo link.</p>
              </div>
              <div>
                <span className="font-semibold">2.</span>
                <p className="mt-1">Intensity techniques to be done after the last set only.</p>
              </div>
              <div>
                <span className="font-semibold">3.</span>
                <p className="mt-1">Warm-up sets should be light and easy.</p>
              </div>
              <div>
                <span className="font-semibold">4.</span>
                <p className="mt-1">Record the weight you used for each set here.</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="pt-6">
            <div className="space-y-4">
              <div>
                <span className="font-semibold">5.</span>
                <p className="mt-1">Early set RPEs are often a touch lower than last set RPE. See handbook for an explanation of RPE.</p>
              </div>
              <div>
                <span className="font-semibold">6.</span>
                <p className="mt-1">Rough guidelines for how long to rest between sets.</p>
              </div>
              <div>
                <span className="font-semibold">7.</span>
                <p className="mt-1">Two substitution options for each exercise. If you can't do the exercise listed feel free to swap it for either one of these.</p>
              </div>
              <div>
                <span className="font-semibold">8.</span>
                <p className="mt-1">Here you will find exercise-specific coaching cues. Always read the notes before doing your warm-up sets so you can practice any new cues.</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </WikiSection>
  )
}
