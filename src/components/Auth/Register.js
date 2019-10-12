import React from 'react';
import { Button, ButtonToolbar } from 'react-bootstrap';
import axios from 'axios';
import RegisterModals from './RegisterModals'
import AttorneyM from './AttorneyM'
import ClientM from './ClientM'
import OptionsM from './OptionsM'
import API_URL from '../../constants';

class RegisterAttorney extends React.Component {
    state = {
        modalShow: false,
        modalType: "",
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
        console.log(event.target.value)
        console.log(this.state)
    };

    handleAttorneySubmit = (event) => {
        event.preventDefault();
        const name = this.state.name;
        const email = this.state.email;
        const password = this.state.password;
        const password2 = this.state.password2;
        const address = this.state.address;
        const zipcode = this.state.zipcode;
        const specialties = this.state.specialties;
        axios.post(`${ API_URL }/auth/registerAttorney`, { name, email, password, password2, address, zipcode, specialties}, { withCredentials: true })
            .catch(err => {
                console.log(err.response);
                this.setState({
                    errors: [err.response]
                });
            });
    };

    handleClientSubmit = (event) => {
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

    selectModal = (event) => {
        this.setState({
            modalType: event.target.value
        });
    };

    modalSwitch = (modalType) => {
        switch(modalType) {
            case 'attorney':
                return <AttorneyM   
                    show = { this.state.modalShow }
                    onHide = { () => this.setModalShow(false) }
                    selectModal = { this.selectModal }
                    modalSwitch = { this.modalSwitch }
                    handleSubmit = { this.handleAttorneySubmit }
                    handleChange = { this.handleChange }
                    errors = { this.state.errors }
                />;
            case 'client':
                return <ClientM
                    show = { this.state.modalShow }
                    onHide = { () => this.setModalShow(false) }
                    selectModal = { this.selectModal }
                    modalSwitch = { this.modalSwitch }
                    handleSubmit = { this.handleClientSubmit }
                    handleChange = { this.handleChange }
                />;
            default:
                return <OptionsM 
                    show = { this.state.modalShow }
                    onHide = { () => this.setModalShow(false) }
                    selectModal = { this.selectModal }
                    modalSwitch = { this.modalSwitch }
                />;
        };
    };

    render() {
        return (
            <>
                <ButtonToolbar>
                    <Button variant="primary" onClick = { () => this.setModalShow(true) }>
                        Register
                    </Button>

                    { this.modalSwitch(this.state.modalType) }

                </ButtonToolbar>
            </>
        );
    };
};

export default RegisterAttorney;
