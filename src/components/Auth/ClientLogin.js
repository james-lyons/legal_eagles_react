import React from 'react';
import axios from 'axios';
import { withRouter } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import API_URL from '../../constants';

class ClientLogin extends React.Component {
    state = {
        email: "",
        password: "",
        errors: []
    };

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        });
    };

    handleSubmit = (event) => {
        event.preventDefault();
        const user = this.state;
        axios.post(`${ API_URL }/auth/clientLogin`, user, { withCredentials: true })
            .then(res => {
                console.log(res);
                this.props.setCurrentUser(res.data.id);
            })
            .catch(err => {
                console.log(err)
            });
    };

    render() {

        return (
            <>
            </>
        );
    };
};

export default withRouter(ClientLogin);