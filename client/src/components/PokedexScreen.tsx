import data from "../services/data.json";
import styles from "../styles/PokedexScreen.module.css";

interface PokemonScreen {
  pokemon: {
    name: {
      fr: string;
    };
    sprites: {
      regular: string;
    };
  };
  types: { name: string }[];
}

export default function PokedexScreen({ pokemon, types }: PokemonScreen) {
  if (!pokemon) {
    return <p>Chargement...</p>;
  }

  const getTypeData = (typeName: string) => {
    return data.type.find(
      (t: { name: string }) => t.name.toLowerCase() === typeName.toLowerCase(),
    );
  };

  return (
    <section className={styles.desktop}>
      <div className={styles.pokedexScreen}>
        <hr className={styles.diodeRed1} />
        <div className={styles.pokemonName}>
          <h2>{pokemon.name.fr}</h2>
        </div>
        <input type="checkbox" name="TOGGLE-SWITCH-ON-OFF" id="" />
        <figure className={styles.screen}>
          <img src={pokemon.sprites.regular} alt={pokemon.name.fr} />
        </figure>
        <div className={styles.displayType}>
          <span>
            {(() => {
              const typeData = getTypeData(types[0].name);
              if (!typeData) return null;
              const { name } = typeData;
              return types[0].name.toLowerCase() === name.toLowerCase() ? (
                <img src={typeData.vanilla} alt={name} />
              ) : null;
            })()}
          </span>
          {types[1] ? (
            <span>
              {(() => {
                const typeData = getTypeData(types[1].name);
                if (!typeData) return null;
                const { name } = typeData;
                return types[1].name.toLowerCase() === name.toLowerCase() ? (
                  <img src={typeData.vanilla} alt={name} />
                ) : null;
              })()}
            </span>
          ) : (
            <span>
              <span className={styles.typeNone}>
                <hr />
              </span>
            </span>
          )}
        </div>
        <button type="button">
          <hr />
        </button>
        <div className={styles.barContainer}>
          <hr className={styles.bar1} />
          <hr className={styles.bar2} />
          <hr className={styles.bar3} />
          <hr className={styles.bar4} />
        </div>
      </div>
    </section>
  );
}
