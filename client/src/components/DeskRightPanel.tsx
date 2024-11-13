import styles from "../styles/DeskRightPanel.module.css";
import DeskPokedexSearchBar from "./DeskPokedexSearchBar";
import DeskSound from "./DeskSound";
import DeskType from "./DeskType";

export default function DeskRightPanel() {
  return (
    <section className={styles.deskRightPanel}>
      <div className={styles.deskRightPanelBorder}>
        <div className={styles.pokedexIntern}>
          <div className={styles.rightPanel}>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente
              ea exercitationem cum, odio dicta et pariatur optio ut vitae quam
              excepturi, atque expedita earum, ullam laborum voluptates nostrum
              fugit cupiditate! earum, ullam laborum voluptates nostrum fugit
              cupiditate! earum, ullam laborum voluptates nostrum fugit
              cupiditate!
            </p>
            <DeskType />
            <DeskSound />
            <DeskPokedexSearchBar />
          </div>
          <hr className={styles.reflectIntern1} />
          <hr className={styles.reflectIntern2} />
        </div>
      </div>
    </section>
  );
}
