import Image from 'next/image'

const agents = [
  { name: 'John Doe', specialization: 'Residential', image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80' },
  { name: 'Jane Smith', specialization: 'Commercial', image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80' },
  { name: 'Mike Johnson', specialization: 'Luxury', image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80' },
  { name: 'Sarah Williams', specialization: 'Investment', image: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80' },
]

export default function AgentsPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8 text-center">Our Agents</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {agents.map((agent, index) => (
          <div key={index} className="bg-white p-6 rounded-lg shadow-md text-center">
            <Image src={agent.image} alt={agent.name} width={200} height={200} className="rounded-full mx-auto mb-4" />
            <h2 className="text-xl font-semibold mb-2">{agent.name}</h2>
            <p className="text-gray-600">{agent.specialization} Specialist</p>
          </div>
        ))}
      </div>
    </div>
  )
}

