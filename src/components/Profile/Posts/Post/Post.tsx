import React from "react";
import s from "./Post.module.css"
import remove from "./img/remove.png"
import like from "./img/like.png"
import {PostType} from "../../../../redux/state";

export const Post: React.FC<PostType> = ({message, id, likesCount, date}) => {
    return (
        <div className={s.post__item} key={id}>
            <div className={s.post__item__container}>
                <div className={s.post__item__info}>
                    <img className={s.post__item__person}
                         src="https://cdn-icons-png.flaticon.com/512/147/147144.png" alt="img"/>
                    <div>
                        <p>Till Liberman</p>
                        <p>{date}</p>
                        {/*<p>14:15 04.02.2023</p>*/}
                        {/*<p>{new Date().toLocaleString() + ""}</p>*/}
                    </div>
                </div>
                <div>
                    <img src={remove} alt="remove"/>
                </div>
            </div>
            <div>
                {message}
            </div>
            <div className={s.post__item__likeInfo}>
                <img className={s.post__item__like}
                     src={like}
                     alt="like"/>
                <p>{likesCount}</p>
            </div>
        </div>
    );
};