import React from "react";
import {Header} from "./Header";
import {connect} from "react-redux";
import {getAuthUserData, InitialStateType, setAuthUserData} from "../../redux/auth-reducer";
import {AppStateType} from "../../redux/redux-store";

type HeaderContainerPropsType = {
    auth: InitialStateType
    isAuth: boolean
    login: string | null
    // setAuthUserData: (state: InitialStateType) => void
    getAuthUserData: () => void
}

class HeaderContainer extends React.Component<HeaderContainerPropsType> {
    componentDidMount() {
        this.props.getAuthUserData()
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

export default connect(mapStateToProps, {setAuthUserData, getAuthUserData})(HeaderContainer)