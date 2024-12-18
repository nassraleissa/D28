import Image from 'next/image'
import Link from 'next/link'
import { Card, CardContent, CardFooter } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Bed, Bath, Square, Heart } from 'lucide-react'

export default function PropertyCard({ property }: { property: any }) {
  return (
    <Card className="overflow-hidden group">
      <div className="relative overflow-hidden">
        <div className="relative w-full h-[300px] overflow-hidden">
          <Image 
            src={property.image} 
            alt={property.title} 
            fill 
            className="object-cover transition-transform duration-300 group-hover:scale-110 origin-center" 
          />
        </div>
        {property.featured && (
          <Badge className="absolute top-2 left-2 bg-yellow-500">Featured</Badge>
        )}
        <button className="absolute top-2 right-2 bg-white p-2 rounded-full shadow-md transition-colors duration-300 hover:bg-red-500 hover:text-white">
          <Heart className="h-5 w-5" />
        </button>
      </div>
      <CardContent className="p-4">
        <h2 className="text-xl font-semibold mb-2 group-hover:text-blue-600 transition-colors duration-300">{property.title}</h2>
        <p className="text-gray-600 mb-2">{property.location}</p>
        <p className="text-blue-600 font-bold text-lg mb-4">${property.price.toLocaleString()}</p>
        <div className="flex justify-between text-sm text-gray-500">
          <span className="flex items-center"><Bed className="mr-1 h-4 w-4" /> {property.beds} beds</span>
          <span className="flex items-center"><Bath className="mr-1 h-4 w-4" /> {property.baths} baths</span>
          <span className="flex items-center"><Square className="mr-1 h-4 w-4" /> {property.sqft} sqft</span>
        </div>
      </CardContent>
      <CardFooter className="bg-gray-100 p-4">
        <Link href={`/properties/${property.id}`} className="w-full">
          <Button className="w-full">View Details</Button>
        </Link>
      </CardFooter>
    </Card>
  )
}
