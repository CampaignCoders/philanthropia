import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import Jumbotron from "../page/Jumbotron";
import API from "../utils/API";

class Detail extends Component {
  state = {
    campaign: {}
  };
  // When this component mounts, grab the campaign with the _id of this.props.match.params.id
  // e.g. localhost:3000/campaigns/599dcb67f0f16317844583fc
  componentDidMount() {
    API.getCampaign(this.props.match.params.id)
      .then(res => this.setState({ campaign: res.data }))
      .catch(err => console.log(err));
  }

  render() {
    return (
      <Container fluid>
        <Row>
          <Col size="md-12">
            <Jumbotron>
              <h1>
                {this.state.campaign.campaignName} with this Goal {this.state.campaign.campaignGoal} and this Expiration {this.state.campaign.campaignExpiration}
              </h1>
            </Jumbotron>
          </Col>
        </Row>
        <Row>
          <Col size="md-10 md-offset-1">
            <article>
              <h1>Campaign Purpose</h1>
              <p>
                {this.state.campaign.campaignPurpose}
              </p>
            </article>
          </Col>
        </Row>
        <Row>
          <Col size="md-2">
            <Link to="/">← Back to Campaigns</Link>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Detail;
