// app/page.tsx
import { Button } from "@/components/ui/button"
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { personalInfo, projects, skills } from "@/constants"
import Link from "next/link"
import { GitHubLogoIcon, LinkedInLogoIcon, TwitterLogoIcon } from "@radix-ui/react-icons"

export default function Home() {
  return (
      <div className="space-y-12">
        <section className="text-center">
          <h1 className="text-4xl font-bold mb-4">{personalInfo.name}</h1>
          <p className="text-2xl text-muted-foreground mb-6">{personalInfo.title}</p>
          <p className="max-w-2xl mx-auto mb-8">{personalInfo.description}</p>
          <div className="flex justify-center space-x-4">
            <Button asChild>
              <Link href="/contact">Contact Me</Link>
            </Button>
            <Button variant="outline" asChild>
              <Link href="/about">About Me</Link>
            </Button>
          </div>
        </section>

        <section>
          <h2 className="text-3xl font-bold mb-6">Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {projects.map((project, index) => (
              <Card key={index}>
                <CardHeader>
                  <CardTitle>{project.title}</CardTitle>
                  <CardDescription>{project.description}</CardDescription>
                </CardHeader>
                <div className="p-6">
                  <Button asChild>
                    <a href={project.link} target="_blank" rel="noopener noreferrer">View Project</a>
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-3xl font-bold mb-6">Skills</h2>
          <div className="flex flex-wrap gap-4">
            {skills.map((skill, index) => (
              <div key={index} className="bg-secondary text-secondary-foreground rounded-full px-4 py-2">
                {skill}
              </div>
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-3xl font-bold mb-6">Connect</h2>
          <div className="flex justify-center space-x-4">
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
        </section>
      </div>
  )
}
