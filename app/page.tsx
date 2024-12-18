import PropertyFeed from './components/PropertyFeed'
import FeaturedProperties from './components/FeaturedProperties'
import Hero from './components/Hero'
import SearchBar from './components/SearchBar'
import Testimonials from './components/Testimonials'
import FeatureSection from './components/FeatureSection'
import Newsletter from './components/Newsletter'

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Hero />
      <main className="container mx-auto px-4 py-8">
        <div className="mb-12">
          <SearchBar />
        </div>
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-6 text-center">Featured Properties</h2>
          <FeaturedProperties />
        </section>
        <FeatureSection />
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-6 text-center">Latest Listings</h2>
          <PropertyFeed />
        </section>
        <Testimonials />
        <Newsletter />
      </main>
    </div>
  )
}

