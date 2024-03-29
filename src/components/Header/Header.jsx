import React from 'react';
import {Link} from "react-router-dom";
import {ROUTES as ROTES} from "../../utils/routes";
import logo from "../../assets/LOGO 1.svg"
import avatar from "../../assets/avatar.svg"
import styles from '../../styles/Header.module.css'
import lupa from '../../assets/lupa.svg'
import favourites from '../../assets/like.svg'
import basket from '../../assets/Shops.png'



const Header = () => {
    return (
        <div className={styles.header}>
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
                        <Link to={ROTES.HOME} className={styles.favorites} style={{paddingTop:'3px'}}>
                            <img src={favourites} alt="like"/>
                        </Link>

                        <Link to={ROTES.CART} className={styles.cart} style={{display:'flex'}}>
                            <img src={basket} alt="basket"/>
                            <span className={styles.count}>
                                2
                            </span>
                        </Link>
                    </div>
                </div>
        </div>
    );
};

export default Header;