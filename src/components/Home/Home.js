import React from 'react';
import axios from 'axios';
import { Redirect } from 'react-router-dom';
import { Col, Form, Button } from 'react-bootstrap';
import API_URL from '../../constants';
import "./Home.css";


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
        axios.get(`${ API_URL }/attorney/search`,
            {params: {specialty: specialty, zipcode: zipcode}},
            { withCredentials: true })
                .then(res => { 
                    this.setState({
                        results: res.data.data
                    });
                    console.log(this.state.results)
                })
                .catch(err => {
                    console.log(err)
                    this.setState({
                        errors: err
                    });
                });
    };

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
        console.log(this.state)
    };

    render() {
        return (
            <>
                <div className = "homepage">
                    <div className="homepage-header">
                        <div className="search_bar justify-content-md-center">
                            <Form onSubmit={ this.handleSubmit } className="search-form justify-content-md-center">
                                <Form.Row className="justify-content-md-center">
                                <Form.Group as={Col} md="11" controlId="specialty">
                                        <Form.Label className="search-bar-header">Search by Specialty And / Or Zipcode</Form.Label>
                                        <Form.Control
                                            name="specialty"
                                            onChange={ this.handleChange }
                                            as="select"
                                        >
                                            <option value="">Select</option>
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
                                        </Form.Control>
                                    </Form.Group>
                                </Form.Row>
                                <Form.Row className="justify-content-md-center">
                                    <Form.Group as={Col} md="11" controlId="zipcode">
                                        <Form.Control
                                            type="zipcode"
                                            name="zipcode"
                                            onChange={ this.handleChange}
                                            placeholder="zipcode"
                                        />
                                        <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                                    </Form.Group>
                                </Form.Row>
                                <Button className="home-search-button" type="submit">Submit</Button>
                            </Form>
                        </div>
                        <div className="home-content">
                            <h4 className="home-h4">Need help finding legal representation? Afraid that seeking restitution for a wrong commited unto you would be too costly, take too much time, or be unwinnable? Sign up for a free account and start browsing attorneys in your area, it will only cost a few minutes and you may find just what you need.</h4>
                            <h4 className="home-h4">Every years, more and more attorneys enter the work force at a rate that the market is incapable of baring. Sign up for a free account and start finding clients who need legal representation for cases that may never have been litigated.</h4>
                        </div>
                        { this.state.results && <Redirect to={{pathname:'/attorney_search', state: {results: this.state.results}}} /> }
                    </div>
                </div>
            </>
        );      
    };
};

export default Home;