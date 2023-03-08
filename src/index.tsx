import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import store, {StateType} from "./redux/state";

export const rerenderEntireTree = (state: StateType) => {
    ReactDOM.render(
        <App
            // addPost={store.addPost.bind(store)}
            // state={store.getState()}
            state={state}
            dispatch={store.dispatch.bind((store))}
            // addMessage={store.addMessage.bind(store)}
            // updateNewPostText={store.updateNewPostText.bind(store)}
            // updateNewMessageText={store.updateNewMessageText.bind(store)}
        />, document.getElementById('root'));
}

rerenderEntireTree(store.getState());

store.subscribe(rerenderEntireTree);