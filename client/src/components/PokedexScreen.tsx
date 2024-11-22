import type React from "react";
import { useState } from "react";
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
import { useMusic } from "../context/music";
import data from "../services/data.json";
import styles from "../styles/PokedexScreen.module.css";

interface PokedexScreenProps {
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
const PokedexScreen: React.FC<PokedexScreenProps> = ({
  pokemon,
  error,
  types,
}) => {
  const { musicToggle } = useMusic();
  const [isShiny, setIsShiny] = useState(false);

  const toggleShiny = () => {
    setIsShiny(!isShiny);
  };

  if (error) {
    return (
      <section className={styles.desktop}>
        <div className={styles.pokedexScreen}>
          <hr className={styles.diodeRed1} />
          <div className={styles.pokemonName} />
          <input
            type="checkbox"
            name="TOGGLE-SWITCH-ON-OFF"
            id=""
            onClick={musicToggle}
            onKeyDown={musicToggle}
          />
          <figure className={styles.screen}>
            <p className={styles.errorMessage}>
              Désolé je ne trouve pas ce Pokémon !
            </p>
          </figure>
          <figure className={styles.type1}>
            <img src="#" alt="diode" />
          </figure>
          <figure className={styles.type2}>
            <img src="#" alt="diode" />
          </figure>
          <button type="button">
            <hr />o
          </button>
          <div className={styles.barContainer}>
            <hr className={styles.bar1} />
            <hr className={styles.bar2} />
            <hr className={styles.bar3} />
            <hr className={styles.bar4} />
          </div>
        </div>
        <hr className={styles.border} />
        <hr className={styles.hide} />
      </section>
    );
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

  const getTypeData = (typeName: string) => {
    return data.type.find(
      (t: { name: string }) => t.name.toLowerCase() === typeName.toLowerCase(),
    );
  };

  return (
    <section className={styles.desktop}>
      <div className={styles.pokedexScreenBorder}>
        <div className={styles.pokedexScreen}>
          <hr className={styles.diodeRed1} />
          <input
            type="checkbox"
            name="TOGGLE-SWITCH-ON-OFF"
            id=""
            onClick={musicToggle}
            onKeyDown={musicToggle}
          />
          <div className={styles.pokemonName}>
            <h2>{pokemon?.name.fr}</h2>
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
          <div className={styles.displayType}>
            {types[0] && (
              <span>
                {(() => {
                  const typeData = getTypeData(types[0].name);
                  if (!typeData) return null;
                  const { name } = typeData;
                  return types[0].name.toLowerCase() === name.toLowerCase() ? (
                    <img src={typeData.vanilla} alt={name} />
                  ) : null;
                })()}
              </span>
            )}
            {types[1] ? (
              <span>
                {(() => {
                  const typeData = getTypeData(types[1].name);
                  if (!typeData) return null;
                  const { name } = typeData;
                  return types[1].name.toLowerCase() === name.toLowerCase() ? (
                    <img src={typeData.vanilla} alt={name} />
                  ) : null;
                })()}
              </span>
            ) : (
              <span>
                <span className={styles.typeNone}>
                  <hr />
                </span>
              </span>
            )}
          </div>
          <button
            className={styles.boutonshiny}
            type="button"
            onClick={toggleShiny}
          >
            <hr />
          </button>
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

export default PokedexScreen;
