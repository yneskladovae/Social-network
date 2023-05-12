import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {store} from "./redux/redux-store";
import {StateType} from "./redux/store";
import {Provider} from "react-redux";
import App from "./App";

// export const rerenderEntireTree = (state: StateType) => {
ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>, document.getElementById('root'));
// }
//
// rerenderEntireTree(store.getState());
// store.subscribe(() => {
//     const state = store.getState()
//     rerenderEntireTree(state)
// });
