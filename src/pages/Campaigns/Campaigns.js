import React, { Component } from "react";
import DeleteBtn from "../../components/DeleteBtn";
import Jumbotron from "../../components/Jumbotron";
import API from "../../utils/API";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../../components/Grid";
import { List, ListItem } from "../../components/List";
import { Input, TextArea, FormBtn } from "../../components/Form";

class Campaigns extends Component {
  state = {
    campaigns: [],
    campaignName: "",
    campaignPurpose: "",
    campaignGoal: "",
    campaignExpiration: "",
    campaignImage: ""
  };

  componentDidMount() {
    this.loadCampaigns();
  }

  loadCampaigns = () => {
    API.getCampaigns()
      .then(res =>
        this.setState({ campaigns: res.data, campaignName: "", campaignPurpose: "", campaignGoal: "", campaignExpiration: "", campaignImage: "" })
      )
      .catch(err => console.log(err));
  };

  deleteCampaign = id => {
    API.deleteCampaign(id)
      .then(res => this.loadCampaigns())
      .catch(err => console.log(err));
  };

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    if (this.state.campaignName && this.state.campaignGoal) {
      API.saveCampaign({
        campaignName: this.state.campaignName,
        campaignPurpose: this.state.campaignPurpose,
        campaignGoal: this.state.campaignGoal,
        campaignExpiration: this.state.campaignExpiration,
        campaignImage: this.state.campaignImage
      })
        .then(res => this.loadCampaigns())
        .catch(err => console.log(err));
    }
  };

  render() {
    return (
      <Container fluid>
        <Row>
          <Col size="md-6">
            <Jumbotron>
              <h1>Create a Campaign</h1>
            </Jumbotron>
            <form>
              <Input
                value={this.state.campaignName}
                onChange={this.handleInputChange}
                name="campaignName"
                placeholder="Campaign Name (required)"
              />
              <TextArea
                value={this.state.campaignPurpose}
                onChange={this.handleInputChange}
                name="campaignPurpose"
                placeholder="Campaign Funding Purpose (required)"
              />
              <Input
                value={this.state.campaignGoal}
                onChange={this.handleInputChange}
                name="campaignGoal"
                placeholder="Campaign Funding Goal (required)"
              />
              <Input
                value={this.state.campaignExpiration}
                onChange={this.handleInputChange}
                name="campaignExpiration"
                placeholder="Expiration Date (required)"
              />
                <Input
                value={this.state.campaignImage}
                onChange={this.handleInputChange}
                name="campaignImage"
                placeholder="Attached an image (placeholder)"
              />
              <FormBtn
                disabled={!(this.state.campaignGoal && this.state.campaignName)}
                onClick={this.handleFormSubmit}
              >
                Submit Campaign
              </FormBtn>
            </form>
          </Col>
          <Col size="md-6 sm-12">
            <Jumbotron>
              <h1>Campaigns On My List</h1>
            </Jumbotron>
            {this.state.campaigns.length ? (
              <List>
                {this.state.campaigns.map(campaign => (
                  <ListItem key={campaign._id}>
                    <Link to={"/campaigns/" + campaign._id}>
                      <strong>
                        {campaign.campaignName} by {campaign.campaignGoal}
                      </strong>
                    </Link>
                    <DeleteBtn onClick={() => this.deleteCampaign(campaign._id)} />
                  </ListItem>
                ))}
              </List>
            ) : (
              <h3>No Results to Display</h3>
            )}
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Campaigns;
