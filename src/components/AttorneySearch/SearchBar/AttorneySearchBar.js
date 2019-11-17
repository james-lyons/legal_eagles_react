import React from 'react';
import { Form, Col, Button, } from 'react-bootstrap';
import './SearchBarComponent.css'

const AttorneySearchBar = ({ ...props }) => {
    return (
        <div className="search_bar justify-content-md-center">
            <Form onSubmit={ this.handleSubmit } className="search-form justify-content-md-center">
                <Form.Row className="justify-content-md-center">
                    <Form.Group as={Col} md="4" controlId="specialty">
                        <Form.Control
                            name="specialty"
                            onChange={ this.handleChange }
                            as="select"
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
                        </Form.Control>
                    </Form.Group>
                    <Form.Group as={Col} md="4" controlId="zipcode">
                        <Form.Control
                            type="zipcode"
                            name="zipcode"
                            onChange={ this.handleChange}
                            placeholder="zipcode"
                        />
                        <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                    </Form.Group>
                <Button className="home-search-button" id="attorney-search-button" type="submit">Search</Button>
                </Form.Row>
            </Form>
            <h1>hi</h1>
        </div>
                    <div className="s01">
                    <form onSubmit={ props.handleSubmit }>
                        <div className="inner-form">
                            <div className="input-field first-wrap">
                                <input name="name" type="text" onChange={ props.handleChange } placeholder="Restaurant Name" />
                            </div>
                            <div className="input-field first-wrap">
                                <input name="city" type="text" onChange={ props.handleChange }  placeholder="City" />
                            </div>
                            <div className="input-field third-wrap">
                                <button className="btn-search" id="search-button" type="submit"><i className="fa fa-search" aria-hidden="true"></i></button>
                            </div>
                        </div>
                    </form>
                </div>
    );
};

export default AttorneySearchBar;