import * as React from 'react'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'
import { Card, CardContent } from '@/components/ui/card'

export function WikiDisclaimer() {
  return (
    <section id="disclaimer" className="scroll-mt-20 mb-12">
      <Accordion type="single" collapsible className="w-full">
        <AccordionItem value="disclaimer">
          <AccordionTrigger className="text-lg font-semibold">
            Disclaimer
          </AccordionTrigger>
          <AccordionContent>
            <Card>
              <CardContent className="pt-6 space-y-4 text-sm">
                <div>
                  <p className="mb-2">
                    All rights reserved. No part of this book may be used or reproduced by any means, graphic, electronic, or
                    mechanical, including photocopying, recording, taping or by any information storage retrieval system without
                    the written permission of the author, except in the case of brief quotations embodied in critical articles or
                    reviews. Readers should be aware that Internet Web sites offered as citations and/or sources for further
                    information may have changed or disappeared between the time this book was written and when it is read.
                  </p>
                </div>

                <div>
                  <p className="mb-2 font-medium">Limit of Liability/Disclaimer of Warranty:</p>
                  <p className="mb-2">
                    While the author has used his best efforts and knowledge in
                    researching and preparing this book, he makes no representations or warranties with respect to the accuracy
                    or completeness of the contents of this book and specifically disclaims any implied warranties of
                    merchantability or fitness for a particular purpose. No warranty may be created or extended by sales
                    representatives or promotional sales materials. The advice and strategies contained herein may not be
                    suitable for your particular situation. You should always consult with a medical professional before beginning
                    any exercise program.
                  </p>
                </div>

                <div>
                  <p className="mb-2">
                    The contents of this e-book are not intended for the treatment or prevention of any disease or medical
                    condition, nor as a substitute for medical treatment, nor as an alternative to medical advice. The author is not
                    a licensed healthcare provider or a registered dietitian. Utilizing the information within this e-book is at the
                    sole choice and risk of the reader. If you engage in this exercise program, you agree that you do so at your own
                    risk, are voluntarily participating in these activities, assume all risk of injury to yourself, and agree to release
                    and discharge the publisher and the author from any and all claims or causes of action, known or unknown,
                    arising out of the contents of this book.
                  </p>
                </div>

                <div>
                  <p className="mb-2">
                    The author advises you to take full responsibility for your safety and to know your limits. Before practicing the
                    skills described in this book, be sure that your equipment is well maintained and do not take risks beyond your
                    level of experience, aptitude, training, and comfort level.
                  </p>
                </div>
              </CardContent>
            </Card>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </section>
  )
}
