import Ho_oh from "../../public/Ho-oh.webp";
import title from "../../public/Title.webp";
import cloudOne from "../../public/cloud_1.webp";
import styles from "../styles/DeskHeader.module.css";

export default function DeskHeader() {
  const clouds = [];

  for (let i = 1; i <= 6; i++) {
    clouds.push(
      <img
        key={`cloud_${i}`}
        src={cloudOne}
        className={styles[`cloud_${i}`]}
        alt="nuage"
      />,
    );
  }

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
      {clouds}
      <span className={styles.sky} />
    </header>
  );
}
