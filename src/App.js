import React from 'react';
import { withRouter } from 'react-router-dom';
import axios from 'axios';
import Routes from './config/routes';
import NavBar from './components/Layout/NavBar';
import API_URL from './constants';
import 'bootstrap/dist/css/bootstrap.min.css';


class App extends React.Component {
  state = {
    currentUser: localStorage.getItem('uid'),
    userType: ""
  };

  setCurrentUser = (userId) => {
    this.setState({ currentUser: userId });
    localStorage.setItem('uid', userId);
  };

  setCurrentUserType = (userType) => {
    this.setState({ userType: userType });
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
        <NavBar 
          currentUser = { this.state.currentUser }
          setCurrentUser = { this.setCurrentUser }
          userType = { this.state.userType }
        />
        <Routes
          currentUser = { this.state.currentUser }
          userType = { this.state.userTpye }
        />
      </div>
    );
  }
}

export default withRouter(App);
