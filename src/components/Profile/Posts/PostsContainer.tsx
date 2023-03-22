import React from "react";
import {StoreType} from "../../../redux/store";
import {Posts} from "./Posts";
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../redux/profile-reducer";

export type PostsContainerPropsType = {
    store: StoreType
}

export const PostsContainer: React.FC<PostsContainerPropsType> = ({store}) => {

    const state = store.getState().profilePage;
    console.log(state)

    const addPost = () => {
        store.dispatch(addPostActionCreator());
    }

    const updateNewPost = (text: string) => {
        store.dispatch(updateNewPostTextActionCreator(text));
    }

    return (
        <Posts postData={state.postData} newPostText={state.newPostText} addPost={addPost} updateNewPost={updateNewPost}/>
    );
};