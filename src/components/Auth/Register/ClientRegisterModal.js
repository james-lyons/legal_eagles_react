import React from 'react';
import { connect } from 'react-redux';
import { Modal, Button, Form, Col } from 'react-bootstrap';
import '../Auth.css';

const ClientRegisterModal = (props) => {
    return (
        <>
            <Modal
                {...props}
                size="md"
                aria-labelledby="contained-modal-title-vcenter"
                centered
            >
                <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-vcenter">
                        For Clients
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className="row" id="auth-row">
                        { props.errors && props.errors.map((e, i) => (
                            <div className="alert alert-danger alert-dismissible fade show"
                                style={{width: '100%'}} role="alert" key={ i }>
                                { e.message }
                                <button className="close" data-dismiss="alert">
                                    <span aria-hidden="true">&times;</span>
                                </button>    
                            </div>
                        ))}
                        { props.message &&
                            <div className="alert alert-danger alert-dismissible fade show"
                                style={{width: '100%'}} role="alert">
                                { props.message }
                                <button className="close" data-dismiss="alert">
                                    <span aria-hidden="true">&times;</span>
                                </button>    
                            </div>
                        }
                        <section id="register" className="ui form">
                            <Form className="col-12" onSubmit={ props.handleSubmit }>
                                <Form.Row>
                                    <Form.Group as={Col} md="12" controlId="name">
                                        <Form.Label>Full name</Form.Label>
                                        <Form.Control
                                            required
                                            type="text"
                                            name="name"
                                            onChange = { props.handleChange}
                                            placeholder="James Lyons"
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
                                            name="email"
                                            onChange = { props.handleChange}
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
                                            name="password"
                                            onChange = { props.handleChange}
                                            placeholder="Password"
                                        />
                                        <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                                    </Form.Group>
                                    <Form.Group as={Col} md="6" controlId="password2">
                                        <Form.Label>Confirm Password</Form.Label>
                                        <Form.Control
                                            required
                                            type="password"
                                            name="password2"
                                            onChange = { props.handleChange}
                                            placeholder="Confirm Password"
                                        />
                                        <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                                    </Form.Group>
                                </Form.Row>
                                <Form.Group>
                                    <Form.Check className="validate-button"
                                    required
                                    label="Agree to terms and conditions"
                                    feedback="You must agree before submitting."
                                    />
                                </Form.Group>
                                <Button className="auth-button" type="submit">Submit</Button>
                            </Form>
                        </section>
                    </div>
                </Modal.Body>
            </Modal>
        </>
    );
};

const mapStateToProps = (state) => {
    return {
        errors: state.clientReducer.errors,
        message: state.clientReducer.message
    };
};

export default connect(mapStateToProps, null)(ClientRegisterModal);