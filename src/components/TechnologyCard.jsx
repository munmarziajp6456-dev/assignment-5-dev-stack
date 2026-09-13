function TechnologyCard({
  technologies,
  stack,
  handleAddToStack
}) {
  return (
    <section className="technology-section" id="technologies">

      {/* Section Header */}
      <div className="section-header">
        <h2>Explore the<span>Technologies</span> </h2>

        <p>
          Pick one technology per category to build your ideal stack. 
        </p>

      </div>


      {/* Two Side Layout */}
      <div className="technology-layout">

        {/* LEFT - TECHNOLOGY CARDS */}
        <div className="technology-grid">

          {technologies.map((technology) => {

            const isAdded = stack.some(
              (item) => item.id === technology.id
            );

            return (
              <div
                className={`technology-card ${
                  isAdded ? "added-card" : ""
                }`}
                key={technology.id}
              >

                {/* Top */}
                <div className="card-top">

                  <img
                    src={technology.icon}
                    alt={technology.name}
                    className="technology-icon"
                  />

                  <span className="badge">
                    {technology.badge}
                  </span>

                </div>


                {/* Name */}
                <h3>{technology.name}</h3>


                {/* Description */}
                <p className="technology-description">
                  {technology.description}
                </p>


                {/* Information */}
                <div className="technology-info">

                  <span className="category">
                    {technology.category}
                  </span>

                  <span className="difficulty">
                    {technology.difficulty}
                  </span>

                  <span className="rating">
                    ⭐ {technology.rating}
                  </span>

                </div>


                {/* Button */}
                <button
                  className={`add-button ${
                    isAdded ? "added-btn" : ""
                  }`}
                  onClick={() =>
                    handleAddToStack(technology)
                  }
                  disabled={isAdded}
                >
                  {isAdded
                    ? "✓ Added to Stack"
                    : "Add to Stack"}
                </button>

              </div>
            );
          })}

        </div>


        {/* RIGHT - YOUR STACK */}
        <div className="your-stack">

          <h2>Your Stack</h2>

          <p>
            {stack.length} Technology Selected
          </p>


          {stack.length === 0 ? (

            <div className="empty-stack">

              <p>No technologies added yet.</p>

              <span>
                Start building your development stack!
              </span>

            </div>

          ) : (

            <div className="stack-list">

              {stack.map((item) => (

                <div
                  className="stack-item"
                  key={item.id}
                >

                  <img
                    src={item.icon}
                    alt={item.name}
                  />

                  <div>
                    <h4>{item.name}</h4>

                    <p>{item.category}</p>
                  </div>

                </div>

              ))}

            </div>

          )}

        </div>

      </div>

    </section>
  );
}

export default TechnologyCard;