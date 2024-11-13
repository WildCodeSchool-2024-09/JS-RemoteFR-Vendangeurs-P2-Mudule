import type React from "react";
import { useEffect, useState } from "react";
import Homepage from "./components/Homepage";
import "./App.css";
import DeskPokedex from "./components/DeskPokedex";
import Pokedex from "./components/Pokedex";

const App: React.FC = () => {
  const [showHomepage, setShowHomepage] = useState(true);
  const [showFadeOut, setShowFadeOut] = useState(false);
  const [showFadeIn, setShowFadeIn] = useState(false);

  const handlePokeballClick = () => {
    setShowFadeOut(true);
    setTimeout(() => {
      setShowHomepage(false);
      setShowFadeOut(false);
      setShowFadeIn(true);
    }, 2000);
  };

  useEffect(() => {
    if (showFadeIn) {
      const timer = setTimeout(() => {
        setShowFadeIn(false);
      }, 1500);
      return () => clearTimeout(timer);
    }
  }, [showFadeIn]);

  return (
    <>
      <div>
        {showHomepage ? (
          <>
            <Homepage onPokeballClick={handlePokeballClick} />
            {showFadeOut && <div className="fade-out" />}
          </>
        ) : (
          <>
            {showFadeIn && <div className="fade-in" />}
            <div className={showFadeIn ? "fade-in-content" : ""}>
              <DeskPokedex />
              <Pokedex />
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default App;
