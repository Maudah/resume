import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './Home/index';
import About from './About/index';
import SideBar from '../component/slidebar/index';
import './App.css'

export default class App extends React.Component {
    render() {
        return (
            <BrowserRouter>
            <SideBar/>

            </BrowserRouter>
        );
    }
}
