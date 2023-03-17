import React, {ChangeEvent} from "react";
import s from "./Posts.module.css"
import {Post} from "./Post/Post";
import {PostType} from "../../../redux/store";

export type PostPropsType = {
    postData: PostType[]
    newPostText: string
    updateNewPost: (text: string) => void
    addPost: () => void
}

export const Posts: React.FC<PostPropsType> = ({postData, newPostText, updateNewPost, addPost}) => {
    const postsElements = postData
        .map((post) => <Post id={post.id} message={post.message} likesCount={post.likesCount} date={post.date}/>)

    const addPostHandler = () => {
        addPost();
    }

    const updateNewPostHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
        updateNewPost(e.currentTarget.value)
    }

    return (
        <div className={s.content}>
            <div className={s.content__items}>
                <h4 className={s.content__title}>My posts</h4>
                <textarea
                    onChange={updateNewPostHandler}
                    value={newPostText}
                    placeholder="Whats in your mind today?"
                    className={s.content__textarea}
                />
                <button onClick={addPostHandler} className={s.content__textarea__btn}>Public</button>
            </div>
            <h4 className={s.content__items__title}>Posting bord</h4>
            <div className={s.posts__items}>
                {postsElements}
            </div>
        </div>
    );
};