import React from "react";
import {Posts} from "./Posts";
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../redux/profile-reducer";
import {StoreContext} from "../../../StoreContext";

export type PostsContainerPropsType = {
    // store: StoreType
}

export const PostsContainer: React.FC<PostsContainerPropsType> = () => {
    return <StoreContext.Consumer>
        {
            (store) => {
                const state = store.getState().profilePage;

                const addPost = () => {
                    store.dispatch(addPostActionCreator());
                }

                const updateNewPost = (text: string) => {
                    store.dispatch(updateNewPostTextActionCreator(text));
                }

                return <Posts postData={state.postData} newPostText={state.newPostText} addPost={addPost}
                              updateNewPost={updateNewPost}/>
            }
        }
    </StoreContext.Consumer>


};