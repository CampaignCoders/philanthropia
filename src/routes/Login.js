import React, { Component } from 'react';
import { Container, Row, Col } from 'react-grid-system';
import {Link} from 'react-router-dom';
import Footer from '../page/Footer';
import Navbar from '../page/Navbar';
import Jumbotron from '../page/Jumbotron';

import axios from 'axios';
//import ReactDOM from 'react-dom';

// Application Constants
import AppConstants from "../constants.js";



class Login extends Component {
    
    constructor() {
        super();
        this.state = {
          username: '',
          password: '',
          message: ''
        };
      }
      onChange = (e) => {
        const state = this.state
        state[e.target.name] = e.target.value;
        this.setState(state);
        
      }
    
      onSubmit = (e) => {
        e.preventDefault();
    
        const { username, password } = this.state;
    
        axios.post('/api/login', { username, password })
          .then((result) => {
            localStorage.setItem('jwtToken', result.data.token);
            this.setState({ message: ' ' });
            this.props.history.push('/NewCampaign');
          })
          .catch((error) => {
            if(error.response.status === 401) {
              this.setState({ message: 'Login failed. Username or password not match' });
            }
          });
      }
    

    render() {
        const { username, password, message } = this.state;
        return (
            <div>
                <Navbar />
                <div className='container'>
                <Jumbotron title="Login" subtitle="Login with your username and password or click the button to sign up"/>
                <Container>
                    <Row>
                        <Col xs={12}>
                        <div class="container">
                        <form class="form-signin" onSubmit={this.onSubmit}>
                          {message !== '' &&
                            <div class="alert alert-warning alert-dismissible" role="alert">
                              { message }
                            </div>
                          }
                          <h2 class="form-signin-heading">Please sign in</h2>
                          <label for="inputEmail" class="sr-only">Email address</label>
                          <input type="email" class="form-control" placeholder="Email address" name="username" value={username} onChange={this.onChange} required/>
                          <label for="inputPassword" class="sr-only">Password</label>
                          <input type="password" class="form-control" placeholder="Password" name="password" value={password} onChange={this.onChange} required/>
                          <button class="donate" type="submit">Login</button>
                          <p>
                            Not a member? <Link to="/register"><span class="glyphicon glyphicon-plus-sign" aria-hidden="true"></span> Register here</Link>
                          </p>
                        </form>
                      </div>
                    );
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
