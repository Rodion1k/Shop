import React, {Component} from 'react';
import NavMenu from "./components/navMenu/NavMenu";
import {Provider} from "react-redux";
import store from "./store/store";


export default class App extends Component {

    render() {
        return (
            <Provider store={store}>
                <NavMenu/>
            </Provider>
        );
    }
}
