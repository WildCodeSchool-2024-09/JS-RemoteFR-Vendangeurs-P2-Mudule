import type React from "react";
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
  category: string;
  types: { name: string }[];
  talents: { name: string }[];
  evolution: {
    pre: { name: string }[] | null;
    next: { name: string }[] | null;
  };
  height: string;
  weight: string;
}

interface DeskLeftPanelProps {
  pokemon: Pokemon | null;
  error: string | null;
  onIncrement: () => void;
  onDecrement: () => void;
}

const DeskLeftPanel: React.FC<DeskLeftPanelProps> = ({
  pokemon,
  error,
  onIncrement,
  onDecrement,
}) => {
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
          {pokemon ? (
            <DeskPokedexScreen
              pokemon={pokemon}
              error={error}
              types={pokemon.types}
            />
          ) : (
            <p>Chargement...</p>
          )}
          <DeskControlPanel
            pokedex_id={pokemon ? pokemon.pokedex_id : null}
            error={error}
            onIncrement={onIncrement}
            onDecrement={onDecrement}
          />
          <hr className={styles.reflectIntern1} />
          <hr className={styles.reflectIntern2} />
        </div>
      </div>
    </section>
  );
};

export default DeskLeftPanel;
