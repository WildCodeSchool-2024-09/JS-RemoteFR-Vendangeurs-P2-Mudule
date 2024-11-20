import { useEffect, useRef, useState } from "react";
import styles from "../styles/DeskSound.module.css";

export default function DeskSound() {
  const [on, setOn] = useState<boolean>(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = 0.14;
    }
  });

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
      audioRef.current.currentTime = 0;
      setOn(false);
    }
  };

  return (
    <section className={styles.deskSound}>
      {on && (
        <audio ref={audioRef} src="./Gen2_intro.mp3" autoPlay>
          <track
            kind="captions"
            src="/captions.vtt"
            srcLang="en"
            label="English captions"
          />
        </audio>
      )}
      <div className={styles.blackBars}>
        <hr />
        <hr />
      </div>
      <div className={styles.soundButtonsContainer}>
        <div className={styles.soundButtons}>
          <span
            className={styles.buttonShadowOn}
            onClick={toggleOn}
            onKeyDown={(e) => e.key === "Enter" && toggleOn()}
          >
            <span>
              <img src="#" alt="#" />
            </span>
          </span>
          <span
            className={styles.buttonShadowOff}
            onClick={toggleOff}
            onKeyDown={(e) => e.key === "Enter" && toggleOff()}
          >
            <span>
              <img src="#" alt="#" />
            </span>
          </span>
          <span className={styles.buttonShadowBark}>
            <span>
              <img src="#" alt="#" />
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
}
