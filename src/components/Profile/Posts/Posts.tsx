import React from "react";
import s from "./Posts.module.css"
import {Post} from "./Post/Post";

export type PostType = {
    message: string
    likeCounter: number
}

const postMesasge = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum';

export const Posts = () => {
    return (
        <div className={s.content}>
            <div className={s.content__items}>
                <h4 className={s.content__title}>My posts</h4>
                <textarea placeholder="Whats in your mind today?"
                          className={s.content__textarea}></textarea>
                <button className={s.content__textarea__btn}>Public</button>
            </div>
            <h4 className={s.content__items__title}>Posting bord</h4>
            <div className={s.posts}>
                <Post message={postMesasge} likeCounter={1}/>
                <Post message={postMesasge} likeCounter={2}/>
                <Post message={postMesasge} likeCounter={3}/>
                <Post message={postMesasge} likeCounter={4}/>
                <Post message={postMesasge} likeCounter={5}/>
            </div>
            <p></p>
        </div>
    );
};