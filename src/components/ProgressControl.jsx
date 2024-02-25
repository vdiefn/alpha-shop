import React from 'react';
import styles from './ProgressControl.module.css';

function ProgressControl() {
  return (
    <div className={styles.ProgressControl}>
      <section className={styles.buttonGroup} data-phase="shipping">
        <button className="prev">
          &larr;&nbsp;上一步
        </button>
        <button className="next">
          下一步&nbsp;&rarr;
        </button>
      </section>
    </div>
  )
}

export default ProgressControl