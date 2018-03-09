import React, { Component } from 'react';
import Modal from 'react-modal';
import { Container } from 'react-grid-system';

// Page Components
//import Hero from '../page/Hero';
//import Main from '../page/Main';
import Footer from '../page/Footer';
//import Wrapper from "../components/Wrapper";
import ShareButtons from '../page/ShareButtons';
import Navbar from '../page/Navbar';
import Jumbotron from '../page/Jumbotron';
//import ListDetail from '../page/ListDetail';
import Campaigns from '../page/Campaigns';

// Utilities
import queryString from 'query-string';

// Application Constants
import AppConstants from "../constants.js";

const shareText = "Check this out: " + AppConstants.HERO_TITLE;

//const heroimage = AppConstants.HERO_IMAGE;

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {donationTotal: 0.00, donationCount: 0, donorList: {}, showThankYou: false, didShowThankYou: false};
        this.closeThankYouModal = this.closeThankYouModal.bind(this);
    }

    componentDidMount() {

        // Scroll the browser window to the top when this page loads
        window.scrollTo(0,0);

        // Use the URLSearchParams API to see if we should display the Thank You modal
        const query = queryString.parse(this.props.location.search);
        this.setState({showThankYou: query.a === "thank you"});

        fetch(AppConstants.PAYMENT_SERVER_URL + "/api/donations/list/").then((response) => {
            response.json().then((data) => {
                data.donations.sort((a, b) => {
                    //console.log(new Date(b.date) - new Date(a.date));
                    return new Date(b.created) - new Date(a.created);
                });
                console.log(data.donations);
                this.setState({donationTotal: data.total_amount, donationCount: data.donations_count, donorList: data.donations});
            });
        });
    }

    closeThankYouModal() {
        this.setState({showThankYou: false, didShowThankYou: true});
    }

    render() {
        if (this.state.didShowThankYou) {
            /* TODO: It would be nice to get rid of the query string ?a=thank+you when the modal closes */
        }
        return (
            <div>
                <Modal
                    isOpen={this.state.showThankYou}
                    onRequestClose={this.closeThankYouModal}
                    className="thankYouModal"
                    overlayClassName="thankYouOverlay"
                    contentLabel="Thank You Popup Window"
                >
                    <div className="thankYouModalBody">
                        <button className="close" onClick={this.closeThankYouModal}>x</button>
                        <h1>Thank You!</h1>
                        <h2>Your generosity means the world to us.</h2>
                        <p>With your help, we have now raised <strong>${this.state.donationTotal.toLocaleString()}</strong> from <strong>{this.state.donationCount.toLocaleString()} donors</strong></p>
                    </div>

                </Modal>
                <Navbar />
                <div className='container'>
                <Jumbotron title="Welcome" subtitle="Donate to your favorite campaign or sign in"/>
                <Container> 
                    <h1>{AppConstants.HERO_TITLE}</h1>
                    <h2>Browse our list of fundraising campaigns for your donation</h2>
                </Container>
          
                <Campaigns />

                </div>
                <div className="container">
                    <h3>Would you mind spreading the word via the social media and email links below?</h3>
                    <ShareButtons sharetext={shareText} />
                </div>
                <Footer beneficiary={AppConstants.FOOTER_BENEFICIARY} organization={AppConstants.FOOTER_ORGANIZATION} organization_subheading={AppConstants.FOOTER_ORGANIZATION_SUBHEADING} />
            </div>
        );
    }
}

export default Home;
