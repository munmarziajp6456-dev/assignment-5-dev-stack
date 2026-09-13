import heroImage from "../assets/banner-stack.png";
function HeroSection() {
  return (
    <section className="hero-section" id="home">
      <div className="hero-container">
        
        <div className="hero-content">
          <p className="hero-label">
            🚀 YOUR DEVELOPMENT JOURNEY STARTS HERE
          </p>

          <h1>
            Build Your Ideal
            <span> Development Stack</span>
          </h1>

          <p className="hero-description">
            Discover the technologies that power modern applications.
            Explore, learn, and build your perfect developer stack.
          </p>

          <div className="hero-buttons">
            <button className="primary-btn">
              Explore Technologies →
            </button>

            <button className="secondary-btn">
              Learn More
            </button>
          </div>
        </div>

       {/* right side  */}
         <div className="hero-image">
          <img src={heroImage} alt="" />
        </div>

      </div>
    </section>
  );
}

export default HeroSection;