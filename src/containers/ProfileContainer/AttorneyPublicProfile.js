import React from 'react';
import { connect } from 'react-redux';
import emailjs from 'emailjs-com';
import { Col, Row, Form, Button } from 'react-bootstrap';
import { fetchAttorneyByURL } from '../../actions/attorneyActions';
import { submitReview, editReview, deleteReview } from '../../actions/reviewAction';
import '../../components/Profiles/AttorneyPublicProfile/AttorneyPublicProfileCss.css'

class AttorneyPublicProfile extends React.Component {
    state = {
        review_text: "",
        subject: "",
        email_text: "",
        review_display: "none"
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
                    </Col>
                </Row>
                <Row>
                    <Col className="review-div col-12">
                        <h4>Review: { review.review_text }</h4>
                    </Col>
                    { currentUser === review.author && this.reviewButtonMapper(review._id) }
                    { currentUser === review.author && this.editReview(review._id) }
                </Row>
            </div>
        );
        return reviewArray;
    };

    reviewButtonMapper = (review_id) => {
        return (
            <>
                <div className="edit-and-delete-buttons">
                    <Button className="edit bu" onClick={() => { this.editReviewDisplay() }}>edit</Button>
                    <Button onClick={() => { this.props.deleteReview(review_id) }}>delete</Button>
                </div>
            </>
        );
    };

    editReviewDisplay = () => {
        this.state.review_display === "none" ?
        this.setState({ review_display: "" }) :
        this.setState({ review_display: "none" })
    }

    editReview = (review_id) => {
        return (
            <Col className="review-edit col-12" style={{ display: this.state.review_display }}>
                <Form onSubmit={ () => this.props.editReview(review_id, this.state.review_text) }>
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
                    <Button id="edit-submit-button" type="submit">Submit</Button>
                </Form>
            </Col>
        );
    };

    sendEmail = (event) => {
        event.preventDefault();
        const EMAILJS = process.env.EMAILJS
        const client_name = localStorage.getItem('client_name')
        const client_email = localStorage.getItem('client_email')
        const email = {
            client_name: client_name,
            client_email: client_email,
            attorney_email: this.props.fetched_attorney.email,
            subject: this.state.subject,
            email_text: this.state.email_text
        };
        return emailjs.send('gmail', 'legal_eagles', email, `${ EMAILJS }`)
            .then((res) => {
                console.log('SUCCESS!', res.status, res.text);
            })
            .catch(err => {
                console.log(err)
            });
    };

    render() {
        return (
            <>
                <div className="attorney-public-profile">
                    <Row>
                        <Col className="col-3">
                            <img className="attorney-profile-image" src={ this.props.fetched_attorney && this.props.fetched_attorney.profile_image } alt="" />
                        </Col>
                        <Col className="col-9" id="attorney-public-profile-reviews-section">
                            <Row>
                                <Col className="attorney-profile-content">
                                    <h4>
                                        Name: { this.props.fetched_attorney && this.props.fetched_attorney.name } 
                                    </h4>
                                    <h4>
                                        Location: { this.props.fetched_attorney && this.props.fetched_attorney.city }, { this.props.fetched_attorney && this.props.fetched_attorney.state }, { this.props.fetched_attorney && this.props.fetched_attorney.zipcode } 
                                    </h4>
                                    <h4>
                                        Bio: { this.props.fetched_attorney && this.props.fetched_attorney.bio } 
                                    </h4>
                                </Col>
                            </Row>
                            <Row>
                                <Col className="attorney-profile-reviews">
                                    <h2>Reviews:</h2>
                                    { this.props.fetched_attorney && this.reviewMapper(this.props.fetched_attorney.reviews) } 
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
                                        <Button id="review-submit-button" type="submit">Submit</Button>
                                    </Form>
                                </Col>
                            </Row>
                            <Row>
                                <Col className="col-12" id="contact-col">
                                    <Form onSubmit={ this.sendEmail }>
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
                                                    name="email_text"
                                                    type="text"
                                                    as="textarea"
                                                    rows="4"
                                                    onChange={ this.handleChange }
                                                    placeholder="Write your email here"
                                                />
                                            </Form.Group>
                                        </Form.Row>
                                        <Button id="email-submit-button"type="submit">Submit</Button>
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
        fetched_attorney: state.attorneyReducer.fetched_attorney,
        client: state.clientReducer.client
    };
};

export default connect(mapStateToProps,
    {
        fetchAttorneyByURL,
        submitReview,
        editReview,
        deleteReview
    })
    (AttorneyPublicProfile);