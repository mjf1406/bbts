import { WikiSection } from './wiki-section'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

export function WikiMuscleAnatomy() {
  return (
    <WikiSection id="muscle-anatomy" title="Muscle Anatomy">
      <p className="mb-6">
        Below, you will find a description of how we plan on hitting each muscle in this program.
      </p>

      <div className="space-y-6">
        <Card>
          <CardHeader>
            <CardTitle>CHEST</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <p>
              The chest is worked with any exercise that pushes the
              arm across the body. This includes movements such as
              presses, flyes, dips, and push-ups. The pecs can be split
              into a clavicular (upper) head and a sternal (mid & lower
              head). All exercises in this program will target both
              heads. However, incline presses and closer-grip pushes
              tend to emphasize the upper pecs slightly more, while
              decline presses and dips tend to emphasize the mid and
              lower pecs slightly more.
            </p>
            <div>
              <p className="font-semibold mb-1">Exercises in this program:</p>
              <p className="text-sm">
                45° Incline Barbell Press, Cable Crossover Ladder, Barbell Bench Press, Bottom-Half DB
                Flye, 45° Incline DB Press, Pec Deck, Machine Chest Press, Bottom-Half Seated Cable Flye.
              </p>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>LATS</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <p>
              The lats are worked with any exercise that pulls the arm
              down to the front or in from the side. The lats are often
              one of the hardest muscles for people to "feel" which can
              make them a tricky part of the back to hit. Throughout
              this program, we'll be using a variety of exercises and
              cues to maximally activate the lats.
            </p>
            <div>
              <p className="font-semibold mb-1">Exercises in this program:</p>
              <p className="text-sm">
                Wide-Grip Pull-Up, Pendlay Deficit Row, Neutral-Grip Lat Pulldown, Chest-Supported Machine Row,
                Neutral-Grip Seated Cable Row, Dual-Handle Lat Pulldown, Smith Machine Row, Lean-Back Lat Pulldown, Chest-Supported T-Bar Row, Dual-Handle Elbows-Out Cable Row.
              </p>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>MID BACK</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <p>
              The mid-back muscles, such as the mid-traps and
              rhomboids, are worked with any exercise that squeezes
              the shoulder blades together, like various kinds of rows
              and face pulls. Given the number of muscles that make
              up the mid-back, we'll use a variety of exercises to ensure
              well-rounded development.
            </p>
            <div>
              <p className="font-semibold mb-1">Exercises in this program:</p>
              <p className="text-sm">
                Pendlay Deficit Row, Chest-Supported Machine Row, Neutral-Grip Seated Cable Row,
                1-Arm 45° Cable Rear Delt Flye, Smith Machine Row, Chest-Supported T-Bar Row, Dual-Handle Elbows-Out Cable Row.
              </p>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>BICEPS</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <p>
              The biceps are worked with any exercise that flexes
              (bends) the elbow. As such, they'll be targeted directly on
              any kind of bicep curl and indirectly on most back
              exercises, like vertical pulls and rows. Because the biceps
              cross both the elbow joint and the shoulder joint, they can
              be activated in slightly different ways by varying your arm
              position.
            </p>
            <div>
              <p className="font-semibold mb-1">Exercises in this program:</p>
              <p className="text-sm">
                Bayesian Cable Curl, EZ-Bar Cable Curl, Machine Preacher Curl, Cable Rope Hammer Curl, DB Concentration Curl.
              </p>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>TRICEPS</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <p>
              The triceps are worked with any exercise that
              extends (straightens out) the elbow. As such, they
              will be targeted directly on triceps extensions,
              pressdowns and kickbacks, and targeted indirectly
              on vertical and horizontal presses. As a tiny wrinkle,
              the long head of the triceps will also be active to
              some degree on back movements like pull-ups and
              pullovers. Like the biceps, the triceps also cross
              both the elbow joint and the shoulder joint, meaning
              varying your arm position can impact which region
              of the triceps is emphasized. Because of this, we
              will be performing a variety of different tricep
              isolation movements; some with the arm held up
              overhead, some with the arm positioned down by
              the side, and some with the arm hyperextended
              behind the torso.
            </p>
            <div>
              <p className="font-semibold mb-1">Exercises in this program:</p>
              <p className="text-sm">
                Overhead Cable Triceps Extension (Bar), Overhead Cable Triceps Extension (Bar), Cable Triceps Kickback, EZ-Bar
                Skull Crusher, Triceps Pressdown (Bar).
              </p>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>SHOULDERS (Front, Side & Rear Deltoids)</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <p>
              For our purposes in this program, the shoulders can
              be split into 3 different divisions: the anterior (front)
              deltoids, the lateral (side) deltoids, and the posterior
              (rear) deltoids.
            </p>
            <p>
              The front delts will be hit, to a very high degree, on
              all horizontal and vertical pressing and as such,
              won't be getting any isolation work in this program.
              The side delts will also be hit on horizontal and
              vertical presses, but to a lesser degree. Because of
              this, we'll be doing a variety of isolation exercises for
              the side delts. In contrast with the other two
              divisions, the rear delts aren't hit with pressing
              movements, but will instead be targeted on any
              horizontal and vertical pulls in the program.
              However, because the larger and stronger lats and
              mid-back muscles tend to take over on these
              exercises, we will be isolating the rear delts as well
              through the use of exercises such as 1-arm 45°
              cable rear delt flyes.
            </p>
            <div>
              <p className="font-semibold mb-1">Exercises in this program:</p>
              <p className="text-sm">
                45° Incline Barbell Press, High-Cable Lateral Raise, Barbell Bench Press, 1-Arm 45° Cable Rear Delt Flye, Machine
                Shoulder Press, 45° Incline DB Press, Machine Chest Press, Seated DB Shoulder Press.
              </p>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>UPPER TRAPS</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <p>
              The biomechanical function of the upper traps is still the matter of ongoing scientific debate. Most experts
              contend that the upper traps don't actually elevate the scapula (like in a traditional shrug) because the muscle
              fibers of the upper traps run much more horizontally than vertically. Instead of pulling the shoulders up, they
              actually rotate the scapula up. The simple implication of this is that the traps would be better targeted by
              shrugging "up and in" instead of straight up. Of course, even if this is fully true, there are still other muscles on
              top of the shoulders that are responsible for shrugging the shoulders, such as the levator scapulae, and they
              will still grow in response to shrugging exercises. Regardless, we will be using machine shrugs and cable
              paused shrug-ins in this program as our main exercises for targeting the upper traps. However, it is worth
              keeping in mind that many of the upper trap fibers will assist with horizontal rows, lateral raises, and will be
              worked isometrically on Romanian deadlifts.
            </p>
            <div>
              <p className="font-semibold mb-1">Exercises in this program:</p>
              <p className="text-sm">Machine Shrug, Cable Paused Shrug-In.</p>
            </div>
            <p className="mt-2 text-sm">
              I should note that I didn't include direct neck work in this program simply because most people aren't interested
              in direct neck training. However, if you are interested in incorporating direct neck training into this program, I'd
              recommend watching this video for suggested exercises. Even just adding 3 sets of neck extension and 3 sets of
              neck flexion 1-2x per week should be enough to gain muscle size in your neck, if you are new to training it or
              haven't been training it consistently.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>QUADS</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <p>
              The quads are worked with any exercise that extends
              (straightens out) the knee. Three heads of the quads only
              cross the knee, while one head (the rectus femoris)
              crosses both the knee joint and the hip joint. Because of
              this, exercises like squat variations and leg presses don't
              hit the rectus femoris as well as the other heads of the
              quads. Luckily, leg extensions and sissy squats get the
              pesky rectus femoris head much more involved.
            </p>
            <div>
              <p className="font-semibold mb-1">Exercises in this program:</p>
              <p className="text-sm">
                Smith Machine Squat, Leg Extension, Leg Press, DB Bulgarian Split Squat, Smith Machine Static
                Lunge w/ Elevated Front Foot, Hack Squat, Walking Lunge.
              </p>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>HAMSTRINGS</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <p>
              The hamstrings are worked with any exercise that flexes
              (bends) the knee and/or that extends (straights out) the
              hips. Basically, we're talking about leg curls and hip
              hinges like Romanian deadlifts. Because the hamstrings
              cross both the hip joint and the knee joint, similar to the
              rectus femoris of the quads, the hamstrings aren't hit
              particularly well on squats or leg presses either.
            </p>
            <div>
              <p className="font-semibold mb-1">Exercises in this program:</p>
              <p className="text-sm">Lying Leg Curl, Barbell RDL, Seated Leg Curl, 45° Hyperextension.</p>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>GLUTES</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <p>
              The glutes are a complex web of muscles that perform
              many different functions, but their main action in a
              bodybuilding context is hip extension (straightening the
              hips out). This means they'll be hit on all squat variations,
              leg presses, lunge and deadlift variations. The glute
              medius is mainly responsible for hip abduction and will be
              targeted via any direct hip abduction work in this program,
              but it'll also play a big stabilizing role on virtually every
              lower body compound exercise.
            </p>
            <div>
              <p className="font-semibold mb-1">Exercises in this program:</p>
              <p className="text-sm">
                Smith Machine Squat, Barbell RDL, Leg Press, DB Bulgarian Split Squat, Machine Hip Abduction,
                Smith Machine Static Lunge w/ Elevated Front Foot, 45° Hyperextension, Hack Squat, Walking Lunge.
              </p>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>ADDUCTORS</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <p>
              The adductors run down the inner thigh and are a
              commonly neglected area by bodybuilders. While they
              will be hit to a substantial degree on squats, the
              adductors are crucial for adding mass to the lower body
              from the front and back. Because of this, we'll be
              including a good deal of direct hip adduction work in this
              program.
            </p>
            <div>
              <p className="font-semibold mb-1">Exercises in this program:</p>
              <p className="text-sm">
                Smith Machine Squat, Leg Press, Machine Hip Adduction, Hack Squat, DB Bulgarian Split
                Squat, Smith Machine Static Lunge w/ Elevated Front Foot, Walking Lunge.
              </p>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>CALVES</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <p>
              The calves are worked with any exercise that plantar
              flexes the ankle (points the feet down like in a calf raise).
              The gastrocnemius muscle of the calves crosses the
              knee joint as well as the ankle joint and as such will be
              indirectly targeted on leg curls where it helps out the
              hamstrings. Although the calves are notoriously one of
              the most stubborn muscles to grow, like any muscle they
              will respond to proper hypertrophy training by growing.
            </p>
            <div>
              <p className="font-semibold mb-1">Exercises in this program:</p>
              <p className="text-sm">Leg Press Calf Press, Standing Calf Raise.</p>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>ABS</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <p>
              In the context of this program, by the "abs" we're referring
              to the rectus abdominis, also known as the 6-pack. The
              main function of the 6-pack is to round the spine. This
              will happen in exercises that bring the upper torso down
              toward the legs (like in a crunch) and in exercises that
              bring the legs up toward the upper torso (like in a leg
              raise). Both are included in this program. There's also
              some direct work for the transverse abdominis and
              obliques, although these muscles will play an important
              stabilizing role in many exercises throughout the
              program.
            </p>
            <div>
              <p className="font-semibold mb-1">Exercises in this program:</p>
              <p className="text-sm">Cable Crunch, Roman Chair Leg Raise, Machine Crunch, Ab Wheel Rollout.</p>
            </div>
          </CardContent>
        </Card>
      </div>
    </WikiSection>
  )
}
