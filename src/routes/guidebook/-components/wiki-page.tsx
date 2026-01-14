import * as React from 'react'
import { Suspense } from 'react'
import { Skeleton } from '@/components/ui/skeleton'

// Lazy load all wiki components
const WikiTableOfContents = React.lazy(() =>
  import('./wiki-table-of-contents').then((module) => ({
    default: module.WikiTableOfContents,
  })),
)
const WikiDisclaimer = React.lazy(() =>
  import('./wiki-disclaimer').then((module) => ({
    default: module.WikiDisclaimer,
  })),
)
const WikiWelcome = React.lazy(() =>
  import('./wiki-welcome').then((module) => ({
    default: module.WikiWelcome,
  })),
)
const WikiTransformationPrinciples = React.lazy(() =>
  import('./wiki-transformation-principles').then((module) => ({
    default: module.WikiTransformationPrinciples,
  })),
)
const WikiProgramOverview = React.lazy(() =>
  import('./wiki-program-overview').then((module) => ({
    default: module.WikiProgramOverview,
  })),
)
const WikiExerciseSubstitutions = React.lazy(() =>
  import('./wiki-exercise-substitutions').then((module) => ({
    default: module.WikiExerciseSubstitutions,
  })),
)
const WikiWhatsNew = React.lazy(() =>
  import('./wiki-whats-new').then((module) => ({
    default: module.WikiWhatsNew,
  })),
)
const WikiTrainingGear = React.lazy(() =>
  import('./wiki-training-gear').then((module) => ({
    default: module.WikiTrainingGear,
  })),
)
const WikiProgressTracking = React.lazy(() =>
  import('./wiki-progress-tracking').then((module) => ({
    default: module.WikiProgressTracking,
  })),
)
const WikiMuscleAnatomy = React.lazy(() =>
  import('./wiki-muscle-anatomy').then((module) => ({
    default: module.WikiMuscleAnatomy,
  })),
)
const WikiNutrition = React.lazy(() =>
  import('./wiki-nutrition').then((module) => ({
    default: module.WikiNutrition,
  })),
)
const WikiSupplements = React.lazy(() =>
  import('./wiki-supplements').then((module) => ({
    default: module.WikiSupplements,
  })),
)
const WikiFAQ = React.lazy(() =>
  import('./wiki-faq').then((module) => ({
    default: module.WikiFAQ,
  })),
)
const WikiComments = React.lazy(() =>
  import('./wiki-comments').then((module) => ({
    default: module.WikiComments,
  })),
)
const WikiReferences = React.lazy(() =>
  import('./wiki-references').then((module) => ({
    default: module.WikiReferences,
  })),
)

// Loading fallback component
function WikiSectionSkeleton() {
  return (
    <div className="space-y-4 py-8">
      <Skeleton className="h-8 w-3/4" />
      <Skeleton className="h-4 w-full" />
      <Skeleton className="h-4 w-full" />
      <Skeleton className="h-4 w-5/6" />
    </div>
  )
}

const tocItems = [
  { id: 'disclaimer', title: 'Disclaimer', level: 0 },
  {
    id: 'welcome',
    title: 'Welcome to The Bodybuilding Transformation System',
    level: 0,
  },
  {
    id: 'transformation-principles',
    title: 'The Transformation Principles',
    level: 0,
  },
  { id: 'program-overview', title: 'Understanding The Program', level: 0 },
  { id: 'exercise-substitutions', title: 'Exercise Substitutions', level: 0 },
  {
    id: 'whats-new',
    title: "What's New in the Bodybuilding Transformation System?",
    level: 0,
  },
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

          <Suspense fallback={<WikiSectionSkeleton />}>
            <WikiDisclaimer />
          </Suspense>
          <Suspense fallback={<WikiSectionSkeleton />}>
            <WikiWelcome />
          </Suspense>
          <Suspense fallback={<WikiSectionSkeleton />}>
            <WikiTransformationPrinciples />
          </Suspense>
          <Suspense fallback={<WikiSectionSkeleton />}>
            <WikiProgramOverview />
          </Suspense>
          <Suspense fallback={<WikiSectionSkeleton />}>
            <WikiExerciseSubstitutions />
          </Suspense>
          <Suspense fallback={<WikiSectionSkeleton />}>
            <WikiWhatsNew />
          </Suspense>
          <Suspense fallback={<WikiSectionSkeleton />}>
            <WikiTrainingGear />
          </Suspense>
          <Suspense fallback={<WikiSectionSkeleton />}>
            <WikiProgressTracking />
          </Suspense>
          <Suspense fallback={<WikiSectionSkeleton />}>
            <WikiMuscleAnatomy />
          </Suspense>
          <Suspense fallback={<WikiSectionSkeleton />}>
            <WikiNutrition />
          </Suspense>
          <Suspense fallback={<WikiSectionSkeleton />}>
            <WikiSupplements />
          </Suspense>
          <Suspense fallback={<WikiSectionSkeleton />}>
            <WikiFAQ />
          </Suspense>
          <Suspense fallback={<WikiSectionSkeleton />}>
            <WikiComments />
          </Suspense>
          <Suspense fallback={<WikiSectionSkeleton />}>
            <WikiReferences />
          </Suspense>
        </main>

        {/* Table of Contents Sidebar */}
        <aside className="hidden md:block">
          <Suspense
            fallback={
              <div className="space-y-2">
                <Skeleton className="h-6 w-32" />
                <Skeleton className="h-4 w-40" />
                <Skeleton className="h-4 w-36" />
              </div>
            }
          >
            <WikiTableOfContents items={tocItems} />
          </Suspense>
        </aside>
      </div>
    </div>
  )
}
