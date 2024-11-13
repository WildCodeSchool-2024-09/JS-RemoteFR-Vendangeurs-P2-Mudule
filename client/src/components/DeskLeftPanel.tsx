import styles from "../styles/DeskLeftPanel.module.css";
import DeskControlPanel from "./DeskControlPanel";
import DeskHinge from "./DeskHinge";
import DeskPokedexHeader from "./DeskPokedexHeader";
import DeskPokedexScreen from "./DeskPokedexScreen";
interface Pokemon {
  name: {
    fr: string;
  };
  sprites: {
    regular: string;
  };
  pokedex_id: number;
}

interface DeskLeftPanelProps {
  pokemon: Pokemon | null;
  onIncrement: () => void;
  onDecrement: () => void;
}

export default function DeskLeftPanel({
  pokemon,
  onDecrement,
  onIncrement,
}: DeskLeftPanelProps) {
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
          <DeskPokedexScreen pokemon={pokemon} />
          <DeskControlPanel
            pokedex_id={pokemon ? pokemon.pokedex_id : null}
            onIncrement={onIncrement}
            onDecrement={onDecrement}
          />
          <hr className={styles.reflectIntern1} />
          <hr className={styles.reflectIntern2} />
        </div>
      </div>
    </section>
  );
}
