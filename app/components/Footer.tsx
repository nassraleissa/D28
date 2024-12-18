import Link from 'next/link'
import { Facebook, Twitter, Instagram, Linkedin } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Lana Real Estate</h3>
            <p className="mb-4">Finding your dream home made easy.</p>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-blue-400"><Facebook /></a>
              <a href="#" className="hover:text-blue-400"><Twitter /></a>
              <a href="#" className="hover:text-blue-400"><Instagram /></a>
              <a href="#" className="hover:text-blue-400"><Linkedin /></a>
            </div>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link href="/properties" className="hover:text-blue-400">Properties</Link></li>
              <li><Link href="/agents" className="hover:text-blue-400">Agents</Link></li>
              <li><Link href="/about" className="hover:text-blue-400">About Us</Link></li>
              <li><Link href="/contact" className="hover:text-blue-400">Contact</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Services</h4>
            <ul className="space-y-2">
              <li><Link href="/properties" className="hover:text-blue-400">Buy a Home</Link></li>
              <li><Link href="/list-property" className="hover:text-blue-400">Sell Your Home</Link></li>
              <li><Link href="/properties" className="hover:text-blue-400">Rent a Home</Link></li>
              <li><Link href="/properties" className="hover:text-blue-400">Real Estate Investments</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
            <p>123 Real Estate Street</p>
            <p>Cityville, State 12345</p>
            <p>Phone: (123) 456-7890</p>
            <p>Email: info@modernrealestate.com</p>
          </div>
        </div>
        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <p>&copy; {new Date().getFullYear()} Lana Real Estate. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

