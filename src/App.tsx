import React from 'react';
import './App.css';
import {Navbar} from "./components/Navbar/Navbar";
import {BrowserRouter, Route} from "react-router-dom";
import {Music} from "./components/Music/Music";
import {News} from "./components/News/News";
import {Settings} from "./components/Settings/Settings";
import {SidebarFriends} from './components/SidebarFriends/SidebarFriends';
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import {DialogContainer} from "./components/Dialogs/DialogsContainer";
import Login from "./components/Login/Login";
import {connect} from "react-redux";
import {initializeAppTC} from "./redux/app-reducer";
import {AppRootStateType} from "./redux/redux-store";
import {Preloader} from "./components/common/Preloader/Preloader";

type MapStateToPropsType = {
    initialized: boolean
}
export type MapDispatchToPropsType = {
    initializeAppTC: () => void
}

class App extends React.Component<MapStateToPropsType & MapDispatchToPropsType> {
    componentDidMount() {
        this.props.initializeAppTC()
    }

    preloaderStyle = {
        position: 'fixed',
        top: '0',
        bottom: '0',
        left: '0',
        right: '0',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100%'
    }

    render() {
        if (!this.props.initialized) {
            return <div style={{...this.preloaderStyle, position: 'fixed'}}>
                <Preloader/>
            </div>
        }
        return (
            <BrowserRouter>
                <div className="app-wrapper">
                    <HeaderContainer/>
                    <div className={"flex-container"}>
                        <Navbar/>
                        <div className={"app-content"}>
                            <Route path={"/profile/:userId*"} render={() => <ProfileContainer/>}/>
                            {/*<Route path={"/profile"} render={() => <Profile/>}/>*/}
                            <Route path={"/dialogs"} render={() => <DialogContainer/>}/>
                            <Route path={"/news"} component={News}/>
                            <Route path={"/users"} render={() => <UsersContainer/>}/>
                            {/*<Route path={"/users"} component={Users}/>*/}
                            <Route path={"/music"} component={Music}/>
                            <Route path={"/settings"} component={Settings}/>
                            <Route path={"/login"} render={() => <Login/>}/>
                        </div>
                        <SidebarFriends/>
                    </div>
                </div>
            </BrowserRouter>
        );
    }
}

const mapStateToProps = (state: AppRootStateType): MapStateToPropsType => {
    return {
        initialized: state.app.initialized
    }
}

export default connect(mapStateToProps, {initializeAppTC})(App);
