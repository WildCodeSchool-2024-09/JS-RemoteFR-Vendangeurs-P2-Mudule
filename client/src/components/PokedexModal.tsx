import styles from "../styles/PokedexModal.module.css";

export default function PokedexModal() {
  return (
    <>
      <section className={styles.desktop}>
        <div className={styles.pokedexScreenBorder}>
          <div className={styles.pokedexScreen}>
            <hr className={styles.diodeRed1} />
            <hr className={styles.diodeRed2} />
            <div className={styles.screen}>
              <p>option</p>
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
    </>
  );
}
