import React from 'react';
import { connect } from 'react-redux';
import { Button, ButtonToolbar } from 'react-bootstrap';
import { attorneyLogin } from '../../actions/attorneyActions';
import { clientLogin } from '../../actions/clientActions';
import OptionsModal from '../../components/Auth/Options/OptionsModal';
import LoginModal from '../../components/Auth/Login/LoginModal';

class Login extends React.Component {
    state = {
        modalShow: false,
        modalType: "",
        email: "",
        password: "",
        errors: []
    };

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        });
    };

    handleAttorneySubmit = (event) => {
        event.preventDefault();
        const email = this.state.email;
        const password = this.state.password;
        this.props.attorneyLogin(email, password);
    }

    handleClientSubmit = (event) => {
        event.preventDefault();
        const email = this.state.email;
        const password = this.state.password;
        this.props.clientLogin(email, password);
    }

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
                return <LoginModal  
                    show = { this.state.modalShow }
                    onHide = { () => this.setModalShow(false) }
                    selectModal = { this.selectModal }
                    modalSwitch = { this.modalSwitch }
                    handleSubmit = { this.handleAttorneySubmit }
                    handleChange = { this.handleChange }
                    errors = { this.state.errors }
                />;
            case 'client':
                return <LoginModal
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
                        Login
                    </Button>

                    { this.modalSwitch(this.state.modalType) }

                </ButtonToolbar>
            </>
        );
    };
};

export default connect(null, { attorneyLogin, clientLogin })(Login);
