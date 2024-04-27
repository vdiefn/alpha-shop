import React from "react";
import styles from "./StepThree.module.css";

function StepThree() {
  return (
    <div className="step-three">
      <section className="form-container col col-12">

        <form className="col col-12" data-phase="address">
          <div className={styles.formTitle}>
            <h3 className={styles.formTitleText}>寄送地址</h3>
          </div>

          <section className={styles.formBody}>

            <div className={styles.cardholder}>
              <label className={styles.cardholderLabel}>持卡人姓名</label>
              <input type="text" placeholder="John Doe" size='50' className={styles.cardholderInput} />
            </div>


            <div className={styles.cardNumber}>
              <label className={styles.cardNumberlabel}>卡號</label>
              <input type="number" placeholder="1111 2222 3333 4444" className={styles.cardNumberInput} />
            </div>

            <div className={styles.expiredDate}>
              <label className={styles.expiredDatelabel}>有效期限</label>
              <input type="month" placeholder="MM/YY" size='50' className={styles.expiredDateInput} />
            </div>

            <div className={styles.ccv}>
              <label className={styles.ccvLabel}>CVC/CCV</label>
              <input type="number" placeholder="123" size='3' className={styles.ccvInput} />
            </div>

          </section>
        </form>
      </section>
    </div>
  );
}

export default StepThree