import { useEffect, useRef, useState } from "react";
import styles from "../styles/DeskSound.module.css";

interface DeskSoundProps {
  pokemonImage: string | null;
  error: string | null;
}

const DeskSound: React.FC<DeskSoundProps> = ({ pokemonImage, error }) => {
  const [on, setOn] = useState<boolean>(true);
  const audioRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = 0.14;
      if (on) {
        audioRef.current.play().catch((error) => {
          console.error("Error playing audio:", error);
        });
      }
    }
  }, [on]);

  const toggleOn = () => {
    if (audioRef.current) {
      audioRef.current.play().catch((error) => {
        console.error("Error playing audio:", error);
      });
      setOn(true);
    }
  };

  const toggleOff = () => {
    if (audioRef.current) {
      audioRef.current.pause();
      setOn(false);
    }
  };

  return (
    <section className={styles.deskSound}>
      <audio ref={audioRef} src="./Gen2_intro.mp3" autoPlay>
        <track
          kind="captions"
          src="/captions.vtt"
          srcLang="en"
          label="English captions"
        />
      </audio>
      <div className={styles.blackBars}>
        <hr />
        <hr />
      </div>
      <div className={styles.soundButtonsContainer}>
        <div className={styles.soundButtons}>
          <span
            className={styles.buttonShadowOn}
            onClick={toggleOn}
            onKeyDown={toggleOn}
          >
            <span className="material-symbols-outlined">volume_up</span>
          </span>
          <span
            className={styles.buttonShadowOff}
            onClick={toggleOff}
            onKeyDown={toggleOff}
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
