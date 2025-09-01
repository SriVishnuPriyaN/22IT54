function About() {
  return (
    <div className="about-container">
      {/* Heading */}
      <h2>About Us</h2>

      {/* Intro */}
      <p className="about-intro">
        Welcome to <strong>Url - shortener </strong>! We are passionate about creating
        simple and effective Url. Our mission is to make technology
        easy and accessible for everyone.
      </p>

      {/* Mission & Vision */}
      <div className="about-cards">
        <div className="about-card">
          <h3>Our Mission</h3>
          <p>
            To provide user-friendly and easy to remember url that help
            people achieve their goals efficiently.
          </p>
        </div>
        <div className="about-card">
          <h3>Our Vision</h3>
          <p>
            To be recognized as a trusted platform that delivers innovative
            solutions with simplicity and clarity.
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
