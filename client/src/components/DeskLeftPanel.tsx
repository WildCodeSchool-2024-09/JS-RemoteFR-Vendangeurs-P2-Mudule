import styles from "../styles/DeskLeftPanel.module.css";
import DeskHinge from "./DeskHinge";
import DeskPokedexHeader from "./DeskPokedexHeader";

export default function DeskLeftPanel() {
  return (
    <section className={styles.deskLeftPanel}>
      <div className={styles.deskPokedexHeader}>
        <DeskPokedexHeader />
      </div>
      <div className={styles.deskHinge}>
        <DeskHinge />
      </div>
      <div className={styles.pokedexInternBorder}>
        <div className={styles.pokedexIntern}>
          <hr className={styles.reflectIntern1} />
          <hr className={styles.reflectIntern2} />
        </div>
      </div>
    </section>
  );
}
