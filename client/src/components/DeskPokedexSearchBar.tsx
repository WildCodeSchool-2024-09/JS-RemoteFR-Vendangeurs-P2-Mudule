import styles from "../styles/DeskPokedexSearchBar.module.css";

export default function DeskPokedexSearchBar() {
  return (
    <nav className={styles.pokedexSearchBarDesk}>
      <fieldset>
        <input type="text" placeholder="Trouvez votre Pokemon . . ." />
      </fieldset>
    </nav>
  );
}
