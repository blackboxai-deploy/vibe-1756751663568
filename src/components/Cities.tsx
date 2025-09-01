export default function Cities() {
  const popularCities = [
    "New York", "Los Angeles", "Chicago", "Houston", "Phoenix", "Philadelphia",
    "San Antonio", "San Diego", "Dallas", "San Jose", "Austin", "Jacksonville"
  ]

  const regions = [
    {
      title: "North America",
      description: "Available in 300+ cities across the US and Canada",
      imageUrl: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/40c3d86c-0700-4c1a-98eb-af8277e8902d.png",
      imageAlt: "North American city skyline with modern skyscrapers and busy urban transportation",
      cities: ["New York", "Los Angeles", "Toronto", "Mexico City"]
    },
    {
      title: "Europe",
      description: "Expanding across European cities and towns",
      imageUrl: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/688cb85b-5813-4455-bc81-832e2e70123a.png",
      imageAlt: "European city center with historic architecture and modern transport integration",
      cities: ["London", "Paris", "Berlin", "Amsterdam"]
    },
    {
      title: "Asia Pacific",
      description: "Growing presence in major Asian markets",
      imageUrl: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/26f780f4-4045-4f41-865b-1d72d74d083d.png",
      imageAlt: "Asian metropolitan area with futuristic buildings and efficient public transportation",
      cities: ["Tokyo", "Singapore", "Sydney", "Seoul"]
    }
  ]

  return (
    <section id="cities" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900">
            Available worldwide
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            RideShare operates in hundreds of cities around the world. See if we're in your city and sign up to ride or drive.
          </p>
        </div>

        {/* Popular Cities */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Popular cities in the US</h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {popularCities.map((city, index) => (
              <div 
                key={index}
                className="text-center p-4 rounded-lg hover:bg-gray-50 cursor-pointer transition-colors"
              >
                <div className="w-12 h-12 bg-black rounded-lg mx-auto mb-3 flex items-center justify-center">
                  <div className="w-6 h-6 bg-white rounded-sm"></div>
                </div>
                <p className="text-gray-900 font-medium">{city}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Regional Coverage */}
        <div className="space-y-12">
          <h3 className="text-2xl font-bold text-gray-900 text-center">Global presence</h3>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {regions.map((region, index) => (
              <div key={index} className="group cursor-pointer">
                <div className="relative overflow-hidden rounded-lg">
                  <img 
                    src={region.imageUrl}
                    alt={region.imageAlt}
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-20 group-hover:bg-opacity-30 transition-opacity"></div>
                  
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                    <h4 className="text-xl font-bold mb-2">{region.title}</h4>
                    <p className="text-gray-200 text-sm mb-3">{region.description}</p>
                    
                    <div className="flex flex-wrap gap-2">
                      {region.cities.map((city, cityIndex) => (
                        <span 
                          key={cityIndex}
                          className="bg-white bg-opacity-20 px-2 py-1 rounded text-xs font-medium"
                        >
                          {city}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center">
          <div className="bg-gray-900 rounded-2xl p-8 md:p-12">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
              Don't see your city?
            </h3>
            <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
              We're expanding every day. Let us know where you'd like to see RideShare next.
            </p>
            <div className="flex flex-col sm:flex-row justify-center space-y-3 sm:space-y-0 sm:space-x-4">
              <button className="bg-white text-black px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                Request your city
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-black transition-colors">
                Get updates
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}