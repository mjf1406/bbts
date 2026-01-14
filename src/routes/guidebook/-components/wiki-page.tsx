import * as React from 'react'
import { WikiTableOfContents } from './wiki-table-of-contents'
import { WikiDisclaimer } from './wiki-disclaimer'
import { WikiWelcome } from './wiki-welcome'
import { WikiTransformationPrinciples } from './wiki-transformation-principles'
import { WikiProgramOverview } from './wiki-program-overview'
import { WikiExerciseSubstitutions } from './wiki-exercise-substitutions'
import { WikiWhatsNew } from './wiki-whats-new'
import { WikiTrainingGear } from './wiki-training-gear'
import { WikiProgressTracking } from './wiki-progress-tracking'
import { WikiMuscleAnatomy } from './wiki-muscle-anatomy'
import { WikiNutrition } from './wiki-nutrition'
import { WikiSupplements } from './wiki-supplements'
import { WikiFAQ } from './wiki-faq'
import { WikiComments } from './wiki-comments'
import { WikiReferences } from './wiki-references'

const tocItems = [
  { id: 'disclaimer', title: 'Disclaimer', level: 0 },
  { id: 'welcome', title: 'Welcome to The Bodybuilding Transformation System', level: 0 },
  { id: 'transformation-principles', title: 'The Transformation Principles', level: 0 },
  { id: 'program-overview', title: 'Understanding The Program', level: 0 },
  { id: 'exercise-substitutions', title: 'Exercise Substitutions', level: 0 },
  { id: 'whats-new', title: "What's New in the Bodybuilding Transformation System?", level: 0 },
  { id: 'training-gear', title: 'Suggested Training Gear', level: 0 },
  { id: 'progress-tracking', title: 'Progress Tracking', level: 0 },
  { id: 'muscle-anatomy', title: 'Muscle Anatomy', level: 0 },
  { id: 'nutrition', title: 'Bodybuilding Nutrition', level: 0 },
  { id: 'supplements', title: 'Bodybuilding Supplements', level: 0 },
  { id: 'faq', title: 'FAQ', level: 0 },
  { id: 'comments', title: 'Comments from Jeff', level: 0 },
  { id: 'references', title: 'References', level: 0 },
]

export function WikiPage() {
  return (
    <div className="container mx-auto py-8 px-4 max-w-7xl">
      <div className="flex gap-8">
        {/* Main Content */}
        <main className="flex-1 min-w-0">
          <h1 className="text-4xl font-bold mb-8 text-foreground">
            The Bodybuilding Transformation System
          </h1>

          <WikiDisclaimer />
          <WikiWelcome />
          <WikiTransformationPrinciples />
          <WikiProgramOverview />
          <WikiExerciseSubstitutions />
          <WikiWhatsNew />
          <WikiTrainingGear />
          <WikiProgressTracking />
          <WikiMuscleAnatomy />
          <WikiNutrition />
          <WikiSupplements />
          <WikiFAQ />
          <WikiComments />
          <WikiReferences />
        </main>

        {/* Table of Contents Sidebar */}
        <aside className="hidden md:block">
          <WikiTableOfContents items={tocItems} />
        </aside>
      </div>
    </div>
  )
}
