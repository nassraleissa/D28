import Image from 'next/image'

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8 text-center">About Lana Real Estate</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div>
          <Image src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1073&q=80" alt="Modern office" width={600} height={400} className="rounded-lg shadow-md" />
        </div>
        <div>
          <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
          <p className="text-gray-600 mb-4">
            At Lana Real Estate, our mission is to help people find their perfect home and make the process of buying, selling, or renting properties as smooth as possible. We combine cutting-edge technology with personalized service to deliver an unparalleled real estate experience.
          </p>
          <h2 className="text-2xl font-semibold mb-4">Our Values</h2>
          <ul className="list-disc list-inside text-gray-600">
            <li>Integrity in every transaction</li>
            <li>Innovation in our approach</li>
            <li>Excellence in customer service</li>
            <li>Commitment to our communities</li>
          </ul>
        </div>
      </div>
    </div>
  )
}

