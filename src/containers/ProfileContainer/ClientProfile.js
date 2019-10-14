import React from 'react';
import axios from 'axios';
import API_URL from '../../constants';
import ClientProfileComponent from '../../components/Profiles/ClientProfile/ClientProfileComponent';

class ClientProfile extends React.Component {
    state = {
        name: "",
        email: "",
        password: "",
        password2: "",
        errors: []
    };

    componentDidMount = () => {
        const currentUser = localStorage.getItem('uid');
        axios.get(`${ API_URL }/client/${ currentUser }`, { withCredentials: true })
            .then(res => {
                this.setState({
                    name: res.data.data.name,
                    email: res.data.data.email,
                })
                console.log(res)
            })
            .catch(err => {
                console.log(err)
                this.setState({ errors: err})
            });
    };

    onProfileEdit = (event) => {
        event.preventDefault();
        const name = this.state.name;
        const email = this.state.email;
        const password = this.state.password;
        const currentUser = localStorage.getItem('uid');
        axios.put(`${ API_URL }/client/${ currentUser }`,
            { name: name, email: email, password: password },
            { withCredentials: true })
                .then(res => console.log(res))
                .catch(err => {
                    console.log(err)
                    this.setState({ errors: err})
                });
    };

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        });
        console.log(this.state)
    };

    render() {
        return (
            <>
                <ClientProfileComponent name = { this.state.name }/>
            </>
        );
    };
};

export default ClientProfile;