import React, {ChangeEvent, LegacyRef, RefObject, useRef} from "react";
import s from "./Posts.module.css"
import {Post} from "./Post/Post";
import {ActionsTypes, addPostActionCreator, PostType, UpdateNewPostTextActionCreator} from "../../../redux/state";

export type PostPropsType = {
    postData: PostType[]
    newPostText: string
    dispatch: (action: ActionsTypes) => void
}

export const Posts: React.FC<PostPropsType> = ({postData, newPostText, dispatch}) => {
    const postsElements = postData
        .map((post) => <Post id={post.id} message={post.message} likesCount={post.likesCount} date={post.date}/>)

    const addPostHandler = () => {
        dispatch(addPostActionCreator());
    }

    const onChangeUpdateNewPostHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
        dispatch(UpdateNewPostTextActionCreator(e.currentTarget.value));
    }

    return (
        <div className={s.content}>
            <div className={s.content__items}>
                <h4 className={s.content__title}>My posts</h4>
                <textarea
                    onChange={onChangeUpdateNewPostHandler}
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