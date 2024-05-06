import React from "react"
import styles from "./StepProgress.module.css";

function StepProgress() {
  return (
    <div className={styles.stepProgress}>
      {/* <!-- register-title --> */}
      <div className={styles.title}>
        <h2 className={styles.registerTitle}>結帳</h2>
      </div>

       {/*  register-progress  */}
      <section className={styles.progressContainer}>
        <div className={styles.progressGroupOne}>
          <div className={styles.progressIcon}>
            <span className={styles.text}>1</span>
          </div>
          <span className={styles.progressLabel}>寄送地址</span>
        </div>
        <span className={styles.connectLine} data-order="1"></span>
        <div className={styles.progressGroupTwo} data-phase="shipping">
          <span className={styles.progressIcon}>
            <span className={styles.text}>2</span>
          </span>
          <span className={styles.progressLabel}>運送方式</span>
        </div>
        <span className={styles.connectLine} data-order="2"></span>
        <div className={styles.progressGroupThree} data-phase="credit-card">
          <span className={styles.progressIcon}>
            <span className={styles.text}>3</span>
          </span>
          <span className={styles.progressLabel}>付款資訊</span>
        </div>
      </section>
    </div>
  );
}

export default StepProgress;