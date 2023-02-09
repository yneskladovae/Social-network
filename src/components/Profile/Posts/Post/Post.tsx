import React from "react";
import s from "./Post.module.css"
import {PostType} from "../Posts";
import remove from "./img/remove.png"
import like from "./img/like.png"

type PostPropsType = PostType;

export const Post = (props: PostPropsType) => {
    const {message, likeCounter} = props;
    return (
        <div className={s.post__item}>
            <div className={s.post__item__container}>
                <div className={s.post__item__info}>
                    <img className={s.post__item__person}
                         src="https://cdn-icons-png.flaticon.com/512/147/147144.png" alt="img"/>
                    <div>
                        <p>Till Liberman</p>
                        <p>14:15 04.02.2023</p>
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
                <p>{likeCounter}</p>
            </div>
        </div>
    );
};