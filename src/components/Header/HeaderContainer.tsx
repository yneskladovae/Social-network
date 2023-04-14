import React from "react";
import axios from "axios";
import {Header} from "./Header";
import {connect} from "react-redux";
import {InitialStateType, setAuthUserData} from "../../redux/auth-reducer";
import {AppStateType} from "../../redux/redux-store";

type HeaderContainerPropsType = {
    auth: InitialStateType
    isAuth: boolean
    login: string | null
    setAuthUserData: (state: InitialStateType) => void
}

class HeaderContainer extends React.Component<HeaderContainerPropsType> {
    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`, {withCredentials: true})
            .then(response => {
                if (response.data.resultCode === 0) {
                    this.props.setAuthUserData(response.data.data)
                }
            })
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

export default connect(mapStateToProps, {setAuthUserData})(HeaderContainer)