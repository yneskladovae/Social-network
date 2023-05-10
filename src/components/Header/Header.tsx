import React from "react";
import s from './Header.module.css'
import logo from "./img/logo.png"
import loginIcon from "./img/login.png"
import {NavLink} from "react-router-dom";

type HeaderPropsType = {
    isAuth: boolean
    login: string | null
    logout: any
}

export const Header: React.FC<HeaderPropsType> = ({isAuth, login, logout}) => {
    console.log(isAuth)
    return (
        <header className={s.header}>
            <div>
                <h1 className={s.header__logo}>
                    <img src={logo} alt="logo"/>
                    Social <br/>Network
                </h1>
            </div>
            <div className={s.header__login}>
                {isAuth
                    ? <div className={s.headerLogin}>
                        {login}
                        {/*<button onClick={logout ? logout : () => {}}>Log out</button>*/}
                        <img onClick={logout ? logout : () => {}} src={loginIcon} alt="logout"/>
                    </div>
                    : <NavLink to={'/login'}>
                        <img src={loginIcon} alt="login"/>
                    </NavLink>
                }
            </div>
        </header>
    );
};