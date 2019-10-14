import React from 'react';
import { Switch, Route, withRouter, Redirect } from 'react-router-dom';
import Home from '../components/Home/Home';
import AttorneyProfile from '../containers/ProfileContainer/AttorneyProfile';
import ClientProfile from '../containers/ProfileContainer/ClientProfile';

export default withRouter(({ userType }) => {
    const AttorneyRoute = ({ component: Component, ...rest }) => (
        <Route { ...rest } render = {(props) => (
            userType === 'attorney'
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
            <Route path = '/attorney_search' />
            <AttorneyRoute path = '/attorney_profile' component = { AttorneyProfile } />
            <ClientRoute path = '/client_profile' component = { ClientProfile } />
        </Switch>
    );
});