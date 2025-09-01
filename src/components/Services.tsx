import ServiceCard from './ServiceCard'

export default function Services() {
  const services = [
    {
      title: "Ride",
      description: "Go anywhere with RideShare. Request a ride, hop in, and relax.",
      imageUrl: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/5ce71603-1008-4f03-a048-61f8165ccf6b.png",
      imageAlt: "Modern sedan car in urban setting with professional driver and clean interior",
      buttonText: "Get a ride",
      features: [
        "Available 24/7 in your city",
        "Choose from multiple ride options",
        "Track your driver in real-time",
        "Cashless payment options"
      ]
    },
    {
      title: "Delivery",
      description: "Get your favorite food delivered fast with RideEats.",
      imageUrl: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/029b446f-13eb-4347-be9b-34f3fc59674f.png",
      imageAlt: "Food delivery person with insulated bag on bicycle in busy restaurant district",
      buttonText: "Order now",
      buttonVariant: "outline" as const,
      features: [
        "Thousands of restaurants available",
        "Real-time order tracking",
        "Fast delivery in under 30 minutes",
        "Special deals and discounts"
      ]
    },
    {
      title: "Business",
      description: "RideShare for Business helps companies manage transportation needs.",
      imageUrl: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/251c79cc-26dd-43d4-9812-4167cf5239a4.png",
      imageAlt: "Business professionals in premium vehicle with corporate meeting setup",
      buttonText: "Learn more",
      features: [
        "Centralized billing and reporting",
        "Employee ride management",
        "Priority support for businesses",
        "Custom ride policies and controls"
      ]
    }
  ]

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900">
            Focus on what matters
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            From getting around town to getting food delivered, RideShare helps you focus on what matters most.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              title={service.title}
              description={service.description}
              imageUrl={service.imageUrl}
              imageAlt={service.imageAlt}
              buttonText={service.buttonText}
              buttonVariant={service.buttonVariant}
              features={service.features}
            />
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center space-x-4 bg-white rounded-lg p-6 shadow-sm">
            <div className="text-left">
              <h3 className="text-lg font-semibold text-gray-900">Ready to get started?</h3>
              <p className="text-gray-600">Join millions of users worldwide</p>
            </div>
            <div className="flex space-x-3">
              <button className="bg-black text-white px-6 py-3 rounded-lg font-medium hover:bg-gray-800 transition-colors">
                Sign up to ride
              </button>
              <button className="border-2 border-gray-300 text-gray-700 px-6 py-3 rounded-lg font-medium hover:border-gray-400 transition-colors">
                Start driving
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}