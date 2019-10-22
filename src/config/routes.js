import React from 'react';
import { Switch, Route, withRouter, Redirect } from 'react-router-dom';
import Home from '../components/Home/Home';
import AttorneySearch from '../components/AttorneySearch/AttorneySearch'
import AttorneyProfile from '../containers/ProfileContainer/AttorneyProfile';
import ClientProfile from '../containers/ProfileContainer/ClientProfile';

export default withRouter(() => {

    const userType = localStorage.getItem('user_type');

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
            <Route path = '/attorney_search' component={ AttorneySearch } />
            <AttorneyRoute path = '/attorney_profile' component = { AttorneyProfile } />
            <ClientRoute path = '/client_profile' component = { ClientProfile } />
        </Switch>
    );
});