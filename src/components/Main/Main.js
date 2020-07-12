import React from 'react';
import styles from './Main.module.css';
import photo from '../../assets/images/yo2.jpg';

function Main (props) {
    return (
        <div className={styles.main}>
            <div className={styles.container}>
                <div className={styles.greeting}>
                    <span>Hey! </span>
                    <span>I`m Anna <span>Kvasova</span></span>
                    <h1>a Front-end developer</h1>
                </div>
                <div className={styles.photo}>
                    <img src={photo} alt="photo"/>
                </div>
            </div>
        </div>
    );
}

export default Main;
