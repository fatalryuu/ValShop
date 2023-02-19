import React from 'react';
import s from './Header.module.css';
import logo from '../../img/logo.webp';
import {NavLink} from "react-router-dom";

const Header = () => {
    return (
        <header className={s.wrapper}>
            <div className={s.logo}>
                <NavLink to="/">
                    <img src={logo} alt=""/>
                </NavLink>
            </div>
        </header>
    );
};

export default Header;