import React from 'react';
import { Switch, Route, withRouter, Redirect } from 'react-router-dom';
import Home from '../components/Home/Home';
import AttorneyProfileContainer from '../containers/AttorneyProfileContainer/AttorneyProfileContainer';
import ClientProfileContainer from '../containers/ClientProfileContainer/ClientProfileContainer';

export default withRouter(({ currentUser }) => {
    const AttorneyRoute = ({ component: Component, ...rest }) => (
        <Route { ...rest } render = {(props) => {
            currentUser.user_type === 'attorney'
                ? <Component { ...props } />
                : <Redirect to = '/' />
        }} />
    );

    const ClientRoute = ({ component: Component, ...rest }) => (
        <Route { ...rest } render = {(props) => {
            currentUser.user_type === 'client'
                ? <Component { ...props } />
                : <Redirect to = '/' />
        }} />
    );

    return (
        <Switch>
            <Route exact path = '/' component = { Home } />
            {/* <Route path = '/search' component = { attorneySearch } /> */}
            <AttorneyRoute path = '/profile' component = { AttorneyProfileContainer } />
            <ClientRoute path = '/profile' component = { ClientProfileContainer } />
        </Switch>
    );
});