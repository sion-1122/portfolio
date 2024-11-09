// components/Navbar.tsx
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { personalInfo } from '@/constants'

export default function Navbar() {
  return (
    <nav className="bg-background border-b">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold">{personalInfo.name}</Link>
        <div className="space-x-4">
          <Button variant="ghost" asChild>
            <Link href="/">Home</Link>
          </Button>
          <Button variant="ghost" asChild>
            <Link href="/about">About</Link>
          </Button>
          <Button variant="ghost" asChild>
            <Link href="/contact">Contact</Link>
          </Button>
        </div>
      </div>
    </nav>
  )
}
