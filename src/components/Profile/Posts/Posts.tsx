import React, {ChangeEvent} from "react";
import s from "./Posts.module.css"
import {Post} from "./Post/Post";
import {InitialStateType} from "../../../redux/profile-reducer";

export type PostPropsType = {
    profilePage: InitialStateType
    updateNewPost: (text: string) => void
    addPost: () => void
}

export const Posts: React.FC<PostPropsType> = ({profilePage, updateNewPost, addPost}) => {
    const postsElements = profilePage.postData
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
                    value={profilePage.newPostText}
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