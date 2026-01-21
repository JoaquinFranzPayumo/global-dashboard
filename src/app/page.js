export default function HomePage() {
    return (
      <div className="max-w-7xl mx-auto px-4 py-6 space-y-6">
        <h1 className="text-3xl font-bold mb-2">🌍 Welcome to Global Countries Dashboard</h1>
        <p className="text-gray-600 mb-4">
          Explore countries, regions, and learn more about the world.
        </p>
  
        {/* Quick navigation buttons */}
        <div className="flex flex-wrap gap-4">
          <a
            href="/countries"
            className="px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition"
          >
            Countries
          </a>
          <a
            href="/regions"
            className="px-6 py-3 bg-green-500 text-white rounded-lg hover:bg-green-600 transition"
          >
            Regions
          </a>
          <a
            href="/about"
            className="px-6 py-3 bg-gray-500 text-white rounded-lg hover:bg-gray-600 transition"
          >
            About
          </a>
        </div>
  
        {/* Optional welcome message */}
        <p className="text-gray-700 mt-6">
          This application demonstrates REST API integration, a responsive dashboard, and professional UI design using Next.js and Tailwind CSS.
        </p>
      </div>
    );
  }
