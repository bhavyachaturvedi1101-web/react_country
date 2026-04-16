import { NavLink } from "react-router-dom";

export const Footer = () => {
  return (
    <footer className="footer-section">
      <div className="container">
        <div className="grid grid-two-cols" style={{ padding: "3.2rem" }}>

          <div className="footer-contact">
            <div className="icon">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="36" height="36" fill="#3a4ed5">
                <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
              </svg>
            </div>
            <div className="footer-contact-text">
              <p>World Atlas</p>
              <p>Explore every country on Earth</p>
            </div>
          </div>

          <div className="footer-menu">
            <ul>
              <li><NavLink to="/">Home</NavLink></li>
              <li><NavLink to="/about">About</NavLink></li>
              <li><NavLink to="/country">Country</NavLink></li>
              <li><NavLink to="/contact">Contact</NavLink></li>
            </ul>
          </div>

        </div>
      </div>

      <div className="copyright-area">
        <div className="container">
          <div className="grid grid-two-cols" style={{ padding: "0 3.2rem" }}>
            <div className="copyright-text">
              <p>Copyright &copy; 2024, World Atlas. All Rights Reserved.</p>
            </div>
            <div className="footer-menu">
              <ul>
                <li><NavLink to="/">Home</NavLink></li>
                <li><NavLink to="/about">About</NavLink></li>
                <li><NavLink to="/contact">Contact</NavLink></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
