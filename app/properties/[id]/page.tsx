'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { Bed, Bath, Square, MapPin, DollarSign, Calendar, Home } from 'lucide-react'
import Link from 'next/link'

export default function PropertyDetails({ params }: { params: { id: string } }) {
  const [property, setProperty] = useState<any>(null)

  useEffect(() => {
    // In a real application, you would fetch the property details from an API
    setProperty({
      id: params.id,
      title: 'Luxury Penthouse',
      price: 2000000,
      location: 'New York',
      description: 'A stunning penthouse with panoramic views of the city skyline. This luxurious property features high-end finishes, a private terrace, and access to premium building amenities.',
      image: 'https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
      beds: 3,
      baths: 3,
      sqft: 2500,
      yearBuilt: 2020,
      propertyType: 'Penthouse',
      amenities: ['Swimming Pool', 'Gym', 'Concierge', 'Parking', 'Rooftop Terrace', 'Smart Home System'],
    })
  }, [params.id])

  if (!property) return <div>Loading...</div>

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-4">{property.title}</h1>
      <div className="flex items-center text-gray-600 mb-4">
        <MapPin className="mr-2 h-5 w-5" />
        <span>{property.location}</span>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <Image src={property.image} alt={property.title} width={800} height={600} className="rounded-lg shadow-md" />
        </div>
        <div>
          <div className="flex items-center text-3xl font-bold text-blue-600 mb-4">
            <DollarSign className="mr-2 h-8 w-8" />
            <span>{property.price.toLocaleString()}</span>
          </div>
          <div className="grid grid-cols-2 gap-4 mb-6">
            <div className="flex items-center text-gray-600">
              <Bed className="mr-2 h-5 w-5" />
              <span>{property.beds} beds</span>
            </div>
            <div className="flex items-center text-gray-600">
              <Bath className="mr-2 h-5 w-5" />
              <span>{property.baths} baths</span>
            </div>
            <div className="flex items-center text-gray-600">
              <Square className="mr-2 h-5 w-5" />
              <span>{property.sqft} sqft</span>
            </div>
            <div className="flex items-center text-gray-600">
              <Calendar className="mr-2 h-5 w-5" />
              <span>Built in {property.yearBuilt}</span>
            </div>
            <div className="flex items-center text-gray-600">
              <Home className="mr-2 h-5 w-5" />
              <span>{property.propertyType}</span>
            </div>
          </div>
          <p className="text-gray-700 mb-6">{property.description}</p>
          <h2 className="text-2xl font-semibold mb-4">Amenities</h2>
          <ul className="grid grid-cols-2 gap-2 mb-6">
            {property.amenities.map((amenity: string, index: number) => (
              <li key={index} className="flex items-center text-gray-600">
                <span className="mr-2">•</span> {amenity}
              </li>
            ))}
          </ul>
          <div className="flex space-x-4">
            <Link href="/schedule-tour">
              <Button className="flex-1">Schedule a Tour</Button>
            </Link>
            <Link href="/contact-agent">
              <Button variant="outline" className="flex-1">Contact Agent</Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
