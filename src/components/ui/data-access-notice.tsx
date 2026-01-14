import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

export function DataAccessNotice() {
  return (
    <section className="px-4 py-8">
      <div className="max-w-3xl mx-auto">
        <Card className="border-primary/20 bg-primary/5 dark:bg-primary/10">
          <CardHeader>
            <CardTitle className="text-center">Data Access Notice</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-center leading-relaxed">
              Pursuant to the United States copyright law discussed in the
              section below, as the developer who created this site as a
              duplication of copyrighted work for personal use, only I have
              the ability to access the data stored within this application
              which is in accordance with the personal use reproduction rights
              protected under{' '}
              <strong className="text-foreground">17 U.S.C. § 107</strong> and{' '}
              <strong className="text-foreground">17 U.S.C. § 109</strong>.
            </p>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
