import { WikiSection } from './wiki-section'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

export function WikiNutrition() {
  return (
    <WikiSection id="nutrition" title="Bodybuilding Nutrition">
      <p className="mb-6">
        In this section I'm going to boil down everything there is to know about bodybuilding nutrition to the bare
        essentials. If you want your entire nutrition taken care of for you, I strongly recommend using the MacroFactor
        App. You can try it out for 2 weeks for free here (if you use code JEFF). I'm a part owner of MacroFactor and I
        truly believe it's the best nutrition app on the market.
      </p>

      <p className="mb-6">
        If you'd rather set your nutrition up on your own, you can manually follow the steps below.
      </p>

      <div className="space-y-6">
        <Card>
          <CardHeader>
            <CardTitle>Setting Up Your Calories</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p>
              For your best results on this program, I recommend a 5-15% caloric surplus. The bigger the surplus, the more
              fat you will gain alongside your muscle gain. If your goal while running this program is to lose fat while
              building muscle, I'd suggest putting your calories at maintenance intake. If losing fat is your main priority, then
              you'll want to be in a 5-15% caloric deficit. Over the long term, larger deficits tend to result in more muscle loss
              and less sustainable fat loss.
            </p>
            <p>
              Being in a caloric surplus will provide the most muscle gain because it ensures that there is sufficient energy
              to fuel your workouts and lay down new muscle tissue. Recent evidence suggests that going beyond a
              ~10-15% surplus results in disproportionate fat gain, without much, if any, extra muscle gain. Therefore, I
              recommend a leaner bulk with a smaller surplus if you have goals related to aesthetics [17]. However, if you
              are cool with gaining more fat alongside muscle, feel free to bump the surplus to 15-20% and you will gain
              more total weight faster.
            </p>
            <p className="font-semibold">If you aren't sure how to find your maintenance calories, here is a rough guide:</p>

            <div className="space-y-4 mt-4">
              <div>
                <h4 className="font-semibold mb-2">Method 1 (faster but less accurate)</h4>
                <p className="mb-2">Multiply your weight (in lbs) by 14-18.</p>
                <ul className="list-disc list-inside space-y-1 ml-4 text-sm">
                  <li>If you are more active, you may be closer to bw x18 (or higher).</li>
                  <li>If you are less active, you may be closer to bw x 14 (or lower).</li>
                  <li>If you aren't sure, bw x 16 is usually reasonably accurate.</li>
                </ul>
              </div>

              <div>
                <h4 className="font-semibold mb-2">Method 2 (slower but more accurate)</h4>
                <ol className="list-decimal list-inside space-y-2 ml-4">
                  <li>Guess-and-check: Track your bodyweight and caloric intake for 2 weeks.</li>
                  <li>Calculate your average weight and average calories for Week 1 and Week 2.</li>
                  <li>Determine average weight gained or lost from Week 1 to Week 2.</li>
                  <li>Find your maintenance based on the weight change:
                    <ul className="list-disc list-inside space-y-1 ml-6 mt-1 text-sm">
                      <li>If you maintained your weight, your average calories is your estimated maintenance.</li>
                      <li>If you lost 0.5-1 lbs, your maintenance will be roughly 200-500 calories above your average calories.</li>
                      <li>If you gained 0.5-1 lbs, your maintenance will be roughly 200-500 calories below your average calories.</li>
                    </ul>
                  </li>
                  <li>Continue to guess-and-check for a few weeks until you find the intake at which you maintain your weight.</li>
                </ol>
              </div>
            </div>

            <p className="mt-4">
              Let's say you find that your maintenance is 2,500 calories. To put yourself in a 5-15% surplus you would add
              125 to 375 calories to 2,500. That means your lean bulking intake would be 2,625 to 2,875 calories.
            </p>
            <p>
              For a more detailed explanation of nutrition for fat loss, I recommend watching this video.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Setting Up Your Protein</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <p className="font-semibold mb-2">If you are planning to be in a caloric surplus (i.e. gaining) OR at maintenance (i.e. recomping) then you should aim to eat:</p>
              <ul className="list-disc list-inside space-y-1 ml-4">
                <li>0.7-1 gram of protein per lb of bodyweight per day or</li>
                <li>1.6-2.2 grams of protein per kg of bodyweight per day</li>
              </ul>
            </div>

            <div>
              <p className="font-semibold mb-2">If you are planning to be in a caloric deficit (i.e. cutting) then you should aim to eat:</p>
              <ul className="list-disc list-inside space-y-1 ml-4">
                <li>0.8-1.2 grams of protein per lb of bodyweight per day or</li>
                <li>1.8-2.7 grams of protein per kg of bodyweight per day</li>
              </ul>
            </div>

            <p>
              If you are very overweight and carrying a high level of body fat, then you can use your height instead as a
              rough guide for protein intake:
            </p>
            <p className="font-semibold">Daily protein = height (in centimeters)</p>
            <p className="text-sm">
              For example, if you are 180 cm (5'10") tall, then 180 grams of protein is a reasonable target to aim for, whether
              cutting, bulking or recomping.
            </p>
            <p className="text-sm">
              Note that using the height formula will still generally overestimate your true protein needs and most people will be
              able to build muscle just as well by eating ~20-40 grams less than what the height method predicts.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Setting Up Your Fats and Carbs</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p>
              The fat and carb numbers are much less important from a bodybuilding standpoint than your calorie and
              protein targets. However, if either gets too low, you can run into hormonal or performance issues.
            </p>
            <p>
              Generally speaking, I suggest setting your fats at approximately 20-30% of your total caloric intake. For
              example, if you're eating 2,700 calories per day, 675 of those calories should come from fat. Since there are 9
              calories in 1 gram of fat, that would equate to 75 grams of fat per day.
            </p>
            <p>
              Carb intake will then be dictated by whatever calories are left over after figuring out your protein and fat
              numbers.
            </p>
            <p>
              Again, your nutrition doesn't need to be micromanaged or meticulously tracked in order to have success on
              this program, but I've included this as additional information for those who are looking to line everything up.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Recommended Nutrition Tracking App</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p>
              If you're looking to track your nutrition intake while running this program, again, I strongly recommend using
              the MacroFactor App. You can try it out for 2 weeks for free here (if you use code JEFF).
            </p>
            <p>
              Unlike most diet apps, it isn't just a macro tracker. It's quite literally a nutrition coach that uses science-based
              algorithms to detect changes in your metabolism and make adjustments to your food intake at weekly checkins. This is super helpful for accountability. Here are a few other things that set the app apart:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>It has detailed micronutrient tracking (hey, health matters too!)</li>
              <li>It has the fastest food logger in existence, which means tracking really won't feel like a chore once you give it a few days to get the hang of it.</li>
              <li>It also doesn't punish you if you miss a day here and there, so you can be more chill about your diet overall.</li>
              <li>It can sync data with other smart devices.</li>
              <li>It comes with a ton of nerdy analytics about your metabolism, goal tracking, weight trends, and plenty more.</li>
            </ul>
            <p>
              If you try it out for 2 weeks, I'm quite certain that you'll
              love it and want to stick with it. There's also a very active
              Facebook group and subreddit, where you can ask
              questions or post updates. I find these communities are
              really helpful for accountability. If you do sign up, make
              sure you get in there as well.
            </p>
          </CardContent>
        </Card>
      </div>
    </WikiSection>
  )
}
