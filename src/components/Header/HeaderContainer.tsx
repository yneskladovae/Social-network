import React from "react";
import {Header} from "./Header";
import {connect} from "react-redux";
import {logout, setAuthUserData} from "../../redux/auth-reducer";
import {AppRootStateType} from "../../redux/redux-store";

type HeaderContainerPropsType = {
    // auth: InitialStateType
    isAuth: boolean
    login: string | null
    // setAuthUserData: (state: InitialStateType) => void
    // getAuthUserData: () => void
    logout: any
}

class HeaderContainer extends React.Component<HeaderContainerPropsType> {
    // componentDidMount() {
    //     this.props.getAuthUserData()
    // }

    render() {
        return (
            <Header {...this.props}/>
        );
    }
}

export type MapStateToPropsType = {
    // auth: InitialStateType
    login: string | null
    isAuth: boolean
}

const mapStateToProps = (state: AppRootStateType): MapStateToPropsType => {
    return {
        // auth: state.auth,
        login: state.auth.login,
        isAuth: state.auth.isAuth
    }
}

// export default connect(mapStateToProps, {setAuthUserData, getAuthUserData, logout})(HeaderContainer)
export default connect(mapStateToProps, {setAuthUserData, logout})(HeaderContainer)