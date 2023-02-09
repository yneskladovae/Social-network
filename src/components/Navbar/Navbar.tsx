import React from "react";
import s from './Navbar.module.css'
import {NavLink} from "react-router-dom";

export const Navbar = () => {
    return (
        <nav className={s.nav}>
            <div className={s.nav__items}>
                <div className={s.nav__item__active}>
                    <img className={s.nav__items__icon} src="https://cdn-icons-png.flaticon.com/512/6522/6522516.png" alt="img"/>
                    <NavLink to="/profile" activeClassName={s.active}>Profile</NavLink>
                </div>
                <div>
                    <img className={s.nav__items__icon} src="https://cdn-icons-png.flaticon.com/512/6522/6522516.png" alt="img"/>
                    <NavLink to="/dialogs" activeClassName={s.active}>Messages</NavLink>
                </div>
                <div>
                    <img className={s.nav__items__icon} src="https://cdn-icons-png.flaticon.com/512/6522/6522516.png" alt="img"/>
                    <NavLink to="/news" activeClassName={s.active}>News</NavLink>
                </div>
                <div>
                    <img className={s.nav__items__icon} src="https://cdn-icons-png.flaticon.com/512/6522/6522516.png" alt="img"/>
                    <NavLink to="/users" activeClassName={s.active}>Users</NavLink>
                </div>
                <div>
                    <img className={s.nav__items__icon} src="https://cdn-icons-png.flaticon.com/512/6522/6522516.png" alt="img"/>
                    <NavLink to="/music" activeClassName={s.active}>Music</NavLink>
                </div>
                <div>
                    <img className={s.nav__items__icon} src="https://cdn-icons-png.flaticon.com/512/6522/6522516.png" alt="img"/>
                    <NavLink to="/settings" activeClassName={s.active}>Settings</NavLink>
                </div>
            </div>
        </nav>
    );
};