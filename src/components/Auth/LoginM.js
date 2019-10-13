import React from 'react';
import { Modal, Button } from 'react-bootstrap';

const LoginM = (props) => {
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
                        {/* { props.errors && props.errors.map((e, i) => (
                            <div className="alert alert-danger alert-dismissible fade show"
                                style={{width: '100%'}} role="alert" key={ i }>
                                { e.message }
                                <button className="close" data-dismiss="alert">
                                    <span aria-hidden="true">&times;</span>
                                </button>    
                            </div>
                        ))} */}
                        <section id="login" className="ui form">
                            <form onSubmit={ props.handleSubmit}>
                                <div className="field">
                                    <label htmlFor="email">Email</label>
                                    <input
                                        type="text"
                                        id="email"
                                        name="email"
                                        value={ props.email }
                                        onChange={ props.handleChange }
                                        placeholder="example@example.com"
                                    />
                                </div>
                                <div className="field">
                                    <label htmlFor="password">Password</label>
                                    <input
                                        type="password"
                                        id="password"
                                        name="password"
                                        value={ props.password }
                                        onChange={ props.handleChange }
                                        placeholder="Password"
                                    />
                                </div>
                                <br/>                              
                                <div className="actions">
                                    <div className="ui black deny button">
                                        Cancel
                                    </div>
                                    <button type="submit" className="ui positive right labeled icon button">
                                        Login
                                        <i className="checkmark icon"></i>
                                    </button>
                                </div>
                            </form>
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

export default LoginM;