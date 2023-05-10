import React from 'react';
import styles from '../../styles/Footer.module.css'
import {Link} from "react-router-dom";
import {ROUTES as ROTES} from "../../utils/routes";
import logo from "../../assets/LOGO 1.svg";
import inst from "../../assets/instagram.svg"
import fb from "../../assets/facebook.svg"
import yt from "../../assets/youtube.svg"

const Footer = () => {
    return (
        <section className={styles.footer}>
            <div className={styles.footer__container}>
                <div className={styles.footer__logo}>
                    <Link to={ROTES.HOME}>
                        <img src={logo} alt="Stuff"/>
                    </Link>
                </div>
                <div className={styles.footer__rights}>
                    All rights Reserved
                </div>
                <div className={styles.footer__socials}>
                    <a href="https://www.youtube.com/">
                        <img src={yt} alt='Youtube' className={styles.icon}></img>
                    </a>
                    <a href="https://www.instagram.com/">
                        <img src={inst} alt='Instagram' className={styles.icon}></img>
                    </a>
                    <a href="https://ru-ru.facebook.com/">
                        <img src={fb} alt='Facebook' className={styles.icon}></img>
                    </a>

                </div>
            </div>
        </section>
    );
};

export default Footer;