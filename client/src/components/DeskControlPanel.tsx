import styles from "../styles/DeskControlPanel.module.css";

export default function DeskControlPanel() {
  return (
    <section className={styles.deskControlPanel}>
      <div className={styles.panelContainer}>
        <span className={styles.shinyButton}>
          <span className={styles.shinyButtonShadow}>
            <hr className={styles.shinyButtonCenter} />
          </span>
        </span>
        <div className={styles.displayNumber}>
          <h3>N°152</h3>
        </div>
        <div className={styles.controlContainer}>
          <div className={styles.control}>
            <div className={styles.controlShadow}>
              <span className={styles.controlTop}>
                <span className={styles.controlTopShadow}>
                  <hr />
                </span>
              </span>
              <span className={styles.controlRight}>
                <span className={styles.controlRightShadow}>
                  <hr />
                </span>
              </span>
              <span className={styles.controlBottom}>
                <span className={styles.controlBottomShadow}>
                  <hr />
                </span>
              </span>
              <span className={styles.controlLeft}>
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
