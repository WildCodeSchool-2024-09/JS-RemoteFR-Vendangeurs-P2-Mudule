import styles from "../styles/DeskRightPanel.module.css";

export default function DeskRightPanel() {
  return (
    <section className={styles.deskRightPanel}>
      <div className={styles.deskRightPanelBorder}>
        <div className={styles.pokedexIntern}>
          <hr className={styles.reflectIntern1} />
          <hr className={styles.reflectIntern2} />
        </div>
      </div>
    </section>
  );
}
