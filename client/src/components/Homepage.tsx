import type React from "react";
import styles from "../styles/Homepage.module.css";

interface HomepageProps {
  onPokeballClick: () => void;
}

const Homepage: React.FC<HomepageProps> = ({ onPokeballClick }) => {
  const handleKeyUp = (event: React.KeyboardEvent<HTMLImageElement>) => {
    if (event.key === 'Enter' || event.key === ' ') {
      onPokeballClick();
    }
  };

  return (
    <div className={styles.homepage}>
      <img
        className={styles.pokeball}
        src="../src/assets/images/Pokeball.png"
        alt="PokeBall"
        onClick={onPokeballClick}
        onKeyUp={handleKeyUp}
        tabIndex={0} 
      />

      <img
        className={styles.desktopclose}
        src="../src/assets/images/desktopclose.png"
        alt="Pokedex fermé"
      />
      <img
        className={styles.mobileclose}
        src="../src/assets/images/mobileclose.png"
        alt="Pokedex fermé"
      />
    </div>
  );
};
export default Homepage;
