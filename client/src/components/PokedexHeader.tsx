import styles from "../styles/PokedexHeader.module.css";

export default function PokedexHeader() {
  return (
    <section className={styles.pokedexHeader}>
      <span>
        <hr className={styles.menuDiode1} />
        <hr className={styles.menuDiode2} />
      </span>
      <div className={styles.diodeContainer}>
        <div className={styles.diodeRed}>
          <hr />
        </div>
        <div className={styles.diodeYellow}>
          <hr />
        </div>
        <div className={styles.diodeGreen}>
          <hr />
        </div>
      </div>
      <h1>Pokédule</h1>
      <hr className={styles.reflect1} />
      <hr className={styles.reflect2} />
    </section>
  );
}
