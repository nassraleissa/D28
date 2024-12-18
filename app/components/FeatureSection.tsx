import { Home, Search, DollarSign, Users } from 'lucide-react'

const features = [
  {
    icon: <Search className="h-6 w-6" />,
    title: 'Easy Search',
    description: 'Find your dream property with our powerful and intuitive search tools.'
  },
  {
    icon: <Home className="h-6 w-6" />,
    title: 'Wide Range of Properties',
    description: 'Explore a diverse selection of properties to suit every need and budget.'
  },
  {
    icon: <DollarSign className="h-6 w-6" />,
    title: 'Best Deals',
    description: 'Get the best value for your money with our competitive prices and offers.'
  },
  {
    icon: <Users className="h-6 w-6" />,
    title: 'Expert Agents',
    description: 'Our experienced agents are here to guide you through every step of the process.'
  }
]

export default function FeatureSection() {
  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 text-center">Why Choose Us</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="text-blue-600 mb-4 flex justify-center">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

