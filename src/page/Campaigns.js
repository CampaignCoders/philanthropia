import React from 'react';
import { Table } from 'semantic-ui-react';
import { get } from 'axios';
import times from 'lodash.times';
import Page from './Page';
import moment from 'moment';
import { Link } from 'react-router-dom';

import './Campaigns.css';

const api = 'http://localhost:3001' || window.location.protocol + '//' + window.location.host

//import DonationTracker from './DonationTracker';

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
    get(`${api}/api/campaigns`)
      .then(({ data }) => {
        const  campaigns = data;
        const totalPages = Math.ceil(campaigns.length / TOTAL_PER_PAGE);

        this.setState({
          campaigns: campaigns,
          page: 0,
          totalPages:0,
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

  handleDelete(campaignsId) {
    const { campaigns } = this.state;

    this.setState({
      campaigns: campaigns.filter(u => u.id !== campaignsId),
    });
  }

  render() {
    const { campaigns, page, totalPages } = this.state;
    const startIndex = page * TOTAL_PER_PAGE;

    return (
      <Page title="Campaigns">
        <Table celled striped size='large'>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell>Name</Table.HeaderCell>
              <Table.HeaderCell>Owner</Table.HeaderCell>
              <Table.HeaderCell>Purpose</Table.HeaderCell>
              <Table.HeaderCell>Goal</Table.HeaderCell>
              <Table.HeaderCell>Expiration Date</Table.HeaderCell>
              <Table.HeaderCell>Donate Button</Table.HeaderCell>
            </Table.Row>
          </Table.Header>
          <Table.Body>
            {campaigns.slice(startIndex, startIndex + TOTAL_PER_PAGE).map(campaigns =>
              (<Table.Row key={campaigns.id}>
                <Table.Cell>{campaigns.campaignName}</Table.Cell>
                <Table.Cell>{campaigns.campaignName}</Table.Cell>
                <Table.Cell>{campaigns.campaignPurpose}</Table.Cell>
                <Table.Cell>{campaigns.campaignGoal}</Table.Cell>
                <Table.Cell>{moment(campaigns.campaignExpirationDate).format('MM-DD-YYYY')}</Table.Cell>
                <Table.Cell><Link to="/donate">
                    <button className="donate">Donate Now</button>
                </Link></Table.Cell>
              </Table.Row>),
            )}
          </Table.Body>
          <Table.Footer>
          </Table.Footer>
        </Table>

      </Page>
    );
  }
}

export default Campaigns;

//<DonationTracker balance={this.props.balance} donors={this.props.donors} />
