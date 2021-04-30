import React, { Fragment } from 'react';
import {NavLink, Link} from 'react-router-dom';

import './Footer.css';

function Footer(props) {
    return (
        <Fragment>
            <footer className="site-footer">
                <div className="container">
                    <div className="row">             
                        <div className="col-4 col-sm-2 offset-1">
                            <h3>Links</h3>
                            <ul className="list-unstyled">
                                <li>
                                    <NavLink exact to="/" activeClassName="active-footer-link">Home</NavLink>
                                </li>
                                <li>
                                    <NavLink to="/about" activeClassName="active-footer-link">About</NavLink>
                                </li>
                                <li>
                                    <NavLink to="/shop" activeClassName="active-footer-link">Menu</NavLink>
                                </li>
                                <li>
                                    <NavLink exact to="/contact" activeClassName="active-footer-link">Contact</NavLink>
                                </li>
                                
                            </ul>
                        </div>
                        <div className="col-6 col-sm-3 text-center">
                            <h3>Social</h3>
                            <a className="btn btn-social-icon btn-instagram" href="http://instagram.com/"><i className="fa fa-instagram" /></a>{' '}
                            <a className="btn btn-social-icon btn-facebook" href="http://www.facebook.com/"><i className="fa fa-facebook" /></a>{' '}
                            <a className="btn btn-social-icon btn-twitter" href="http://twitter.com/"><i className="fa fa-twitter" /></a>{' '}
                            <a className="btn btn-social-icon btn-google" href="http://youtube.com/"><i className="fa fa-youtube" /></a> 
                        </div>
                        <div className="col-sm-4 text-center">
                            <a role="button" className="btn btn-link" href="tel:+12065551234"><i className="fa fa-phone" /> 1-206-555-1234</a><br />
                            <a role="button" className="btn btn-link" href="mailto:notreal@notreal.co"><i className="fa fa-envelope-o" /> elofilo@elofilo.com</a>
                        </div>
                    </div>
                </div>
            </footer>
       </Fragment>
    );
}

export default Footer; 