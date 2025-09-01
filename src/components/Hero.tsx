import BookingForm from './BookingForm'

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/20b32e3f-f8b3-4765-a9b8-c54ee38cd3ab.png"
          alt="Modern city skyline at sunset with busy streets and urban transportation bustling with cars and pedestrians"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text Content */}
          <div className="text-white space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
                Go anywhere with
                <span className="block">RideShare</span>
              </h1>
              <p className="text-xl sm:text-2xl text-gray-200 leading-relaxed max-w-2xl">
                Request a ride, hop in, and go. Or become a driver and earn money on your schedule.
              </p>
            </div>

            {/* CTA Buttons for Mobile */}
            <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-4 lg:hidden">
              <button className="bg-white text-black px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors">
                Get a ride
              </button>
              <button className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-black transition-colors">
                Start driving
              </button>
            </div>

            {/* Features */}
            <div className="pt-8 space-y-4">
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-white rounded-full"></div>
                <span className="text-lg text-gray-200">Available in 500+ cities worldwide</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-white rounded-full"></div>
                <span className="text-lg text-gray-200">24/7 customer support</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-white rounded-full"></div>
                <span className="text-lg text-gray-200">Safe and reliable rides</span>
              </div>
            </div>
          </div>

          {/* Right Column - Booking Form */}
          <div className="hidden lg:flex justify-center">
            <BookingForm />
          </div>
        </div>

        {/* Mobile Booking Form */}
        <div className="lg:hidden mt-12 flex justify-center">
          <BookingForm />
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce">
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  )
}