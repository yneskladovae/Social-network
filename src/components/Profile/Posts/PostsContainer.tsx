import React from "react";
import {Posts} from "./Posts";
import {addPostActionCreator, InitialStateType} from "../../../redux/profile-reducer";
import {connect} from "react-redux";
import {AppStateType} from "../../../redux/redux-store";
import { Dispatch } from "redux";

export type MapStateToPropsType = {
    profilePage: InitialStateType
}

export type MapDispatchToPropsType = {
    addPost: (newPostText: string) => void
}

const mapStateToProps = (state: AppStateType): MapStateToPropsType => {
    return {
        profilePage: state.profilePage
    }
}

const mapDispatchToProps = (dispatch: Dispatch): MapDispatchToPropsType => {
    return {
        addPost: (newPostText: string) => dispatch(addPostActionCreator(newPostText)),
    }
}

export const PostsContainer = connect(mapStateToProps, mapDispatchToProps)(Posts);