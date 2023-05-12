// import React from "react";
// import s from "./Profile.module.css"
// import {Profile} from "./Profile";
// import axios from "axios";
// import {connect} from "react-redux";
// import {InitialStateType, setUserProfile, UserProfileType} from "../../redux/profile-reducer";
// import {AppStateType} from "../../redux/redux-store";
// import {withRouter} from "react-router-dom";
//
// type ProfileContainerPropsType = {
//     setUserProfile: (profile: UserProfileType) => void
//     profile: UserProfileType
//     userId: string;
// }
// // interface RouteParams {
// //     userId: string;
// // }
// // const { userId } = useParams<RouteParams>();
//
// class ProfileContainer extends React.Component<ProfileContainerPropsType> {
//     componentDidMount() {
//         // const userId = this.props.match.params.userId
//         axios.get(`https://social-network.samuraijs.com/api/1.0/profile/2`)
//             .then(response => {
//                 this.props.setUserProfile(response.data)
//             })
//     }
//
//     render() {
//         return (
//             <div className={s.content}>
//                 <Profile {...this.props} profile={this.props.profile}/>
//             </div>
//         );
//     }
// }
//
// export type MapStateToPropsType = {
//     profile: UserProfileType
// }
//
// const mapStateToProps = (state: AppStateType): MapStateToPropsType => {
//     return {
//         profile: state.profilePage.profile
//     }
// }
//
// let WithURLDataContainerComponent = withRouter(ProfileContainer)
//
// export default connect(mapStateToProps, {setUserProfile})(WithURLDataContainerComponent);


import React, {ComponentType, useEffect} from "react";
import {connect} from "react-redux";
import {Redirect, useParams} from "react-router-dom";
import {Profile} from "./Profile";
import {AppRootStateType} from "../../redux/redux-store";
import {
    getStatusTC,
    getUserProfile,
    setUserProfile, updateStatusTC,
    UserProfileType
} from "../../redux/profile-reducer";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";

type ProfileContainerPropsType = {
    profile: UserProfileType
    status: string
    getUserProfile: (currUserId: string | 28468) => void
    getStatusTC: (userId: string | 28468) => void
    isAuth: boolean
    authorizedUserId: number | null
}

interface RouteParams {
    userId: string;
}

export const ProfileContainer = (props: ProfileContainerPropsType) => {
    const {userId} = useParams<RouteParams>();
    const currUserId = userId || 28468

    useEffect(() => {
        props.getUserProfile(currUserId)
    }, [userId]);

    useEffect(() => {
        props.getStatusTC(currUserId)
    }, [userId]);

    // if (!props.isAuth) return <Redirect to={"/login"}/>

    return (
        <div>
            <Profile {...props} profile={props.profile} status={props.status}/>
        </div>
    );
}

export type MapStateToPropsType = {
    profile: UserProfileType
    isAuth: boolean
    status: string
    authorizedUserId: number | null
}

let mapStateToProps = (state: AppRootStateType): MapStateToPropsType => ({
    profile: state.profilePage.profile,
    isAuth: state.auth.isAuth,
    status: state.profilePage.status,
    authorizedUserId: state.auth.id,
});

export default compose<ComponentType>(
    connect(mapStateToProps, {setUserProfile, getUserProfile, getStatusTC, updateStatusTC}),
    withAuthRedirect
)(ProfileContainer)

// const AuthRedirectComponent = withAuthRedirect(ProfileContainer)

// export default connect(mapStateToProps, {setUserProfile, getUserProfile})(AuthRedirectComponent);
