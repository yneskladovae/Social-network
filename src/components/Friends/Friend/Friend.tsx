import React from "react";
import s from './Friend.module.css'
import u1 from "./img/u1.png"
import u2 from "./img/u2.png"
import u3 from "./img/u3.png"
import u4 from "./img/u4.png"
import u5 from "./img/u5.png"
import u6 from "./img/u6.png"

export const Friend = () => {
    let users: string[] = [u1, u2, u3, u4, u5, u6, u1, u2, u3, u4, u5, u6, u1, u2, u3, u4, u5, u6, u1, u2];
    return (
        <>
            {
                users.map((el: string, index) => {
                    return (
                        <div key={index} className={s.friend}>
                            <img src={el} alt="img"/>
                        </div>
                    )
                })
            }
        </>
    );
};