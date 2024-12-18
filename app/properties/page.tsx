import PropertyFeed from '../components/PropertyFeed'
import SearchBar from '../components/SearchBar'

export default function PropertiesPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8 text-center">Our Properties</h1>
      <div className="mb-8">
        <SearchBar />
      </div>
      <PropertyFeed />
    </div>
  )
}

