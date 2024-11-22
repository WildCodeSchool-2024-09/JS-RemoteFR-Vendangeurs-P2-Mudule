import type React from "react";
import acierImage from "../assets/images/acier.webp";
import combatImage from "../assets/images/combat.webp";
import eauImage from "../assets/images/eau.webp";
import elektrikImage from "../assets/images/elektrik.webp";
import feeImage from "../assets/images/fee.webp";
import feuImage from "../assets/images/feu.webp";
import glaceImage from "../assets/images/glace.webp";
import insecteImage from "../assets/images/insecte.webp";
import normalImage from "../assets/images/normal.webp";
import planteImage from "../assets/images/plante.webp";
import poisonImage from "../assets/images/poison.webp";
import psyImage from "../assets/images/psy.webp";
import rocheImage from "../assets/images/roche.webp";
import solImage from "../assets/images/sol.webp";
import spectreImage from "../assets/images/spectre.webp";
import tenebreImage from "../assets/images/tenebre.webp";
import volImage from "../assets/images/vol.webp";
import styles from "../styles/DeskPokedexScreen.module.css";

interface DeskPokedexScreenProps {
  pokemon: {
    name: {
      fr: string;
    };
    sprites: {
      regular: string;
      shiny: string;
    };
  } | null;
  error: string | null;
  types: { name: string }[];
  isShiny: boolean;
}

const typeImages: { [key: string]: string } = {
  plante: planteImage,
  acier: acierImage,
  combat: combatImage,
  eau: eauImage,
  électrik: elektrikImage,
  fée: feeImage,
  feu: feuImage,
  glace: glaceImage,
  insecte: insecteImage,
  normal: normalImage,
  poison: poisonImage,
  psy: psyImage,
  roche: rocheImage,
  sol: solImage,
  spectre: spectreImage,
  ténèbres: tenebreImage,
  vol: volImage,
};

const DeskPokedexScreen: React.FC<DeskPokedexScreenProps> = ({
  pokemon,
  error,
  types,
  isShiny,
}) => {
  if (error) {
    return (
      <section className={styles.desktop}>
        <div className={styles.pokedexScreenBorder}>
          <div className={styles.pokedexScreen}>
            <hr className={styles.diodeRed1} />
            <hr className={styles.diodeRed2} />
            <div className={styles.pokemonName} />
            <div className={styles.screen}>
              <p className={styles.errorMessage}>
                Désolé je ne trouve pas ce pokémon!{" "}
              </p>
            </div>
            <div className={styles.diodeDesk}>
              <hr className={styles.diodeDeskLight} />
            </div>
            <div className={styles.barContainer}>
              <hr className={styles.bar1} />
              <hr className={styles.bar2} />
              <hr className={styles.bar3} />
              <hr className={styles.bar4} />
            </div>
          </div>
        </div>
      </section>
    );
  }

  if (!pokemon) {
    return <p>Chargement...</p>;
  }

  const isNormalFlying =
    types[0]?.name.toLowerCase() === "normal" &&
    types[1]?.name.toLowerCase() === "vol";

  const backgroundImageKey = isNormalFlying
    ? "vol"
    : types[0]
      ? types[0].name.toLowerCase()
      : "plante";
  const backgroundImage = typeImages[backgroundImageKey] || planteImage;

  return (
    <section className={styles.desktop}>
      <div className={styles.pokedexScreenBorder}>
        <div className={styles.pokedexScreen}>
          <hr className={styles.diodeRed1} />
          <hr className={styles.diodeRed2} />
          <div className={styles.pokemonName}>
            <h2>{pokemon.name.fr}</h2>
          </div>
          <figure className={styles.screen}>
            <div className={styles.imageContainer}>
              <img
                src={backgroundImage}
                alt="Background"
                className={styles.backgroundImage}
              />
              {pokemon && (
                <img
                  src={
                    isShiny ? pokemon.sprites.shiny : pokemon.sprites.regular
                  }
                  alt={pokemon.name.fr}
                  className={styles.pokemonImage}
                />
              )}
            </div>
          </figure>
          <div className={styles.diodeDesk}>
            <hr className={styles.diodeDeskLight} />
          </div>
          <div className={styles.barContainer}>
            <hr className={styles.bar1} />
            <hr className={styles.bar2} />
            <hr className={styles.bar3} />
            <hr className={styles.bar4} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default DeskPokedexScreen;
