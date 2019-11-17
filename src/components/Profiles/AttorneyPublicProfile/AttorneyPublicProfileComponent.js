import React from 'react';
import { connect } from 'react-redux';
import { Col, Row, Form, Button } from 'react-bootstrap';
import './AttorneyPublicProfileCss.css';

const AttorneyPublicProfileComponent = ({ ...props }) => {
    return (
        // <>
        //     <div className="attorney-public-profile">
        //         <Row>
        //             <Col className="col-3">
        //                 <img className="attorney-profile-image" src={ props.fetched_attorney && props.fetched_attorney.profile_image } alt="" />
        //             </Col>
        //             <Col className="col-9" id="attorney-public-profile-reviews-section">
        //                 <Row>
        //                     <Col className="attorney-profile-content">
        //                         <h4>
        //                             Name: { props.fetched_attorney && props.fetched_attorney.name } 
        //                         </h4>
        //                         <h4>
        //                             Location: { props.fetched_attorney && props.fetched_attorney.city }, { props.fetched_attorney && props.fetched_attorney.state }, { props.fetched_attorney && props.fetched_attorney.zipcode } 
        //                         </h4>
        //                         <h4>
        //                             Bio: { props.fetched_attorney && props.fetched_attorney.bio } 
        //                         </h4>
        //                     </Col>
        //                 </Row>
        //                 <Row>
        //                     <Col className="attorney-profile-reviews">
        //                         <h2>Reviews:</h2>
        //                         { props.fetched_attorney && props.reviewMapper(props.fetched_attorney.reviews) } 
        //                     </Col>
        //                 </Row>
        //                 <Row>
        //                     <Col className="col-12" id="review-col">
        //                         <Form noValidate onSubmit={ props.handleSubmit }>
        //                             <Form.Row>
        //                                 <Form.Group as={Col} md="6" controlId="review">
        //                                     <Form.Control
        //                                         required
        //                                         name="review_text"
        //                                         type="text"
        //                                         as="textarea"
        //                                         rows="4"
        //                                         onChange={ props.handleChange }
        //                                         placeholder="Write a review here!"
        //                                     />
        //                                     <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
        //                                 </Form.Group>            
        //                             </Form.Row>
        //                             <Button className="auth-button" type="submit">Submit</Button>
        //                         </Form>
        //                     </Col>
        //                 </Row>
        //                 <Row>
        //                     <Col className="col-12" id="contact-col">
        //                         <Form onSubmit={ props.sendEmail }>
        //                             <Form.Row>
        //                                 <Form.Group as={Col} md="6" controlId="subject">
        //                                     <Form.Control
        //                                         required
        //                                         name="subject"
        //                                         type="text"
        //                                         onChange={ props.handleChange }
        //                                         placeholder="Subject"
        //                                     />
        //                                 </Form.Group>
        //                             </Form.Row>
        //                             <Form.Row>
        //                                 <Form.Group className="col-6" id="email-body">
        //                                     <Form.Control
        //                                         required
        //                                         name="email_text"
        //                                         type="text"
        //                                         as="textarea"
        //                                         rows="4"
        //                                         onChange={ props.handleChange }
        //                                         placeholder="Write your email here"
        //                                     />
        //                                 </Form.Group>
        //                             </Form.Row>
        //                             <Button type="submit">Submit</Button>
        //                         </Form>
        //                     </Col>
        //                 </Row>
        //             </Col>
        //         </Row>
        //     </div>
        // </>
        <>
            <div id="restaurant-profile">
                <div className="container">
                    <div className="row align-items-center my-12 restaurant-profile-section">
                        <div className="col-4 restaurant-profile-image-div">
                            <img className="img-fluid rounded mb-4 restaurant-profile-image"
                                src={ props.restaurant.image } alt="" />
                        </div>
                        <div className="col-lg-7 restaurant-profile-content">
                            <p>Name: { props.restaurant.name }</p>
                            <p>Address: { props.restaurant.address }</p>
                            <p>Phone Number: { props.restaurant.phone }</p>
                            <p>Hours: { props.restaurant.hours }</p>
                            <p>Menu Link: <a
                                href={ props.restaurant.menuLink }>
                                    { props.restaurant.menuLink }
                                </a>
                            </p>
                        </div>
                    </div>
                    { props.restaurant.reviews.length && reviews() }
                    <Row>
                        <Col className="col-12">
                            <div className="review-form-section">
                                <div className="review-form-div">
                                    <h3>Leave a review!</h3>
                                    { props.reviewErrors && props.reviewErrors.map((err, i) => (
                                        <div className="alert alert-danger alert-dismissible fade show"
                                            style={{ width: '100%' }} role="alert" key={ i }>
                                            { err.message }
                                                <button className="close" data-dismiss="alert">
                                                    <spam aria-hidden="true">&times;</spam>
                                                </button>
                                        </div>
                                        ))}
                                        { props.reviewMessage && 
                                            <div className="alert alert-danger alert-dismissible fade show"
                                                style={{ width: '100% '}} role="alert">
                                                { props.reviewMessage }
                                                <button className="close" data-dismiss="alert">
                                                    <span aria-hidden="true">&times;</span>
                                                </button>
                                            </div>
                                        }
                                    <Form onSubmit={ props.submitReview }>
                                        <Form.Row>
                                            <Form.Group className="col-12" controlId="edit-review">
                                                <Form.Control
                                                    required
                                                    name="Text"
                                                    type="text"
                                                    as="textarea"
                                                    rows="4"
                                                    onChange={ props.handleChange }
                                                    placeholder="Leave a review!"
                                                />
                                            </Form.Group>
                                        </Form.Row>
                                        <Button className="btn btn-danger" type="submit">Submit</Button>
                                    </Form>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </div>
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