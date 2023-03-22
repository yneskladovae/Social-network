import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {store} from "./redux/redux-store";
import {StateType} from "./redux/store";
import {Provider} from "./StoreContext";

export const rerenderEntireTree = (state: StateType) => {
    ReactDOM.render(
        <Provider store={store}>
            <App/>
        </Provider>, document.getElementById('root'));
}

rerenderEntireTree(store.getState());
store.subscribe(() => {
    const state = store.getState()
    rerenderEntireTree(state)
});