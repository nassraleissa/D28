'use client'

import { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Button } from '@/components/ui/button'
import { Menu, X } from 'lucide-react'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const pathname = usePathname()

  const isActive = (path: string) => pathname === path

  const NavLink = ({ href, children }: { href: string, children: React.ReactNode }) => (
    <Link 
      href={href} 
      className={`text-gray-600 hover:text-blue-600 ${isActive(href) ? 'font-semibold' : ''}`}
      onClick={() => setIsMenuOpen(false)}
    >
      {children}
    </Link>
  )

  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <Link href="/" className="text-2xl font-bold text-blue-600">Lana Real Estate</Link>
          <nav className="hidden md:flex space-x-4">
            <NavLink href="/">Home</NavLink>
            <NavLink href="/properties">Properties</NavLink>
            <NavLink href="/list-property">List Property</NavLink>
            <NavLink href="/agents">Agents</NavLink>
            <NavLink href="/about">About</NavLink>
            <NavLink href="/contact">Contact</NavLink>
          </nav>
          <div className="hidden md:block">
            <Link href="/signin">
              <Button>Sign In</Button>
            </Link>
          </div>
          <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>
      {isMenuOpen && (
        <div className="md:hidden">
          <nav className="flex flex-col space-y-4 p-4">
            <NavLink href="/">Home</NavLink>
            <NavLink href="/properties">Properties</NavLink>
            <NavLink href="/list-property">List Property</NavLink>
            <NavLink href="/agents">Agents</NavLink>
            <NavLink href="/about">About</NavLink>
            <NavLink href="/contact">Contact</NavLink>
            <Link 
              href="/signin" 
              className="text-gray-600 hover:text-blue-600"
              onClick={() => setIsMenuOpen(false)}
            >
              Sign In
            </Link>
          </nav>
        </div>
      )}
    </header>
  )
}
