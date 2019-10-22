import React from 'react';
import { Button, ButtonToolbar } from 'react-bootstrap';
import { connect } from 'react-redux';
import { attorneyRegister } from '../../actions/attorneyActions';
import { clientRegister } from '../../actions/clientActions';
import AttorneyRegisterModal from '../../components/Auth/Register/AttorneyRegisterModal'
import ClientRegisterModal from '../../components/Auth/Register/ClientRegisterModal'
import OptionsModal from '../../components/Auth/OptionsModal'

class Register extends React.Component {
    state = {
        first_name: "",
        last_name: "",
        email: "",
        city: "",
        state: "",
        zipcode: 0,
        specialty: "",
        profile_image: "",
        password: "",
        password2: "",
        reviews: [],
        modalShow: false,
        modalType: "",
        validated: "",
        errors: []
    };

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        });
        console.log(this.state)
    };

    handleImageChange = (event) => {
        this.setState({
          profile_image: URL.createObjectURL(event.target.files[0])
        });
    };

    handleAttorneyRegister = (event) => {
        event.preventDefault();
        const newAttorney = {
            first_name: this.state.first_name,
            last_name: this.state.last_name,
            email: this.state.email,
            city: this.state.city,
            state: this.state.state,
            zipcode: this.state.zipcode,
            specialty: this.state.specialty,
            profile_image: this.state.profile_image,
            password: this.state.password,
            password2: this.state.password2,
        }
        this.props.attorneyRegister(newAttorney);
    };

    handleClientRegister = (event) => {
        event.preventDefault();
        const newClient = {
            first_name: this.state.first_name,
            last_name: this.state.last_name,
            email: this.state.email,
            password: this.state.password,
            password2: this.state.password2,
        }
        console.log(newClient)
        this.props.clientRegister(newClient)
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
                    handleChange = { this.handleChange }
                    handleImageChange = { this.handleImageChange }
                    handleSubmit = { this.handleAttorneyRegister }
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
                    handleChange = { this.handleChange }
                    handleSubmit = { this.handleClientRegister }
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

export default connect(null, { attorneyRegister, clientRegister } )(Register);
