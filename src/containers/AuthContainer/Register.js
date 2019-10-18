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
        validated: false,
        modalType: "",
        first_name: "",
        last_name: "",
        email: "",
        city: "",
        state: "",
        zipcode: 0,
        specialty: "",
        profile_image: "https://icon-library.net/images/default-profile-icon/default-profile-icon-24.jpg",
        password: "",
        password2: "",
        reviews: [],
        errors: []
    };

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        });
        console.log(this.state)
    };

    handleImageChange = (event) => {
        console.log(event)
        this.setState({
          profile_image: URL.createObjectURL(event.target.files[0])
        });
        console.log(this.state.profile_image)
      };

    handleAttorneySubmit = (event) => {
        event.preventDefault();
        const first_name = this.state.first_name;
        const last_name = this.state.last_name
        const email = this.state.email;
        const city = this.state.city;
        const state = this.state.state;
        const zipcode = this.state.zipcode;
        const specialty = this.state.specialty;
        const profile_image = this.state.profile_image
        const password = this.state.password;
        const password2 = this.state.password2;
        axios.post(`${ API_URL }/auth/registerAttorney`,
            { first_name, last_name, email, city, state, zipcode,
            specialty, profile_image, password, password2 },
            { withCredentials: true })
            .then(res => {
                window.location.reload();
            })
                .catch(err => {
                    console.log(err.response);
                    this.setState({
                        errors: [err.response]
                    });
                });
    };

    handleClientSubmit = (event) => {
        event.preventDefault();
        const first_name = this.state.first_name;
        const last_name = this.state.last_name;
        const email = this.state.email;
        const password = this.state.password;
        const password2 = this.state.password2;
        axios.post(`${ API_URL }/auth/registerClient`,
            { first_name, last_name, email, password, password2 },
            { withCredentials: true })
                .then(res => {
                    window.location.reload();
                })
                .catch(err => {
                    console.log(err);
                    this.setState({
                        errors: [err.response]
                    });
                });
    };

    handleValidation = (event) => {
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
          event.preventDefault();
          event.stopPropagation();
        };    
        this.setValidated(true);
      };

    setValidated = (validated) => {
        this.setState({
            validated: validated
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
                    handleImageChange = { this.handleImageChange }
                    handleValidation = { this.handleValidation }
                    profile_image = { this.state.profile_image }
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
