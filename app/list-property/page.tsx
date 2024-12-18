'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Label } from '@/components/ui/label'

export default function ListPropertyPage() {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    price: '',
    location: '',
    bedrooms: '',
    bathrooms: '',
    area: '',
  })
  const [image, setImage] = useState<File | null>(null)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prevState => ({ ...prevState, [name]: value }))
  }

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setImage(e.target.files[0])
    }
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const formDataToSubmit = new FormData()
    for (const [key, value] of Object.entries(formData)) {
      formDataToSubmit.append(key, value)
    }
    if (image) {
      formDataToSubmit.append('image', image)
    }
    console.log('Form submitted:', formDataToSubmit)
    // Here you would typically send the formDataToSubmit to your backend
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8 text-center">List Your Property</h1>
      <form onSubmit={handleSubmit} className="max-w-2xl mx-auto bg-white p-8 rounded-lg shadow-md">
        <div className="space-y-4">
          <div>
            <Label htmlFor="title">Property Title</Label>
            <Input id="title" name="title" value={formData.title} onChange={handleChange} required />
          </div>
          <div>
            <Label htmlFor="description">Description</Label>
            <Textarea id="description" name="description" value={formData.description} onChange={handleChange} required />
          </div>
          <div>
            <Label htmlFor="price">Price</Label>
            <Input id="price" name="price" type="number" value={formData.price} onChange={handleChange} required />
          </div>
          <div>
            <Label htmlFor="location">Location</Label>
            <Input id="location" name="location" value={formData.location} onChange={handleChange} required />
          </div>
          <div>
            <Label htmlFor="bedrooms">Bedrooms</Label>
            <Input id="bedrooms" name="bedrooms" type="number" value={formData.bedrooms} onChange={handleChange} required />
          </div>
          <div>
            <Label htmlFor="bathrooms">Bathrooms</Label>
            <Input id="bathrooms" name="bathrooms" type="number" value={formData.bathrooms} onChange={handleChange} required />
          </div>
          <div>
            <Label htmlFor="area">Area (sq ft)</Label>
            <Input id="area" name="area" type="number" value={formData.area} onChange={handleChange} required />
          </div>
          <div>
            <Label htmlFor="image">Property Image</Label>
            <Input id="image" name="image" type="file" onChange={handleImageChange} accept="image/*" />
          </div>
        </div>
        <Button type="submit" className="w-full mt-6">List Property</Button>
      </form>
    </div>
  )
}

