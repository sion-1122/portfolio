// app/contact/page.tsx
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { personalInfo } from "@/constants"
import { GitHubLogoIcon, LinkedInLogoIcon, TwitterLogoIcon } from "@radix-ui/react-icons"

export default function Contact() {
  return (
      <div className="max-w-2xl mx-auto">
        <h1 className="text-4xl font-bold mb-6">Contact Me</h1>
        <form className="space-y-4" action={`mailto:${personalInfo.email}`} method="post" encType="text/plain">
          <div>
            <label htmlFor="name" className="block mb-2">Name</label>
            <Input id="name" name="name" required />
          </div>
          <div>
            <label htmlFor="email" className="block mb-2">Email</label>
            <Input id="email" name="email" type="email" required />
          </div>
          <div>
            <label htmlFor="message" className="block mb-2">Message</label>
            <Textarea id="message" name="message" required />
          </div>
          <Button type="submit">Send Message</Button>
        </form>

        <div className="mt-12">
          <h2 className="text-2xl font-bold mb-4">Connect with me</h2>
          <div className="flex space-x-4">
            <Button variant="outline" size="icon" asChild>
              <a href={personalInfo.github} target="_blank" rel="noopener noreferrer">
                <GitHubLogoIcon className="h-4 w-4" />
              </a>
            </Button>
            <Button variant="outline" size="icon" asChild>
              <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer">
                <LinkedInLogoIcon className="h-4 w-4" />
              </a>
            </Button>
            <Button variant="outline" size="icon" asChild>
              <a href={personalInfo.twitter} target="_blank" rel="noopener noreferrer">
                <TwitterLogoIcon className="h-4 w-4" />
              </a>
            </Button>
          </div>
        </div>
      </div>
  )
}
