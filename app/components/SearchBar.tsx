'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { MapPin, Home, DollarSign } from 'lucide-react'

// List of Syrian cities
const SYRIAN_CITIES = [
  'Damascus', 
  'Aleppo', 
  'Homs', 
  'Hama', 
  'Latakia', 
  'Tartus', 
  'Deir ez-Zor', 
  'Raqqa', 
  'Daraa', 
  'As-Suwayda', 
  'Quneitra', 
  'Idlib'
]

export default function SearchBar() {
  const [location, setLocation] = useState('')
  const [propertyType, setPropertyType] = useState('')
  const [priceRange, setPriceRange] = useState('')

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    // Implement search functionality here
    console.log('Filtering properties:', { location, propertyType, priceRange })
  }

  return (
    <form onSubmit={handleSearch} className="bg-white p-6 rounded-lg shadow-md max-w-4xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
        <div className="relative">
          <div className="absolute left-3 top-1/2 transform -translate-y-1/2 z-10 pointer-events-none">
            <MapPin className="h-5 w-5 text-gray-400" />
          </div>
          <select 
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            className="w-full pl-10 py-2 border rounded-md focus:outline-none focus:ring-2 border-gray-300 focus:ring-primary"
          >
            <option value="">Select City</option>
            {SYRIAN_CITIES.map(city => (
              <option key={city} value={city}>{city}</option>
            ))}
          </select>
        </div>
        <div className="relative">
          <div className="absolute left-3 top-1/2 transform -translate-y-1/2 z-10 pointer-events-none">
            <Home className="h-5 w-5 text-gray-400" />
          </div>
          <select 
            value={propertyType}
            onChange={(e) => setPropertyType(e.target.value)}
            className="w-full pl-10 py-2 border rounded-md focus:outline-none focus:ring-2 border-gray-300 focus:ring-primary"
          >
            <option value="">Property Type</option>
            <option value="apartment">Apartment</option>
            <option value="house">House</option>
            <option value="villa">Villa</option>
            <option value="condo">Condo</option>
          </select>
        </div>
        <div className="relative">
          <div className="absolute left-3 top-1/2 transform -translate-y-1/2 z-10 pointer-events-none">
            <DollarSign className="h-5 w-5 text-gray-400" />
          </div>
          <select 
            value={priceRange}
            onChange={(e) => setPriceRange(e.target.value)}
            className="w-full pl-10 py-2 border rounded-md focus:outline-none focus:ring-2 border-gray-300 focus:ring-primary"
          >
            <option value="">Price Range</option>
            <option value="0-250000">$0 - $250,000</option>
            <option value="250000-500000">$250,000 - $500,000</option>
            <option value="500000-1000000">$500,000 - $1,000,000</option>
            <option value="1000000+">$1,000,000+</option>
          </select>
        </div>
      </div>
      <Button 
        type="submit" 
        className="w-full flex items-center justify-center gap-2 hover:bg-blue-700 transition-colors"
      >
        <span>Apply Filters</span>
      </Button>
    </form>
  )
}
