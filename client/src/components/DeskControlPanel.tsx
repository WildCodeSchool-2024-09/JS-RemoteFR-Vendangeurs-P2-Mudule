import type React from "react";
import { useScroll } from "../context/scroll";
import styles from "../styles/DeskControlPanel.module.css";

interface DeskControlPanelProps {
  pokedex_id: number | null;
  error: string | null;
  onIncrement: () => void;
  onDecrement: () => void;
}

export default function DeskControlPanel({
  pokedex_id,
  error,
  onDecrement,
  onIncrement,
}: DeskControlPanelProps) {
  const handleKeyDown = (
    event: React.KeyboardEvent<HTMLSpanElement>,
    action: () => void,
  ) => {
    if (event.key === "Enter" || event.key === " ") {
      action();
    }
  };

  const scrollContext = useScroll();
  const scrollUp = scrollContext?.scrollUp;
  const scrollDown = scrollContext?.scrollDown;

  return (
    <section className={styles.deskControlPanel}>
      <div className={styles.panelContainer}>
        <span className={styles.shinyButton}>
          <span className={styles.shinyButtonShadow}>
            <hr className={styles.shinyButtonCenter} />
          </span>
        </span>
        <div className={styles.displayNumber}>
          <h3>{error ? "N°404" : `N°${pokedex_id}`}</h3>
        </div>
        <div className={styles.controlContainer}>
          <div className={styles.control}>
            <div className={styles.controlShadow}>
              <span
                className={styles.controlTop}
                onClick={scrollUp}
                onKeyDown={scrollUp}
              >
                <span className={styles.controlTopShadow}>
                  <hr />
                </span>
              </span>
              <span
                className={styles.controlRight}
                onClick={onIncrement}
                onKeyDown={(event) => handleKeyDown(event, onIncrement)}
              >
                <span className={styles.controlRightShadow}>
                  <hr />
                </span>
              </span>
              <span
                className={styles.controlBottom}
                onClick={scrollDown}
                onKeyDown={scrollDown}
              >
                <span className={styles.controlBottomShadow}>
                  <hr />
                </span>
              </span>
              <span
                className={styles.controlLeft}
                onClick={onDecrement}
                onKeyDown={(event) => handleKeyDown(event, onDecrement)}
              >
                <span className={styles.controlLeftShadow}>
                  <hr />
                </span>
              </span>
              <span className={styles.controlCenter}>
                <span>
                  <hr />
                </span>
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
