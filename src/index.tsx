import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import state, {addMessage, addPost, StateType, subscribe, updateNewMessageText, updateNewPostText} from "./redux/state";

export const rerenderEntireTree = (state: StateType) => {
    ReactDOM.render(
        <App
            addPost={addPost}
            state={state}
            addMessage={addMessage}
            updateNewPostText={updateNewPostText}
            updateNewMessageText={updateNewMessageText}
        />, document.getElementById('root'));
}

rerenderEntireTree(state);

subscribe(rerenderEntireTree);