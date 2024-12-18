import { Button } from '@/components/ui/button'
import Image from 'next/image'
import Link from 'next/link'

export default function Hero() {
  return (
    <div className="relative bg-gray-900 text-white py-24 overflow-hidden">
      <div className="container mx-auto px-4 z-10 relative">
        <div className="max-w-3xl">
          <h1 className="text-5xl font-bold mb-4 leading-tight">Discover Your Dream Home</h1>
          <p className="text-xl mb-8">Explore our curated selection of premium properties and find the perfect place to call home.</p>
          <div className="flex space-x-4">
            <Link href="/properties">
              <Button variant="primary">Start Your Search</Button>
            </Link>
            <Link href="/list-property">
              <Button variant="outline">List Your Property</Button>
            </Link>
          </div>
        </div>
      </div>
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
          alt="Luxury home exterior"
          layout="fill"
          objectFit="cover"
          quality={100}
        />
        <div className="absolute inset-0 bg-black opacity-50"></div>
      </div>
    </div>
  )
}
