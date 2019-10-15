import React from 'react';

const AttorneyProfileComponent = (props) => {
    return (
        <>
            <div>
                <p>Hello, {props.name}</p>
            </div>
            <div>
                { props.errors && props.errors.map((e, i) => (
                    <div className="alert alert-danger alert-dismissible fade show"
                        style={{width: '100%'}} role="alert" key={ i }>
                        { e.message }
                        <button className="close" data-dismiss="alert">
                            <span aria-hidden="true">&times;</span>
                        </button>    
                    </div>
                ))}
                <section id="register" className="ui form">
                    <form onSubmit={ props.onProfileEdit }>
                        <div className="field">
                            <label htmlFor="name">Full Name</label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                onChange={ props.handleChange }
                                placeholder={props.name}
                            />
                        </div>
                        <div className="field">
                            <label htmlFor="email">Email</label>
                            <input
                                type="text"
                                id="email"
                                name="email"
                                onChange={ props.handleChange }
                                placeholder={ props.email }
                            />
                        </div>
                        <div className="field">
                            <label htmlFor="zipcode">Zipcode</label>
                            <input
                                type="text"
                                id="zipcode"
                                name="zipcode"
                                onChange={ props.handleChange }
                                placeholder={ props.zipcode }
                            />
                        </div>
                        <div className="field">
                            <label htmlFor="specialties">Specialties</label>
                            <input
                                type="specialties"
                                id="specialties"
                                name="specialties"
                                onChange={ props.handleChange }
                                placeholder={ props.specialties }
                            />
                        </div>
                        <div className="field">
                            <label htmlFor="password">Password</label>
                            <input
                                type="password"
                                id="password"
                                name="password"
                                onChange={ props.handleChange }
                                placeholder="Password"
                            />
                        </div>
                        <div className="field">
                            <label htmlFor="password">Confirm Password</label>
                            <input
                                type="password"
                                id="password2"
                                name="password2"
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
                                Register
                                <i className="checkmark icon"></i>
                            </button>
                        </div>
                    </form>
                </section>
            </div>
        </>
    )
}

export default AttorneyProfileComponent;