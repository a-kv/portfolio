import React from 'react';
import styles from './Skil.module.css'

function Skill(props) {
    return (
        <div className={styles.mySkill}>
                <div className={styles.skill}>
                    <div className={styles.skillHeader}>
                        <div className={styles.icon}>{props.logo}</div>
                        <div className={styles.title}>{props.title}</div>
                    </div>
                   <div className={styles.description}>{props.description}</div>
                </div>
        </div>
    );
}

export default Skill;
