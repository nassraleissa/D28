'use client'

import { useState, useEffect } from 'react'
import PropertyCard from './PropertyCard'

export default function PropertyFeed() {
  const [properties, setProperties] = useState([])

  useEffect(() => {
    // In a real application, you would fetch properties from an API
    setProperties([
      { id: 1, title: 'Modern Apartment', price: 250000, location: 'New York', image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=735&q=80', beds: 2, baths: 2, sqft: 1000 },
      { id: 2, title: 'Cozy House', price: 350000, location: 'Los Angeles', image: 'https://images.unsplash.com/photo-1583608205776-bfd35f0d9f83?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80', beds: 3, baths: 2, sqft: 1500 },
      { id: 3, title: 'Luxury Villa', price: 1000000, location: 'Miami', image: 'https://images.unsplash.com/photo-1613490493576-7fde63acd811?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1471&q=80', beds: 5, baths: 4, sqft: 3000 },
      { id: 4, title: 'Downtown Loft', price: 450000, location: 'Chicago', image: 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80', beds: 1, baths: 1, sqft: 800 },
      { id: 5, title: 'Suburban Family Home', price: 550000, location: 'Houston', image: 'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80', beds: 4, baths: 3, sqft: 2200 },
      { id: 6, title: 'Beachfront Condo', price: 750000, location: 'San Diego', image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80', beds: 2, baths: 2, sqft: 1200 },
    ])
  }, [])

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {properties.map(property => (
        <PropertyCard key={property.id} property={property} />
      ))}
    </div>
  )
}

