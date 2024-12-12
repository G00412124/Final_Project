import './HomePage.css'; // Make sure to import the CSS file

const Content = () => {
  return (
    <div className="home-page">
      {/* Hero Section */}
      <section className="hero"> 
        <div className="hero-overlay"></div> {/* Semi-transparent overlay */}
        <div className="hero-content">
          <h1>Welcome to Matt's MotorParts</h1>
          <p>Your one-stop shop for high-quality motorbike parts</p>
         
        </div>
      </section>

      {/* Features Section */}
      <section className="features">
        <h2>Why Choose Us?</h2>
        <div className="features-container">
          <div className="feature-card">
            <h3>Wide Selection</h3>
            <p>We offer a wide range of motorbike parts, from engines to accessories.</p>
          </div>
          <div className="feature-card">
            <h3>Easy to Use</h3>
            <p>Our app makes it simple to add, view, and edit parts with a few clicks.</p>
          </div>
          <div className="feature-card">
            <h3>Quality Guaranteed</h3>
            <p>We ensure top-quality parts for every motorbike, with full satisfaction guaranteed.</p>
          </div>
        </div>
      </section>

      {/* Footer Section */}
      <footer className="footer"> 
        <p>&copy; 2024 Motorbike Parts. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Content;
