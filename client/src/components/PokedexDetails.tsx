import styles from "../styles/PokedexDetails.module.css";

interface Description {
  description: {
    category: string;
    name: { fr: string };
    types: [{ name: string }, { name: string }];
    talents: [{ name: string }, { name: string }, { name: string }];
    evolution: { pre: [{ name: string }]; next: [{ name: string }] };
    height: string;
    weight: string;
    pokedex_id: number;
  } | null;
}

export default function PokedexDetails({ description }: Description) {
  if (!description) {
    return <p>Chargement...</p>;
  }

  return (
    <>
      <section className={styles.pokedexDetails}>
        <div className={styles.billboard}>
          <h3>{description.name?.fr}</h3>
          <p>Pokemon de type :</p>
          <p> - {description.types[0]?.name}</p>
          {description.types[1]?.name && <p> - {description.types[1].name}</p>}
          <p>Il fait partie de la catégorie des {description.category}</p>
          <p>Il peut possèder des capacités tel que :</p>
          <p> - {description.talents[0]?.name}</p>
          {description.talents[1]?.name && (
            <p> - {description.talents[1].name}</p>
          )}
          {description.talents[2]?.name && (
            <p> - {description.talents[2].name}</p>
          )}
          {description.evolution?.pre?.[0]?.name && (
            <p>Sa pré-évolution est {description.evolution.pre[0].name}</p>
          )}
          {description.evolution?.next?.[0]?.name && (
            <p>Il évolue en {description.evolution.next[0].name}</p>
          )}
          <p>Sa taille moyenne est de :</p>
          <p> - {description.height}</p>
          <p>Son poids moyen est lui de :</p>
          <p> - {description.weight}</p>
        </div>
        <div>
          <h3 className={styles.idNumber}>N°{description.pokedex_id} </h3>
        </div>
        <button type="button">
          <figure>
            <img src="" alt="ICON-BRUITAGE" />
          </figure>
        </button>
      </section>
    </>
  );
}
