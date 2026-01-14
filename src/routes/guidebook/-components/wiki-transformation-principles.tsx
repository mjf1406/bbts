import { WikiSection } from './wiki-section'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Separator } from '@/components/ui/separator'

export function WikiTransformationPrinciples() {
  return (
    <WikiSection id="transformation-principles" title="The Transformation Principles">
      <p className="mb-6">
        In this handbook, you will find simple summaries of the most important factors for building muscle. As we
        progress through the program, we'll be putting these 6 key principles to use.
      </p>

      <div className="space-y-8">
        {/* Principle 1: Tension */}
        <Card>
          <CardHeader>
            <CardTitle>1. Tension over everything</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p>
              Tension remains undisputed as the main driver of
              hypertrophy [1]. Without tension, very little muscle
              growth can occur. Tension is the force created
              within a muscle as it is pulled and stretched during
              lifting, kind of like a rope in a tug of war.
            </p>
            <p>
              When the muscle senses tension, a bunch of
              anabolic signals are sent, telling the muscle it needs
              to get bigger.
            </p>
            <p>
              So how do we maximize tension on a muscle?
              Answering that question leads us into the remaining
              5 principles:
            </p>
          </CardContent>
        </Card>

        {/* Principle 2: Technique */}
        <Card>
          <CardHeader>
            <CardTitle>2. Technique</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p>
              In order to ensure that tension is being applied to
              the muscle, we need to perform exercises with good
              and consistent technique. There are detailed videos
              demonstrating proper technique for every exercise
              included in the program sheets but, for now, here are
              a few important things we'll be focusing on:
            </p>

            <div className="space-y-4 mt-4">
              <div>
                <h4 className="font-semibold mb-2">The Negative</h4>
                <p className="mb-2">
                  A controlled, slightly slower negative is a pillar of good technique. I was at the gym today, looked around, and
                  noticed how many people just let the weight fall during the negative. Most people seem much more concerned
                  with "getting the weight up" than they are with lowering it back down under control. This is significant because
                  getting the weight up is most likely less important than lowering it back down. Research indicates that the
                  eccentric (negative) phase is more important for hypertrophy than the concentric (positive) phase of a lift. So,
                  if you're one of those people who tends to just let the weight free fall on the negative, in this program, really
                  focus on resisting the weight on its way down.
                </p>
                <p className="mb-2">
                  Generally speaking, we'll be using a 2-4 second negative on most exercises. That's a fairly slow negative
                  compared to what most people do, but it's not super slow. New research on rep tempo suggests that: "the
                  most favorable [tempo for muscle hypertrophy] is a combination of slower eccentric movements, paired with
                  faster concentric movements" [2]. In other words, on most exercises, we'll be moving the weight slower on the
                  negative and more explosively on the positive. A few exercises, such as cable reverse flyes for the rear delts
                  and cable triceps kickbacks, don't lend themselves as well to an explosive positive, so on these, we'll use a
                  smoother positive. If you're confused about what your tempo should look like for each exercise, pay attention
                  to my rep tempo in the video demos for each exercise. A safe general assumption, though, would be a 2-4
                  second negative and a forceful positive.
                </p>
                <p>
                  Another good cue I like to think about on the negative is treating it as if it were a "failed positive." On every rep,
                  you're not just lowering the weight, you're resisting it. It's kind of like you're trying to push the weight up, but it
                  still keeps moving down against your might. The idea is to really feel the muscle streeettttchhhhhhhh as you
                  lower the weight back down. This will create much more eccentric tension than just allowing the weight to free
                  fall.
                </p>
              </div>

              <Separator />

              <div>
                <h4 className="font-semibold mb-2">The Range of Motion</h4>
                <p>
                  More and more research is pointing toward the idea that full range of motion isn't always better per se, but
                  rather getting to the deepest, most-stretched aspect of the range of motion is what really matters [3]. In other
                  words, the stretch is, for the most part, more important than the squeeze. The bottom half of a squat is more
                  important than the top half of a squat. The bottom half of a cable curl is more important than the top half of a
                  cable curl. You need to get the muscle stretched while lifting. When performing the exercises in this program,
                  regularly ask yourself if you're getting a deep stretch at the bottom. If not, you may be missing out on some
                  gains!
                </p>
              </div>

              <Separator />

              <div>
                <h4 className="font-semibold mb-2">Momentum</h4>
                <p>
                  Another thing I've been noticing a lot at the gym is that most people do quite a lot of cheating on their form –
                  too much cheating. Again, it seems as if they just want to get the weight up. It's as if the lifters are thinking
                  that as long as they can get the weight from A to B, it's mission accomplished. The problem, though, is that
                  you can get the weight from A to B without actually applying much tension to the target muscle. Take bicep
                  curls, for example. If I "curl" the weight up while leaning forward and backward (see: Bro Jeff), I'm most
                  definitely taking loads of tension away from the biceps and dispersing it onto the lower back. This isn't ideal.
                  On each exercise, we want to always be in control of the weight. This generally means minimizing momentum
                  and swinging while keeping our target muscle in mind.
                </p>
              </div>

              <Separator />

              <div>
                <h4 className="font-semibold mb-2">Form Consistency</h4>
                <p>
                  Another point worth mentioning is that you should do your absolute best to keep your form consistent from
                  week to week. As you add weight or reps, it will be tempting to alter your form for the sake of "progression."
                  This is a kind of fake progression though. If you just got other muscles involved by cheating the weight up, you
                  didn't actually apply any additional tension to the target muscle. It's better to keep the form in check than
                  increase the weight at all costs. We're putting technique over weight in this program… always.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Principle 3: Effort */}
        <Card>
          <CardHeader>
            <CardTitle>3. Effort</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p>
              When it comes to building muscle, effort matters. But if you're just starting out, you don't need to push every
              set to complete failure to make progress. In fact, beginners can make excellent gains without grinding out
              reps or feeling like they're absolutely spent after every set. That's one of the big advantages of being new to
              lifting—your body is highly responsive to training.
            </p>
            <p>
              So, while it's true that more experienced lifters may need to push themselves closer to failure to keep seeing
              progress, beginners can grow muscle just fine by stopping their sets with upwards of 4 or 5 reps left in the
              tank. That might not feel super intense, but it's enough to challenge your muscles and trigger growth.
            </p>
            <p>
              Unfortunately, research shows that a lot of people think they're training hard, but they're actually leaving too
              many reps in reserve—sometimes 6, 7, or more—which often isn't enough stimulus for optimal results. But,
              research also shows that people are more accurate at estimating their reps in reserve when they are closer to
              failure. For beginners, training with 2-3 reps in the tank strikes a nice balance: it's hard enough to promote
              growth and also helps you develop a better feel for how close you really are to failure over time.
            </p>
            <p>
              That's the range most sets in this program will fall into—but there are some exceptions, which I'll highlight
              later.
            </p>
            <p>
              This is where something called RPE comes in. It stands for Rating of Perceived Exertion, and uses a 1-10 scale
              to measure reps in reserve.
            </p>

            <div className="mt-6">
              <h4 className="font-semibold mb-4">RPE Scale</h4>
              <div className="overflow-x-auto">
                <table className="w-full border-collapse text-sm">
                  <thead>
                    <tr className="border-b">
                      <th className="text-left p-2 font-semibold">RPE</th>
                      <th className="text-left p-2 font-semibold">Meaning</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b">
                      <td className="p-2 font-medium">10</td>
                      <td className="p-2">You reached failure. You actually tried and failed to get the weight all the way up.</td>
                    </tr>
                    <tr className="border-b">
                      <td className="p-2 font-medium">9-10</td>
                      <td className="p-2">You didn't actually reach failure, but you were very close. You might have been able to
                        add a little more weight, but you definitely didn't leave more than 1 rep in the tank.</td>
                    </tr>
                    <tr className="border-b">
                      <td className="p-2 font-medium">9</td>
                      <td className="p-2">You could've done one more rep if you really tried. This is still a hard set.</td>
                    </tr>
                    <tr className="border-b">
                      <td className="p-2 font-medium">8-9</td>
                      <td className="p-2">You could've done 1 or 2 more reps if you really tried. It wasn't a brutal set, but you're
                        still pretty close to failure here.</td>
                    </tr>
                    <tr className="border-b">
                      <td className="p-2 font-medium">8</td>
                      <td className="p-2">You probably had 2 reps left in the tank. It wasn't a super hard set, but will still
                        certainly stimulate hypertrophy.</td>
                    </tr>
                    <tr className="border-b">
                      <td className="p-2 font-medium">7-8</td>
                      <td className="p-2">There are 2 or 3 reps in the tank here. Depending on the exercise, this is usually not
                        going to feel like a truly hard set.</td>
                    </tr>
                    <tr className="border-b">
                      <td className="p-2 font-medium">7</td>
                      <td className="p-2">You have 3 reps left in the tank. On most exercises, this would feel like something
                        between a tough warm up set and an easy working set.</td>
                    </tr>
                    <tr className="border-b">
                      <td className="p-2 font-medium">6-7</td>
                      <td className="p-2">You have 3 or maybe 4 reps left in the tank.</td>
                    </tr>
                    <tr className="border-b">
                      <td className="p-2 font-medium">6</td>
                      <td className="p-2">You could've done 4 more if you really tried.</td>
                    </tr>
                    <tr className="border-b">
                      <td className="p-2 font-medium">5</td>
                      <td className="p-2">You could've done 5 more if you really tried.</td>
                    </tr>
                    <tr className="border-b">
                      <td className="p-2 font-medium">1-4</td>
                      <td className="p-2">More than 5 reps left in the tank. These are warm-up sets, not working sets.</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <p className="mt-4">
              In this program, RPE is broken down into "Early Set RPE" and "Last Set RPE". Early Sets refer to every working
              set other than the very last set.
            </p>
            <p>
              If an exercise calls for 3 sets, sets 1 and 2 are the Early Sets and set 3 is the Last Set. If an exercise calls for 2
              sets, set 1 would be the Early Set and set 2 would be the Last Set. If an exercise calls for 1 set, you'll see that
              there is no Early Set RPE listed, as the first set will also be the last set, so just follow the Last Set RPE. It's
              worth mentioning that Early Sets are NOT warm-up sets. Warm-up sets are separate and to be done before the
              Early Sets. Dividing working sets into Early Sets and Last Sets is simply a way for us to sometimes apply
              different intensity levels to different working sets.
            </p>
            <p>
              You may also notice that in the program I use a "~" sign before most RPE ratings to imply that your RPE
              estimates will never be perfectly accurate. This sign denotes that being off by about 1 RPE unit is totally
              normal. Just do your best to be within +/- 1 RPE of the assigned RPE. Also, you can use the Last Set of most
              exercises to see how accurate you were with your Early Set RPEs by sending it all the way to failure and
              comparing it to how many reps you got for the previous sets.
            </p>
          </CardContent>
        </Card>

        {/* Principle 4: Progressive Overload */}
        <Card>
          <CardHeader>
            <CardTitle>4. Progressive Overload</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p>
              The simplest explanation of progressive overload is
              when you increase some training variable over time.
              It's widely accepted that progressive overload is
              crucial for ensuring continued progress because you
              need to continually provide the muscle with a new
              stimulus to adapt to. Without overload, the muscle
              will reach the current challenge level and have no
              real reason to continue growing.
            </p>
            <p>
              There are a large number of ways to apply
              progressive overload. Here are the main ones we'll
              be emphasizing in this program:
            </p>

            <div className="space-y-3 mt-4">
              <div>
                <h4 className="font-semibold mb-2">Adding reps</h4>
                <p>
                  This will be the main method of overload on exercises that give a rep range,
                  instead of a fixed rep count. For example, if the program calls for 2 sets of 10-12
                  reps on Cable Crunches (as it does), you'll pick a weight that will sufficiently
                  challenge you for either 10, 11, or 12 reps. Let's say you get 10 reps on both sets
                  in Week 3. In Week 4, you will try to add a rep to at least one of those sets. Over
                  the coming few weeks, try to max out the rep range by getting 12 reps on both
                  sets. Only once you've maxed out the rep range you should add some weight and
                  then reduce reps back down to the bottom of the range. Coaches refer to this as
                  double progression since we are progressing both reps and weight, in that order.
                </p>
              </div>

              <div>
                <h4 className="font-semibold mb-2">Adding weight</h4>
                <p>
                  For all exercises within the program, only add weight once you've maxed out the
                  top end of the rep range, as explained above.
                </p>
              </div>

              <div>
                <h4 className="font-semibold mb-2">Improving form</h4>
                <p>
                  Even if you can't add some reps or weight during a given week, you can always do
                  minor things to improve your technique. Improvements in technique cues,
                  especially improvements in controlling the negative, can increase tension on the
                  target muscle and totally counts as progressive overload!
                </p>
              </div>

              <div>
                <h4 className="font-semibold mb-2">Improving the mind-muscle connection</h4>
                <p>
                  If you can't add reps or weight, you can focus on feeling the muscle working
                  better. Improving the mind-muscle connection is most likely not as effective as
                  adding reps, weight or improving form at increasing tension, but research has
                  shown that the mind-muscle connection can increase hypertrophy in some cases
                  [9]. It's certainly worth keeping in mind as an overload option, especially on
                  isolation exercises where adding reps and weight may become impractical at a
                  certain point of strength development.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Principle 5: High-Tension Exercises */}
        <Card>
          <CardHeader>
            <CardTitle>5. High-Tension Exercises</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p>
              You'll quickly notice that this program is not a powerbuilding/strength program. There are many machinebased and cable-based exercises and only a select few free-weight movements. Even the over-hated and
              under-appreciated Smith Machine makes a number of appearances over a free weight barbell option (gasp!).
            </p>
            <p className="font-semibold">Why is this?</p>
            <p>
              Well, first of all, the best evidence shows that machines are at least equally effective as free weights in
              stimulating hypertrophy [10], and in some cases, may be superior [11].
            </p>
            <p>
              That shouldn't be surprising as machines and cables have a few clear advantages to free weights when it
              comes to bodybuilding. Here's a short list of a few:
            </p>

            <ul className="list-disc list-inside space-y-2 ml-4 mt-4">
              <li>
                <strong>Safety:</strong> Generally, you can push sets to failure more safely on
                machines. If you fail a rep on a machine, the weight is
                usually safely supported by the machine after you fail
                a rep. On the other hand, if you fail with free weights,
                there is less support for the failed attempt, which may
                come with a higher risk of injury.
              </li>
              <li>
                <strong>Resistance Profile:</strong> Good machines are also generally designed to have
                good resistance profiles. Free weight exercises tend
                to have much more variable resistance profiles,
                meaning that the exercise may feel very hard at one
                point in the range of motion, but very easy at another
                point in the range of motion. Machines tend to apply
                resistance more evenly, which is a good thing
                because as you approach failure, the muscle won't fail
                just because it hit a tough spot in the free weight's
                resistance profile. Instead, it'll be because the muscle
                has reached exhaustion.
              </li>
              <li>
                <strong>Stability:</strong> Machines also tend to offer higher stability than free weight exercises. Unstable exercises are not ideal for
                hypertrophy. Think about doing a squat on a Bosu ball. You're so challenged with trying to keep your
                balance that you aren't able to properly apply tension to the quads. Increasing the stability of an exercise,
                generally speaking, increases the efficiency of the force transfer to the target muscle. This is why, for
                hypertrophy purposes, getting "locked in" on an exercise is smart. The less locked in you are, the more
                opportunities there are for tension to leak – which is not great. Since machines usually offer very high
                stability, there is minimal leakage of tension.
              </li>
              <li>
                <strong>Warm-up Efficiency:</strong> Machines also generally require fewer warm-up sets. This means you can get to your working sets faster
                without wasting time and energy doing as many non-stimulative warm up sets. For example, when I do
                barbell back squats, I usually need to do 4-5 warm-up sets before I feel ready to hit my first working set.
                However, on Hack Squats or Smith Machine Squats, I feel ready to tackle my working sets after only 2-3
                warm-up sets. That means less time and energy spent doing work that isn't helping with muscle growth
                and more time and energy spent on the good stuff.
              </li>
            </ul>

            <p>
              Despite these advantages, I don't want to overstate the supremacy of machine-based exercises. Remember
              that research indicates that both machines and free weights are effective for building muscle. And free
              weights have advantages too. They're more accessible, they tend to have better strength carryover, they may
              activate smaller stabilizers better, and they're more versatile (you can do a lot more exercises with a barbell
              than you can with a hack squat).
            </p>
            <p>
              But when it comes to our main goal with this program specifically, which is to build muscle, I do believe that
              machines have a slight edge in most instances. That said, free weight exercises are still included throughout
              the program. But overall, you will notice that machines and cables are emphasized.
            </p>
            <p>
              However, just in case you don't have access to machines and cables, for every exercise, I've included at least
              one free weight substitution option. Making these substitutions will absolutely allow you to still get the job
              done and make great gains while running this program with minimal equipment.
            </p>
            <p>
              Beyond an emphasis on exercises that have high stability and good tension profiles, this program also
              prioritizes exercises with a long length muscle bias. This means we'll be focusing on exercises that load the
              muscle while it is being stretched. Examples of very long-length biased exercises include Bayesian cable curl,
              DB Bulgarian split squat, pendlay deficit row, and bottom-half DB flyes.
            </p>
          </CardContent>
        </Card>

        {/* Principle 6: Intensity Techniques */}
        <Card>
          <CardHeader>
            <CardTitle>6. Intensity Techniques</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p>
              Intensity techniques are not a major focus of the beginner program. As mentioned earlier, beginners can make
              excellent progress by staying a few reps shy of failure, so there's no real benefit to layering on additional
              intensity techniques like drop sets, static holds, or lengthened partials.
            </p>
            <p>
              However, there is one exception: training to failure itself. In Weeks 7–12 of the program, you'll take the last set
              to failure on select exercises.
            </p>
            <p>
              Taking a set to failure means you attempt another rep—but physically can't complete it with good form.
            </p>
            <p>I've included this for a few key reasons:</p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>
                It reinforces what "all out" truly means, helping you better estimate sub-maximal RPEs (i.e. RPEs less than
                10).
              </li>
              <li>
                It standardizes effort scientifically. Instead of relying on subjective estimates (i.e., RPEs below 10), this
                ensures you're training with the intended effort.
              </li>
            </ul>
          </CardContent>
        </Card>
      </div>
    </WikiSection>
  )
}
