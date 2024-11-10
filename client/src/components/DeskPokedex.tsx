import styles from "../styles/DeskPokedex.module.css";
import DeskLeftPanel from "./DeskLeftPanel";
import DeskRightPanel from "./DeskRightPanel";

export default function DeskPokedex() {
  return (
    <section className={styles.deskPokedex}>
      <div className={styles.pokedexContainer}>
        <DeskLeftPanel />
        <DeskRightPanel />
      </div>
    </section>
  );
}
