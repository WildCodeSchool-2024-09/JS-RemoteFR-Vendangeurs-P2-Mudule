import styles from "../styles/PokedexSearchBar.module.css";

export default function PokedexSearchBar() {
  return (
    <nav className={styles.pokedexSearchBar}>
      <fieldset>
        <input type="text" placeholder="Trouvez votre Pokemon . . ." />
      </fieldset>
    </nav>
  );
}
