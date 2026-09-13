function Navbar() {
  return (
    <nav className="navbar">
      <div className="nav-container">

        {/* Logo */}
        <div className="brand">
          <div className="logo">D</div>
          <h2>Dev <span>Stack</span></h2>
        </div>

        {/* Nav Links */}
        <div className="nav-links">
          <a href="#home">Home</a>
          <a href="#technologies">Technologies</a>
          <a href="#projects">Projects</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
        </div>

        {/* Buttons */}
        <div className="nav-buttons">
          <button className="sign-in">Sign In</button>
          <button className="sign-up">Sign Up</button>
        </div>

      </div>
    </nav>
  );
}

export default Navbar;