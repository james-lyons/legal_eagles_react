import React from 'react';
import { connect } from 'react-redux';
import emailjs from 'emailjs-com';
import EMAILJS_KEY from '../../invisibleConstants';
import { Col, Row, Form, Button } from 'react-bootstrap';
import { fetchAttorneyByURL } from '../../actions/attorneyActions';
import { submitReview } from '../../actions/reviewAction';
import { editReview } from '../../actions/reviewAction';
import { deleteReview } from '../../actions/reviewAction';
import AttorneyPublicProfileComponent from '../../components/Profiles/AttorneyPublicProfile/AttorneyPublicProfileComponent';

class AttorneyPublicProfile extends React.Component {
    state = {
        review_text: "",
        edit_review: {
            display: "none",
            id: ""
        },
        subject: "",
        email_text: ""
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
        console.log(this.state)
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
                    { currentUser === review.author && this.reviewButtonMapper(review._id, review.review_text) }
                    { currentUser === review.author && this.editReview(review._id, review.review_text) }
                </Row>
            </div>
        );
        return reviewArray;
    };

    reviewButtonMapper = (review_id) => {
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

    editReview = (review_id) => {
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

    sendEmail = (event) => {
        event.preventDefault();
        const client_name = localStorage.getItem('client_name')
        const client_email = localStorage.getItem('client_email')
        const email = {
            client_name: client_name,
            client_email: client_email,
            attorney_email: this.props.fetched_attorney.email,
            subject: this.state.subject,
            email_text: this.state.email_text
        };
        return emailjs.send('gmail', 'legal_eagles', email, `${EMAILJS_KEY}`)
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
                <AttorneyPublicProfileComponent
                    handleChange={ this.handleChange }
                    handleSubmit={ this.handleSubmit }
                    sendEmail={ this.sendEmail }
                    reviewMapper={ this.reviewMapper }
                />
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

export default connect(mapStateToProps, { fetchAttorneyByURL, submitReview, editReview, deleteReview  })(AttorneyPublicProfile);