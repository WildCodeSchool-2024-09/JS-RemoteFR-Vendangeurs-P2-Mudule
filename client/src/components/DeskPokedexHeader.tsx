import styles from "../styles/DeskPokedexHeader.module.css";

export default function DeskPokedexHeader() {
  return (
    <section className={styles.pokedexBorder}>
      <div className={styles.pokedexHeader}>
        <span className={styles.menuDiodeContainer}>
          <span className={styles.menuDiodeReflect}>
            <span>
              <hr />
            </span>
          </span>
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
