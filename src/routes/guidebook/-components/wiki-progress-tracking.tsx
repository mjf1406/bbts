import { WikiSection } from './wiki-section'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

export function WikiProgressTracking() {
  return (
    <WikiSection id="progress-tracking" title="Progress Tracking">
      <p className="mb-6">
        There are 3 main tools we'll be using to track progress on our bodybuilding journey: strength performance,
        progress photos, and bodyweight.
      </p>

      <div className="space-y-6">
        <Card>
          <CardHeader>
            <CardTitle>1. Strength Performance (Progressive Overload)</CardTitle>
          </CardHeader>
          <CardContent>
            <p>
              The single best indicator that you're gaining muscle is if you're gaining strength in the gym. This doesn't mean
              your 1 rep max strength, but rather your strength within the rep ranges given in the program (usually around
              8-15 reps). If you are either lifting more weight or doing more reps at the same weight within the rep ranges
              given in the program, you're most likely adding muscle. This is why it's really important that you track your
              weight and reps used for as many exercises as possible while running the program. Not only will tracking your
              performance keep you accountable to "beat the logbook," it will serve as a reliable proxy for physique progress
              (which can be harder to gauge visually, especially as you get more advanced).
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>2. Progress Photos</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="mb-2">
              Since getting more jacked is the goal, progress photos will be the most direct method of measuring progress.
              However, depending on your level of advancement, you may not notice visual progress in photos as easily or
              quickly as you will strength progress in the gym. For this reason, I suggest taking progress roughly once every
              2-3 months and ideally no more than once a week.
            </p>
            <p>
              When taking progress photos, ensure that you use the same camera, background and lighting whenever
              possible. Remember to take at least one photo from the front, side and rear.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>3. Bodyweight</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p>
              Bodyweight is a surprisingly useful tool for tracking progress when used in combination with the other two. On
              its own, it can be deceptive because it doesn't tell you if you're gaining weight from fat, water, or muscle.
              However, when used alongside the other two tools, some common sense reasoning can give you a very good
              idea of what type of tissue you're gaining. For example, if you're getting stronger, you're looking more jacked in
              your photos, and your bodyweight is increasing at an appropriate rate, you can rest assured that the weight
              you're gaining is muscle. However, if you aren't getting stronger, you're looking significantly softer/flatter in
              your pics, and your weight is increasing rapidly, then you're most likely gaining fat.
            </p>
            <p>
              Gaining roughly 1-2% of your bodyweight per month will ensure that you are gaining mostly muscle. For
              example, if you currently weigh 170 lbs (77 kg), gaining ~1.7-3.4 lbs (0.7-1.5 kg) per month will ensure that
              most will be lean mass. Generally speaking, the slower you gain, the leaner it will be.
            </p>
            <p>
              If you have simultaneous fat loss goals while running this program, you will need to be either in a caloric
              deficit or at caloric maintenance. Generally speaking, for fat loss, I suggest losing weight no faster than 0.5-1%
              of your bodyweight per week. For example, if you currently weigh 220 lbs (100 kg), as you cut, aim to lose
              1.1-2.2 lbs (0.5-1 kg) per week to retain as much muscle as possible. If your goal is body recomposition, aim
              to roughly maintain your body weight while using progress photos and strength gain as your main guide for
              progress.
            </p>
            <p>
              While tracking your weight, be careful not to get too consumed with individual weigh-ins. Single weigh-ins can
              be impacted by water fluctuations, digestion changes, sleep disruptions, how late you ate the night before and
              a number of other short-term factors. Instead, observe weekly trends. If you take more than one weigh in per
              week, get the weekly average and compare weekly averages for a more accurate representation of how your
              weight is trending.
            </p>
            <p>
              There is a much more detailed explanation of body recomposition in my nutrition guide on the topic.
            </p>
            <p>
              While other tools for tracking body composition such as calipers, DEXA scans and other bodyfat testing
              devices can be useful in some situations, given their low accuracy and high error margins, I generally don't
              recommend using them for tracking progress [16]. The three tools outlined above will be plenty for getting the
              job done and fully informing you on whether or not you're moving in the right direction.
            </p>
          </CardContent>
        </Card>
      </div>
    </WikiSection>
  )
}
