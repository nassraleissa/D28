'use client'

import { useState, useEffect } from 'react'
import PropertyCard from './PropertyCard'

export default function FeaturedProperties() {
  const [featuredProperties, setFeaturedProperties] = useState([])

  useEffect(() => {
    // In a real application, you would fetch featured properties from an API
    setFeaturedProperties([
      { id: 1, title: 'Luxury Penthouse', price: 2000000, location: 'New York', image: 'https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80', beds: 3, baths: 3, sqft: 2500, featured: true },
      { id: 2, title: 'Beachfront Villa', price: 1500000, location: 'Miami', image: 'https://images.unsplash.com/photo-1613490493576-7fde63acd811?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1471&q=80', beds: 4, baths: 4, sqft: 3000, featured: true },
      { id: 3, title: 'Mountain Retreat', price: 800000, location: 'Aspen', image: 'https://images.unsplash.com/photo-1542718610-a1d656d1884c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80', beds: 3, baths: 2, sqft: 2000, featured: true },
    ])
  }, [])

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {featuredProperties.map(property => (
        <PropertyCard key={property.id} property={property} />
      ))}
    </div>
  )
}

