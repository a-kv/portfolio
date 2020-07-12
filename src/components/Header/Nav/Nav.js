import React from 'react';
import styles from './Nav.module.css';
import {Link} from "react-scroll";

function Nav(props) {
    return (
        <nav className={styles.nav}>

            <Link><a href="" className={styles.link}>Home</a></Link>
            <Link to='skills' smooth={true}><a href="" className={styles.link}>Skills</a></Link>
            <Link to='projects' smooth={true}><a href="" className={styles.link}>Projects</a></Link>
            <Link to='contacts' smooth={true}><a href="" className={styles.link}>Contacts</a></Link>

        </nav>
    );
}

export default Nav;
