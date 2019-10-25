import React from 'react';
import { connect } from 'react-redux';
import { Col, Row, Form, Button } from 'react-bootstrap';
import { fetchAttorneyByURL } from '../../actions/attorneyActions';
import { submitReview } from '../../actions/reviewAction';
import { editReview } from '../../actions/reviewAction';
import { deleteReview } from '../../actions/reviewAction';
import './AttorneyPublicProfileCss.css';

class AttorneyPublicProfile extends React.Component {
    state = {
        review_text: "",
        edit_review: {
            display: "none",
            id: ""
        }
    };

    reviewVisiblity = (review) => {
        const currentUser = localStorage.getItem('uid')
        if (review.author === currentUser) {
            this.setState({ review_visibility: "visible" })
        };
    };

    componentDidMount = () => {
        this.props.fetchAttorneyByURL(this.props.match.params.attorney_url)
    };

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        });
    };

    handleSubmit = (event) => {
        event.preventDefault();
        const review_text = this.state.review_text;
        const attorney_id = this.props.fetched_attorney._id;
        this.props.submitReview(review_text, attorney_id);
    };

    reviewMapper = (reviews) => {
        const currentUser = localStorage.getItem('uid')
        const reviewArray = reviews.map(review => 
            <div className="review-card">
                <Row>
                    <Col className="review-name-div col-6">
                        <h4>Reviewer: { review.author_name }</h4>
                        <h4>Reviewer: { review._id }</h4>
                    </Col>
                </Row>
                <Row>
                    <Col className="review-div col-12">
                        <h4>Review: { review.review_text }</h4>
                    </Col>
                    { currentUser === review.author && this.reviewButtonMapper(review._id, review.review_text) }
                    { currentUser === review.author && this.editReview(review._id, review.review_text) }
                </Row>
            </div>
        );
        return reviewArray;
    };

    reviewButtonMapper = (review_id, review_text) => {
        return (
            <>
                <Button onClick={() => { this.editReviewDisplay(review_id) }}>edit</Button>
                <Button onClick={() => { this.props.deleteReview(review_id) }}>delete</Button>
            </>
        );
    };

    editReviewDisplay = (review_id) => {
        this.setState({ edit_review: { display: "", id: review_id }})
    }

    editReview = (review_id, review_text) => {
        return (
            <Col className="review-edit col-12" style={{ display: this.state.edit_review.display }}>
                <Form onSubmit={ () => this.props.editReview(review_id, this.state.review_text)}>
                    <Form.Row>
                        <Form.Group as={Col} md="12" controlId="review-edit">
                            <Form.Control
                                required
                                name="review_text"
                                type="text"
                                as="textarea"
                                rows="4"
                                onChange={ this.handleChange}
                                placeholder="Edit your review here!"
                            />
                            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                        </Form.Group>
                    </Form.Row>
                    <Button className="auth-button" type="submit">Submit</Button>
                </Form>
            </Col>
        );
    };

    render() {
        return (
            <>
                <div className="attorney-public-profile">
                    <Row>
                        <Col className="col-3">
                            <img className="attorney-profile-image" src={ this.props.fetched_attorney && this.props.fetched_attorney.profile_image } />
                        </Col>
                        <Col className="col-9" id="attorney-public-profile-reviews-section">
                            <Row>
                                <Col className="attorney-profile-content">
                                    <h1>
                                        { this.props.fetched_attorney && this.props.fetched_attorney.name } 
                                    </h1>
                                    <h1>
                                        { this.props.fetched_attorney && this.props.fetched_attorney.city }, { this.props.fetched_attorney && this.props.fetched_attorney.state }, { this.props.fetched_attorney && this.props.fetched_attorney.zipcode } 
                                    </h1>
                                    <h1>
                                        Bio: { this.props.fetched_attorney && this.props.fetched_attorney.bio } 
                                </h1>
                                </Col>
                            </Row>
                            <Row>
                                <Col className="attorney-profile-reviews">
                                    <h1>
                                        Reviews: { this.props.fetched_attorney && this.reviewMapper(this.props.fetched_attorney.reviews) } 
                                    </h1>
                                </Col>
                            </Row>
                            <Row>
                                <Col className="col-12" id="review-col">
                                    <Form noValidate onSubmit={ this.handleSubmit }>
                                        <Form.Row>
                                            <Form.Group as={Col} md="6" controlId="review">
                                                <Form.Control
                                                    required
                                                    name="review_text"
                                                    type="text"
                                                    as="textarea"
                                                    rows="4"
                                                    onChange={ this.handleChange }
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
                                    <Form onSubmit={ this.submitEmail }>
                                        <Form.Row>
                                            <Form.Group as={Col} md="6" controlId="subject">
                                                <Form.Control
                                                    required
                                                    name="subject"
                                                    type="text"
                                                    onChange={ this.handleChange }
                                                    placeholder="Subject"
                                                />
                                            </Form.Group>
                                        </Form.Row>
                                        <Form.Row>
                                            <Form.Group className="col-6" id="email-body">
                                                <Form.Control
                                                    required
                                                    name="email"
                                                    type="text"
                                                    as="textarea"
                                                    rows="4"
                                                    onChange={ this.onChange }
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
};

const mapStateToProps = (state) => {
    return {
        fetched_attorney: state.attorneyReducer.fetched_attorney
    };
};

export default connect(mapStateToProps, { fetchAttorneyByURL, submitReview, editReview, deleteReview  })(AttorneyPublicProfile);