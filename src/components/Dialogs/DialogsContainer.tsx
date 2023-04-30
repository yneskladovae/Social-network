import React from "react";
import {connect} from "react-redux";
import {Dialogs} from "./Dialogs";
import {AppStateType} from "../../redux/redux-store";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {ProfileContainer} from "../Profile/ProfileContainer";

export type MapStateToPropsType = {
    isAuth: boolean
}

const mapStateToProps = (state: AppStateType): MapStateToPropsType => {
    return {
        isAuth: state.auth.isAuth
    }
}

const AuthRedirectComponent = withAuthRedirect(Dialogs)

export const DialogContainer = connect(mapStateToProps, {})(AuthRedirectComponent);