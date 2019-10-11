import React from 'react';
import { button } from 'react-bootstrap';
import axios from 'axios';
import API_URL from '../../constants';

class RegisterAttorney extends React.Component {
    state = {
        name: "",
        email: "",
        password: "",
        password2: "",
        address: "",
        zipcode: 0,
        specialties: [],
        reviews: [],
        errors: []
    };

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        });
    };

    handleSubmit = (event) => {
        event.preventDefault();
        const newAttorney = this.state;
        axios.post(`${ API_URL }/auth/registerAttorney`, newAttorney, { withCredentials: true })
            .catch(err => {
                console.log(err);
                this.setState({
                    errors: [err.response.data]
                });
            });
    };

    render() {

        return (
            <>
            </>
        );
    };
};

export default RegisterAttorney;
