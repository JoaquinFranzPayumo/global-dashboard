"use client";

import { useEffect, useState } from "react";

export default function Home() {
  const [countries, setCountries] = useState([]);
  const [filteredCountries, setFilteredCountries] = useState([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  // Fetch all countries
  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
      .then((res) => res.json())
      .then((data) => {
        const countriesArray = Array.isArray(data) ? data : [];
        setCountries(countriesArray);
        setFilteredCountries(countriesArray);
        setLoading(false);
      })
      .catch(() => {
        setError(true);
        setLoading(false);
      });
  }, []);

  // Filter by search
  useEffect(() => {
    if (!Array.isArray(countries)) return;
    const result = countries.filter(
      (country) =>
        country?.name?.common?.toLowerCase().includes(search.toLowerCase())
    );
    setFilteredCountries(result);
  }, [search, countries]);

  // Compute dashboard stats
  const totalCountries = countries.length;
  const regions = Array.from(new Set(countries.map((c) => c.region))).filter(
    Boolean
  );
  const largestPopulation =
    countries.reduce((max, c) => (c.population > max.population ? c : max), {
      population: 0,
    }) || {};
  const smallestPopulation =
    countries.reduce(
      (min, c) =>
        c.population < min.population && c.population > 0 ? c : min,
      { population: Infinity }
    ) || {};

  return (
    <div className="space-y-8">

      {/* Dashboard Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="bg-white p-4 rounded-lg shadow-md">
          <h3 className="font-semibold text-gray-600">Total Countries</h3>
          <p className="text-2xl font-bold">{totalCountries}</p>
        </div>

        <div className="bg-white p-4 rounded-lg shadow-md">
          <h3 className="font-semibold text-gray-600">Regions</h3>
          <p className="text-2xl font-bold">{regions.length}</p>
        </div>

        <div className="bg-white p-4 rounded-lg shadow-md">
          <h3 className="font-semibold text-gray-600">Largest Population</h3>
          <p className="text-lg font-semibold">{largestPopulation.name?.common}</p>
          <p className="text-sm text-gray-500">{largestPopulation.population?.toLocaleString()}</p>
        </div>

        <div className="bg-white p-4 rounded-lg shadow-md">
          <h3 className="font-semibold text-gray-600">Smallest Population</h3>
          <p className="text-lg font-semibold">{smallestPopulation.name?.common}</p>
          <p className="text-sm text-gray-500">{smallestPopulation.population?.toLocaleString()}</p>
        </div>
      </div>

      {/* Search Box */}
      <div className="max-w-md">
        <input
          type="text"
          placeholder="Search for a country..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      {/* Country List */}
      {loading && <p className="text-gray-600">Loading countries...</p>}
      {error && <p className="text-red-600">Failed to load data.</p>}

      {!loading && !error && filteredCountries.length > 0 && (
        <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {filteredCountries.map((country) => (
            <div
              key={country.cca3}
              className="bg-white rounded-xl shadow-md p-4 transition hover:scale-105"
            >
              <img
                src={country.flags?.svg}
                alt={`Flag of ${country.name?.common}`}
                className="h-32 w-full object-cover rounded"
              />
              <h2 className="mt-3 font-semibold text-lg">
                {country.name?.common}
              </h2>
              <p className="text-sm text-gray-600">
                Population: {country.population?.toLocaleString() ?? "N/A"}
              </p>
              <p className="text-sm text-gray-600">Region: {country.region ?? "N/A"}</p>
            </div>
          ))}
        </div>
      )}

      {!loading && !error && filteredCountries.length === 0 && (
        <p className="text-gray-600">No countries match your search.</p>
      )}

    </div>
  );
}





