import s from "./Dialogs.module.css"
import {NavLink} from "react-router-dom";

export const Dialogs = () => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogs__items}>
                <div className={s.dialog}>
                   <NavLink to="/dialogs/1">Dimych</NavLink>
                </div>
                <div className={s.dialog + ' ' + s.active}>
                    <NavLink to="/dialogs/2">Stas</NavLink>
                </div>
                <div className={s.dialog}>
                    <NavLink to="/dialogs/3">Ighor</NavLink>
                </div>
                <div className={s.dialog}>
                    <NavLink to="/dialogs/4">Tima</NavLink>
                </div>
                <div className={s.dialog}>
                    <NavLink to="/dialogs/5">Anna</NavLink>
                </div>
                <div className={s.dialog}>
                    <NavLink to="/dialogs/6">Dima</NavLink>
                </div>
            </div>
            <div className={s.messages}>
                <div className={s.message}>Hi</div>
                <div className={s.message}>Hello</div>
                <div className={s.message}>Yo</div>
            </div>
        </div>
    )
}