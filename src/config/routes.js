import React from 'react';
import { Switch, Route, withRouter, Redirect } from 'react-router-dom';
import Home from '../components/Home/Home';
import AttorneyProfileContainer from '../containers/AttorneyProfileContainer/AttorneyProfileContainer';
import ClientProfileContainer from '../containers/ClientProfileContainer/ClientProfileContainer';

export default withRouter(({ currentUser, userType }) => {
    const AttorneyRoute = ({ component: Component, ...rest }) => (
        <Route { ...rest } render = {(props) => (
            currentUser.user_type === 'attorney'
                ? <Component { ...props } />
                : <Redirect to = '/' />
        )} />
    );

    const ClientRoute = ({ component: Component, ...rest }) => (
        <Route { ...rest } render = {(props) => (
            userType === 'client'
                ? <Component { ...props } />
                : <Redirect to = '/' />
        )} />
    );

    return (
        <Switch>
            <Route exact path = '/' component = { Home } />
            <AttorneyRoute path = '/profile' component = { AttorneyProfileContainer } />
            <ClientRoute path = '/profile' component = { ClientProfileContainer } />
        </Switch>
    );
});