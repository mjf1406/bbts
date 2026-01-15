import { createFileRoute } from '@tanstack/react-router'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'
import { DataAccessNotice } from '@/components/ui/data-access-notice'

export const Route = createFileRoute('/')({
  component: App,
})

function App() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative flex flex-col items-center justify-center min-h-[60vh] px-4 py-12 md:py-16 overflow-hidden">
        {/* Gradient Background - fades to background color at bottom */}
        <div className="absolute inset-0 bg-linear-to-b from-primary/25 via-primary/12 to-background dark:from-primary/35 dark:via-primary/18 dark:to-background" />
        <div className="absolute inset-0 bg-linear-to-br from-primary/15 via-transparent to-transparent dark:from-primary/20 dark:via-transparent dark:to-transparent" />

        <div className="relative max-w-4xl w-full text-center space-y-8">
          {/* Logo */}
          <div className="flex justify-center">
            <img
              src="/brand/logo-with-text.webp"
              alt="Jeff Nippard's Bodybuilding Transformation System"
              className="h-24 md:h-32 lg:h-40 w-auto drop-shadow-lg"
            />
          </div>

          {/* Hero Content */}
          <div className="space-y-6">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold">
              Bodybuilding Transformation System
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
              Support the creator by purchasing the original system from Jeff
              Nippard
            </p>

            {/* Purchase Button */}
            <div className="pt-4">
              <Button
                asChild
                size="lg"
                className="text-base px-8 py-6 h-auto shadow-lg"
              >
                <a
                  href="https://jeffnippard.com/products/the-bodybuilding-transformation-system"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Purchase on Jeff Nippard's Website
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Data Access Notice */}
      <DataAccessNotice />

      {/* Legal Notice Section */}
      <section className="px-4 pb-12">
        <div className="max-w-3xl mx-auto">
          <Card>
            <CardHeader>
              <CardTitle>
                Legal Notice: Personal Use Reproduction Rights
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-sm">While the purchase disclaimer states:</p>
              <blockquote className="border-l-4 border-muted-foreground/20 pl-4 py-2 text-sm italic text-muted-foreground">
                "All rights reserved. No part of this book may be used or
                reproduced by any means, graphic, electronic, or mechanical,
                including photocopying, recording, taping or by any information
                storage retrieval system without the written permission of the
                author, except in the case of brief quotations embodied in
                critical articles or reviews."
              </blockquote>
              <p className="text-sm">
                It is important to understand that under United States copyright
                law, you have the right to reproduce copyrighted material for
                your own personal, non-commercial use. This right is protected
                by the <strong>Fair Use Doctrine</strong> codified in{' '}
                <strong>
                  <a
                    href="https://www.law.cornell.edu/uscode/text/17/107"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline hover:text-primary"
                  >
                    17 U.S.C. § 107
                  </a>
                </strong>{' '}
                of the Copyright Act.
              </p>
              <p className="text-sm">
                The Fair Use Doctrine allows limited use of copyrighted material
                without permission from the copyright holder for purposes such
                as personal study, research, and private use. Factors considered
                include:
              </p>
              <ul className="list-disc list-inside space-y-2 text-sm ml-4">
                <li>
                  The purpose and character of the use (personal, non-commercial
                  use is favored)
                </li>
                <li>The nature of the copyrighted work</li>
                <li>The amount and substantiality of the portion used</li>
                <li>
                  The effect of the use upon the potential market for the
                  copyrighted work
                </li>
              </ul>
              <p className="text-sm">
                Additionally,{' '}
                <strong>
                  <a
                    href="https://www.law.cornell.edu/uscode/text/17/109"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline hover:text-primary"
                  >
                    17 U.S.C. § 109
                  </a>
                </strong>{' '}
                (the First Sale Doctrine) grants the owner of a lawfully made
                copy the right to dispose of that copy, including making
                personal backup copies for archival purposes.
              </p>
              <p className="text-sm font-medium">
                <strong>Note:</strong> This legal protection applies only to
                personal, non-commercial use. Distribution, sharing, or
                commercial use of reproduced material remains prohibited.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="px-4 pb-12">
        <div className="max-w-3xl mx-auto">
          <Card>
            <CardHeader>
              <CardTitle>Frequently Asked Questions</CardTitle>
            </CardHeader>
            <CardContent>
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="item-1">
                  <AccordionTrigger>
                    Why was this site created?
                  </AccordionTrigger>
                  <AccordionContent>
                    I don't want to be in the gym editing a spreadsheet on my
                    tiny phone. I'd rather have the superior UX of a webapp on
                    my phone.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-2">
                  <AccordionTrigger>
                    Can I legally reproduce copyrighted material for personal
                    use?
                  </AccordionTrigger>
                  <AccordionContent>
                    Yes. Under United States copyright law, specifically the
                    Fair Use Doctrine (
                    <a
                      href="https://www.law.cornell.edu/uscode/text/17/107"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="underline hover:text-primary"
                    >
                      17 U.S.C. § 107
                    </a>
                    ) and the First Sale Doctrine (
                    <a
                      href="https://www.law.cornell.edu/uscode/text/17/109"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="underline hover:text-primary"
                    >
                      17 U.S.C. § 109
                    </a>
                    ), you have the right to reproduce copyrighted material for
                    your own personal, non-commercial use. This includes making
                    personal backup copies and using the material for personal
                    study and research.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-3">
                  <AccordionTrigger>
                    What is the Fair Use Doctrine?
                  </AccordionTrigger>
                  <AccordionContent>
                    The Fair Use Doctrine (
                    <a
                      href="https://www.law.cornell.edu/uscode/text/17/107"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="underline hover:text-primary"
                    >
                      17 U.S.C. § 107
                    </a>
                    ) allows limited use of copyrighted material without
                    permission from the copyright holder for purposes such as
                    personal study, research, and private use. The doctrine
                    considers factors including the purpose and character of the
                    use (personal, non-commercial use is favored), the nature of
                    the copyrighted work, the amount used, and the effect on the
                    potential market for the work.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-4">
                  <AccordionTrigger>
                    What is the First Sale Doctrine?
                  </AccordionTrigger>
                  <AccordionContent>
                    The First Sale Doctrine (
                    <a
                      href="https://www.law.cornell.edu/uscode/text/17/109"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="underline hover:text-primary"
                    >
                      17 U.S.C. § 109
                    </a>
                    ) grants the owner of a lawfully made copy the right to
                    dispose of that copy, including making personal backup copies
                    for archival purposes. This means if you legally purchased
                    the original material, you have rights to make personal
                    copies for your own use.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-5">
                  <AccordionTrigger>
                    Who can access the data in this application?
                  </AccordionTrigger>
                  <AccordionContent>
                    Only the developer who created this site has the ability to
                    access the data stored within this application. This is in
                    accordance with the personal use reproduction rights
                    protected under{' '}
                    <a
                      href="https://www.law.cornell.edu/uscode/text/17/107"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="underline hover:text-primary"
                    >
                      17 U.S.C. § 107
                    </a>{' '}
                    and{' '}
                    <a
                      href="https://www.law.cornell.edu/uscode/text/17/109"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="underline hover:text-primary"
                    >
                      17 U.S.C. § 109
                    </a>
                    , as this site was created as a duplication of copyrighted
                    work for personal use.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  )
}
