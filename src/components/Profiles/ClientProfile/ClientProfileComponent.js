import React from 'react';
import { tsPropertySignature } from '@babel/types';


const ClientProfileComponent = (props) => {
    return (
        <>
            <div>
                <p>Hello, {props.name}</p>
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
                        <section id="Profile">
                            <form onSubmit = { props.onProfileEdit }>
                                {/* <div className="field">
                                    <label htmlFor = "name">Full Name</label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        value={ props.name }
                                        onChange = { props.handleChange }
                                        placeholder = "James Lyons"
                                    />
                                </div> */}
                                <div>
                                    <label htmlFor="email">Email</label>
                                    <input
                                        type="text"
                                        id="email"
                                        name="email"
                                        value={ props.email }
                                        onChange={ props.handleChange }
                                        placeholder="Tangerines27@example.com"
                                    />
                                </div>
                                <div>
                                    <label htmlFor="password">Password</label>
                                    <input
                                        type="password"
                                        id="password"
                                        name="password"
                                        value={ props.password }
                                        onChange={ props.handleChange }
                                        placeholder="Hippopotamous39"
                                    />
                                </div>
                                <div>
                                    <label htmlFor="password">Confirm Password</label>
                                    <input
                                        type="password"
                                        id="password2"
                                        name="password2"
                                        value={ props.password2 }
                                        onChange={ props.handleChange }
                                        placeholder="Hippopotamous39"
                                    />
                                </div>
                                <br/>                              
                                <div className="actions">
                                    <button type="submit" className="ui positive right labeled icon button">
                                        Submit Changes
                                        <i className="checkmark icon"></i>
                                    </button>
                                </div>
                            </form>
                        </section>
                    </div>
            </div>
        </>
    )
}

export default ClientProfileComponent;