// app/about/page.tsx
import { personalInfo } from "@/constants"

export default function About() {
  return (
      <div className="max-w-2xl mx-auto">
        <h1 className="text-4xl font-bold mb-6">About Me</h1>
        <p className="mb-4">
          Hi, I'm {personalInfo.name}, a {personalInfo.title}. {personalInfo.description}
        </p>
        <p className="mb-4">
          I'm passionate about learning new technologies and building interesting projects. My journey in programming started recently, and I'm excited to continue growing my skills and knowledge in the field of web development.
        </p>
        <p>
          When I'm not coding, you can find me reading tech blogs, watching coding tutorials, or experimenting with new programming languages and frameworks.
        </p>
      </div>
  )
}
