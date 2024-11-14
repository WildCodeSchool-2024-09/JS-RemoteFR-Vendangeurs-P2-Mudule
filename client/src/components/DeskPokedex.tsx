import styles from "../styles/DeskPokedex.module.css";
import DeskHeader from "./DeskHeader";
import DeskLeftPanel from "./DeskLeftPanel";
import DeskRightPanel from "./DeskRightPanel";

import { useEffect, useState } from "react";

interface Pokemon {
  name: {
    fr: string;
  };
  sprites: {
    regular: string;
  };
  pokedex_id: number;
  category: string;
  types: [{ name: string }, { name: string }];
  talents: [{ name: string }, { name: string }, { name: string }];
  evolution: { pre: [{ name: string }]; next: [{ name: string }] };
  height: string;
  weight: string;
}

export default function DeskPokedex() {
  const [pokemon, setPokemon] = useState<Pokemon | null>(null);
  const [pokemonIndex, setPokemonIndex] = useState(0);

  useEffect(() => {
    const getPokemon = () => {
      fetch("https://tyradex.app/api/v1/gen/2")
        .then((response) => response.json())
        .then((data) => setPokemon(data[pokemonIndex]))
        .catch((error) => console.error("Error fetching data:", error));
    };

    getPokemon();
  }, [pokemonIndex]);

  const incrementPokemonIndex = () => {
    setPokemonIndex((prevIndex) => (prevIndex < 99 ? prevIndex + 1 : 0));
  };

  const decrementPokemonIndex = () => {
    setPokemonIndex((prevIndex) => (pokemonIndex > 0 ? prevIndex - 1 : 99));
  };

  return (
    <>
      <DeskHeader />
      <section className={styles.deskPokedex}>
        <div className={styles.pokedexContainer}>
          <DeskLeftPanel
            pokemon={pokemon}
            onIncrement={incrementPokemonIndex}
            onDecrement={decrementPokemonIndex}
          />
          <DeskRightPanel description={pokemon} />
        </div>
      </section>
    </>
  );
}
