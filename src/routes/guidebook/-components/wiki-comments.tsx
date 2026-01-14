import { WikiSection } from './wiki-section'
import { Card, CardContent } from '@/components/ui/card'

export function WikiComments() {
  return (
    <WikiSection id="comments" title="Comments from Jeff">
      <Card>
        <CardContent className="pt-6 space-y-4">
          <p>
            For customer support please visit{' '}
            <a
              href="https://jeffnippard.com/contact"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:underline"
            >
              jeffnippard.com/contact
            </a>
            . As much as I love connecting on social media, I am not able to reliably respond to the questions I receive across
            platforms so please direct any questions to the email above. Please allow 2-3 business days for an email reply.
          </p>
          <p>
            Thank you so much for your support and good luck with the training!
          </p>
        </CardContent>
      </Card>
    </WikiSection>
  )
}
