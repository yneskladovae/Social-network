import React from "react";
import s from './Header.module.css'
import logo from "./img/logo.png"
import login from "./img/login.png"

export const Header = () => {
    return (
        <header className={s.header}>
            <div>
                <h1 className={s.header__logo}>
                    <img src={logo} alt="logo"/>
                    Social <br/>Network
                </h1>
            </div>
            <div>
                <img src={login} alt="login"/>
            </div>
        </header>
    );
};