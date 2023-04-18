import React from "react";
import axios from "axios";
import {Header} from "./Header";
import {connect} from "react-redux";
import {authUserData, InitialStateType, setAuthUserData} from "../../redux/auth-reducer";
import {AppStateType} from "../../redux/redux-store";
import {usersAPI} from "../../api/api";

type HeaderContainerPropsType = {
    auth: InitialStateType
    isAuth: boolean
    login: string | null
    // setAuthUserData: (state: InitialStateType) => void
    authUserData: () => void
}

class HeaderContainer extends React.Component<HeaderContainerPropsType> {
    componentDidMount() {
        this.props.authUserData()
    }

    render() {
        return (
            <Header {...this.props}/>
        );
    }
}

export type MapStateToPropsType = {
    auth: InitialStateType
    login: string | null
    isAuth: boolean
}

const mapStateToProps = (state: AppStateType): MapStateToPropsType => {
    return {
        auth: state.auth,
        login: state.auth.login,
        isAuth: state.auth.isAuth
    }
}

export default connect(mapStateToProps, {setAuthUserData, authUserData})(HeaderContainer)