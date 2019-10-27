import React from 'react';
import { withRouter } from 'react-router-dom';
import Routes from './config/routes';
import NavBar from './components/Layout/NavBar';
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
  return (
    <div className="App">
      <NavBar />
      <Routes />
    </div>
  );
}

export default withRouter(App);
