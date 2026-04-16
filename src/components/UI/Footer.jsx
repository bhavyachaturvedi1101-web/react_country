export const Footer = () => {
  return (
    <footer className="footer-section">
      <div className="container">
        <div className="grid grid-two-cols" style={{ padding: "3.2rem" }}>

          {/* Find Us */}
          <div className="footer-contact">
            <div className="icon">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="36" height="36" fill="#3a4ed5">
                <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
              </svg>
            </div>
            <div className="footer-contact-text">
              <p>Find Us</p>
              <p>123 Atlas Street, World City</p>
            </div>
          </div>

          {/* Mail Us */}
          <div className="footer-contact">
            <div className="icon">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="36" height="36" fill="#3a4ed5">
                <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4-8 5-8-5V6l8 5 8-5v2z" />
              </svg>
            </div>
            <div className="footer-contact-text">
              <p>Mail Us</p>
              <p>contact@worldatlas.com</p>
            </div>
          </div>

        </div>
      </div>

      <div className="copyright-area">
        <div className="container">
          <div style={{ padding: "0 3.2rem" }}>
            <div className="copyright-text">
              <p>Copyright &copy; 2024, World Atlas. All Rights Reserved.</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
