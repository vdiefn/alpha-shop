import React from "react";
import styles from "./StepTwo.module.css";

function StepTwo() {
  return (
    <div className={styles.stepTwo}>
      <section className="form-container col col-12">

        <form className="col col-12" data-phase="address">
          <div className={styles.formTitle}>
            <h3 className={styles.formTitleText}>運送方式</h3>
          </div>

          <section className={styles.formBody}>

            <div className={styles.radioGroup}>
              <input type="radio" className={styles.radioCheck} id="regularDelivery"></input>
              <label className={styles.radioTitle} htmlFor="regularDilivery">
                <p>標準運送</p>
                <span className={styles.deliveryDay}>約3-7個工作天</span>
              </label>
              <div className={styles.deliveryFee}>
                <span>免費</span>
              </div>
            </div>

            <div className={styles.radioGroup}>
              <input type="radio" className={styles.radioCheck} id="rapidDelivery"></input>
              <label className={styles.radioTitle} htmlFor="rapidDilivery">
                <p>DHL貨運</p>
                <span className={styles.deliveryDay}>48小時內送達</span>
              </label>
              <div className={styles.deliveryFee}>
                <span>$500</span>
              </div>
            </div>


          </section>
        </form>
      </section>
    </div>
  );
}

export default StepTwo