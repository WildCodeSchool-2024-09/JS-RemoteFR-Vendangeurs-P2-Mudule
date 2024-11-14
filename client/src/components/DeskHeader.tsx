import Ho_oh from "../../public/Ho-oh.webp";
import cloudOne from "../../public/cloud_1.webp";
import styles from "../styles/DeskHeader.module.css";
// import cloudTwo from "../../public/cloud-2.webp";
// import cloudThree from "../../public/cloud-3.webp";
// import cloudFour from "../../public/cloud-4.webp";
// import cloudFive from "../../public/cloud-5.webp";

export default function DeskHeader() {
  return (
    <header className={styles.header}>
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
