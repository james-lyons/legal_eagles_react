import React from 'react';
import { Modal, Button, Form, Col, InputGroup } from 'react-bootstrap';
import '../Auth.css';

const AttorneyRegisterModal = (props) => {
    return (
        <>
            <Modal
                {...props}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
            >
                <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-vcenter">
                        Please fill out all of the following
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className="row">
                        { props.errors && props.errors.map((e, i) => (
                            <div className="alert alert-danger alert-dismissible fade show"
                                style={{width: '100%'}} role="alert" key={ i }>
                                { e.message }
                                <button className="close" data-dismiss="alert">
                                    <span aria-hidden="true">&times;</span>
                                </button>    
                            </div>
                        ))}
                        <section id="register" className="ui form">
                            <Form noValidate validated={ props.validated } onSubmit={ props.handleSubmit }>
                                <Form.Row>
                                    <Form.Group as={Col} md="6" controlId="validationCustom01">
                                        <Form.Label>First name</Form.Label>
                                        <Form.Control
                                            required
                                            type="text"
                                            placeholder="First name"
                                        />
                                        <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                                    </Form.Group>
                                    <Form.Group as={Col} md="6" controlId="validationCustom02">
                                        <Form.Label>Last name</Form.Label>
                                        <Form.Control
                                            required
                                            type="text"
                                            placeholder="Last name"
                                        />
                                        <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                                    </Form.Group>                               
                                </Form.Row>
                                <Form.Row>
                                    <Form.Group as={Col} md="6" controlId="email">
                                        <Form.Label>Email</Form.Label>
                                        <Form.Control
                                            required
                                            type="text"
                                            placeholder="email"
                                        />
                                        <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                                    </Form.Group>
                                    <Form.Group as={Col} md="6" controlId="specialties">
                                        <Form.Label>Specialties</Form.Label>
                                        <Form.Control as="select">
                                            <option>Admiralty Law</option>
                                            <option>Animal Rights Law</option>
                                            <option>Civil Rights Law</option>
                                            <option>Constitutional Law</option>
                                            <option>Contract Law</option>
                                            <option>Corporate Law</option>
                                            <option>Criminal Law</option>
                                            <option>Education Law</option>
                                            <option>Employment and Labor Law</option>
                                            <option>Enviornment and Natural Resources Law</option>
                                            <option>Family and Juvenile Law</option>
                                            <option>Health Law</option>
                                            <option>Immigration Law</option>
                                            <option>Intellectual Property Law</option>
                                            <option>International Law</option>
                                            <option>Municipal Law</option>
                                            <option>Real Estate Law</option>
                                            <option>Securities Law</option>
                                            <option>Sports and Entertainment Law</option>
                                            <option>Tax Law</option>
                                            <option>Tort Law</option>
                                            <option>Trust and Estate Law</option>
                                        </Form.Control>
                                    </Form.Group>
                                </Form.Row>
                                <Form.Row>
                                    <Form.Group as={Col} md="6" controlId="validationCustom03">
                                        <Form.Label>City</Form.Label>
                                        <Form.Control type="text" placeholder="City" required />
                                        <Form.Control.Feedback type="invalid">
                                            Please provide a valid city.
                                        </Form.Control.Feedback>
                                    </Form.Group>
                                    <Form.Group as={Col} controlId="stateGrid">
                                        <Form.Label>State</Form.Label>
                                        <Form.Control as="select">
                                            <option>Choose...</option>
                                            <option>Alabama</option>
                                            <option>Alaska</option>
                                            <option>Arizona</option>
                                            <option>Arkansas</option>
                                            <option>California</option>
                                            <option>Colorado</option>
                                            <option>Connecticut</option>
                                            <option>Delaware</option>
                                            <option>Florida</option>
                                            <option>Georgia</option>
                                            <option>Hawaii</option>
                                            <option>Idaho</option>
                                            <option>Illinois</option>
                                            <option>Indiana</option>
                                            <option>Iowa</option>
                                            <option>Kansas</option>
                                            <option>Kentucky</option>
                                            <option>Louisiana</option>
                                            <option>Maine</option>
                                            <option>Maryland</option>
                                            <option>Massachusetts</option>
                                            <option>Michigan</option>
                                            <option>Minnesota</option>
                                            <option>Mississippi</option>
                                            <option>Missouri</option>
                                            <option>Montana</option>
                                            <option>Nebraska</option>
                                            <option>Nevada</option>
                                            <option>New Hampshire</option>
                                            <option>New Jersey</option>
                                            <option>New Mexico</option>
                                            <option>New York</option>
                                            <option>North Carolina</option>
                                            <option>North Dakota</option>
                                            <option>Ohio</option>
                                            <option>Oklahoma</option>
                                            <option>Oregon</option>
                                            <option>Pennsylvania</option>
                                            <option>Rhode Island</option>
                                            <option>South Carolina</option>
                                            <option>South Dakota</option>
                                            <option>Tennessee</option>
                                            <option>Texas</option>
                                            <option>Utah</option>
                                            <option>Vermont</option>
                                            <option>Virginia</option>
                                            <option>Washington</option>
                                            <option>West Virginia</option>
                                            <option>Wisconsin</option>
                                            <option>Wyoming</option>
                                        </Form.Control>
                                    </Form.Group>
                                    <Form.Group as={Col} md="3" controlId="zipcode">
                                        <Form.Label>Zip</Form.Label>
                                        <Form.Control type="text" placeholder="Zip" required />
                                        <Form.Control.Feedback type="invalid">
                                            Please provide a valid zip.
                                        </Form.Control.Feedback>
                                    </Form.Group>
                                </Form.Row>
                                <Form.Row>
                                    <Form.Group as={Col} md="6" controlId="password1">
                                        <Form.Label>Password</Form.Label>
                                        <Form.Control
                                            required
                                            type="password"
                                            placeholder="Password"
                                        />
                                        <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                                    </Form.Group>
                                    <Form.Group as={Col} md="6" controlId="password2">
                                        <Form.Label>Confirm Password</Form.Label>
                                        <Form.Control
                                            required
                                            type="password"
                                            placeholder="Confirm Password"
                                        />
                                        <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                                    </Form.Group>
                                </Form.Row>
                                <Form.Group>
                                    <Form.Check
                                    required
                                    label="Agree to terms and conditions"
                                    feedback="You must agree before submitting."
                                    />
                                </Form.Group>
                                <Button type="submit">Submit</Button>
                            </Form>
                        </section>
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <Button onClick = { props.onHide }>Close</Button>
                </Modal.Footer>
            </Modal>
        </>
    );
};

export default AttorneyRegisterModal;