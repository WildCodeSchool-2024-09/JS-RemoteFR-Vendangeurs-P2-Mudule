import styles from "../styles/Pokedex.module.css";
import PokedexDetails from "./PokedexDetails";
import PokedexHeader from "./PokedexHeader";
import PokedexScreen from "./PokedexScreen";
import PokedexSearchBar from "./PokedexSearchBar";
import PokedexSwitchButtons from "./PokedexSwitchButton";

import { useEffect, useState } from "react";

interface Pokemon {
  name: { fr: string };
  sprites: { regular: string };
  pokedex_id: number;
  category: string;
  types: [{ name: string }, { name: string }];
  talents: [{ name: string }, { name: string }, { name: string }];
  evolution: { pre: [{ name: string }]; next: [{ name: string }] };
  height: string;
  weight: string;
}

export default function Pokedex() {
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
      <div className={styles.pokedex}>
        <PokedexHeader />
        <div className={styles.borderIternTop}>
          <hr />
        </div>
        <hr className={styles.reflect1} />
        <hr className={styles.reflect2} />
        <PokedexSearchBar />
        <PokedexScreen pokemon={pokemon} />
        <PokedexSwitchButtons
          onDecrement={decrementPokemonIndex}
          onIncrement={incrementPokemonIndex}
        />
        <PokedexDetails description={pokemon} />
        <div className={styles.borderIternBottom}>
          <hr className={styles.hrTop} />
          <hr className={styles.hrBottom} />
        </div>
      </div>
    </>
  );
}
