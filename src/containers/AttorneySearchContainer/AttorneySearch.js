import React from 'react';
import { connect } from 'react-redux';
import { Form, Col, Button, Row } from 'react-bootstrap';
import { fetchAttorneys } from '../../actions/attorneyActions';
import { fetchAttorneyById } from '../../actions/attorneyActions';
import { fetchAttorneyByURL} from '../../actions/attorneyActions';
import './AttorneySearch.css';

class AttorneySearch extends React.Component {
    state = {
        currentUser: null,
        specialty: "",
        zipcode: "",
        results: [],
        errors: [],
    };

    componentDidMount = () => {
        this.setState({
            currentUser: localStorage.getItem('uid')
        });
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
        this.props.fetchAttorneyByURL(attorney.url);
        this.props.history.push(`/attorney/${ attorney.url }`)
    };

    isNotLoggedIn = () => {
        return (
            <>
                <div className="not-logged-in-div">
                    <h2 className="not-logged-in-h2">Please login to begin browsing attorneys =)</h2>
                </div>
            </>
        );
    };

    attorneyMapper = (attorneys) => {
        const attorneyArray = attorneys.map(attorney => 
            <div className="col-lg-3 col-md-6 mb-4" onClick={ () => this.attorneySelect(attorney) }>
                    <div className="card h-100 attorney-card">
                        <img className="card-img-top" src={ attorney.profile_image } alt="attorney" />
                        <div className="card-body attorney-card-body">
                            <h4 className="card-title">{ attorney.name }</h4>
                            <p className="card-text">{ attorney.city }, { attorney.state }, { attorney.zipcode }</p>
                            <p className="card-text">Specialty: { attorney.specialty }</p>
                            <p className="card-text">Reviews: { attorney.reviews.length }</p>
                            <p className="card-text">bio: { attorney.bio }</p>
                        </div>
                    </div>
            </div>
        );
        return attorneyArray;
    };

    render() {
        return (
            <>
                <div className="attorney-search-page">
                    <div className="s01">
                        <form onSubmit={ this.attorneySearch }>
                            <div className="inner-form">
                                <div className="input-field first-wrap">
                                    <select
                                        class="form-control form-control-md"
                                        id="specialty"
                                        name="specialty"
                                        onChange={ this.handleChange }
                                        placeholder="Restaurant Name"
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
                                    </select>
                                </div>
                                <div className="input-field first-wrap">
                                    <input
                                        name="zipcode"
                                        type="text"
                                        onChange={ this.handleChange }
                                        placeholder="Zipcode"
                                    />
                                </div>
                                <div className="input-field third-wrap">
                                    <button className="btn-search" id="search-button" type="submit"><i className="fa fa-search" aria-hidden="true"></i></button>
                                </div>
                            </div>
                        </form>
                    </div>
                    <div className="search-results">
                        <Row>
                            {
                                this.state.currentUser ?
                                this.props.results && this.attorneyMapper(this.props.results) :
                                this.isNotLoggedIn()
                            }
                        </Row>
                    </div>
                </div>
            </>
        );
    };
};

const mapStateToProps = (state) => {
    return {
        results: state.attorneyReducer.results,
        fetchedAttorney: state.attorneyReducer.fetchedAttorney,
        currentUser: state.userReducer.user_id
    };
};

export default connect(mapStateToProps, { fetchAttorneys, fetchAttorneyById, fetchAttorneyByURL })(AttorneySearch);