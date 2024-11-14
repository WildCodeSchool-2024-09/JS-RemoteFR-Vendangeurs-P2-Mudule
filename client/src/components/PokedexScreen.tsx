import type React from "react";
import styles from "../styles/PokedexScreen.module.css";

interface PokedexScreenProps {
  pokemon: {
    name: {
      fr: string;
    };
    sprites: {
      regular: string;
    };
  } | null;
  error: string | null;
}

const PokedexScreen: React.FC<PokedexScreenProps> = ({ pokemon, error }) => {
  if (error) {
    return (
      <section className={styles.desktop}>
        <div className={styles.pokedexScreen}>
          <hr className={styles.diodeRed1} />
          <div className={styles.pokemonName} />
          <input type="checkbox" name="TOGGLE-SWITCH-ON-OFF" id="" />
          <figure className={styles.screen}>
            <p className={styles.errorMessage}>
              Désolé je ne trouve pas ce Pokémon !
            </p>
          </figure>
          <figure className={styles.type1}>
            <img src="" alt="" />
          </figure>
          <figure className={styles.type2}>
            <img src="" alt="" />
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

  if (!pokemon) {
    return <p>Chargement...</p>;
  }

  return (
    <section className={styles.desktop}>
      <div className={styles.pokedexScreen}>
        <hr className={styles.diodeRed1} />
        <div className={styles.pokemonName}>
          <h2>{pokemon.name.fr}</h2>
        </div>
        <input type="checkbox" name="TOGGLE-SWITCH-ON-OFF" id="" />
        <figure className={styles.screen}>
          <img src={pokemon.sprites.regular} alt={pokemon.name.fr} />
        </figure>
        <figure className={styles.type1}>
          <img src="" alt="" />
        </figure>
        <figure className={styles.type2}>
          <img src="" alt="" />
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
};

export default PokedexScreen;
