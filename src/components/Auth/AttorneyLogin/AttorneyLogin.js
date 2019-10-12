import React from 'react';
import { Button, ButtonToolbar } from 'react-bootstrap';
import axios from 'axios';
import AttorneyLoginModal from './AttorneyLoginModal'
import API_URL from '../../../constants';

class AttorneyLogin extends React.Component {
    state = {
        modalShow: false,
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
        const newAttorney = this.state;
        axios.post(`${ API_URL }/auth/attorneyLogin`, newAttorney, { withCredentials: true })
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
                        For Attorneys
                    </Button>

                    <AttorneyLoginModal
                        show = { this.state.modalShow }
                        onHide = { () => this.setModalShow(false) }
                    />
                </ButtonToolbar>
            </>
        );
    };
};

export default AttorneyLogin;
