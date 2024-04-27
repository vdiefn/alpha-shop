import React from "react";
import styles from "./StepOne.module.css";

function StepOne() {
  return (
    <div className={styles.stepOne}>

      <section className="form-container col col-12">

        <form className="col col-12" data-phase="address">
          <div className={styles.formTitle}>
            <h3 className={styles.formTitleText}>寄送地址</h3>
          </div>

          <section className={styles.formBody}>

            <div className={styles.inputTitle}>
              <div className={styles.labelTitle}>稱謂</div>
              <div className={styles.title}>
                <select>
                  <option value="mr" selected>先生</option>
                  <option value="ms">女士</option>
                  <option value="mx">不明</option>
                </select>
              </div>
            </div>
            <div className={styles.inputName}>
              <div className={styles.labelName}>姓名</div>
              <input type="text" placeholder="請輸入姓名" size='50' className={styles.name}/>
            </div>


            <div className={styles.inputPhone}>
              <div className={styles.labelPhone}>電話</div>
              <input type="tel" placeholder="請輸入行動電話" className={styles.phone} />
            </div>
            <div className={styles.inputEmail}>
              <div className={styles.labelEmail}>Email</div>
              <input type="email" placeholder="請輸入電子郵件" size='50' className={styles.email} />
            </div>


            <div className={styles.inputLocation}>
              <div className={styles.labelLocation}>縣市</div>
              <div className="select-container">
                <select required>
                  <option value="">請選擇縣市</option>
                  <option value="KLU">基隆市</option>
                  <option value="TPH">新北市</option>
                  <option value="TPE">臺北市</option>
                  <option value="TYC">桃園市</option>
                  <option value="HSH">新竹縣</option>
                  <option value="HSC">新竹市</option>
                  <option value="MAC">苗栗市</option>
                  <option value="MAL">苗栗縣</option>
                  <option value="TXG">臺中市</option>
                  <option value="CWH">彰化縣</option>
                  <option value="CWS">彰化市</option>
                  <option value="NTC">南投市</option>
                  <option value="NTO">南投縣</option>
                  <option value="YLH">雲林縣</option>
                  <option value="CHY">嘉義縣</option>
                  <option value="CYI">嘉義市</option>
                  <option value="TNN">臺南市</option>
                  <option value="KHH">高雄市</option>
                  <option value="IUH">屏東縣</option>
                  <option value="PTS">屏東市</option>
                  <option value="ILN">宜蘭縣</option>
                  <option value="ILC">宜蘭市</option>
                  <option value="HWA">花蓮縣</option>
                  <option value="HWC">花蓮市</option>
                  <option value="TTC">臺東市</option>
                  <option value="TTT">臺東縣</option>
                  <option value="PEH">澎湖縣</option>
                  <option value="KMN">金門縣</option>
                  <option value="LNN">連江縣</option>
                </select>
              </div>
            </div>
            <div className={styles.inputAddress}>
              <div className={styles.labelAddress}>地址</div>
              <input type="text" placeholder="請輸入地址" size='50' className={styles.address} />
            </div>

          </section>
        </form>
      </section>
    </div>
  );
}

export default StepOne