import React from 'react';
import { withRouter } from 'react-router-dom';
import axios from 'axios';
import Routes from './config/routes';
import NavBar from './components/Layout/NavBar';
import API_URL from './constants';

class App extends React.Component {
  state = {
    currentUser: localStorage.getItem('uid')
  };

  setCurrentUser = (userId) => {
    this.setState({ currentUser: userId });
    localStorage.setItem('uid', userId);
  };

  logout = () => {
    localStorage.removeItem('uid');
    axios.post(`${ API_URL }/auth/logout`, { withCredentials: true })
      .then(res => {
        this.setState({ currentUser: null });
        this.props.history.push('/');
      })
      .catch(err => console.log(err));
  };

  render() {
    return (
      <div className="App">
        <h1>Legal Eagles</h1>
      </div>
    );
  }
}

export default withRouter(App);
