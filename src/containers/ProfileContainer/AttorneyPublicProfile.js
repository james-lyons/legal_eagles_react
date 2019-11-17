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

    reviews = () => {
        return (
            <div className="attorney-profile-reviews-section col-12">
                <div className="row review-container">
                    { this.props.fetched_attorney && this.reviewMapper(this.props.fetched_attorney.reviews) }
                </div>
            </div>
        ); 
    };

    reviewMapper = (reviews) => {
        const currentUser = localStorage.getItem('uid')
        const reviewArray = reviews.map(review => 
            <div className="col-md-12 mb-5">
            <div className="card h-100 review-card">
                { this.props.reviewErrors && this.props.reviewErrors.map((err, i) => (
                    <div className="alert alert-danger alert-dismissible fade show"
                        style={{ width: '100%' }} role="alert" key={ i }>
                        { err.message }
                            <button className="close" data-dismiss="alert">
                                <spam aria-hidden="true">&times;</spam>
                            </button>
                    </div>
                    ))}
                    { this.props.reviewMessage && 
                        <div className="alert alert-danger alert-dismissible fade show"
                            style={{ width: '100% '}} role="alert">
                            { this.props.reviewMessage }
                            <button className="close" data-dismiss="alert">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                    }
                <div className="card-body">
                    <h3 className="card-title">{ review.author_name }</h3>
                    <p className="card-text">{ review.review_text }</p>
                </div>
                { review.author === currentUser && this.reviewButtonMapper(review._id)}
                { review.author === currentUser && this.editReview(review._id) }
            </div>
            </div>
        );
        return reviewArray;
    };

    reviewButtonMapper = (review_id) => {
        return (
            <>
                <div className="edit-and-delete-buttons">
                    <Button className="review-buttons" onClick={() => { this.editReviewDisplay() }}>edit</Button>
                    <Button className="review-buttons" onClick={() => { this.props.deleteReview(review_id) }}>delete</Button>
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
            <Col className="review-edit-form col-12" style={{ display: this.state.review_display }}>
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
                    <Button id="edit-submit-button" className="review-buttons" type="submit">Submit</Button>
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
        return emailjs.send('gmail', 'legal_eagles', email, EMAILJS)
            .then((res) => {
                console.log('SUCCESS!', res.status, res.text);
            })
            .catch(err => {
                console.log(err.response)
            });
    };

    render() {
        return (
            <>
                <div id="attorney-profile">
                    <div className="container">
                        <div className="row align-items-center my-12 attorney-profile-section">
                            <div className="col-3 attorney-profile-image-div">
                                <img className="img-fluid rounded mb-4 attorney-profile-image"
                                    src={ this.props.fetched_attorney && this.props.fetched_attorney.profile_image } alt="" />
                            </div>
                            <div className="col-lg-7 attorney-profile-content">
                                <h4>Name: { this.props.fetched_attorney && this.props.fetched_attorney.name }</h4>
                                <h4>Specialty: {this.props.fetched_attorney && this.props.fetched_attorney.specialty } law</h4> 
                                <h4>Location: { this.props.fetched_attorney && this.props.fetched_attorney.city }, { this.props.fetched_attorney && this.props.fetched_attorney.state }, { this.props.fetched_attorney && this.props.fetched_attorney.zipcode }</h4>
                            </div>
                        </div>
                        { this.props.fetched_attorney && this.props.fetched_attorney.reviews.length && this.reviews() }
                        <Row>
                            <Col className="col-12">
                                <div className="review-form-section">
                                    <div className="review-form-div">
                                        <h3>Leave a review!</h3>
                                        { this.props.reviewErrors && this.props.reviewErrors.map((err, i) => (
                                            <div className="alert alert-danger alert-dismissible fade show"
                                                style={{ width: '100%' }} role="alert" key={ i }>
                                                { err.message }
                                                    <button className="close" data-dismiss="alert">
                                                        <spam aria-hidden="true">&times;</spam>
                                                    </button>
                                            </div>
                                            ))}
                                            { this.props.reviewMessage && 
                                                <div className="alert alert-danger alert-dismissible fade show"
                                                    style={{ width: '100% '}} role="alert">
                                                    { this.props.reviewMessage }
                                                    <button className="close" data-dismiss="alert">
                                                        <span aria-hidden="true">&times;</span>
                                                    </button>
                                                </div>
                                            }
                                        <Form onSubmit={ this.handleSubmit }>
                                            <Form.Row>
                                                <Form.Group className="col-12" controlId="edit-review">
                                                    <Form.Control
                                                        required
                                                        name="review_text"
                                                        type="text"
                                                        as="textarea"
                                                        rows="4"
                                                        onChange={ this.handleChange }
                                                        placeholder="Leave a review!"
                                                    />
                                                </Form.Group>
                                            </Form.Row>
                                            <Button className="review-buttons" type="submit">Submit</Button>
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
};

const mapStateToProps = (state) => {
    return {
        fetched_attorney: state.attorneyReducer.fetched_attorney,
        client: state.clientReducer.client,
        reviewErrors: state.reviewReducer.errors,
        reviewMessage: state.reviewReducer.message
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