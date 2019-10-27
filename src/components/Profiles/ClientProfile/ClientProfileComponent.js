import React from 'react';
import { Form, Col, Button } from 'react-bootstrap';
import './ClientProfile.css';


const ClientProfileComponent = ({ name, ...props }) => {
    return (
        <>
            <div className="client-profile-div"> 
                <h1 className="client-profile-h1">Hello, { name }</h1>
                <div className="row" id="client-profile-container-row">
                    { props.errors && props.errors.map((e, i) => (
                        <div className="alert alert-danger alert-dismissible fade show"
                            style={{width: '100%'}} role="alert" key={ i }>
                            { e.message }
                            <button className="close" data-dismiss="alert">
                                <span aria-hidden="true">&times;</span>
                            </button>    
                        </div>
                    ))}
                    <Form onSubmit={ props.handleSubmit }>
                        <Form.Row className="client-profile-row">
                            <Form.Group as={Col} md="6" controlId="first_name">
                                <Form.Label>First name</Form.Label>
                                <Form.Control
                                    required
                                    type="text"
                                    name="first_name"
                                    onChange = { props.handleChange}
                                    placeholder="First name"
                                />
                                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                            </Form.Group>
                            <Form.Group as={Col} md="6" controlId="last_name">
                                <Form.Label>Last name</Form.Label>
                                <Form.Control
                                    required
                                    type="text"
                                    name="last_name"
                                    onChange = { props.handleChange}
                                    placeholder="Last name"
                                />
                                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                            </Form.Group>                               
                        </Form.Row>
                        <Form.Row className="client-profile-row">
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
                        <Form.Row className="client-profile-row">
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
                        <Button className="client-profile-button" type="submit">Submit Changes</Button>
                    </Form>
                </div>
            </div>
        </>
    )
}

export default ClientProfileComponent;