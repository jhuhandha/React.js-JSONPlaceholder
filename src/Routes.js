import React, { Component } from 'react';
import { Route, Switch } from "react-router-dom";
import Usuario from './pages/Usuario';
import Blog from './pages/Blog';

class Routes extends Component {
    render(){
        return (
            <Switch>
                <Route path="/" exact render={()=> <h1>Bienvenido</h1>}  />  
                <Route path="/usuarios" exact component={Usuario}  />  
                <Route path="/blog" exact component={Blog}  />  
            </Switch>
        );
    }
}

export default Routes;