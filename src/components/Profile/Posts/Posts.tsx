import React, {ChangeEvent, LegacyRef, RefObject, useRef} from "react";
import s from "./Posts.module.css"
import {Post} from "./Post/Post";
import {PostType, updateNewPostText} from "../../../redux/state";

export type PostPropsType = {
    postData: PostType[]
    // addPost: (postMessage: string) => void
    addPost: () => void
    updateNewPostText: (newText: string) => void
    newPostText: string
}

export const Posts: React.FC<PostPropsType> = ({postData, addPost, newPostText, updateNewPostText}) => {
    const postsElements = postData
        .map((post) => <Post id={post.id} message={post.message} likesCount={post.likesCount} date={post.date}/>)

    const newPostEl = useRef<HTMLTextAreaElement>(null)

    const addPostHandler = () => {
        if (newPostEl.current !== null) {
            addPost();
            // updateNewPostText("")
        }
    }

    const onChangeUpdateNewPostHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
        if (newPostEl.current !== null) {
            const text = newPostEl.current.value
            updateNewPostText(text)
        }
    }

    return (
        <div className={s.content}>
            <div className={s.content__items}>
                <h4 className={s.content__title}>My posts</h4>
                <textarea ref={newPostEl}
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