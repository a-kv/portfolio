import React from 'react';
import styles from './Footer.module.css'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faVk} from '@fortawesome/free-brands-svg-icons';
import {faLinkedin} from '@fortawesome/free-brands-svg-icons';
import {faGithub} from '@fortawesome/free-brands-svg-icons';
import {faTelegram} from '@fortawesome/free-brands-svg-icons';


function Footer(props) {
    return (
        <div className={styles.footer}>
            <div className={styles.container}>
                <div className={styles.footerTitle}><span>Anna</span></div>
                <div className={styles.socialBlock}>
                    <div className={styles.icons}>
                        <div className={styles.icon}>
                            <a className={styles.link} href={'https://t.me/solaris_system'}><FontAwesomeIcon icon={faTelegram}/></a>
                        </div>
                        <div className={styles.icon}>
                            <a className={styles.link} href={'https://www.linkedin.com/in/ann-kvasova-849b771a1/'}><FontAwesomeIcon icon={faLinkedin}/></a>
                        </div>
                        <div className={styles.icon}>
                            <a className={styles.link} href={'https://github.com/a-kv'}><FontAwesomeIcon icon={faGithub}/></a>
                        </div>
                        <div className={styles.icon}>
                            <a className={styles.link} href={'https://vk.com/id146709787'}><FontAwesomeIcon icon={faVk}/></a>
                        </div>
                    </div>
                </div>
                <div className={styles.law}>
                    All rights reserved.
                </div>
            </div>


        </div>
    );
}

export default Footer;
