import React from 'react';
import styles from './Slogan.module.css'

function Slogan (props) {
  return (
    <div className={styles.slogan}>
        <div className={styles.sloganTitle}><span>I'm Available</span><span>
            For Freelancer</span></div>
    </div>
  );
}

export default Slogan;
