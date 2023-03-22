import React from 'react';
import './App.css';
import {Header} from "./components/Header/Header";
import {Navbar} from "./components/Navbar/Navbar";
import {Profile} from "./components/Profile/Profile";
import {Dialogs} from "./components/Dialogs/Dialogs";
import {BrowserRouter, Route} from "react-router-dom";
import {Music} from "./components/Music/Music";
import {News} from "./components/News/News";
import {Settings} from "./components/Settings/Settings";
import {Users} from "./components/Users/Users";
import {ActionsTypes, StateType, StoreType} from "./redux/store";
import { SidebarFriends } from './components/SidebarFriends/SidebarFriends';

type AppPropsType = {
    // state: StateType
}

const App: React.FC<AppPropsType> = () => {
    return (
        <BrowserRouter>
            <div className="app-wrapper">
                <Header/>
                <div className={"flex-container"}>
                    <Navbar/>
                    <div className={"app-content"}>
                        {/*<Route path={"/profile"} render={() => <Profile profilePage={state.profilePage} dispatch={dispatch}/>}/>*/}
                        <Route path={"/profile"} render={() => <Profile/>}/>
                        <Route path={"/dialogs"} render={() => <Dialogs />}/>
                        <Route path={"/news"} component={News}/>
                        <Route path={"/users"} component={Users}/>
                        <Route path={"/music"} component={Music}/>
                        <Route path={"/settings"} component={Settings}/>
                    </div>
                    <SidebarFriends/>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
