import React from 'react';
import './App.css';
import {Header} from "./components/Header/Header";
import {Navbar} from "./components/Navbar/Navbar";
import {Profile} from "./components/Profile/Profile";
import {Friends} from "./components/Friends/Friends";
import {Dialogs} from "./components/Dialogs/Dialogs";
import {BrowserRouter, Route} from "react-router-dom";
import {Music} from "./components/Music/Music";
import {News} from "./components/News/News";
import {Settings} from "./components/Settings/Settings";
import {Users} from "./components/Users/Users";
import {ActionsTypes, StateType} from "./redux/store";

type AppPropsType = {
    state: StateType
    dispatch: (action: ActionsTypes) => void
}

const App: React.FC<AppPropsType> = ({state, dispatch}) => {
    return (
        <BrowserRouter>
            <div className="app-wrapper">
                <Header/>
                <div className={"flex-container"}>
                    <Navbar/>
                    <div className={"app-content"}>
                        <Route path={"/profile"} render={() => <Profile profilePage={state.profilePage} dispatch={dispatch}/>}/>
                        <Route path={"/dialogs"} render={() => <Dialogs dialogsPage={state.dialogsPage} dispatch={dispatch}/>}/>
                        <Route path={"/news"} component={News}/>
                        <Route path={"/users"} component={Users}/>
                        <Route path={"/music"} component={Music}/>
                        <Route path={"/settings"} component={Settings}/>
                    </div>
                    <Friends sidebarData={state.sidebarFriends.sidebarData}/>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
