import React from 'react';
import styles from './Header.module.css';
import Nav from "./Nav/Nav";

function Header(props) {
    return (
        <div className={styles.header}>
            <div className={styles.container}>
                <Nav/>
            </div>
        </div>
    );
}

export default Header;
