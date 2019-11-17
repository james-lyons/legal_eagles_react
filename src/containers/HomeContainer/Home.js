import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { fetchAttorneys } from '../../actions/attorneyActions';
import './Home.css';
import './SearchBarComponent.css';

class Home extends React.Component {
    state = {
        specialty: "",
        zipcode: "",
        results: null,
        errors: []
    };

    handleSubmit = (event) => {
        event.preventDefault();
        const specialty = this.state.specialty
        const zipcode = this.state.zipcode
        this.props.fetchAttorneys(specialty, zipcode)
    };

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        });
    };

    render() {
        return (
            <>
                <div className = "homepage">
                    <div className="homepage-header">
                        <div className="s01">
                            <form onSubmit={ this.handleSubmit }>
                                <div className="inner-form">
                                    <div className="input-field first-wrap">
                                        <select
                                            className="form-control form-control-md"
                                            id="specialty"
                                            name="specialty"
                                            onChange={ this.handleChange }
                                            placeholder="Restaurant Name"
                                        > 
                                            <option value="">Select Specialty</option>
                                            <option value="Admiralty">Admiralty Law</option>
                                            <option value="Animal Rights">Animal Rights Law</option>
                                            <option value="Civil Rights">Civil Rights Law</option>
                                            <option value="Constitutional">Constitutional Law</option>
                                            <option value="Contract">Contract Law</option>
                                            <option value="Corporate">Corporate Law</option>
                                            <option value="Criminal">Criminal Law</option>
                                            <option value="Education">Education Law</option>
                                            <option value="Employment and Labor">Employment and Labor Law</option>
                                            <option value="Enviornment and Natural Resources">Enviornment and Natural Resources Law</option>
                                            <option value="Family and Juvenile">Family and Juvenile Law</option>
                                            <option value="Health">Health Law</option>
                                            <option value="Immigration">Immigration Law</option>
                                            <option value="Intellectural Property">Intellectual Property Law</option>
                                            <option value="International">International Law</option>
                                            <option value="Municipal">Municipal Law</option>
                                            <option value="Real Estate">Real Estate Law</option>
                                            <option value="Securities">Securities Law</option>
                                            <option value="Sports and Entertainment">Sports and Entertainment Law</option>
                                            <option value="Tax">Tax Law</option>
                                            <option value="Tort">Tort Law</option>
                                            <option value="Trust and Estate">Trust and Estate Law</option>
                                        </select>
                                    </div>
                                    <div className="input-field first-wrap">
                                        <input
                                            name="zipcode"
                                            type="text"
                                            onChange={ this.handleChange }
                                            placeholder="Zipcode"
                                        />
                                    </div>
                                    <div className="input-field third-wrap">
                                        <button className="btn-search" id="search-button" type="submit"><i className="fa fa-search" aria-hidden="true"></i></button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                    <div className="home-content">
                        <h4 className="home-h4">Need help finding legal representation? Sign up for a free account and start browsing attorneys in your area, it will only cost a few minutes and you may find just what you need.</h4>
                    </div>
                    { this.props.results && <Redirect to={{ pathname:'/attorney_search' }} /> }
                </div>
            </>
        );
    };
};

const mapStateToProps = (state) => {
    return {
        results: state.attorneyReducer.results
    };
};

export default connect(mapStateToProps, { fetchAttorneys })(Home);