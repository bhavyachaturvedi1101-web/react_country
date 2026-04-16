import { Link } from "react-router-dom";
import heroImg from "../assets/hero.png";

export const Home = () => {
  return (
    <main>
      {/* Hero Section */}
      <section className="hero-section">
        <div className="container grid grid-two-cols">
          <div className="hero-content">
            <h1 className="heading-xl">
              Discover the World <br /> One Country at a Time
            </h1>
            <p className="paragraph">
              Explore detailed information about every country — population,
              region, capital, languages, currencies and more. Your ultimate
              world atlas is here.
            </p>
            <Link to="/country">
              <button>Explore Countries</button>
            </Link>
          </div>
          <div className="hero-image">
            <img src={heroImg} alt="world atlas" className="banner-image" />
          </div>
        </div>
      </section>

      {/* About / Features Section */}
      <section className="section-about">
        <div className="container">
          <h2 className="container-title">Why Choose World Atlas?</h2>
          <div className="gradient-cards">

            <div className="card bg-green-box">
              <div className="container-card">
                <h3 className="card-title">🌐 195+ Countries</h3>
                <p className="card-description">
                  Access data on every country in the world — flags, capitals,
                  populations, and regional info all in one place.
                </p>
              </div>
            </div>

            <div className="card bg-white-box">
              <div className="container-card">
                <h3 className="card-title">🔍 Search & Filter</h3>
                <p className="card-description">
                  Instantly search any country by name and filter by region to
                  narrow down results with ease.
                </p>
              </div>
            </div>

            <div className="card bg-yellow-box">
              <div className="container-card">
                <h3 className="card-title">📊 Rich Details</h3>
                <p className="card-description">
                  Dive deep into each country — languages, currencies, area,
                  timezones, and bordering nations.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>
    </main>
  );
};
