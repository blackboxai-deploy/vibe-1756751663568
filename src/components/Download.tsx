export default function Download() {
  const appFeatures = [
    "Request rides in seconds",
    "Track your driver in real-time", 
    "Multiple payment options",
    "Trip history and receipts",
    "Rate your driver",
    "Schedule rides in advance"
  ]

  return (
    <section id="download" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Column - Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
                Download the RideShare app
              </h2>
              <p className="text-xl text-gray-600 leading-relaxed">
                Get the app that millions of people trust to get around. Available on iOS and Android.
              </p>
            </div>

            {/* Features */}
            <div className="space-y-6">
              <h3 className="text-xl font-semibold text-gray-900">Everything you need in one app</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {appFeatures.map((feature, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Download Buttons */}
            <div className="space-y-4">
              <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-4">
                {/* App Store Button */}
                <button className="bg-black text-white px-6 py-4 rounded-lg flex items-center space-x-3 hover:bg-gray-800 transition-colors">
                  <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center">
                    <div className="w-5 h-5 bg-black rounded-sm"></div>
                  </div>
                  <div className="text-left">
                    <div className="text-xs text-gray-300">Download on the</div>
                    <div className="font-semibold">App Store</div>
                  </div>
                </button>

                {/* Google Play Button */}
                <button className="bg-black text-white px-6 py-4 rounded-lg flex items-center space-x-3 hover:bg-gray-800 transition-colors">
                  <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center">
                    <div className="w-5 h-5 bg-black rounded-sm"></div>
                  </div>
                  <div className="text-left">
                    <div className="text-xs text-gray-300">Get it on</div>
                    <div className="font-semibold">Google Play</div>
                  </div>
                </button>
              </div>

              {/* QR Code Option */}
              <div className="flex items-center space-x-4 pt-4">
                <div className="w-16 h-16 bg-gray-200 rounded-lg flex items-center justify-center">
                  <div className="grid grid-cols-4 gap-1">
                    {Array.from({length: 16}).map((_, i) => (
                      <div 
                        key={i} 
                        className={`w-1 h-1 ${i % 2 === 0 ? 'bg-black' : 'bg-gray-200'} rounded-sm`}
                      ></div>
                    ))}
                  </div>
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-900">Scan to download</p>
                  <p className="text-xs text-gray-600">Works with any QR code scanner</p>
                </div>
              </div>
            </div>

            {/* App Rating */}
            <div className="bg-gray-50 rounded-lg p-6">
              <div className="flex items-center justify-between">
                <div>
                  <div className="flex items-center space-x-2 mb-2">
                    <div className="flex space-x-1">
                      {[1,2,3,4,5].map((star) => (
                        <div key={star} className="w-5 h-5 bg-yellow-400 rounded-sm"></div>
                      ))}
                    </div>
                    <span className="text-lg font-bold text-gray-900">4.8</span>
                  </div>
                  <p className="text-sm text-gray-600">Over 1M+ reviews</p>
                </div>
                <div className="text-right">
                  <div className="text-2xl font-bold text-gray-900">50M+</div>
                  <p className="text-sm text-gray-600">Downloads worldwide</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Phone Mockup */}
          <div className="relative flex justify-center">
            <div className="relative">
              {/* Phone Frame */}
              <div className="w-80 h-96 bg-gray-900 rounded-3xl p-2 shadow-2xl">
                <div className="w-full h-full bg-white rounded-2xl overflow-hidden">
                  <img 
                    src="https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/1273a1a5-c33b-43d3-aaf8-2ecdd9514070.png"
                    alt="RideShare mobile app interface showing map with nearby drivers and booking options"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              
              {/* Floating Elements */}
              <div className="absolute -top-4 -right-4 bg-green-500 text-white px-3 py-2 rounded-full text-sm font-medium">
                Available now
              </div>
              
              <div className="absolute -bottom-4 -left-4 bg-white shadow-lg rounded-lg p-3">
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  <span className="text-xs font-medium text-gray-900">Driver found</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Stats */}
        <div className="mt-20 pt-16 border-t border-gray-100">
          <div className="text-center space-y-4 mb-12">
            <h3 className="text-2xl font-bold text-gray-900">Trusted by millions worldwide</h3>
            <p className="text-gray-600">Join the community that's always on the move</p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="space-y-2">
              <div className="text-3xl md:text-4xl font-bold text-gray-900">10M+</div>
              <div className="text-gray-600">Monthly active users</div>
            </div>
            <div className="space-y-2">
              <div className="text-3xl md:text-4xl font-bold text-gray-900">1B+</div>
              <div className="text-gray-600">Rides completed</div>
            </div>
            <div className="space-y-2">
              <div className="text-3xl md:text-4xl font-bold text-gray-900">500+</div>
              <div className="text-gray-600">Cities worldwide</div>
            </div>
            <div className="space-y-2">
              <div className="text-3xl md:text-4xl font-bold text-gray-900">4.8</div>
              <div className="text-gray-600">App store rating</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}