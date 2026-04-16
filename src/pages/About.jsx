export const About = () => {
  return (
    <section className="section-about" style={{ paddingTop: "6.4rem" }}>
      <div className="container">
        <h2 className="container-title">About World Atlas</h2>
        <div className="gradient-cards">

          <div className="card bg-green-box">
            <div className="container-card">
              <h3 className="card-title">🌍 Our Mission</h3>
              <p className="card-description">
                World Atlas is built to make geographical knowledge accessible
                to everyone. We pull live data from the REST Countries API to
                give you accurate, up-to-date information on every nation.
              </p>
            </div>
          </div>

          <div className="card bg-white-box">
            <div className="container-card">
              <h3 className="card-title">⚛️ Built With React</h3>
              <p className="card-description">
                This project is built with React 19 and Vite, using React
                Router for navigation. Inspired by Thapa Technical's React
                series on YouTube.
              </p>
            </div>
          </div>

          <div className="card bg-yellow-box">
            <div className="container-card">
              <h3 className="card-title">📡 Live API Data</h3>
              <p className="card-description">
                All country data is fetched in real-time from
                restcountries.com — flags, populations, capitals, languages,
                currencies and more.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
