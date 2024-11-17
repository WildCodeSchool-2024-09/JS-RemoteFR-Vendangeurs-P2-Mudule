import bush from "../../public/bush.webp";
import fence_corner from "../../public/fence_corner.webp";
import fence_horizontal from "../../public/fence_horizontal.webp";
import fence_vertical from "../../public/fence_vertical.webp";
import lac_corner from "../../public/lac_corner.webp";
import lac_horizontal from "../../public/lac_horizontal.webp";
import lac_vertical from "../../public/lac_vertical.webp";
import road from "../../public/road.webp";
import tree from "../../public/tree.webp";
import water from "../../public/water.webp";
import water_shadow from "../../public/water_shadow.webp";
import styles from "../styles/DeskFooter.module.css";

export default function DeskFooter() {
  return (
    <footer className={styles.footer}>
      <img className={styles.road_1} src={road} alt="chemin de terre" />
      <img className={styles.road_2} src={road} alt="chemin de terre" />
      <img
        className={styles.fence_vertical_1}
        src={fence_vertical}
        alt="barrière vertical"
      />
      <img
        className={styles.fence_vertical_2}
        src={fence_vertical}
        alt="barrière vertical"
      />
      <img
        className={styles.fence_vertical_3}
        src={fence_vertical}
        alt="barrière vertical"
      />
      <img
        className={styles.fence_vertical_4}
        src={fence_vertical}
        alt="barrière vertical"
      />
      <img
        className={styles.fence_horizontal_1}
        src={fence_horizontal}
        alt="barrière horizontal"
      />
      <img
        className={styles.fence_horizontal_2}
        src={fence_horizontal}
        alt="barrière horizontal"
      />
      <img
        className={styles.fence_horizontal_3}
        src={fence_horizontal}
        alt="barrière horizontal"
      />
      <img
        className={styles.fence_horizontal_4}
        src={fence_horizontal}
        alt="barrière horizontal"
      />
      <img
        className={styles.fence_corner}
        src={fence_corner}
        alt="coin de barrière"
      />
      <img className={styles.tree_1} src={tree} alt="arbre" />
      <img className={styles.tree_2} src={tree} alt="arbre" />
      <img className={styles.tree_3} src={tree} alt="arbre" />
      <img className={styles.tree_4} src={tree} alt="arbre" />
      <img className={styles.tree_5} src={tree} alt="arbre" />
      <img className={styles.tree_6} src={tree} alt="arbre" />
      <img className={styles.tree_7} src={tree} alt="arbre" />
      <img className={styles.tree_8} src={tree} alt="arbre" />
      <img className={styles.tree_9} src={tree} alt="arbre" />
      <img className={styles.tree_10} src={tree} alt="arbre" />
      <img className={styles.tree_11} src={tree} alt="arbre" />
      <img className={styles.tree_12} src={tree} alt="arbre" />
      <img className={styles.tree_13} src={tree} alt="arbre" />
      <img className={styles.tree_14} src={tree} alt="arbre" />
      <img className={styles.tree_15} src={tree} alt="arbre" />
      <img className={styles.tree_16} src={tree} alt="arbre" />
      <img className={styles.bush_1} src={bush} alt="buisson" />
      <img className={styles.bush_2} src={bush} alt="buisson" />
      <img className={styles.bush_3} src={bush} alt="buisson" />
      <img className={styles.bush_4} src={bush} alt="buisson" />
      <img className={styles.bush_5} src={bush} alt="buisson" />
      <img className={styles.bush_6} src={bush} alt="buisson" />
      <img className={styles.bush_7} src={bush} alt="buisson" />
      <img className={styles.bush_8} src={bush} alt="buisson" />
      <img className={styles.bush_9} src={bush} alt="buisson" />
      <img className={styles.bush_10} src={bush} alt="buisson" />
      <img className={styles.bush_11} src={bush} alt="buisson" />
      <img className={styles.bush_12} src={bush} alt="buisson" />
      <img className={styles.bush_13} src={bush} alt="buisson" />
      <img className={styles.bush_14} src={bush} alt="buisson" />
      <img className={styles.bush_15} src={bush} alt="buisson" />
      <img className={styles.bush_16} src={bush} alt="buisson" />
      <img className={styles.bush_17} src={bush} alt="buisson" />
      <img className={styles.bush_18} src={bush} alt="buisson" />
      <img className={styles.bush_19} src={bush} alt="buisson" />
      <img className={styles.bush_20} src={bush} alt="buisson" />
      <img className={styles.bush_21} src={bush} alt="buisson" />
      <img className={styles.bush_22} src={bush} alt="buisson" />
      <img
        className={styles.lac_vertical_1}
        src={lac_vertical}
        alt="bord de lac"
      />
      <img
        className={styles.lac_vertical_2}
        src={lac_vertical}
        alt="bord de lac"
      />
      <img
        className={styles.lac_vertical_3}
        src={lac_vertical}
        alt="bord de lac"
      />
      <img className={styles.lac_corner} src={lac_corner} alt="coin du lac" />
      <img
        className={styles.lac_horizontal}
        src={lac_horizontal}
        alt="bord de lac"
      />
      <img className={styles.water} src={water} alt="lac" />
      <img
        className={styles.water_shadow}
        src={water_shadow}
        alt="ombre de lac"
      />
    </footer>
  );
}
