import type React from "react";
import styles from "../styles/DeskSound.module.css";

interface DeskSoundProps {
  pokemonImage: string | null;
  error: string | null;
}

const DeskSound: React.FC<DeskSoundProps> = ({ pokemonImage, error }) => {
  return (
    <section className={styles.deskSound}>
      <div className={styles.blackBars}>
        <hr />
        <hr />
      </div>
      <div className={styles.soundButtonsContainer}>
        <div className={styles.soundButtons}>
          <span className={styles.buttonShadowOn}>
            <span>
              <img src="#" alt="#" />
            </span>
          </span>
          <span className={styles.buttonShadowOff}>
            <span>
              <img src="#" alt="#" />
            </span>
          </span>
          <span className={styles.buttonShadowBark}>
            <span>
              {error ? (
                <p>désolé</p>
              ) : (
                <img src={pokemonImage || "#"} alt="Pokemon" />
              )}
            </span>
          </span>
        </div>
        <div className={styles.diodeYellow}>
          <span className={styles.diodeYellowReflect1}>
            <span className={styles.diodeYellowReflect2}>
              <hr />
            </span>
          </span>
        </div>
      </div>
    </section>
  );
};

export default DeskSound;
