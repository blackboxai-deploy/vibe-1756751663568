export default function Driver() {
  const benefits = [
    {
      title: "Flexible schedule",
      description: "Drive when you want, wherever you want"
    },
    {
      title: "Weekly earnings",
      description: "Get paid weekly with direct deposit"
    },
    {
      title: "Support 24/7",
      description: "We're here to help whenever you need us"
    },
    {
      title: "Drive your car",
      description: "Use your own vehicle and keep 100% of tips"
    }
  ]

  const requirements = [
    "At least 21 years old",
    "Valid driver's license",
    "Vehicle 2008 or newer",
    "Pass background check",
    "Auto insurance coverage"
  ]

  return (
    <section id="drive" className="py-20 bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Column - Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight">
                Drive when you want, make what you need
              </h2>
              <p className="text-xl text-gray-300 leading-relaxed">
                Make money on your schedule with deliveries or rides—or both. You can use your own car or choose a rental through RideShare.
              </p>
            </div>

            {/* Earnings Highlight */}
            <div className="bg-gray-900 rounded-lg p-6">
              <div className="space-y-2">
                <h3 className="text-2xl font-bold">$1,000+</h3>
                <p className="text-gray-300">Average weekly earnings for active drivers</p>
                <p className="text-sm text-gray-400">*Actual earnings may vary by city, time spent driving, and driver efficiency</p>
              </div>
            </div>

            {/* Benefits */}
            <div className="space-y-6">
              <h3 className="text-xl font-semibold">Why drive with us?</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {benefits.map((benefit, index) => (
                  <div key={index} className="space-y-2">
                    <h4 className="font-semibold">{benefit.title}</h4>
                    <p className="text-gray-300 text-sm">{benefit.description}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA */}
            <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-4">
              <button className="bg-white text-black px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors">
                Get started
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-black transition-colors">
                Already have an account?
              </button>
            </div>
          </div>

          {/* Right Column - Image and Requirements */}
          <div className="space-y-8">
            <div className="relative">
              <img 
                src="https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/0a69358e-1011-4702-bc0b-2d380e6cb707.png"
                alt="Professional driver standing next to clean modern vehicle in urban setting"
                className="w-full rounded-lg"
              />
              <div className="absolute top-6 right-6 bg-white bg-opacity-20 backdrop-blur-sm rounded-lg p-4">
                <div className="text-center">
                  <div className="text-2xl font-bold">4.9</div>
                  <div className="flex justify-center space-x-1 mt-1">
                    {[1,2,3,4,5].map((star) => (
                      <div key={star} className="w-4 h-4 bg-yellow-400 rounded-sm"></div>
                    ))}
                  </div>
                  <div className="text-xs mt-1">Driver rating</div>
                </div>
              </div>
            </div>

            {/* Requirements */}
            <div className="bg-gray-900 rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-4">Requirements to drive</h3>
              <ul className="space-y-3">
                {requirements.map((requirement, index) => (
                  <li key={index} className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-gray-300">{requirement}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-6 pt-6 border-t border-gray-700">
                <p className="text-sm text-gray-400">
                  Additional requirements may vary by city. Background checks typically take 3-5 business days.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="mt-20 pt-16 border-t border-gray-800">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="space-y-2">
              <div className="text-3xl md:text-4xl font-bold">5M+</div>
              <div className="text-gray-400">Active drivers</div>
            </div>
            <div className="space-y-2">
              <div className="text-3xl md:text-4xl font-bold">$15B+</div>
              <div className="text-gray-400">Paid to drivers</div>
            </div>
            <div className="space-y-2">
              <div className="text-3xl md:text-4xl font-bold">500+</div>
              <div className="text-gray-400">Cities worldwide</div>
            </div>
            <div className="space-y-2">
              <div className="text-3xl md:text-4xl font-bold">99%</div>
              <div className="text-gray-400">Uptime reliability</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}