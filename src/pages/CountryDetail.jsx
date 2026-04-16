import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

export const CountryDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [country, setCountry] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    setLoading(true);
    setError(false);
    const getCountry = async () => {
      try {
        const res = await fetch(`https://restcountries.com/v3.1/alpha/${id}`);
        const data = await res.json();
        if (!Array.isArray(data) || !data[0]) {
          setError(true);
        } else {
          setCountry(data[0]);
        }
      } catch (err) {
        console.error(err);
        setError(true);
      } finally {
        setLoading(false);
      }
    };
    getCountry();
  }, [id]);

  if (loading) {
    return (
      <div className="loader-section">
        <div className="loader"></div>
      </div>
    );
  }

  if (error || !country) {
    return (
      <div className="loader-section">
        <p>Country not found.</p>
        <button onClick={() => navigate(-1)} style={{ marginTop: "2rem" }}>← Back</button>
      </div>
    );
  }

  const {
    name,
    flags,
    population,
    region,
    subregion,
    capital,
    tld,
    currencies,
    languages,
    borders,
    area,
    timezones,
  } = country;

  const nativeName = name?.nativeName
    ? Object.values(name.nativeName)[0]?.common ?? name.common
    : name.common;

  const currencyList = currencies
    ? Object.values(currencies).map((c) => c.name).join(", ")
    : "N/A";

  const languageList = languages
    ? Object.values(languages).join(", ")
    : "N/A";

  return (
    <section className="country-section">
      <div className="container">
        <div className="country-details-card">
          <div className="container-card bg-blue-box">

            {/* Back Button */}
            <div className="country-card-backBtn">
              <button onClick={() => navigate(-1)}>← Back</button>
            </div>

            <div className="grid grid-two-cols" style={{ gap: "6.4rem", marginTop: "3.2rem", alignItems: "center" }}>

              {/* Flag */}
              <div style={{ display: "flex", justifyContent: "center" }}>
                <img
                  src={flags?.svg || flags?.png}
                  alt={flags?.alt || name.common}
                  style={{ width: "100%", maxWidth: "40rem", height: "auto" }}
                />
              </div>

              {/* Info */}
              <div className="infoContainer">
                <h2 style={{ fontSize: "3.2rem" }}>{name.common}</h2>

                <div className="grid grid-two-cols" style={{ gap: "1.6rem" }}>
                  <div style={{ display: "flex", flexDirection: "column", gap: "0.8rem" }}>
                    <p><strong>Native Name: </strong>{nativeName}</p>
                    <p><strong>Population: </strong>{population?.toLocaleString() ?? "N/A"}</p>
                    <p><strong>Region: </strong>{region ?? "N/A"}</p>
                    <p><strong>Sub Region: </strong>{subregion ?? "N/A"}</p>
                    <p><strong>Capital: </strong>{capital?.[0] ?? "N/A"}</p>
                  </div>
                  <div style={{ display: "flex", flexDirection: "column", gap: "0.8rem" }}>
                    <p><strong>Top Level Domain: </strong>{tld?.[0] ?? "N/A"}</p>
                    <p><strong>Currencies: </strong>{currencyList}</p>
                    <p><strong>Languages: </strong>{languageList}</p>
                    <p><strong>Area: </strong>{area ? area.toLocaleString() + " km²" : "N/A"}</p>
                    <p><strong>Timezones: </strong>{timezones?.[0] ?? "N/A"}</p>
                  </div>
                </div>

                {/* Border Countries */}
                {borders && borders.length > 0 && (
                  <div>
                    <p style={{ marginBottom: "1rem" }}><strong>Border Countries:</strong></p>
                    <div style={{ display: "flex", flexWrap: "wrap", gap: "0.8rem" }}>
                      {borders.map((border) => (
                        <button
                          key={border}
                          style={{ marginTop: 0 }}
                          onClick={() => navigate(`/country/${border}`)}
                        >
                          {border}
                        </button>
                      ))}
                    </div>
                  </div>
                )}
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
