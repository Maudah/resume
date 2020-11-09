import React from 'react';
import { BrowserRouter} from 'react-router-dom';
import Main from '../screen/Main/index';
import './App.css'

export default class App extends React.Component {
    render() {
        return (
            <BrowserRouter>
            <Main/>
            </BrowserRouter>
        );
    }
}
