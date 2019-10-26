import React from 'react';
import { Switch, Route, withRouter, Redirect } from 'react-router-dom';
import Home from '../containers/HomeContainer/Home';
import AttorneySearch from '../containers/AttorneySearchContainer/AttorneySearch';
import ClientProfile from '../containers/ProfileContainer/ClientProfile';
import AttorneyPublicProfile from '../containers/ProfileContainer/AttorneyPublicProfile';
import AttorneyPrivateProfile from '../containers/ProfileContainer/AttorneyPrivateProfile';

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
            <Route path = '/attorney/:attorney_url' render={ props => <AttorneyPublicProfile {...props} /> }/>
            <AttorneyRoute path = '/attorney_profile' component = { AttorneyPrivateProfile } />
            <ClientRoute path = '/client_profile' component = { ClientProfile } />
        </Switch>
    );
});