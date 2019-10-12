import React from 'react';
import { Button, ButtonToolbar } from 'react-bootstrap';
import axios from 'axios';
import RegisterClientModal from './RegisterClientModal'
import API_URL from '../../../constants';

class RegisterClient extends React.Component {
    state = {
        modalShow: false,
        name: "",
        email: "",
        password: "",
        password2: "",
        errors: []
    };

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        });
    };

    handleSubmit = (event) => {
        event.preventDefault();
        const newClient = this.state;
        axios.post(`${ API_URL }/auth/registerClient`, newClient, { withCredentials: true })
            .catch(err => {
                console.log(err);
                this.setState({
                    errors: [err.response.data]
                });
            });
    };

    setModalShow = (modalState) => {
        this.setState({
            modalShow: modalState
        });
    };

    render() {
        return (
            <>
                <ButtonToolbar>
                    <Button variant="primary" onClick = { () => this.setModalShow(true) }>
                        For Clients
                    </Button>

                    <RegisterClientModal
                        show = { this.state.modalShow }
                        onHide = { () => this.setModalShow(false) }
                    />
                </ButtonToolbar>
            </>
        );
    };
};

export default RegisterClient;
