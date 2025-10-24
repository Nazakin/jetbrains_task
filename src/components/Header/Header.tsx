import React from 'react';
import styles from "./Header.module.css"

const Header: React.FC = () => {

    return (
        <>
        <header className={styles.headerContainer}>
            <h1 className={styles.headerTitle}>Trivia Data Explorer</h1>
            <p className={styles.headerParagraph}>Explore question distribution by category and difficulty</p>
        </header>
        <hr/>
        </>
    );
};

export default Header;