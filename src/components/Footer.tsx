export default function Footer() {
  const footerSections = [
    {
      title: "Company",
      links: [
        "About us",
        "Our offerings",
        "Newsroom",
        "Investors",
        "Blog",
        "Careers",
        "AI",
        "Gift cards"
      ]
    },
    {
      title: "Products",
      links: [
        "Ride",
        "Drive",
        "Deliver",
        "Eat",
        "RideShare for Business",
        "RideShare Freight",
        "Gift cards"
      ]
    },
    {
      title: "Global citizenship",
      links: [
        "Safety",
        "Diversity and Inclusion",
        "Sustainability"
      ]
    },
    {
      title: "Travel",
      links: [
        "Reserve",
        "Airports",
        "Cities"
      ]
    }
  ]

  const socialLinks = [
    { name: "Facebook", url: "#" },
    { name: "Twitter", url: "#" },
    { name: "Instagram", url: "#" },
    { name: "LinkedIn", url: "#" }
  ]

  return (
    <footer className="bg-black text-white">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Top Section - Company Info */}
        <div className="mb-12">
          <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start space-y-8 lg:space-y-0">
            {/* Brand */}
            <div className="space-y-4 lg:max-w-md">
              <h2 className="text-2xl font-bold">RideShare</h2>
              <p className="text-gray-400 leading-relaxed">
                Making transportation accessible, reliable, and safe for everyone. Join millions of riders and drivers who trust RideShare for their daily transportation needs.
              </p>
              
              {/* App Download Links */}
              <div className="flex space-x-4">
                <button className="bg-gray-900 hover:bg-gray-800 px-4 py-2 rounded-lg flex items-center space-x-2 transition-colors">
                  <div className="w-6 h-6 bg-white rounded flex items-center justify-center">
                    <div className="w-3 h-3 bg-black rounded-sm"></div>
                  </div>
                  <div className="text-left">
                    <div className="text-xs text-gray-400">Download on the</div>
                    <div className="text-sm font-medium">App Store</div>
                  </div>
                </button>
                <button className="bg-gray-900 hover:bg-gray-800 px-4 py-2 rounded-lg flex items-center space-x-2 transition-colors">
                  <div className="w-6 h-6 bg-white rounded flex items-center justify-center">
                    <div className="w-3 h-3 bg-black rounded-sm"></div>
                  </div>
                  <div className="text-left">
                    <div className="text-xs text-gray-400">Get it on</div>
                    <div className="text-sm font-medium">Google Play</div>
                  </div>
                </button>
              </div>
            </div>

            {/* Newsletter Signup */}
            <div className="space-y-4 lg:max-w-md">
              <h3 className="text-lg font-semibold">Stay updated</h3>
              <p className="text-gray-400 text-sm">
                Get the latest news, updates, and special offers delivered to your inbox.
              </p>
              <div className="flex space-x-3">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 bg-gray-900 text-white px-4 py-3 rounded-lg border border-gray-700 focus:border-white focus:outline-none"
                />
                <button className="bg-white text-black px-6 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Links Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
          {footerSections.map((section, index) => (
            <div key={index} className="space-y-4">
              <h3 className="font-semibold text-white">{section.title}</h3>
              <ul className="space-y-2">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <a 
                      href="#" 
                      className="text-gray-400 hover:text-white transition-colors text-sm"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Social Links */}
        <div className="flex justify-center space-x-6 mb-8">
          {socialLinks.map((social, index) => (
            <a
              key={index}
              href={social.url}
              className="w-10 h-10 bg-gray-900 rounded-full flex items-center justify-center hover:bg-gray-800 transition-colors"
              aria-label={social.name}
            >
              <div className="w-5 h-5 bg-white rounded-sm"></div>
            </a>
          ))}
        </div>
      </div>

      {/* Bottom Section */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            {/* Legal Links */}
            <div className="flex flex-wrap justify-center md:justify-start space-x-6">
              <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">
                Terms of Service
              </a>
              <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">
                Cookies
              </a>
              <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">
                Accessibility
              </a>
              <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">
                Do not sell my info
              </a>
            </div>

            {/* Copyright */}
            <div className="text-gray-400 text-sm">
              © 2024 RideShare Technologies Inc. All rights reserved.
            </div>
          </div>

          {/* Additional Info */}
          <div className="mt-6 pt-6 border-t border-gray-800 text-center">
            <p className="text-gray-500 text-xs leading-relaxed">
              This site is protected by reCAPTCHA and the Google Privacy Policy and Terms of Service apply. 
              RideShare does not guarantee the availability of driver-partners at any given location or time.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}