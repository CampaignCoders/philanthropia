import React, { Component } from 'react';
import { Container, Row, Col } from 'react-grid-system';
import {Link} from 'react-router-dom';
import Footer from '../components/Footer/Footer';
import Navbar from '../components/Navbar/Navbar';
import Jumbotron from '../components/Jumbotron/Jumbotron';

// Application Constants
import AppConstants from "../constants.js";

const onFormSubmit = (e) => {
	e.preventDefault();

	//const option = e.target.elements.campaignName.value;
};

class NewCampaign extends Component {

    render() {
        return (
            <div>
                <Navbar />
                <div className='container'>
                <Jumbotron title="Start a Campaign" subtitle="Enter information to start a campaign"/>
                <Container>
                    <Row>
                        <Col xs={12}>
                            <h1>New Campaign</h1>
                            <div>
                            <form onSubmit={onFormSubmit} id="start-campaign">
                                <ol>
                                    <label>Campaign Name</label><br/>
                                    <input type="text" name="campaignName" />
                                </ol>
                                <ol>
                                    <label>Campaign $ Goal</label><br/>
                                    <input type="text" name="campaignGoal" />
                                </ol>
                                <ol>
                                    <label>Campaign Expiration</label><br/>
                                    <input type="text" name="campaignExpiration" />
                                </ol>
                                <ol>
                                    <label>Campaign Image</label><br/>
                                    <input type="text" name="campaignImage" />
                                </ol>
                                <ol>
                                    <button>Start Campaign</button>
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

export default NewCampaign;
