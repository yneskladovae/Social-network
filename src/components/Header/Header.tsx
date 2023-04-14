import React from "react";
import s from './Header.module.css'
import logo from "./img/logo.png"
import loginIcon from "./img/login.png"
import {NavLink} from "react-router-dom";

type HeaderPropsType = {
    isAuth: boolean
    login: string | null
}

export const Header: React.FC<HeaderPropsType> = ({isAuth, login}) => {
    return (
        <header className={s.header}>
            <div>
                <h1 className={s.header__logo}>
                    <img src={logo} alt="logo"/>
                    Social <br/>Network
                </h1>
            </div>
            <div className={s.header__login}>
                {isAuth ? login :
                    <NavLink to={'/login'}>
                    <img src={loginIcon} alt="login"/>
                </NavLink>
                }

            </div>
        </header>
    );
};