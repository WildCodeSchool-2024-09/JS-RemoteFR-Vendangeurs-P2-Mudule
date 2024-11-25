import bush from "../../public/bush.webp";
import fence_corner from "../../public/fence_corner.webp";
import fence_horizontal from "../../public/fence_horizontal.webp";
import fence_vertical from "../../public/fence_vertical.webp";
import lac_vertical from "../../public/lac_vertical.webp";
import road from "../../public/road.webp";
import tree from "../../public/tree.webp";
import water from "../../public/water.webp";
import water_shadow from "../../public/water_shadow.webp";
import styles from "../styles/DeskFooter.module.css";

export default function DeskFooter() {
  const trees = [];
  const bushes = [];
  const fences_verticales = [];
  const fences_horizontales = [];
  const lac_verticales = [];

  for (let i = 1; i <= 16; i++) {
    trees.push(
      <img
        key={`tree_${i}`}
        className={styles[`tree_${i}`]}
        src={tree}
        alt="arbre"
      />,
    );
  }

  for (let i = 1; i <= 22; i++) {
    bushes.push(
      <img
        key={`bush_${i}`}
        className={styles[`bush_${i}`]}
        src={bush}
        alt="buisson"
      />,
    );
  }

  for (let i = 1; i <= 4; i++) {
    fences_verticales.push(
      <img
        key={`fence_vertical_${i}`}
        className={styles[`fence_vertical_${i}`]}
        src={fence_vertical}
        alt="barrière vertical"
      />,
    );
  }

  for (let i = 1; i <= 4; i++) {
    fences_horizontales.push(
      <img
        key={`fence_horizontal_${i}`}
        className={styles[`fence_horizontal_${i}`]}
        src={fence_horizontal}
        alt="barrière horizontal"
      />,
    );
  }

  for (let i = 1; i <= 4; i++) {
    lac_verticales.push(
      <img
        key={`lac_vertical_${i}`}
        className={styles[`lac_vertical_${i}`]}
        src={lac_vertical}
        alt="bord de lac"
      />,
    );
  }

  return (
    <footer className={styles.footer}>
      {trees}
      {bushes}
      {fences_verticales}
      {fences_horizontales}
      {lac_verticales}
      <img className={styles.road_1} src={road} alt="chemin de terre" />
      <img className={styles.road_2} src={road} alt="chemin de terre" />
      <img
        className={styles.fence_corner}
        src={fence_corner}
        alt="coin de barrière"
      />
      <img className={styles.water} src={water} alt="lac" />
      <img
        className={styles.water_shadow}
        src={water_shadow}
        alt="ombre de lac"
      />
      <img
        className={styles.water_shadow_2}
        src={water_shadow}
        alt="ombre de lac"
      />
    </footer>
  );
}
