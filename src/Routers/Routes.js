import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'
import Home from '../Containers/Home'
import AddUser from '../Containers/AddUser'
import EditUser from '../Containers/EditUser'

export class Routes extends Component {
    render() {
        return (
            <Switch>
                <Route 
                    exact
                    path='/'
                    render={ props => <Home {...props} />}
                />
                <Route 
                    path="/add"
                    render={ props => <AddUser {...props} />}
                />
                <Route 
                    path="/edit/:id"
                    render={ props => <EditUser {...props} />}
                />
                
            </Switch>
        )
    }
}

export default Routes
