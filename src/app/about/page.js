export default function AboutPage() {
    return (
      <div className="max-w-7xl mx-auto px-4 py-6">
        <h1 className="text-3xl font-bold mb-4">ℹ About</h1>
        <p className="text-gray-600 mb-4">
          Global Countries Dashboard is a professional web application built with Next.js and Tailwind CSS. 
          It fetches live country data from a public REST API.
        </p>
        <p className="text-gray-600 mb-4">
          Features include:
        </p>
        <ul className="list-disc list-inside text-gray-600 space-y-1">
          <li>Interactive country search</li>
          <li>Region exploration</li>
          <li>Responsive design for mobile, tablet, and desktop</li>
          <li>Clean, professional UI</li>
        </ul>
        <p className="text-gray-600 mt-4">
          Built as part of a Next.js project to demonstrate REST API integration and front-end design.
        </p>
      </div>
    );
  }
  