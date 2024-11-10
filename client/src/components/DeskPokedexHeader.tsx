import styles from "../styles/DeskPokedexHeader.module.css";

export default function DeskPokedexHeader() {
  return (
    <section className={styles.pokedexBorder}>
      <div className={styles.pokedexHeader}>
        <span>
          <hr className={styles.menuDiode1} />
          <hr className={styles.menuDiode2} />
          <hr className={styles.menuDiode3} />
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
        <hr className={styles.reflect1} />
        <hr className={styles.reflect2} />
      </div>
    </section>
  );
}
