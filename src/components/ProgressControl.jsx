import React from 'react';
import styles from './ProgressControl.module.css';

function ProgressControl() {
  return (
    
    <div className={styles.progressControl}>
      <hr></hr>
      <section className={styles.buttonGroup} data-phase="shipping">
        <button className={styles.prev}>
          &larr;&nbsp;上一步
        </button>
        <button className={styles.next}>
          下一步&nbsp;&rarr;
        </button>
      </section>
    </div>
  )
}

export default ProgressControl