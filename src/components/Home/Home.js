import React from 'react';
import axios from 'axios';
import API_URL from '../../constants';
import "./Home.css";


class Home extends React.Component {
    state = {
        search: "",
        results: "",
        errors: []
    };

    onSubmit = () => {
        const search = this.state.search
        axios.get(`${ API_URL }/attorney/search/${ search }`, { withCredentials: true })
        .then(res => { 
            this.setState({
                results: res.data
            });
        })
        .catch(err => {
            console.log(err)
            this.setState({
                errors: err
            });
        });
    };

    onInput = (event) => {
        this.setState({
            search: event.target.value
        })
        console.log(this.state)
    };

    render() {
        return (
            <>
                <div className = "homepage">
                    <div className="homepage-header">
                        <div className="search_bar">
                            <form onSubmit = { this.onSubmit }>
                                <input onChange = { this.onInput } />
                                <button>Submit</button>
                            </form>
                        </div>
                    </div>
                    <div className = "homepage-footer">
    
                    </div>
                </div>
            </>
        );      
    };
};

export default Home;