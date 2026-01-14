import { WikiSection } from './wiki-section'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

export function WikiWhatsNew() {
  return (
    <WikiSection id="whats-new" title="What's New in the Bodybuilding Transformation System?">
      <div className="space-y-8">
        {/* Training Split */}
        <Card>
          <CardHeader>
            <CardTitle>The Best Training Split</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p>
              This program follows an Upper/Lower/Pull/Push/Legs split. While there are plenty of effective training splits,
              this one is my personal favorite.
            </p>

            <div>
              <h4 className="font-semibold mb-2">Why 5x Per Week?</h4>
              <p>
                I find that training five days per week strikes the ideal balance between volume and recovery. A 4x per week
                split can make it tough for intermediate-advanced lifters to fit in enough volume without extending workouts
                well beyond an hour. On the other hand, a 6x per week split allows for more volume but can be harder to stick
                to and only provides one full rest day.
              </p>
            </div>

            <div>
              <h4 className="font-semibold mb-2">Choosing the Right 5x Split</h4>
              <p className="mb-2">
                Even within a 5x per week framework, there are several common options:
              </p>
              <ul className="list-disc list-inside space-y-1 ml-4">
                <li>Upper/Lower/Upper/Lower/Upper</li>
                <li>Full Body 5x</li>
                <li>Chest/Back/Shoulders/Arms/Legs (Bro Split)</li>
              </ul>
              <p className="mt-2">
                To narrow it down, research suggests that training muscle groups twice per week is beneficial once volume
                exceeds ~6–8 sets per session. That makes once-per-week splits (like the Bro Split) less effective for
                intermediate-advanced lifters, eliminating it from consideration.
              </p>
              <p>
                At the other extreme, the Full Body 5x split can be a fun change of pace but tends to be more taxing than other
                splits, making it better suited for advanced lifters.
              </p>
              <p>
                That leaves us with Upper/Lower/Upper/Lower/Upper and Upper/Lower/Pull/Push/Legs. While they hit upper
                and lower body equally, breaking two Upper sessions into Pull and Push days makes each workout feel
                distinct and more engaging. There's a reason the Bro Split remains popular—focusing on specific muscle
                groups is fun. While Pull/Push workouts aren't quite as isolated, they provide a similar satisfaction without
                sacrificing training volume.
              </p>
            </div>

            <div>
              <h4 className="font-semibold mb-2">Pull/Push/Legs vs. Push/Pull/Legs</h4>
              <p>
                You might be wondering why I chose Pull/Push/Legs instead of Push/Pull/Legs. Honestly, this is personal
                preference—I find my chest and shoulders benefit more from an extra day of recovery compared to my back. If
                you prefer to swap them, go for it!
              </p>
            </div>

            <div className="mt-4">
              <h4 className="font-semibold mb-2">Training Week Schedule</h4>
              <div className="overflow-x-auto">
                <table className="w-full border-collapse text-sm">
                  <thead>
                    <tr className="border-b">
                      <th className="text-left p-2 font-semibold">Week Day</th>
                      <th className="text-left p-2 font-semibold">Workout</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b">
                      <td className="p-2">Monday</td>
                      <td className="p-2">Upper (Strength Focus)</td>
                    </tr>
                    <tr className="border-b">
                      <td className="p-2">Tuesday</td>
                      <td className="p-2">Lower (Strength Focus)</td>
                    </tr>
                    <tr className="border-b">
                      <td className="p-2">Wednesday</td>
                      <td className="p-2">Rest</td>
                    </tr>
                    <tr className="border-b">
                      <td className="p-2">Thursday</td>
                      <td className="p-2">Pull (Hypertrophy Focus)</td>
                    </tr>
                    <tr className="border-b">
                      <td className="p-2">Friday</td>
                      <td className="p-2">Push (Hypertrophy Focus)</td>
                    </tr>
                    <tr className="border-b">
                      <td className="p-2">Saturday</td>
                      <td className="p-2">Legs (Hypertrophy Focus)</td>
                    </tr>
                    <tr className="border-b">
                      <td className="p-2">Sunday</td>
                      <td className="p-2">Rest</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Blocks */}
        <Card>
          <CardHeader>
            <CardTitle>Blocks</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p>
              This program is divided into two training blocks: the Foundation Block and the Ramping Block.
            </p>
            <div className="space-y-3">
              <div>
                <p className="font-semibold mb-1">The Foundation Block</p>
                <p>
                  lasts 5 weeks and is focused on establishing consistency and setting a foundation
                  of training volume to build off of.
                </p>
              </div>
              <div>
                <p className="font-semibold mb-1">The Ramping Block</p>
                <p>
                  lasts 7 weeks and is focused on building work capacity and continuing momentum
                  from the Foundation Block.
                </p>
              </div>
            </div>
            <p>
              Both blocks share the same overarching goal—maximum hypertrophy—but differ in two key ways:
            </p>

            <div className="space-y-3 mt-4">
              <div>
                <h4 className="font-semibold mb-2">1. Exercise Selection</h4>
                <p>
                  Most exercises will change between blocks. To account for this, both blocks begin with an intro/deload week,
                  allowing you to familiarize yourself with the new exercises and rep ranges before increasing volume and/or
                  intensity.
                </p>
              </div>

              <div>
                <h4 className="font-semibold mb-2">2. Training Volume</h4>
                <p className="mb-2">
                  In the Foundation Block, Week 1 starts with just one set per exercise at lower RPEs to ease you into the
                  program. Week 2 keeps the volume the same but slightly increases the RPEs to start building effort. In Weeks
                  3–5, all exercises increase to two sets, while still keeping about 2–3 reps in reserve per set.
                </p>
                <p>
                  In the Ramping Block, Week 6 serves as another intro/deload week, again using one set per exercise at lower
                  RPEs to help you adjust to the new exercise selection. From Weeks 7–12, training volume ramps up to 2–3
                  sets per exercise, and RPEs reach their peak within the program, with some sets taken all the way to failure for
                  the first time.
                </p>
              </div>
            </div>

            <div className="mt-6">
              <h4 className="font-semibold mb-4">Seamless Progression</h4>
              <p>
                I designed this program to loop back seamlessly. After completing Week 12, you can jump right back into
                Week 1, which serves as a deload.
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Long Muscle Length Focus */}
        <Card>
          <CardHeader>
            <CardTitle>Long Muscle Length Focus</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p>
              Since my last program launched in Fall of 2023, I co-authored a paper that outlined optimal resistance training
              techniques. We concluded, based on the literature, that overall exercise selection should be biased towards
              movements that place tension on the muscle in its most stretched position. So, for this program, a particular
              focus has been placed on movements that achieve this.
            </p>
            <div>
              <h4 className="font-semibold mb-2">Examples:</h4>
              <ul className="list-disc list-inside space-y-1 ml-4">
                <li>Pendlay Deficit Row</li>
                <li>High-Cable Lateral Raise</li>
                <li>Smith Machine Static Lunge w/ Elevated Front Foot</li>
                <li>Overhead Cable Triceps Extension</li>
                <li>45° Hyperextension</li>
                <li>1-Arm 45° Cable Rear Delt Flye</li>
              </ul>
            </div>
          </CardContent>
        </Card>

        {/* Meticulous Tracking */}
        <Card>
          <CardHeader>
            <CardTitle>Meticulous Tracking of Weights (DO THIS)</CardTitle>
          </CardHeader>
          <CardContent>
            <p>
              In the past, I've been a bit more relaxed with tracking my weights. I'd focus on strength progression for a few
              key compound lifts while relying on effort and intensity for the rest. But for this project, I committed to tracking
              everything—and after a year of doing so, I have to say, it makes a big difference.
            </p>
            <p className="mt-2">
              Having this feedback, even on smaller movements, can be a great motivator when things are going well. And
              when progress stalls, it's a clear signal that something might need adjusting. You can absolutely make great
              progress without tracking everything, but I encourage you to give it a shot.
            </p>
          </CardContent>
        </Card>
      </div>
    </WikiSection>
  )
}
