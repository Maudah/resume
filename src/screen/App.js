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
                <div className='App-container'>
                    <SideBar />
                    <div style={{height: '100%'}}>
                        <Switch>
                            <Route exact path='/' component={Home} />
                            <Route exact path='/about' component={About} />
                            <Route exact path='/add-order' component={Home} />
                            <Route exact path='/empty' component={Home} />
                            <Route exact path='/vehicle-catalog' component={Home} />
                        </Switch>
                    </div>
                </div>

            </BrowserRouter>
        );
    }
}
