import React from 'react';
import { connect } from 'react-redux';
import { Col, Row, Form, Button } from 'react-bootstrap';
import './AttorneyPublicProfileCss.css';

const AttorneyPublicProfileComponent = ({ ...props }) => {
    return (
        <>
            <div className="attorney-public-profile">
                <Row>
                    <Col className="col-3">
                        <img className="attorney-profile-image" src={ props.fetched_attorney && props.fetched_attorney.profile_image } alt="" />
                    </Col>
                    <Col className="col-9" id="attorney-public-profile-reviews-section">
                        <Row>
                            <Col className="attorney-profile-content">
                                <h4>
                                    Name: { props.fetched_attorney && props.fetched_attorney.name } 
                                </h4>
                                <h4>
                                    Location: { props.fetched_attorney && props.fetched_attorney.city }, { props.fetched_attorney && props.fetched_attorney.state }, { props.fetched_attorney && props.fetched_attorney.zipcode } 
                                </h4>
                                <h4>
                                    Bio: { props.fetched_attorney && props.fetched_attorney.bio } 
                                </h4>
                            </Col>
                        </Row>
                        <Row>
                            <Col className="attorney-profile-reviews">
                                <h2>Reviews:</h2>
                                { props.fetched_attorney && props.reviewMapper(props.fetched_attorney.reviews) } 
                            </Col>
                        </Row>
                        <Row>
                            <Col className="col-12" id="review-col">
                                <Form noValidate onSubmit={ props.handleSubmit }>
                                    <Form.Row>
                                        <Form.Group as={Col} md="6" controlId="review">
                                            <Form.Control
                                                required
                                                name="review_text"
                                                type="text"
                                                as="textarea"
                                                rows="4"
                                                onChange={ props.handleChange }
                                                placeholder="Write a review here!"
                                            />
                                            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                                        </Form.Group>            
                                    </Form.Row>
                                    <Button className="auth-button" type="submit">Submit</Button>
                                </Form>
                            </Col>
                        </Row>
                        <Row>
                            <Col className="col-12" id="contact-col">
                                <Form onSubmit={ props.sendEmail }>
                                    <Form.Row>
                                        <Form.Group as={Col} md="6" controlId="subject">
                                            <Form.Control
                                                required
                                                name="subject"
                                                type="text"
                                                onChange={ props.handleChange }
                                                placeholder="Subject"
                                            />
                                        </Form.Group>
                                    </Form.Row>
                                    <Form.Row>
                                        <Form.Group className="col-6" id="email-body">
                                            <Form.Control
                                                required
                                                name="email_text"
                                                type="text"
                                                as="textarea"
                                                rows="4"
                                                onChange={ props.handleChange }
                                                placeholder="Write your email here"
                                            />
                                        </Form.Group>
                                    </Form.Row>
                                    <Button type="submit">Submit</Button>
                                </Form>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </div>
        </>
    );
};

const mapStateToProps = (state) => {
    return {
        fetched_attorney: state.attorneyReducer.fetched_attorney,
        client: state.clientReducer.client
    };
};

export default connect(mapStateToProps, null)(AttorneyPublicProfileComponent);