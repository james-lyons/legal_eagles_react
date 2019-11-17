import React from 'react';
import { connect } from 'react-redux';
import { Modal, Button, Form, Col } from 'react-bootstrap';
import '../Auth.css';

const LoginModal = (props) => {
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
                        Sign In
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className="row" id="auth-row">
                        { props.clientErrors && props.clientErrors.map((e, i) => (
                                <div className="alert alert-danger alert-dismissible fade show"
                                    style={{width: '100%'}} role="alert" key={ i }>
                                    { e.message }
                                    <button className="close" data-dismiss="alert">
                                        <span aria-hidden="true">&times;</span>
                                    </button>    
                                </div>
                            ))}
                        { props.clientMessage &&
                            <div className="alert alert-danger alert-dismissible fade show"
                                style={{width: '100%'}} role="alert">
                                { props.clientMessage }
                                <button className="close" data-dismiss="alert">
                                    <span aria-hidden="true">&times;</span>
                                </button>    
                            </div>
                        }
                        { props.attorneyErrors && props.attorneyErrors.map((e, i) => (
                                <div className="alert alert-danger alert-dismissible fade show"
                                    style={{width: '100%'}} role="alert" key={ i }>
                                    { e.message }
                                    <button className="close" data-dismiss="alert">
                                        <span aria-hidden="true">&times;</span>
                                    </button>    
                                </div>
                            ))}
                        { props.attorneyMessage &&
                            <div className="alert alert-danger alert-dismissible fade show"
                                style={{width: '100%'}} role="alert">
                                { props.attorneyMessage }
                                <button className="close" data-dismiss="alert">
                                    <span aria-hidden="true">&times;</span>
                                </button>    
                            </div>
                        }
                        <Form className="col-12" onSubmit={ props.handleSubmit }>
                            <Form.Row>
                                <Form.Group as={Col} md="12" controlId="email">
                                    <Form.Label>Email</Form.Label>
                                    <Form.Control
                                        required
                                        type="text"
                                        name="email"
                                        onChange={ props.handleChange}
                                        placeholder="email"
                                    />
                                    <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                                </Form.Group>
                            </Form.Row>
                            <Form.Row>
                                <Form.Group as={Col} md="12" controlId="password">
                                    <Form.Label>Password</Form.Label>
                                    <Form.Control
                                        required
                                        type="password"
                                        name="password"
                                        onChange={ props.handleChange}
                                        placeholder="Password"
                                    />
                                    <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                                </Form.Group>
                            </Form.Row>
                            <Button className="auth-button" type="submit">Submit</Button>
                        </Form>
                    </div>
                </Modal.Body>
            </Modal>
        </>
    );
};

const mapStateToProps = (state) => {
    return {
        attorneyErrors: state.attorneyReducer.errors,
        attorneyMessage: state.attorneyReducer.message,
        clientErrors: state.clientReducer.errors,
        clientMessage: state.clientReducer.message
    };
};

export default connect(mapStateToProps, null)(LoginModal);