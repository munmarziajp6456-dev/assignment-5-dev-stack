import heroImage from "../assets/banner-stack.png";
function HeroSection() {
  return (
    <section className="hero-section" id="home">
      <div className="hero-container">
        
        <div className="hero-content">
                   <h1>
            Build Your Ideal
            <span> Development Stack</span>
          </h1>

          <p className="hero-description">
            Explore frontend, backend, database, and tooling options,
compare them side by side, and put together the stack that fits your
next project.
          </p>

          <div className="hero-buttons">
            <button className="primary-btn">
              Explore Technologies             </button>

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