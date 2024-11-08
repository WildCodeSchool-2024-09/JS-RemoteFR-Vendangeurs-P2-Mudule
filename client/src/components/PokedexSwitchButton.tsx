import styles from "../styles/PokedexSwitchButton.module.css";

export default function PokedexSwitchButtons() {
  return (
    <>
      <button type="button" className={styles.leftButton}>
        <span className="material-symbols-outlined">arrow_right</span>
      </button>
      <button type="button" className={styles.rightButton}>
        <span className="material-symbols-outlined">arrow_right</span>
      </button>
    </>
  );
}
