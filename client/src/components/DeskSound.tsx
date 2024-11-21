import { useMusic } from "../context/music";
import styles from "../styles/DeskSound.module.css";

interface DeskSoundProps {
  pokemonImage: string | null;
  error: string | null;
}

const DeskSound: React.FC<DeskSoundProps> = ({ pokemonImage, error }) => {
  const musicContext = useMusic();
  const musicOff = musicContext?.musicOff;
  const musicOn = musicContext?.musicOn;

  return (
    <section className={styles.deskSound}>
      <div className={styles.blackBars}>
        <hr />
        <hr />
      </div>
      <div className={styles.soundButtonsContainer}>
        <div className={styles.soundButtons}>
          <span
            className={styles.buttonShadowOn}
            onClick={musicOn}
            onKeyDown={musicOn}
          >
            <span className="material-symbols-outlined">volume_up</span>
          </span>
          <span
            className={styles.buttonShadowOff}
            onClick={musicOff}
            onKeyDown={musicOff}
          >
            <span className="material-symbols-outlined">volume_off</span>
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
