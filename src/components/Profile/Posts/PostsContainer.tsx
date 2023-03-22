import React from "react";
import {Posts} from "./Posts";
import {addPostActionCreator, InitialStateType, updateNewPostTextActionCreator} from "../../../redux/profile-reducer";
import {connect} from "react-redux";
import {AppStateType} from "../../../redux/redux-store";
import { Dispatch } from "redux";

export type MapStateToPropsType = {
    profilePage: InitialStateType
}

export type MapDispatchToPropsType = {
    addPost: () => void
    updateNewPost: (text: string) => void
}

const mapStateToProps = (state: AppStateType): MapStateToPropsType => {
    return {
        profilePage: state.profilePage
    }
}

const mapDispatchToProps = (dispatch: Dispatch): MapDispatchToPropsType => {
    return {
        addPost: () => dispatch(addPostActionCreator()),
        updateNewPost: (text: string) => dispatch(updateNewPostTextActionCreator(text)),
    }
}

export const PostsContainer = connect(mapStateToProps, mapDispatchToProps)(Posts);