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


import React, {useEffect} from "react";
import axios from "axios";
import {connect} from "react-redux";
import {useParams} from "react-router-dom";
import {Profile} from "./Profile";
import {AppStateType} from "../../redux/redux-store";
import {setUserProfile, UserProfileType} from "../../redux/profile-reducer";

type ProfileContainerPropsType = {
    setUserProfile: (profile: UserProfileType) => void
    profile: UserProfileType
}

interface RouteParams {
    userId: string;
}

export const ProfileContainer = (props: ProfileContainerPropsType) => {
    const {userId} = useParams<RouteParams>();
    const currUserId = userId || 28468

    useEffect(() => {
        axios
            .get(`https://social-network.samuraijs.com/api/1.0/profile/${currUserId}`)
            .then((response) => {
                props.setUserProfile(response.data);
            });
    }, [userId]);

    return (
        <div>
            <Profile {...props} profile={props.profile}/>
        </div>
    );
}

export type MapStateToPropsType = {
    profile: UserProfileType
}

let mapStateToProps = (state: AppStateType): MapStateToPropsType => ({
    profile: state.profilePage.profile,
});

export default connect(mapStateToProps, {setUserProfile})(ProfileContainer);
