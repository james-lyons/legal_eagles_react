import React from 'react';
import { Button, Form, Col, Image } from 'react-bootstrap';
import './AttorneyPrivateProfileCss.css'

const AttorneyPrivateProfileComponent = (props) => {
    return (
        <>
            <div id="private-attorney-profile" className="col-8">
                <Form onSubmit={ props.handleSubmit }>
                    <Form.Row>
                        <Form.Group as={Col} md="6" controlId="name">
                            <Form.Label>Full name</Form.Label>
                            <Form.Control
                                required
                                name="name"
                                type="text"
                                onChange={ props.handleChange }
                                placeholder="James Lyons"
                            />
                            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                        </Form.Group>
                        <Form.Group as={Col} md="6" controlId="email">
                            <Form.Label>Email</Form.Label>
                            <Form.Control
                                required
                                name="email"
                                type="text"
                                onChange={ props.handleChange }
                                placeholder="email"
                            />
                            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                        </Form.Group>                     
                    </Form.Row>
                    <Form.Row>
                        <Form.Group as={Col} md="6" controlId="specialty">
                            <Form.Label>Specialty</Form.Label>
                            <Form.Control
                                required
                                name="specialty"
                                onChange={ props.handleChange }
                                as="select"
                            >
                                <option value="">Select</option>
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
                        <Form.Group as={Col} md="6" controlId="url">
                            <Form.Label>Your url: https://legaleagles/_______</Form.Label>
                            <Form.Control
                                required
                                name="url"
                                type="text"
                                onChange={ props.handleChange }
                                placeholder="your url"
                            />
                            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                        </Form.Group>
                    </Form.Row>
                    <Form.Row>
                        <Form.Group as={Col} md="6" controlId="city">
                            <Form.Label>City</Form.Label>
                            <Form.Control
                                required
                                name="city"
                                type="text"
                                onChange={ props.handleChange }
                                placeholder="City"
                            />
                            <Form.Control.Feedback type="invalid">
                                Please provide a valid city.
                            </Form.Control.Feedback>
                        </Form.Group>
                        <Form.Group as={Col} controlId="state">
                            <Form.Label>State</Form.Label>
                            <Form.Control
                                required
                                name="state"
                                onChange={ props.handleChange }
                                as="select"
                            >
                                <option value="">Select</option>
                                <option value="Alabama">Alabama</option>
                                <option value="Alaska">Alaska</option>
                                <option value="Arizona">Arizona</option>
                                <option value="Arkansas">Arkansas</option>
                                <option value="California">California</option>
                                <option value="Colorado">Colorado</option>
                                <option value="Connecticut">Connecticut</option>
                                <option value="Delaware">Delaware</option>
                                <option value="Florida">Florida</option>
                                <option value="Georgia">Georgia</option>
                                <option value="Hawaii">Hawaii</option>
                                <option value="Idaho">Idaho</option>
                                <option value="Illinois">Illinois</option>
                                <option value="Indiana">Indiana</option>
                                <option value="Iowa">Iowa</option>
                                <option value="Kansas">Kansas</option>
                                <option value="Kentucky">Kentucky</option>
                                <option value="Louisiana">Louisiana</option>
                                <option value="Maine">Maine</option>
                                <option value="Maryland">Maryland</option>
                                <option value="Massachusetts">Massachusetts</option>
                                <option value="Michigan">Michigan</option>
                                <option value="Minnesota">Minnesota</option>
                                <option value="Mississippi">Mississippi</option>
                                <option value="Missouri">Missouri</option>
                                <option value="Montana">Montana</option>
                                <option value="Nebraska">Nebraska</option>
                                <option value="Nevada">Nevada</option>
                                <option value="New Hampshire">New Hampshire</option>
                                <option value="New Jersey">New Jersey</option>
                                <option value="New Mexico">New Mexico</option>
                                <option value="New York">New York</option>
                                <option value="North Carolina">North Carolina</option>
                                <option value="North Dakota">North Dakota</option>
                                <option value="Ohio">Ohio</option>
                                <option value="Oklahoma">Oklahoma</option>
                                <option value="Oregon">Oregon</option>
                                <option value="Pennsylvania">Pennsylvania</option>
                                <option value="Rhode Island">Rhode Island</option>
                                <option value="South Carolina">South Carolina</option>
                                <option value="South Dakota">South Dakota</option>
                                <option value="Tennessee">Tennessee</option>
                                <option value="Texas">Texas</option>
                                <option value="Utah">Utah</option>
                                <option value="Vermont">Vermont</option>
                                <option value="Virginia">Virginia</option>
                                <option value="Washington">Washington</option>
                                <option value="West Virginia">West Virginia</option>
                                <option value="Wisconsin">Wisconsin</option>
                                <option value="Wyoming">Wyoming</option>
                            </Form.Control>
                        </Form.Group>
                        <Form.Group as={Col} md="3" controlId="zipcode">
                            <Form.Label>Zip</Form.Label>
                            <Form.Control
                                required
                                name="zipcode"
                                type="text"
                                onChange={ props.handleChange }
                                placeholder="Zipcode"
                            />
                            <Form.Control.Feedback type="invalid">
                                Please provide a valid zip.
                            </Form.Control.Feedback>
                        </Form.Group>
                    </Form.Row>
                    <Form.Row>
                        <Form.Group as={Col} md="6" controlId="profile_image">
                        <Form.Label>Profile Image</Form.Label>
                            <Form.Control 
                                required
                                name="profile_image"
                                type="text"
                                onChange={ props.handleChange }
                            />
                        </Form.Group>
                        <Col id="profile-image" as={Col} md="3" xs={6}>
                            <Image src={props.profile_image} thumbnail />
                        </Col>
                    </Form.Row>
                    <Form.Row>
                        <Form.Group as={Col} md="12" controlId="bio">
                            <Form.Label>Bio</Form.Label>
                            <Form.Control
                                required
                                name="bio"
                                type="text"
                                as="textarea"
                                rows="4"
                                onChange={ props.handleChange }
                                placeholder="Write anything you like here"
                            />
                        </Form.Group>
                    </Form.Row>
                    <Form.Row>
                        <Form.Group as={Col} md="6" controlId="password1">
                            <Form.Label>Password</Form.Label>
                            <Form.Control
                                required
                                name="password"
                                type="password"
                                onChange={ props.handleChange }
                                placeholder="Password"
                            />
                            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                        </Form.Group>
                        <Form.Group as={Col} md="6" controlId="password2">
                            <Form.Label>Confirm Password</Form.Label>
                            <Form.Control
                                required
                                name="password2"
                                type="password"
                                onChange={ props.handleChange }
                                placeholder="Confirm Password"
                            />
                            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                        </Form.Group>
                    </Form.Row>
                    <Button className="auth-button" type="submit">Submit Changes</Button>
                </Form>
            </div>
        </>
    )
}

export default AttorneyPrivateProfileComponent;