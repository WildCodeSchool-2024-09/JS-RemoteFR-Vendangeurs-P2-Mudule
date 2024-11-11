import styles from "../styles/DeskPokedexScreen.module.css";

export default function DeskPokedexScreen() {
  return (
    <section className={styles.desktop}>
      <div className={styles.pokedexScreenBorder}>
        <div className={styles.pokedexScreen}>
          <hr className={styles.diodeRed1} />
          <hr className={styles.diodeRed2} />
          <div className={styles.pokemonName}>
            <h2>Name</h2>
          </div>
          <figure className={styles.screen}>
            <img src="" alt="IMAGE-POKEMON" />
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
