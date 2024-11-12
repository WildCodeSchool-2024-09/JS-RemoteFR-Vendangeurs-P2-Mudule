import styles from "../styles/DeskPokedexScreen.module.css";

interface PokemonScreen {
  pokemon: {
    name: {
      fr: string;
    };
    sprites: {
      regular: string;
    };
  } | null;
}

export default function DeskPokedexScreen({ pokemon }: PokemonScreen) {
  if (!pokemon) {
    return <p>Chargement...</p>;
  }

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
            <img src={pokemon.sprites.regular} alt={pokemon.name.fr} />
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
}
