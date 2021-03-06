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


class Create extends Component {

    constructor() {
        super();
        this.state = {
          firstname: '',
          lastname: '',
          phonenumber: '',
          organization: '',
          username: '',
          password: ''
        };
      }
      onChange = (e) => {
        const state = this.state
        state[e.target.name] = e.target.value;
        this.setState(state);
      }
    
      onSubmit = (e) => {
        e.preventDefault();
    
        const { firstname, lastname, phonenumber, organization, username, password } = this.state;
        console.log(username,password);
        axios.post('/api/register', { firstname, lastname, phonenumber, organization, username, password })
          .then((result) => {
              console.log(result)
            this.props.history.push("/login")
          }).catch(function(err) {
              console.log(err)});
      }

    render() {
        const { firstname, lastname, phonenumber, organization, username, password } = this.state;
        return (
            <div>
                <Navbar />
                <div className='container'>
                <Jumbotron title="Start a Campaign" subtitle="Enter information to start a campaign"/>
                <Container>
                    <Row>
                        <Col xs={12}>
                            <h1>New User Setup</h1>
                            <div class="container">
                                <form class="form-signin" onSubmit={this.onSubmit}>
                                    <label for="inputFirstName" class="sr-only">First Name</label>
                                    <input type="text" class="form-control" placeholder="First Name" name="firstname" value={firstname} onChange={this.onChange} required/>
                                    <label for="inputLastName" class="sr-only">Last Name</label>
                                    <input type="text" class="form-control" placeholder="Last Name" name="lastname" value={lastname} onChange={this.onChange} required/>
                                    <label for="InputPhoneNumber" class="sr-only">Phone Number</label>
                                    <input type="number" class="form-control" placeholder="Phone Number" name="phonenumber" value={phonenumber} onChange={this.onChange} required/>
                                    <label for="inputOrganization" class="sr-only">Organization</label>
                                    <input type="text" class="form-control" placeholder="Organization" name="organization" value={organization} onChange={this.onChange} required/>        
                                    <label for="inputEmail" class="sr-only">Email address</label>
                                    <input type="email" class="form-control" placeholder="Email address" name="username" value={username} onChange={this.onChange} required/>
                                    <label for="inputPassword" class="sr-only">Password</label>
                                    <input type="password" class="form-control" placeholder="Password" name="password" value={password} onChange={this.onChange} required/>
                                    <button class="donate" type="submit">Register</button>
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

export default Create;
