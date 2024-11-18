import { useEffect, useState } from "react";
import styles from "../styles/Pokedex.module.css";
import PokedexHeader from "./PokedexHeader";
import PokedexScreen from "./PokedexScreen";
import PokedexSearchBar from "./PokedexSearchBar";

import PokedexDetails from "./PokedexDetails";
import PokedexSwitchButtons from "./PokedexSwitchButton";

interface Type {
  name: string;
}

interface Talent {
  name: string;
}

interface Evolution {
  pre: { name: string }[] | null;
  next: { name: string }[] | null;
}

interface Sprites {
  regular: string;
}

interface Pokemon {
  category: string;
  name: {
    fr: string;
  };
  types: Type[];
  talents: Talent[];
  evolution: Evolution;
  height: string;
  weight: string;
  sprites: Sprites;
  pokedex_id: number;
}

export default function Pokedex() {
  const [pokemon, setPokemon] = useState<Pokemon | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [pokemonIndex, setPokemonIndex] = useState(0);

  const handleSearch = (searchTerm: string) => {
    fetch(`https://tyradex.app/api/v1/gen/2?name=${searchTerm.toLowerCase()}`)
      .then((response) => {
        if (!response.ok) {
          return response.text().then((text) => {
            throw new Error(text);
          });
        }
        return response.json();
      })
      .then((data) => {
        const index = data.findIndex(
          (pokemon: Pokemon) =>
            pokemon.name.fr.toLowerCase() === searchTerm.toLowerCase(),
        );
        if (index !== -1) {
          setPokemonIndex(index);
          setPokemon(data[index]);
          setError(null);
        } else {
          setError("désolé mais ce pokemon n'existe pas");
          setPokemon(null);
        }
      })
      .catch(() => {
        setError("désolé mais ce pokemon n'existe pas");
        setPokemon(null);
      });
  };

  useEffect(() => {
    const getPokemon = () => {
      fetch("https://tyradex.app/api/v1/gen/2")
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          if (data[pokemonIndex]) {
            const pokemonData: Pokemon = {
              name: { fr: data[pokemonIndex].name.fr },
              sprites: { regular: data[pokemonIndex].sprites.regular },
              pokedex_id: data[pokemonIndex].pokedex_id,
              category: data[pokemonIndex].category,
              types: data[pokemonIndex].types.map((type: Type) => ({
                name: type.name,
              })),
              talents: data[pokemonIndex].talents.map((talent: Talent) => ({
                name: talent.name,
              })),
              evolution: {
                pre: data[pokemonIndex].evolution?.pre || null,
                next: data[pokemonIndex].evolution?.next || null,
              },
              height: data[pokemonIndex].height,
              weight: data[pokemonIndex].weight,
            };
            setPokemon(pokemonData);
            setError(null);
          } else {
            console.error("Pokemon index out of bounds:", pokemonIndex);
            setError("Pokémon not found");
            setPokemon(null);
          }
        })
        .catch(() => {
          setError("Pokémon not found");
          setPokemon(null);
        });
    };

    getPokemon();
  }, [pokemonIndex]);

  const incrementPokemonIndex = () => {
    setPokemonIndex((prevIndex) => (prevIndex < 99 ? prevIndex + 1 : 0));
  };

  const decrementPokemonIndex = () => {
    setPokemonIndex((prevIndex) => (prevIndex > 0 ? prevIndex - 1 : 99));
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
        <PokedexSearchBar onSearch={handleSearch} />
        <PokedexScreen pokemon={pokemon} error={error} />
        <PokedexSwitchButtons
          onDecrement={decrementPokemonIndex}
          onIncrement={incrementPokemonIndex}
        />
        <PokedexDetails description={pokemon} error={error} />
        <div className={styles.borderIternBottom}>
          <hr className={styles.hrTop} />
          <hr className={styles.hrBottom} />
        </div>
      </div>
    </>
  );
}
