import styles from "../styles/Pokedex.module.css";
import PokedexDetails from "./PokedexDetails";
import PokedexHeader from "./PokedexHeader";
import PokedexScreen from "./PokedexScreen";
import PokedexSearchBar from "./PokedexSearchBar";
import PokedexSwitchButtons from "./PokedexSwitchButton";

export default function Pokedex() {
  return (
    <>
      <div className={styles.pokedex}>
        <PokedexHeader />
        <div className={styles.borderIternTop}>
          <hr />
        </div>
        <hr className={styles.reflect1} />
        <hr className={styles.reflect2} />
        <PokedexSearchBar />
        <PokedexScreen />
        <PokedexSwitchButtons />
        <PokedexDetails />
        <div className={styles.borderIternBottom}>
          <hr className={styles.hrTop} />
          <hr className={styles.hrBottom} />
        </div>
      </div>
    </>
  );
}
