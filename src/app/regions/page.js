export default function RegionsPage() {
    const regions = ["Africa", "Americas", "Asia", "Europe", "Oceania"];
  
    return (
      <div className="max-w-7xl mx-auto px-4 py-6">
        <h1 className="text-3xl font-bold mb-4">🗺 Regions</h1>
        <p className="text-gray-600 mb-6">
          Explore countries by region. Click a region to see the countries within it.
        </p>
  
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {regions.map((region) => (
            <div
              key={region}
              className="bg-white p-6 rounded-lg shadow-md text-center hover:bg-blue-50 transition"
            >
              <h2 className="text-xl font-semibold">{region}</h2>
            </div>
          ))}
        </div>
      </div>
    );
  }
  