import { useEffect, useState } from "react";
import "./App.css";

import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import TechnologyCard from "./components/TechnologyCard";

function App() {
  const [technologies, setTechnologies] = useState([]);
  const [stack, setStack] = useState([]);

  useEffect(() => {
    fetch("/technologies.json")
      .then((res) => res.json())
      .then((data) => setTechnologies(data));
  }, []);

  const handleAddToStack = (technology) => {
    const alreadyAdded = stack.find(
      (item) => item.id === technology.id
    );

    if (alreadyAdded) {
      return;
    }

    setStack([...stack, technology]);
  };

  return (
    <>
      <Navbar />
      <HeroSection />
 <TechnologyCard
        technologies={technologies}
        stack={stack}
        handleAddToStack={handleAddToStack}
      />
    </>
  );
}

export default App;