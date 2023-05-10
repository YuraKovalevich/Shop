import React from 'react';
import styles from '../../styles/Sidebar.module.css'
import {NavLink} from "react-router-dom";
const Sidebar = () => {
    return (
        <section className={styles.sidebar}>
            <div className={styles.title}>CATEGORIES</div>
            <nav>
                <ul className={styles.menu}>
                    <li>
                        <NavLink to={`/categories/${1}`}></NavLink>
                    </li>
                </ul>
            </nav>
            <div>
                <a href="/" className={styles.link}>Help</a>
                <a href="/" className={styles.link} style={{textDecoration:"underline"}}>Terms & Conditions</a>
            </div>
        </section>
    );
};

export default Sidebar;