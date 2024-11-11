import styles from "../styles/PokedexDetails.module.css";

export default function PokedexDetails() {
  return (
    <>
      <section className={styles.pokedexDetails}>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sunt iusto
          ipsa hic reprehenderit in vitae voluptatibus illum optio a. Quas
          eligendi iusto expedita nihil animi aliquam amet suscipit commodi
          dolorum.
        </p>
        <div>
          <h3>N°152</h3>
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
