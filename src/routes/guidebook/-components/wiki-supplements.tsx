import { WikiSection } from './wiki-section'
import { Card, CardContent } from '@/components/ui/card'

export function WikiSupplements() {
  return (
    <WikiSection id="supplements" title="Bodybuilding Supplements">
      <p className="mb-6">
        Supplements will make up a tiny part of your success on this program. Here is a short list of supplements that
        may help you make the most of your training:
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card>
          <CardContent className="pt-6">
            <h4 className="font-semibold mb-2">Creatine Monohydrate</h4>
            <p className="text-sm">Take 5 grams (1 tsp) per day at any time of day</p>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="pt-6">
            <h4 className="font-semibold mb-2">Protein Powder</h4>
            <p className="text-sm">Take as needed to hit daily protein goals</p>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="pt-6">
            <h4 className="font-semibold mb-2">Caffeine</h4>
            <p className="text-sm">Optionally take ~150-250mg ~30-60 minutes before training when you are feeling more tired than usual</p>
          </CardContent>
        </Card>
      </div>
    </WikiSection>
  )
}
