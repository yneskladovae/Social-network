import React from "react";
import s from "./Posts.module.css"
import {Post} from "./Post/Post";
import {PostType} from "../../../redux/state";

export type PostPropsType = {
    postData: PostType[]
}

export const Posts: React.FC<PostPropsType> = ({postData}) => {
    const postsElements = postData
        .map((post)=> <Post id={post.id} message={post.message} likesCount={post.likesCount}/>)
    return (
        <div className={s.content}>
            <div className={s.content__items}>
                <h4 className={s.content__title}>My posts</h4>
                <textarea placeholder="Whats in your mind today?" className={s.content__textarea}></textarea>
                <button onClick={() => {console.log("FORZA NAPOLI")}} className={s.content__textarea__btn}>Public</button>
            </div>
            <h4 className={s.content__items__title}>Posting bord</h4>
            <div className={s.posts}>
                {postsElements}
            </div>
            <p></p>
        </div>
    );
};