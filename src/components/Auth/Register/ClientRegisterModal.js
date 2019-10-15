import React from 'react';
import { Modal, Button, Form, Col, InputGroup } from 'react-bootstrap';
import '../Auth.css';

const ClientRegisterModal = (props) => {
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
                                    <Form.Group as={Col} md="12" controlId="email">
                                        <Form.Label>Email</Form.Label>
                                        <Form.Control
                                            required
                                            type="text"
                                            placeholder="email"
                                        />
                                        <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
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

export default ClientRegisterModal;