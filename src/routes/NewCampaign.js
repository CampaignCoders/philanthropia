import React, { Component } from 'react';
import { Container, Row, Col } from 'react-grid-system';
import {Link} from 'react-router-dom';
import Footer from '../page/Footer';
import Navbar from '../page/Navbar';
import Jumbotron from '../page/Jumbotron';

import axios from 'axios';
import ReactDOM from 'react-dom';


// Application Constants
import AppConstants from "../constants.js";


class NewCampaign extends Component {

    constructor() {
        super();
        this.state = {
            campaignName: '',
            campaignPurpose: '',
            campaignOwner: '',
            campaignGoal: '',
            campaignExpirationDate: ''
        };
      }
      onChange = (e) => {
        const state = this.state
        state[e.target.name] = e.target.value;
        this.setState(state);
      }
    
      onSubmit = (e) => {
        e.preventDefault();
    
        const { campaignName, campaignPurpose, campaignOwner, campaignGoal, campaignExpirationDate } = this.state;
        axios.post('/api/NewCampaign/NewCampaign', { campaignName, campaignPurpose, campaignOwner, campaignGoal, campaignExpirationDate })
          .then((result) => {
              console.log(result)
            this.props.history.push("/")
          }).catch(function(err) {
              console.log(err)});
      }

    render() {
        const { campaignName, campaignPurpose, campaignOwner, campaignGoal, campaignExpirationDate } = this.state;
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
                                    <label for="inputCampaignName" class="sr-only">Campaign Name</label>
                                    <input type="text" class="form-control" placeholder="Campaign Name" name="campaignName" value={campaignName} onChange={this.onChange} required/>
                                    <label for="inputCampaignPurpose" class="sr-only">Campaign Purpose</label>
                                    <input type="text" class="form-control" placeholder="Campaign Purpose" name="campaignPurpose" value={campaignPurpose} onChange={this.onChange} required/>
                                    <label for="InputCampaignOwner" class="sr-only">Campaign Owner</label>
                                    <input type="text" class="form-control" placeholder="Campaign Owner" name="campaignOwner" value={campaignOwner} onChange={this.onChange} required/>
                                    <label for="inputCampaignGoal" class="sr-only">Campaign Goal</label>
                                    <input type="text" class="form-control" placeholder="Campaign Goal" name="campaignGoal" value={campaignGoal} onChange={this.onChange} required/>        
                                    <p> Expiration Date </p>
                                    <label for="inputCampaignExpirationDate" class="sr-only">Campaign Expiration Date</label>
                                    <input type="date" class="form-control" placeholder="Campaign Expiration Date" name="campaignExpirationDate" value={campaignExpirationDate} onChange={this.onChange} required/>
                                    <button class="donate" type="submit">Start Campaign</button>
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

export default NewCampaign;
