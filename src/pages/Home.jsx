import StarField from "../components/StarBackground"
import Navigation from "../components/Navbar"
import { Link } from "react-router-dom"

export default function Home() {
  const cards = [
    {
      title: "JSON Formatter",
      disc: "Format and validate JSON data with syntax highlighting and error detection for cleaner code structure.",
      tech: "JS, Prettier",
      icon: "{ }",
      link: "json-formatter",
      bgColor: "bg-gradient-to-br from-slate-800 to-slate-900",
      borderColor: "border-slate-600",
    },
    {
      title: "Regex Tester",
      disc: "Test, visualize, and debug regular expressions with live pattern matching and explanation.",
      tech: "JS, RegExp",
      icon: "🔍.*",
      link: "regex-tester",
      bgColor: "bg-gradient-to-br from-emerald-900 to-emerald-950",
      borderColor: "border-emerald-700",
    },
    {
      title: "Live Markdown Preview",
      disc: "Write and preview Markdown with GitHub-flavored syntax and live rendering support.",
      tech: "JS, Marked.js",
      icon: "📝",
      link: "markdown-preview",
      bgColor: "bg-gradient-to-br from-blue-900 to-blue-950",
      borderColor: "border-blue-700",
    },
    {
      title: "Base64 Encoder/Decoder",
      disc: "Convert text and files to/from Base64 with instant encoding and decoding support.",
      tech: "JS, atob/btoa",
      icon: "🔐",
      link: "base64",
      bgColor: "bg-gradient-to-br from-purple-900 to-purple-950",
      borderColor: "border-purple-700",
    },
    {
      title: "JWT Decoder",
      disc: "Decode and inspect JSON Web Tokens including header, payload, and signature.",
      tech: "JS, jwt-decode",
      icon: "🔓JWT",
      link: "jwt-decoder",
      bgColor: "bg-gradient-to-br from-amber-900 to-amber-950",
      borderColor: "border-amber-700",
    },
    {
      title: "Color Picker",
      disc: "Pick and generate color palettes in HEX, RGB, HSL with live preview and copy support.",
      tech: "JS, EyeDropper API",
      icon: "🎨",
      link: "color-picker",
      bgColor: "bg-gradient-to-br from-rose-900 to-rose-950",
      borderColor: "border-rose-700",
    },
    {
      title: "QR Code Generator",
      disc: "Generate downloadable QR codes for URLs, text, or data using customizable options.",
      tech: "JS, qrcode.js",
      icon: "🔳",
      link: "qr-generator",
      bgColor: "bg-gradient-to-br from-teal-900 to-teal-950",
      borderColor: "border-teal-700",
    },
    {
      title: "Tech Stack Finder",
      disc: "Find out the technologies used in any website using Wappalyzer API or heuristics.",
      tech: "JS, Wappalyzer API",
      icon: "🧠",
      link: "techStackFinder",
      bgColor: "bg-gradient-to-br from-sky-900 to-teal-950",
      borderColor: "border-sky-700",
    },
    {
      title: "JSON to CSV",
      disc: "Convert structured JSON data into CSV format for spreadsheet usage or analysis.",
      tech: "JS, PapaParse",
      icon: "📊",
      link: "json-csv",
      bgColor: "bg-gradient-to-br from-orange-900 to-sky-950",
      borderColor: "border-orange-700",
    },
    {
      title: "UUID Generator",
      disc: "Generate secure and unique UUIDs (v4) for identifying resources or data.",
      tech: "JS, uuid",
      icon: "🆔",
      link: "uuidGenerator",
      bgColor: "bg-gradient-to-br from-pink-900 to-teal-950",
      borderColor: "border-sky-700",
    },
    {
      title: "Fake User Data Generator",
      disc: "Generate mock user data like name, email, address, and phone for testing apps.",
      tech: "JS, Faker.js",
      icon: "👤",
      link: "fakeDataGenerator",
      bgColor: "bg-gradient-to-br from-red-500 to-blue-950",
      borderColor: "border-red-700",
    },
    {
      title: "Responsive Design Tester",
      disc: "Test your website’s responsiveness across various screen sizes and devices.",
      tech: "JS, CSS Flex/Grid",
      icon: "📱💻",
      link: "responsiveTester",
      bgColor: "bg-gradient-to-br from-sky-900 to-black",
      borderColor: "border-sky-700",
    },
    {
      title: "Favicon Generator",
      disc: "Create and preview favicons from text or images for use in your browser tabs.",
      tech: "JS, Canvas API",
      icon: "🌟",
      link: "faviconGenerator",
      bgColor: "bg-gradient-to-br from-yellow-600 to-sky-950",
      borderColor: "border-sky-700",
    },
    {
      title: "Timezone Converter",
      disc: "Convert time between timezones with automatic detection and global support.",
      tech: "JS, Intl API",
      icon: "🌍🕒",
      link: "timeZone",
      bgColor: "bg-gradient-to-br from-sky-900 to-slate-950",
      borderColor: "border-sky-700",
    },
  ];



  return (
    <div className="relative min-h-screen">
      <StarField />
      <div className="min-h-screen">
        <Navigation />

        <div className="flex items-center justify-center pt-16 px-4">
          <div className="w-full max-w-4xl flex flex-col items-center text-center">
            <div className="mb-8">
              <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-white via-gray-200 to-gray-400 bg-clip-text text-transparent mb-4">
                Developer Tools Hub
              </h1>
              <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
                A curated collection of essential web development tools to streamline your workflow and boost
                productivity
              </p>
            </div>

            <div className="flex justify-center items-center mt-8 mb-16">
              <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full blur opacity-25 group-hover:opacity-75 transition duration-1000 group-hover:duration-200"></div>
                <button className="relative bg-gray-900 border border-gray-700 px-8 py-4 text-xl rounded-full hover:bg-gray-800 cursor-none transition-all duration-300 font-medium">
                  Explore Tools
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Cards Grid */}
        <div className="max-w-7xl mx-auto px-6 pb-20">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {cards.map((card, index) => (
              <div
                key={index}
                className={`${card.bgColor} ${card.borderColor} border rounded-xl p-6 flex flex-col h-full hover:scale-105 transition-all duration-300 hover:shadow-2xl group relative overflow-hidden`}
              >
                {/* Subtle glow effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                {/* Header with circles and icon */}
                <div className="flex items-center justify-between mb-4 relative z-10">
                  <div className="flex gap-2">
                    <div className="h-3 w-3 rounded-full bg-red-500"></div>
                    <div className="h-3 w-3 rounded-full bg-yellow-500"></div>
                    <div className="h-3 w-3 rounded-full bg-green-500"></div>
                  </div>
                  <div className="text-2xl font-mono font-bold text-gray-300">{card.icon}</div>
                </div>

                {/* Content */}
                <div className="flex-1 relative z-10">
                  <h3 className="font-bold text-xl mb-3 text-white group-hover:text-gray-100 transition-colors">
                    {card.title}
                  </h3>
                  <p className="text-gray-300 text-sm leading-relaxed mb-4 line-clamp-3">{card.disc}</p>
                </div>

                {/* Footer */}
                <div className="flex items-center justify-between mt-auto relative z-10">
                  <span className="bg-gray-800/50 border border-gray-600 px-3 py-1 rounded-md text-xs font-medium text-gray-300">
                    {card.tech}
                  </span>
                  <Link
                    to={card.link}
                    className="text-blue-400 hover:text-blue-300 cursor-none text-sm font-medium hover:underline transition-colors flex items-center gap-1"
                  >
                    Try Tool
                    <span className="transform group-hover:translate-x-1 transition-transform">→</span>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
