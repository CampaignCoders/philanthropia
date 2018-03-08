import React from 'react';
import { Button, Image, Modal } from 'semantic-ui-react';
import axios from 'axios';


class CampaignInfo extends React.Component {
  constructor(props) {
    super(props);

    this.state = { campaign: { campaignName: '' } };

    this.handleDelete = this.handleDelete.bind(this);
  }

  componentDidMount() {
    axios.get('/api/users/1')
      .then(({ data: user }) => {
        this.setState({ user });
      });
  }

  handleDelete() {
    axios.delete('/api/users/1')
      .then(() => {
        console.log('campaign deleted');
      });
  }

  render() {
    const { campaign } = this.state;

    return (
      <Modal open dimmer="blurring">

        <Modal.Header>{campaign.campaignName}</Modal.Header>
        <Modal.Content image>
          <Image wrapped size="small" src={campaignImage} />
          <Modal.Description>
            <p>Campaign Purpose: {campaigns.campaignPurpose}</p>
            <p>Campaign Goal{campaigns.campaignGoal}</p>
            <p>Campaign Expiration Date{campaigns.campaignExpiration}</p>
          </Modal.Description>
        </Modal.Content>
        <Modal.Actions>
          <Button positive>Donate</Button>
          <Button>Close</Button>
        </Modal.Actions>
      </Modal>
    );
  }
}

export default CampaignInfo;
