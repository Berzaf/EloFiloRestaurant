import React, { Component,Fragment }  from 'react';
import { Navbar, NavbarBrand, Nav, NavbarToggler, Collapse, NavItem, Jumbotron,
    Button, Modal, ModalHeader, ModalBody,
    Form, FormGroup, Input, Label } from 'reactstrap';
import { NavLink } from 'react-router-dom';
import './Header.css';
import {Link} from 'react-router-dom';


class Header extends Component {

    constructor(props) {
        super(props);

        this.state = {
          isNavOpen: false,
          isModalOpen: false
        };
        this.toggleNav = this.toggleNav.bind(this);
        this.toggleModal = this.toggleModal.bind(this);
        this.handleLogin = this.handleLogin.bind(this);

    }

    toggleNav() {
        this.setState({
            isNavOpen: !this.state.isNavOpen
        });
    }   

    toggleModal() {
        this.setState({
            isModalOpen: !this.state.isModalOpen
        });
    }   

    
    handleLogin(event) {
        alert(`Username: ${this.username.value} Password: ${this.password.value} Remember: ${this.remember.checked}`);
        this.toggleModal();
        event.preventDefault();
    }
    render() {
        return (
            <Fragment>
                <header className="jumbotron jumbotron-fluid mb-0">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-4 col-sm-3 col-md-2 align-self-center">
                                <Link to="/"><img src={process.env.PUBLIC_URL + '/assets/images/logo.png'} alt="" className="image-fluid img-thumbnail headerLogo scale-in-center"/></Link>
                            </div>
                            <div className="col">
                                <h1 className="slide-in-left">EloFilo Restaurant</h1>
                                <h2 className="slide-in-right">a better way to enjoy</h2>
                            </div>
                            
                        </div>
                    </div>
                </header>


                <Navbar dark sticky="top" expand="md">
                    <div className="container">
                        <NavbarToggler onClick={this.toggleNav} />
                        <Collapse isOpen={this.state.isNavOpen} navbar>
                            <Nav navbar>
                                <NavItem>
                                    <NavLink className="nav-link" to="/home">
                                        <i className="fa fa-home fa-lg" /> Home
                                    </NavLink>
                                </NavItem>
                                
                                <NavItem>
                                    <NavLink className="nav-link" to="/about">
                                        <i className="fa fa-info fa-lg" /> About 
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className="nav-link" to="/contact">
                                        <i className="fa fa-address-card fa-lg" /> Contact
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className="nav-link" to="/product">
                                        <i className="fa fa-list fa-lg" /> Product
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className="nav-link" to="/gallery">
                                        <i className="fa fa-image fa-lg" /> Gallery
                                    </NavLink>
                                </NavItem>
                            </Nav>
                            <span className="navbar-text ml-auto">
                                <Button outline onClick={this.toggleModal}>
                                    <i className="fa fa-sign-in fa-lg" /> Login
                                </Button>
                            </span>
                        </Collapse>
                    </div>
                </Navbar>
                <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
                    <ModalHeader toggle={this.toggleModal}>Login</ModalHeader>
                    <ModalBody>
                        <Form onSubmit={this.handleLogin}>
                            <FormGroup>
                                <Label htmlFor="username">Username</Label>
                                <Input type="text" id="username" name="username"
                                    innerRef={input => this.username = input} />
                            </FormGroup>
                            <FormGroup>
                                <Label htmlFor="password">Password</Label>
                                <Input type="password" id="password" name="password"
                                    innerRef={input => this.password = input} />
                            </FormGroup>
                            <FormGroup check>
                                <Label check>
                                    <Input type="checkbox" name="remember"
                                        innerRef={input => this.remember = input} />
                                    Remember me
                                </Label>
                            </FormGroup>
                            <Button type="submit" value="submit" color="primary">Login</Button>
                        </Form>
                    </ModalBody>
                </Modal>
            </Fragment>
        );
    }
}



export default Header;