import { useState } from "react";

export const Contact = () => {
  const [userData, setUserData] = useState({
    username: "",
    email: "",
    message: "",
  });

  const handleInput = (e) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Thanks ${userData.username}! We'll get back to you soon.`);
    setUserData({ username: "", email: "", message: "" });
  };

  return (
    <section className="section-contact">
      <div className="container" style={{ padding: "0 3.2rem" }}>
        <h2 className="container-title">Contact Us</h2>
        <hr />
        <br />
        <div className="contact-wrapper">
          <form onSubmit={handleSubmit} autoComplete="off">
            <input
              type="text"
              name="username"
              placeholder="Enter your name"
              value={userData.username}
              onChange={handleInput}
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              value={userData.email}
              onChange={handleInput}
              required
            />
            <textarea
              name="message"
              placeholder="Enter your message"
              rows={8}
              value={userData.message}
              onChange={handleInput}
              required
            />
            <button type="submit">Send Message</button>
          </form>
        </div>
      </div>
    </section>
  );
};
