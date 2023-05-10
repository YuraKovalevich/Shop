import React from 'react';
import {Link} from "react-router-dom";
import {ROUTES as ROTES} from "../../utils/routes";
import logo from "../../assets/LOGO 1.svg"
import avatar from "../../assets/avatar.svg"
import styles from '../../styles/Header.module.css'
import lupa from '../../assets/lupa.svg'


const Header = () => {
    return (
        <div className={styles.header}>
            <div className={styles.header__container}>
                <div className={styles.header__logo}>
                    <Link to={ROTES.HOME}>
                        <img src={logo} alt="Stuff"/>
                    </Link>
                </div>
                <div className={styles.info}>
                    <div className={styles.user}></div>
                    <div style={{display:'flex', alignItems:'center', gap:'20px'}}>
                        <div className={styles.avatar} style={{backgroundImage:`url(${avatar})` }}  />
                        <div className={styles.username}>Guest</div>
                    </div>
                    <form className={styles.form}>
                        <div className={styles.icon}>
                            <img src={lupa} alt="lupa"/>
                        </div>
                        <div className={styles.input}>
                            <input type="search"
                                   name="search"
                                   placeholder="Search for anything..."
                                   autoComplete="off"
                                   onChange={()=>{}}
                                   value=''
                            />
                        </div>
                        <div className={styles.box}></div>
                    </form>
                    <div className={styles.account}>
                        <Link to={ROTES.CART} className={styles.cart}>
                            <span className={styles.count}>
                                2
                            </span>
                        </Link>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Header;