import { WikiSection } from './wiki-section'
import { Card, CardContent } from '@/components/ui/card'

export function WikiTrainingGear() {
  return (
    <WikiSection id="training-gear" title="Suggested Training Gear">
      <p className="mb-4">
        In the table below, you will find a list of training gear that can help you make the most out of this program.
        None of this training gear is required and there is a level of importance column that will help you decide which
        items you may want to consider more than others.
      </p>

      <Card className="mb-6">
        <CardContent className="pt-6">
          <p className="text-sm mb-2">
            <strong>Please note</strong> that all of the Amazon links and Rise links below are affiliate
            links. I will get a small commission if you purchase any items from these
            links. While I greatly appreciate that support, I want to emphasize that
            these are all supplemental items and are absolutely not needed in order to
            make great progress while running this program. That said, I personally use
            all of the items on the list and I do find they make a difference (some more
            than others). If you only get two items on this list, I would get liquid chalk
            and lifting straps over anything else.
          </p>
        </CardContent>
      </Card>

      <div className="overflow-x-auto">
        <table className="w-full border-collapse text-sm">
          <thead>
            <tr className="border-b">
              <th className="text-left p-2 font-semibold">Gear</th>
              <th className="text-left p-2 font-semibold">Why</th>
              <th className="text-left p-2 font-semibold">Level of importance</th>
              <th className="text-left p-2 font-semibold">Exercises to use on</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b">
              <td className="p-2 font-medium">Angles 90 Handles</td>
              <td className="p-2">Allow for more secure grip and better mind-muscle connection on pulling exercises.</td>
              <td className="p-2">Low-Moderate</td>
              <td className="p-2">Lat-focused or neutral-grip pulldowns and lat-focused rows. A regular D-handle can be used without issue.</td>
            </tr>
            <tr className="border-b">
              <td className="p-2 font-medium">Liquid Chalk</td>
              <td className="p-2">Prevent grip slipping from sweaty palms. Usually allows for more reps and/or increased load.</td>
              <td className="p-2">Moderate-high</td>
              <td className="p-2">Any exercise that relies on grip strength (usually pulling exercises like rows, pullups, RDLs, etc.)</td>
            </tr>
            <tr className="border-b">
              <td className="p-2 font-medium">Straps</td>
              <td className="p-2">Prevents grip from being a limiting factor on heavy pulls, allowing you to overload the target muscles better.</td>
              <td className="p-2">Moderate-high</td>
              <td className="p-2">Most back exercises and RDLs</td>
            </tr>
            <tr className="border-b">
              <td className="p-2 font-medium">Knee Sleeves</td>
              <td className="p-2">Knee sleeves provide comfort and cushioning around the knees during squat-type movements and offer a small performance boost.</td>
              <td className="p-2">Low-Moderate</td>
              <td className="p-2">Squat-type movements and leg presses</td>
            </tr>
            <tr className="border-b">
              <td className="p-2 font-medium">Bodybuilding Belt</td>
              <td className="p-2">Belts are more helpful for strength/powerlifting training but can still help with bracing on some compound exercises in this program. A thicker powerlifting-style lever belt can be used if it's comfortable for you.</td>
              <td className="p-2">Low-Moderate</td>
              <td className="p-2">Squat-type exercises and RDLs. Some find it helpful on presses.</td>
            </tr>
            <tr className="border-b">
              <td className="p-2 font-medium">Wrist Cuffs</td>
              <td className="p-2">These will be used for cuffed lateral raises throughout the program. The cuffs will prevent your forearms from taking over on lateral raises and often helps improve the mind-muscle connection. They can also be used to do cable hip ab/adductions.</td>
              <td className="p-2">Moderate</td>
              <td className="p-2">High-cable cuffed lateral raises, cable hip abductions, cable hip adductions</td>
            </tr>
            <tr className="border-b">
              <td className="p-2 font-medium">Lacrosse Balls</td>
              <td className="p-2">Holding onto two lacrosse balls during cuffed lateral raises can improve tactile sensation and for some people makes the movement feel better than having your hands floating with nothing to hold onto.</td>
              <td className="p-2">Low (personal preference)</td>
              <td className="p-2">High-cable cuffed lateral raises</td>
            </tr>
          </tbody>
        </table>
      </div>
    </WikiSection>
  )
}
