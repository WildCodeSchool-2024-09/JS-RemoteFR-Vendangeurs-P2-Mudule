import Ho_oh from "../../public/Ho-oh.webp";
import title from "../../public/Title.webp";
import cloudOne from "../../public/cloud_1.webp";
import styles from "../styles/DeskHeader.module.css";

export default function DeskHeader() {
  return (
    <header className={styles.header}>
      <div>
        <img src={title} alt="titre Pokédule" />
      </div>
      <img
        className={styles.Ho_oh}
        src={Ho_oh}
        alt="Ho-oh vole dans le ciel !"
      />
      <img className={styles.cloudOne} src={cloudOne} alt="nuage" />
      <img className={styles.cloudTwo} src={cloudOne} alt="nuage" />
      <img className={styles.cloudThree} src={cloudOne} alt="nuage" />
      <img className={styles.cloudFour} src={cloudOne} alt="nuage" />
      <img className={styles.cloudFive} src={cloudOne} alt="nuage" />
      <span className={styles.sky} />
    </header>
  );
}
