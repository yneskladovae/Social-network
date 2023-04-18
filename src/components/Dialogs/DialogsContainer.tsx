import React from "react";
import {connect} from "react-redux";
import {Dialogs} from "./Dialogs";
import {AppStateType} from "../../redux/redux-store";

export type MapStateToPropsType = {
    isAuth: boolean
}

const mapStateToProps = (state: AppStateType): MapStateToPropsType => {
    return {
        isAuth: state.auth.isAuth
    }
}

export const DialogContainer = connect(mapStateToProps, {})(Dialogs);