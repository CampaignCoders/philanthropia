import React, { Component } from 'react';
import { Container, Row, Col } from 'react-grid-system';
import {Link} from 'react-router-dom';
import Footer from '../page/Footer';
import Navbar from '../page/Navbar';
import Jumbotron from '../page/Jumbotron';

// Application Constants
import AppConstants from "../constants.js";

const onFormSubmit = (e) => {
	e.preventDefault();

	const option = e.target.elements.username.value;
};


class Login extends Component {

    render() {
        return (
            <div>
                <Navbar />
                <div className='container'>
                <Jumbotron title="Login" subtitle="Login with your username and password or click the button to sign up"/>
                <Container>
                    <Row>
                        <Col xs={12}>
                            <h1>Login</h1>
                            <div>
                            <form onSubmit={onFormSubmit} id="New-User">
                                <ol>
                                    <label>First Name</label><br/>
                                    <input type="text" name="firstname" />
                                </ol>
                                <ol>
                                    <label>Last Name</label><br/>
                                    <input type="text" name="lastname" />
                                </ol>
                                <ol>
                                    <label>Job Title or role</label><br/>
                                    <input type="text" name="title" />
                                </ol>
                                <ol>
                                    <label>Email address</label><br/>
                                    <input type="text" name="email" />
                                </ol>
                                <ol>
                                    <label>Mobile Number</label><br/>
                                    <input type="text" name="mobile" />
                                </ol>
                                <ol>
                                    <label>Create a Username</label><br/>
                                    <input type="text" name="username" />
                                </ol>
                                <ol>
                                    <label>Create a Password</label><br/>
                                    <input type="text" name="password" />
                                </ol>
                                <ol>
                                    <button>Create Login</button>
                                </ol>
                            </form>
                        </div>

                            <Link to="/">
                                &laquo; Return Home
                            </Link>
                        </Col>
                    </Row>
                    <Row>
                        <Col xs={12} md={4} lg={3} push={{md: 8, lg: 9}}>
                            
                        </Col>
                        <Col xs={12} md={8} lg={9} pull={{md:4, lg: 3}}>
                            
                        </Col>
                    </Row>
                </Container>
                </div>
                <Footer beneficiary={AppConstants.FOOTER_BENEFICIARY} organization={AppConstants.FOOTER_ORGANIZATION} organization_subheading={AppConstants.FOOTER_ORGANIZATION_SUBHEADING} />
            </div>
        );
    }
}

export default Login;
