import React from 'react';
import axios from 'axios';
import API_URL from '../../constants';
import AttorneyPrivateProfileComponent from '../../components/Profiles/AttorneyPrivateProfile/AttorneyPrivateProfile';

class AttorneyProfile extends React.Component {
    state = {
        name: '',
        email: "",
        zipcode: 0,
        specialty: "",
        password: "",
        password2: "",
        errors: []
    };

    componentDidMount = () => {
        const currentUser = localStorage.getItem('uid');
        axios.get(`${ API_URL }/attorney/search/id/${ currentUser }`, { withCredentials: true })
            .then(res => {
                this.setState({
                    name: res.data.data.name,
                    email: res.data.data.email,
                    password: res.data.data.password,
                    zipcode: res.data.data.zipcode,
                    specialties: res.data.data.specialties
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
        axios.put(`${ API_URL }/attorney/${ currentUser }`,
            { name: name, email: email, password: password },
            { withCredentials: true })
                .then(res => {
                    console.log(res)
                })
                .catch(err => {
                    console.log(err);
                    this.setState({
                        errors: err,
                    });
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
                <AttorneyPrivateProfileComponent
                    name = { this.state.name }
                    email = { this.state.email }
                    zipcode = { this.state.zipcode }
                    zpecialties = { this.state.specialties }
                    handleChange = { this.handleChange }
                    onProfileEdit = { this.onProfileEdit }
                />
            </>
        );
    };
};

export default AttorneyProfile;