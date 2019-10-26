import React from 'react';
import { connect } from 'react-redux';
import { Form, Col, Button, Row } from 'react-bootstrap';
import { fetchAttorneys } from '../../actions/attorneyActions';
import { fetchAttorneyById } from '../../actions/attorneyActions';
import { fetchAttorneyByURL} from '../../actions/attorneyActions';
import './AttorneySearch.css';

class AttorneySearch extends React.Component {
    state = {
        specialty: "",
        zipcode: "",
        results: [],
        errors: []
    };

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    };

    attorneySearch = (event) => {
        event.preventDefault();
        const specialty = this.state.specialty;
        const zipcode = this.state.zipcode;
        this.props.fetchAttorneys(specialty, zipcode);
    };

    attorneySelect = (attorney) => {
        console.log(attorney.url)
        this.props.fetchAttorneyByURL(attorney.url);
        this.props.history.push(`/attorney/${attorney.url}`)
    }

    attorneyMapper = (attorneys) => {
        const attorneyArray = attorneys.map(attorney => 
            <div className="attorney-card" onClick={() => this.attorneySelect(attorney)}>
                <Row>
                    <Col className="image-Col col-3">
                        <img src={attorney.profile_image} className="attorney-search-image" alt="profile"/>
                    </Col>
                    <Col className="info-Col col-9">
                        <h4>{ attorney.name }</h4>
                        <h4>{ attorney.city }, { attorney.state }, { attorney.zipcode } </h4>
                        <h4>{ attorney.specialty } law</h4>
                        <h4>Reviews: { attorney.reviews.length }</h4>
                        <h4>Bio: { attorney.bio }</h4>
                    </Col>
                </Row>
            </div>
        );
        return attorneyArray;
    };

    render() {
        return (
            <>
                <div className="attorney-search-page">
                <div className="search_bar justify-content-md-center">
                            <Form onSubmit={ this.attorneySearch } className="search-form justify-content-md-center">
                                <Form.Row className="justify-content-md-center">
                                    <Form.Group as={Col} md="5" controlId="specialty">
                                        <Form.Control
                                            name="specialty"
                                            onChange={ this.handleChange }
                                            as="select"
                                        >
                                            <option value="">Select Specialty</option>
                                            <option value="Admiralty">Admiralty Law</option>
                                            <option value="Animal Rights">Animal Rights Law</option>
                                            <option value="Civil Rights">Civil Rights Law</option>
                                            <option value="Constitutional">Constitutional Law</option>
                                            <option value="Contract">Contract Law</option>
                                            <option value="Corporate">Corporate Law</option>
                                            <option value="Criminal">Criminal Law</option>
                                            <option value="Education">Education Law</option>
                                            <option value="Employment and Labor">Employment and Labor Law</option>
                                            <option value="Enviornment and Natural Resources">Enviornment and Natural Resources Law</option>
                                            <option value="Family and Juvenile">Family and Juvenile Law</option>
                                            <option value="Health">Health Law</option>
                                            <option value="Immigration">Immigration Law</option>
                                            <option value="Intellectural Property">Intellectual Property Law</option>
                                            <option value="International">International Law</option>
                                            <option value="Municipal">Municipal Law</option>
                                            <option value="Real Estate">Real Estate Law</option>
                                            <option value="Securities">Securities Law</option>
                                            <option value="Sports and Entertainment">Sports and Entertainment Law</option>
                                            <option value="Tax">Tax Law</option>
                                            <option value="Tort">Tort Law</option>
                                            <option value="Trust and Estate">Trust and Estate Law</option>
                                        </Form.Control>
                                    </Form.Group>
                                    <Form.Group as={Col} md="5" controlId="zipcode">
                                        <Form.Control
                                            type="zipcode"
                                            name="zipcode"
                                            onChange={ this.handleChange}
                                            placeholder="zipcode"
                                        />
                                        <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                                    </Form.Group>
                                <Button className="home-search-button" id="attorney-search-button" type="submit">Search</Button>
                                </Form.Row>
                            </Form>
                        </div>
                    <div className="search-results">
                        { this.props.results && this.attorneyMapper(this.props.results) }
                    </div>
                </div>
            </>
        );
    };
};

const mapStateToProps = (state) => {
    return {
        results: state.attorneyReducer.results,
        fetchedAttorney: state.attorneyReducer.fetchedAttorney
    };
};

export default connect(mapStateToProps, { fetchAttorneys, fetchAttorneyById, fetchAttorneyByURL })(AttorneySearch);