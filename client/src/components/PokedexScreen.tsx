import styles from "../styles/PokedexScreen.module.css";

export default function PokedexScreen() {
  return (
    <section className={styles.desktop}>
      <div className={styles.pokedexScreen}>
        <hr className={styles.diodeRed1} />
        <div className={styles.pokemonName}>
          <h2>Name</h2>
        </div>
        <input type="checkbox" name="TOGGLE-SWITCH-ON-OFF" id="" />
        <figure className={styles.screen}>
          <img src="" alt="IMAGE-POKEMON" />
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
