import { WikiSection } from './wiki-section'

export function WikiWelcome() {
  return (
    <WikiSection id="welcome" title="Welcome to The Bodybuilding Transformation System">
      <p className="mb-4">
        I want to start things off by saying thank you for
        purchasing the Bodybuilding Transformation System! A
        lot of time and effort went into the project that inspired
        this program, and I truly appreciate your support.
      </p>

      <p className="mb-4">
        Before diving into the specifics, I want to cover the
        fundamental principles that should guide any
        bodybuilding program. If you've recently completed either
        of my Pure Bodybuilding programs, this will be familiar
        territory, so feel free to skip ahead to What's New in the
        Bodybuilding Transformation System. However, if you
        haven't run those programs—or if it's been a while—I
        highly recommend reading this section, as it highlights
        the key pillars of an effective bodybuilding program.
      </p>
    </WikiSection>
  )
}
