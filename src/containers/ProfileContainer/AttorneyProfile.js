import React from 'react';
import Axios from 'axios';
import { Button, ButtonToolbar } from 'react-bootstrap';
import API_URL from '../../constants';
import AttorneyProfileComponent from '../../components/Profiles/AttorneyProfile/AttorneyProfileComponent';

class AttorneyProfile extends React.Component {
    state = {
        modalShow: false,
        email: "",
        password: "",
        password2: "",
        errors: []
    };

    componentDidmount = () => {
        const currentUser = localStorage.getItem('uid');
        Axios.get(`${ API_URL }/attorney/${ currentUser }`, { withCredentials: true })
            .then(res => {
                this.setState({
                    name: res.data.data.name,
                    email: res.data.data.email,
                    password: res.data.data.password
                })
            })
            .catch(err => {
                console.log(err)
                this.setState({ errors: err})
            });
    };

    onProfileEdit = (event) => {
        event.preventDefault();
        const currentUser = localStorage.getItem('uid');
        const name = this.state.name;
        const email = this.state.email;
        const password = this.state.password;
        const password2 = this.state.password2;
        Axios.put(`${ API_URL }/attorney/${ currentUser }`, {}, { withCredentials: true })
            .then(res => {
                console.log(res)
            })
            .catch(err => {
                console.log(err);
                this.setState({
                    errors: err,
                })
            })
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

    render() {
        return (
            <>
                <AttorneyProfileComponent />
            </>
        );
    };
};

export default AttorneyProfile;