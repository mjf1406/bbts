import { WikiSection } from './wiki-section'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'

export function WikiFAQ() {
  return (
    <WikiSection id="faq" title="FAQ">
      <Accordion type="single" collapsible className="w-full">
        <AccordionItem value="q1">
          <AccordionTrigger className="text-left">
            Did you run this program for a full year? Should I?
          </AccordionTrigger>
          <AccordionContent>
            <p className="mb-2">
              I followed the intermediate-advanced version of this program, but the overall structure is the same
              as the one I did.
            </p>
            <p className="mb-2">
              I varied the exercises using substitution options, but other than that, yeah! I just ran this program
              back to back to back. In hindsight, I think I could have benefitted from a little more variation, but for
              the case study that I used this program for, we wanted things to be as controlled and consistent as
              possible.
            </p>
            <p>
              After finishing this program, you can run it back as long as you are making progress. If it starts to get
              stale, you can move onto one of the other programs on my website.
            </p>
            <p className="mt-2">
              If you're looking for ideas, I'll be releasing a Specialization Program next, which is specifically written
              for more advanced trainees needing to bring up stubborn body parts. It's one of the best programs
              I've ever created, in my opinion, so stay tuned for that in the coming months!
            </p>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="q2">
          <AccordionTrigger className="text-left">
            Can I include the Squat, Bench, and Deadlift?
          </AccordionTrigger>
          <AccordionContent>
            <p className="mb-2">
              The squat, bench, and deadlift are some of my favorite exercises and they're fantastic movements
              for strength development. They also activate a large amount of muscle mass and can be very
              effective tools for building muscle. However, there are a few things that make them less suitable for
              a bodybuilding program, where strength is not a priority.
            </p>
            <p className="mb-2">
              Instead of barbell squats, we'll be doing smith machine squats and smith machine static lunges with
              an elevated front foot (except for cases when a substitution must be made due to lack of equipment
              access). Barbell bench press is featured in the first block of the program, but is swapped for
              machine chest press in block 2, due to the overall increase in volume. Instead of deadlifts from the
              floor, we will be doing Romanian deadlifts.
            </p>
            <p className="mb-2">
              These more bodybuilding-style movements tend to offer a higher stimulus-to-fatigue ratio than the
              Big 3 Powerlifts. In other words, we get a similar (or higher) stimulus for less fatigue. The powerlifts
              are very systemically demanding and generally require more recovery. If we can get the same
              hypertrophic stimulus for less recovery demand, why not go for those instead? The powerlifts also
              require a lot of warm-up time – that's time and energy that could be spent placing tension on the
              muscle.
            </p>
            <p>
              For me, it ultimately boils down to efficiency. The powerlifts certainly can be effective muscle
              building tools, and they're in virtually every other program of mine. However, because they're so
              fatiguing compared to other similar exercises, they aren't the most efficient tools for getting the job
              done when the goal is hypertrophy. For this reason, I would only recommend adding them into the
              program if you are very focused on maintaining strength with those lifts. If you choose to substitute
              them in, I would recommend lowering the reps to ~3-6.
            </p>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="q3">
          <AccordionTrigger className="text-left">
            I can only train 4x per week. How should I modify the program?
          </AccordionTrigger>
          <AccordionContent>
            <p className="mb-2">
              To run this program on a 4x schedule, I would recommend simply carrying over the remaining
              workout/s into the following week. For example:
            </p>
            <div className="text-sm space-y-2 mt-3">
              <div>
                <p className="font-semibold">Week 1</p>
                <p>Monday: Upper</p>
                <p>Tuesday: Lower</p>
                <p>Wednesday: Rest</p>
                <p>Thursday: Pull</p>
                <p>Friday: Push</p>
                <p>Saturday: Rest</p>
                <p>Sunday: Rest</p>
              </div>
              <div>
                <p className="font-semibold">Week 2</p>
                <p>Monday: Legs (carried over from Week 1 of the program)</p>
                <p>Tuesday: Upper</p>
                <p>Wednesday: Rest</p>
                <p>Thursday: Lower</p>
                <p>Friday: Pull</p>
                <p>Saturday: Rest</p>
                <p>Sunday: Rest</p>
              </div>
              <div>
                <p className="font-semibold">Week 3</p>
                <p>Monday: Push (carried over from Week 2 of the program)</p>
                <p>Tuesday: Legs (carried over from Week 2 of the program)</p>
                <p>Wednesday: Rest</p>
                <p>Thursday: Upper</p>
                <p>Friday: Lower</p>
                <p>Saturday: Rest</p>
                <p>Sunday: Rest</p>
              </div>
            </div>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="q4">
          <AccordionTrigger className="text-left">
            There are no supersets within this program. Can I add them in?
          </AccordionTrigger>
          <AccordionContent>
            <p className="mb-2">
              Yes! You are welcome to superset isolation exercises within the program to help save time, if
              needed. For example, in Week 1 of the program, you could choose to superset the Overhead Cable
              Triceps Extensions with Bayesian Cable Curls. This would mean alternating between these two
              exercises with minimal rest in between. The most important thing to keep in mind when creating
              supersets within the program is to avoid supersetting exercises that target the same muscle group.
              For example, you would not want to superset Overhead Cable Triceps Extensions with Cable Triceps
              Kickbacks.
            </p>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="q5">
          <AccordionTrigger className="text-left">
            The volume is lower than what I'm used to, should I add sets?
          </AccordionTrigger>
          <AccordionContent>
            <p className="mb-2">
              I wouldn't recommend it. I've been running this program as an advanced-elite level natural
              bodybuilder with over 15 years of serious lifting experience, and the volume feels perfect to me. The
              volumes included in this program are also in line with science-based recommendations from high
              level natural bodybuilding coaches. If you are more advanced than me, you can consider adding 1-2
              sets per week for a specific body part that you feel needs a little extra love. However, before turning
              to increase the volume, I would first ensure that your intensity/effort is on point. Are you truly
              pushing the last set to failure on all exercises, as suggested in the program? On these sets, are you
              pushing yourself as hard as you possibly can, as if $1,000,000 was on the line, and despite this
              maximum effort, you still can't get the weight up with good form? This should be your first course of
              action, before turning to a volume increase. I suspect that the volume is not too low for &gt;99% of
              people running this program. If it feels too low, you may not be executing the sets to the exertion
              level that I've prescribed in the program.
            </p>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="q6">
          <AccordionTrigger className="text-left">
            Can I choose to do a Substitution Option even if I can perform the original exercise?
          </AccordionTrigger>
          <AccordionContent>
            <p>
              Try to do the main exercise listed if you can. I spent a lot of time curating the main exercises in this
              program and I do think they have some unique advantages in terms of tension profile, long musclelength bias, and stimulus-to-fatigue ratio. However, if you don't have access to the equipment to
              perform the main exercise, absolutely feel free to make a substitution. Also, if you try the main
              exercise for a few weeks and just aren't feeling it, try one of the substitution options instead. The
              program was designed so that all substitution options will elicit a very similar training effect.
            </p>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="q7">
          <AccordionTrigger className="text-left">
            Do I need to time my rest periods in between sets?
          </AccordionTrigger>
          <AccordionContent>
            <p>
              No. Generally speaking, longer rest periods are associated with better hypertrophy because resting
              longer in between sets allows you to recover more and perform more volume as a result. The most
              important thing is that you feel recovered between sets. However, you also don't want to rest so long
              that you lose focus and the workout starts dragging on. You can time yourself in between sets if that
              helps keep you on track, but just keeping a rough eye on the clock is fine too.
            </p>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="q8">
          <AccordionTrigger className="text-left">
            My gym is crowded. Can I switch up the exercise order?
          </AccordionTrigger>
          <AccordionContent>
            <p>
              Yes. Try not to completely scramble the workout, but switching a few exercises around won't
              severely interfere with your ability to recover in between exercises and complete the workout
              properly.
            </p>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="q9">
          <AccordionTrigger className="text-left">
            How much muscle can I expect to gain?
          </AccordionTrigger>
          <AccordionContent>
            <p>
              How you respond to training will be largely determined by genetic factors and your specific training
              history (i.e. how close you are to your genetic limit). As a rough ballpark estimate for untrained male
              individuals, 1-2 lbs of muscle gain per month is reasonable (12-24 lbs of muscle gained in your first
              year). For early intermediates with about 1 year of lifting experience, progress will likely slow down
              to roughly 0.5-1 lbs of muscle gain per month (6-12 lbs of muscle gained in your second year).
              Beyond that, muscle gain from person to person will be highly variable, depending on how much
              you've already been optimizing your training and nutrition. For practical purposes, women can divide
              muscle gain estimates in half.
            </p>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="q10">
          <AccordionTrigger className="text-left">
            I'm not getting sore from my workouts. Is the program not working?
          </AccordionTrigger>
          <AccordionContent>
            <p>
              Muscle soreness is not required for hypertrophy to occur and it isn't even a reliable proxy that you
              had an effective workout. Plenty of activities can make your muscles sore, but be wholly ineffective
              at building muscle, such as running a marathon or getting a "charlie horse". In fact, reduced
              soreness over time can be a good thing as it may indicate that your body is adapting and recovering.
              If you are pushing yourself hard, executing the exercises with good form and being consistent with
              the workouts, soreness isn't something you need to be chasing.
            </p>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="q11">
          <AccordionTrigger className="text-left">
            I'm getting very sore from my workouts. Should I skip the gym until I'm not sore?
          </AccordionTrigger>
          <AccordionContent>
            <p className="mb-2">
              You may experience increased soreness when you first begin the program because it is presenting a
              new stress to your body. Some research shows that foam rolling can help reduce soreness [17, 18].
              So, if you are consistently getting sore week after week, consider adding a short 3-5 minute foam
              rolling routine at the end of the workouts. Otherwise, training while sore is not inherently problematic
              for muscle growth. If you're having a difficult time getting into position for any of the planned
              exercises, or finding it difficult to complete a full ROM due to soreness, it would be wise to skip that
              exercise until you feel properly recovered. Otherwise, in the case of mild soreness, perform a slightly
              longer warm-up for each exercise and use your own discretion as to whether you should complete the
              exercise or leave it for another day.
            </p>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="q12">
          <AccordionTrigger className="text-left">
            Why is there such little exercise variation from week to week?
          </AccordionTrigger>
          <AccordionContent>
            <p>
              Changing exercises from week to week is more likely to flatten out the strength progression curve.
              Within each block, exercises are kept mostly constant to ensure both progression (by adding volume
              incrementally to these specific movements) and mastery of exercise form and technique. Then, after
              each block, the exercises are switched up to keep things fresh and novel.
            </p>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="q13">
          <AccordionTrigger className="text-left">
            Should I add cardio to this program?
          </AccordionTrigger>
          <AccordionContent>
            <p className="mb-2">
              The main point of cardio from a bodybuilding
              standpoint is to establish a caloric deficit for
              fat loss. I would recommend prioritizing the
              deficit from your diet first, rather than relying
              heavily on cardio.
            </p>
            <p>
              As a general rule, I recommend keeping cardio
              to an effective minimum on this program. If you
              wish to do cardio to achieve your fat loss goals
              or for general health and fitness, try to keep it to
              4-5 low-moderate intensity sessions per week,
              around 20-30 minutes in duration. High
              intensity cardio should be used more sparingly,
              up to once or twice weekly at your own
              discretion. Cardio won't kill your gains, but it
              can interfere with your recovery if performed
              excessively. Monitor your own recovery, and if
              you're progressing fine, then whatever cardio
              you're doing isn't a big deal. If your progress is
              slowing and you feel very fatigued during or
              after workouts, you may want to cut back on
              the cardio.
            </p>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="q14">
          <AccordionTrigger className="text-left">
            What do I do after I finish the program?
          </AccordionTrigger>
          <AccordionContent>
            <p>
              Since I ran this program for a full year, I
              designed it to loop back seamlessly. After
              completing Week 12, you can jump right back
              into Week 1, which serves as a deload.
            </p>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </WikiSection>
  )
}
