import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const API = "https://restcountries.com/v3.1/all?fields=name,flags,population,region,capital,cca3";

export const Country = () => {
  const [countries, setCountries] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("all");

  useEffect(() => {
    const getCountries = async () => {
      try {
        const res = await fetch(API);
        if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`);
        const data = await res.json();
        if (Array.isArray(data)) {
          setCountries(data);
        } else {
          throw new Error("Invalid data format");
        }
      } catch (err) {
        console.error(err);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    getCountries();
  }, []);

  if (loading) {
    return (
      <div className="loader-section">
        <div className="loader"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="loader-section">
        <p style={{ color: "#fff", fontSize: "2rem" }}>
          Failed to load countries: {error}
        </p>
      </div>
    );
  }

  const filteredCountries = countries.filter((country) => {
    const matchSearch = country.name?.common
      ?.toLowerCase()
      .includes(search.toLowerCase());
    const matchRegion =
      filter === "all" ||
      country.region?.toLowerCase() === filter.toLowerCase();
    return matchSearch && matchRegion;
  });

  return (
    <section className="country-section">
      <div className="container">

        {/* Search & Filter */}
        <div className="section-searchFilter">
          <div className="container-card">
            <input
              type="text"
              placeholder="Search for a country..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
          <select
            className="select-section"
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
          >
            <option value="all">Filter by Region</option>
            <option value="africa">Africa</option>
            <option value="americas">Americas</option>
            <option value="asia">Asia</option>
            <option value="europe">Europe</option>
            <option value="oceania">Oceania</option>
          </select>
        </div>

        {/* Country Cards Grid */}
        <div className="grid grid-four-cols">
          {filteredCountries.map((curCountry) => {
            const {
              name,
              flags,
              population,
              region,
              capital,
              cca3,
            } = curCountry;
            return (
              <Link key={cca3} to={`/country/${cca3}`}>
                <div className="container-card bg-blue-box">
                  <img
                    src={flags?.svg || flags?.png}
                    alt={flags?.alt || name?.common}
                  />
                  <div className="country-card">
                    <h3 style={{ fontSize: "1.8rem", color: "#fff", marginBottom: "0.8rem" }}>
                      {name?.common}
                    </h3>
                    <p><strong>Population: </strong>{population?.toLocaleString()}</p>
                    <p><strong>Region: </strong>{region}</p>
                    <p><strong>Capital: </strong>{capital?.[0] ?? "N/A"}</p>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>

      </div>
    </section>
  );
};
