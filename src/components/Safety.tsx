export default function Safety() {
  const safetyFeatures = [
    {
      title: "GPS Tracking",
      description: "Your trip is tracked from start to finish for safety and security"
    },
    {
      title: "Driver Screening",
      description: "All drivers undergo comprehensive background checks and vehicle inspections"
    },
    {
      title: "Emergency Button",
      description: "Quick access to emergency services with location sharing"
    },
    {
      title: "24/7 Support",
      description: "Round-the-clock customer support for any safety concerns"
    },
    {
      title: "Real-time ID",
      description: "Verify your driver's identity with photo and license plate matching"
    },
    {
      title: "Insurance Coverage",
      description: "Comprehensive insurance coverage for every ride"
    }
  ]

  return (
    <section id="safety" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Column - Image */}
          <div className="relative">
            <img 
              src="https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/0b098927-c191-4457-ae8a-9aa7ceba28bf.png"
              alt="Safety focused rideshare scene with smartphone showing GPS tracking and emergency features"
              className="w-full rounded-lg shadow-lg"
            />
            
            {/* Safety Badge Overlay */}
            <div className="absolute top-6 left-6 bg-white rounded-lg p-4 shadow-lg">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center">
                  <div className="w-6 h-6 bg-white rounded-full"></div>
                </div>
                <div>
                  <div className="font-semibold text-gray-900">Safe Ride</div>
                  <div className="text-sm text-gray-600">Certified Driver</div>
                </div>
              </div>
            </div>

            {/* Live Tracking Overlay */}
            <div className="absolute bottom-6 right-6 bg-white rounded-lg p-4 shadow-lg">
              <div className="space-y-2">
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                  <span className="text-sm font-medium text-gray-900">Live tracking active</span>
                </div>
                <div className="text-xs text-gray-600">ETA: 12 minutes</div>
              </div>
            </div>
          </div>

          {/* Right Column - Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
                Your safety is our priority
              </h2>
              <p className="text-xl text-gray-600 leading-relaxed">
                We're committed to helping keep you safe when you ride with RideShare. Before, during, and after every trip.
              </p>
            </div>

            {/* Safety Features Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {safetyFeatures.map((feature, index) => (
                <div key={index} className="space-y-3 p-4 bg-white rounded-lg border border-gray-100">
                  <div className="flex items-start space-x-3">
                    <div className="w-8 h-8 bg-black rounded-lg flex-shrink-0 flex items-center justify-center mt-1">
                      <div className="w-4 h-4 bg-white rounded-sm"></div>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900">{feature.title}</h3>
                      <p className="text-sm text-gray-600 mt-1">{feature.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Safety Stats */}
            <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-100">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Safety by the numbers</h3>
              <div className="grid grid-cols-3 gap-4 text-center">
                <div>
                  <div className="text-2xl font-bold text-gray-900">99.9%</div>
                  <div className="text-sm text-gray-600">Safe trips completed</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-gray-900">24/7</div>
                  <div className="text-sm text-gray-600">Safety monitoring</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-gray-900">5M+</div>
                  <div className="text-sm text-gray-600">Verified drivers</div>
                </div>
              </div>
            </div>

            {/* CTA */}
            <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-4">
              <button className="bg-black text-white px-8 py-4 rounded-lg font-semibold hover:bg-gray-800 transition-colors">
                Learn about safety
              </button>
              <button className="border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-lg font-semibold hover:border-gray-400 transition-colors">
                Safety guidelines
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}