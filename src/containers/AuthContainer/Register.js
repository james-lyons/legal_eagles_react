import React from 'react';
import { Button, ButtonToolbar } from 'react-bootstrap';
import axios from 'axios';
import AttorneyRegisterModal from '../../components/Auth/Register/AttorneyRegisterModal'
import ClientRegisterModal from '../../components/Auth/Register/ClientRegisterModal'
import OptionsModal from '../../components/Auth/OptionsModal'
import API_URL from '../../constants';

class Register extends React.Component {
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
    };

    handleAttorneySubmit = (event) => {
        event.preventDefault();
        const name = this.state.name;
        const email = this.state.email;
        const password = this.state.password;
        const password2 = this.state.password2;
        const zipcode = this.state.zipcode;
        const specialties = this.state.specialties;
        axios.post(`${ API_URL }/auth/registerAttorney`,
            { name, email, password, password2, zipcode, specialties},
            { withCredentials: true })
            .then(res => {
                window.location.reload();
            })
                .catch(err => {
                    console.log(err.response);
                    this.setState({
                        errors: [err.response.data]
                    });
                });
    };

    handleClientSubmit = (event) => {
        event.preventDefault();
        const name = this.state.name;
        const email = this.state.email;
        const password = this.state.password;
        const password2 = this.state.password2;
        axios.post(`${ API_URL }/auth/registerClient`,
            { name, email, password, password2 },
            { withCredentials: true })
                .then(res => {
                    window.location.reload();
                })
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
                return <AttorneyRegisterModal   
                    show = { this.state.modalShow }
                    onHide = { () => this.setModalShow(false) }
                    selectModal = { this.selectModal }
                    modalSwitch = { this.modalSwitch }
                    handleSubmit = { this.handleAttorneySubmit }
                    handleChange = { this.handleChange }
                    errors = { this.state.errors }
                />;
            case 'client':
                return <ClientRegisterModal
                    show = { this.state.modalShow }
                    onHide = { () => this.setModalShow(false) }
                    selectModal = { this.selectModal }
                    modalSwitch = { this.modalSwitch }
                    handleSubmit = { this.handleClientSubmit }
                    handleChange = { this.handleChange }
                />;
            default:
                return <OptionsModal 
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

export default Register;
