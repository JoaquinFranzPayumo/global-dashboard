import "./globals.css";

export const metadata = {
  title: "Global Countries Dashboard",
  description: "A professional REST API web application using Next.js",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-gray-100 text-gray-900 flex flex-col">
        
        {/* Header */}
        <header className="bg-white shadow-sm">
          <div className="max-w-7xl mx-auto px-4 py-4 flex flex-col md:flex-row justify-between items-center">
            
            {/* Logo / Title */}
            <div className="mb-3 md:mb-0">
              <h1 className="text-xl font-bold">🌍 Global Countries Dashboard</h1>
              <p className="text-sm text-gray-600">Explore countries around the world</p>
            </div>

            {/* Navigation Links */}
            <nav className="flex flex-wrap space-x-4">
              <a href="/countries" className="text-gray-700 hover:text-blue-500">Countries</a>
              <a href="/regions" className="text-gray-700 hover:text-blue-500">Regions</a>
              <a href="/about" className="text-gray-700 hover:text-blue-500">About</a>
            </nav>

          </div>
        </header>

        {/* Main Content */}
        <main className="flex-1 max-w-7xl mx-auto w-full px-4 py-6">
          {children}
        </main>

        {/* Footer */}
        <footer className="bg-white border-t">
          <div className="max-w-7xl mx-auto px-4 py-4 text-sm text-gray-500 text-center">
            © 2026 • Built with Next.js & Tailwind CSS
          </div>
        </footer>

      </body>
    </html>
  );
}



