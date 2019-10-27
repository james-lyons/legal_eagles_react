import React from 'react';
import { Switch, Route, withRouter, Redirect } from 'react-router-dom';
import Home from '../containers/HomeContainer/Home';
import AttorneySearch from '../containers/AttorneySearchContainer/AttorneySearch';
import ClientProfile from '../containers/ProfileContainer/ClientProfile';
import AttorneyPublicProfile from '../containers/ProfileContainer/AttorneyPublicProfile';
import AttorneyPrivateProfile from '../containers/ProfileContainer/AttorneyPrivateProfile';

export default withRouter(() => {
    const currentUser = localStorage.getItem('uid');
    const userType = localStorage.getItem('user_type');

    const PrivateRoute = ({ component: Component, ...rest }) => (
        <Route { ...rest } render={(props) => (
            currentUser 
                ? <Component { ...props } />
                : <Redirect to='/' />
        )} />
    );

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

    const redirectToHome = () => {
        return (
            <Redirect to="/" />
        );
    };

    return (
        <Switch>
            <Route exact path = '/' component = { Home } />
            <PrivateRoute path = '/attorney_search' component={ AttorneySearch } />
            <PrivateRoute path = '/attorney/:attorney_url' component={AttorneyPublicProfile } { ...this.props } />
            <AttorneyRoute path = '/attorney_profile' component = { AttorneyPrivateProfile } />
            <ClientRoute path = '/client_profile' component = { ClientProfile } />
            <Route component={ redirectToHome }/>
        </Switch>
    );
});