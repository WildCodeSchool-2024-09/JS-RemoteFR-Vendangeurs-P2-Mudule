import styles from "../styles/DeskRightPanel.module.css";
import DeskPokedexSearchBar from "./DeskPokedexSearchBar";
import DeskSound from "./DeskSound";
import DeskType from "./DeskType.tsx";

interface Description {
  description: {
    category: string;
    name: {
      fr: string;
    };
    types: [
      {
        name: string;
      },
      {
        name: string;
      },
    ];
    talents: [
      {
        name: string;
      },
      {
        name: string;
      },
      {
        name: string;
      },
    ];
    evolution: {
      pre: [
        {
          name: string;
        },
      ];
      next: [
        {
          name: string;
        },
      ];
    };
    height: string;
    weight: string;
  } | null;
}

export default function DeskRightPanel({ description }: Description) {
  if (!description) {
    return <p>Chargement...</p>;
  }

  return (
    <section className={styles.deskRightPanel}>
      <div className={styles.deskRightPanelBorder}>
        <div className={styles.pokedexIntern}>
          <div className={styles.rightPanel}>
            <div className={styles.billboard}>
              <h3>{description.name?.fr}</h3>
              <p>Pokémon de type :</p>
              <p> - {description.types[0]?.name}</p>
              {description.types[1]?.name && (
                <p> - {description.types[1].name}</p>
              )}
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
            <DeskType types={description.types} />
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
