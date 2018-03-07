import React from 'react';
import { Table, Menu, Icon } from 'semantic-ui-react';
import { get } from 'axios';
import times from 'lodash.times';
import Page from './Page';

import { Container, Row, Col } from 'react-grid-system';
import './Campaigns.css';

import DonationTracker from './DonationTracker';

const TOTAL_PER_PAGE = 10;

class Campaigns extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      campaigns: [],
      page: 0,
      totalPages: 0,
    };
    this.incrementPage = this.incrementPage.bind(this);
    this.decrementPage = this.decrementPage.bind(this);
    this.setPage = this.setPage.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
  }

  componentDidMount() {
    this.getCampaigns();
  }

  componentWillReceiveProps({ location = {} }) {
    if (location.pathname === '/' && location.pathname !== this.props.location.pathname) {
      this.getCampaigns();
    }
  }

  getCampaigns() {
    get('/api/campaigns')
      .then(({ data }) => {
        const { campaigns } = data;
        const totalPages = Math.ceil(campaigns.length / TOTAL_PER_PAGE);

        this.setState({
          campaigns: data.campaigns,
          page: 0,
          totalPages,
        });
      });
  }

  setPage(page) {
    return () => {
      this.setState({ page });
    };
  }

  decrementPage() {
    const { page } = this.state;

    this.setState({ page: page - 1 });
  }

  incrementPage() {
    const { page } = this.state;

    this.setState({ page: page + 1 });
  }

  handleDelete(userId) {
    const { campaigns } = this.state;

    this.setState({
      campaigns: campaigns.filter(u => u.id !== userId),
    });
  }

  render() {
    const { campaigns, page, totalPages } = this.state;
    const startIndex = page * TOTAL_PER_PAGE;

    return (
      <Page title="campaigns">
        <Table celled striped>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell>Name</Table.HeaderCell>
              <Table.HeaderCell>Purpose</Table.HeaderCell>
              <Table.HeaderCell>Goal</Table.HeaderCell>
              <Table.HeaderCell>Expiration Date</Table.HeaderCell>
              <Table.HeaderCell>Image</Table.HeaderCell>
            </Table.Row>
          </Table.Header>
          <Table.Body>
            {campaigns.slice(startIndex, startIndex + TOTAL_PER_PAGE).map(user =>
              (<Table.Row key={campaigns.id}>
                <Table.Cell>{campaigns.campaignName}</Table.Cell>
                <Table.Cell>{campaigns.campaignPurpose}</Table.Cell>
                <Table.Cell>{campaigns.campaignGoal}</Table.Cell>
                <Table.Cell>{campaigns.campaignExpiration}</Table.Cell>
                <Table.Cell>{campaigns.campaignImage}</Table.Cell>
              </Table.Row>),
            )}
          </Table.Body>
          <Table.Footer>
            <Table.Row>
              <Table.HeaderCell colSpan={6}>
                <Menu floated="right" pagination>
                  {page !== 0 && <Menu.Item as="a" icon onClick={this.decrementPage}>
                    <Icon name="left chevron" />
                  </Menu.Item>}
                  {times(totalPages, n =>
                    (<Menu.Item as="a" key={n} active={n === page} onClick={this.setPage(n)}>
                      {n + 1}
                    </Menu.Item>),
                  )}
                  {page !== (totalPages - 1) && <Menu.Item as="a" icon onClick={this.incrementPage}>
                    <Icon name="right chevron" />
                  </Menu.Item>}
                </Menu>
              </Table.HeaderCell>
            </Table.Row>
          </Table.Footer>
        </Table>
        <Container>
                <Row className="campaigns">
                    <Col xs={12} lg={8} style={{ padding: 0}} className="campaignimagecontainer">
                        <img src={this.props.heroimage} alt={this.props.title} />
                    </Col>
                    <Col xs={12} lg={4} style={{ padding: 0}}>
                        <p> placeholder for DonationTracker</p>
                    </Col>
                </Row>
                <Row className="titleRow">
                    <Col xs={12} className="titleCol">
                        <h1>{this.props.title}</h1>
                    </Col>
                </Row>
            </Container>
      </Page>
    );
  }
}

export default Campaigns;

//<DonationTracker balance={this.props.balance} donors={this.props.donors} />
