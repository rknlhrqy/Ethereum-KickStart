import React, { Component } from 'react';
import { Card, Grid, Button } from 'semantic-ui-react';
import web3 from '../../ethereum/web3';
import Layout from '../../components/Layout';
import Campaign from '../../ethereum/campaign';
import ContributeForm from '../../components/ContributeForm';
import { Link, Router } from '../../routes';

class CampaignShow extends Component {
  static async getInitialProps(props){
    /* show.js is called when Next-Route maps
     * "/campaigns/:address: to "/campaign/show".
     * And some data is passed into function
     * getInitialProps().
     * props.query.address carries the address
     * of the instance of Campaign in Rinkeby
     * network
     */
    console.log('CampaignShow: ', props.query.address);
    const campaign = Campaign(props.query.address);
    const summary = await campaign.methods.getSummary().call();
    //console.log(summary);
    /* The following values returned by getInitialProps() are
     * picked up by this class. So the methods in this class
     * can access these values by using "this.props.xxxxx"
     */
    return {
      address: props.query.address,
      minimumContribution: summary[0],
      balance: summary[1],
      requestsCount: summary[2],
      approversCount: summary[3],
      manager: summary[4]
    };
  };

  renderCards() {
    const {
      minimumContribution,
      balance,
      requestsCount,
      approversCount,
      manager
    } = this.props;

    console.log('CampaignShow: ', this.props.address);
    const Items = [
      {
        header: manager,
        meta: 'Address of Manager',
        description: 'The manager created this campaign and can create requests to withdraw money.',
        style: {overflowWrap: 'break-word'}
      },
      {
        header: minimumContribution,
        meta: 'Minimum Contribution (wei)',
        description: 'You must contribute at least this much Wei to become an approver.',
        style: {overflowWrap: 'break-word'}
      },
      {
        header: requestsCount,
        meta: 'Number of Requests',
        description: 'A request trys to withdraw money from a contract. Request must be approved by the approvers.',
        style: {overflowWrap: 'break-word'}
      },
      {
        header: approversCount,
        meta: 'Number of Approvers',
        description: 'Number of people who have already donated to this campaign.',
        style: {overflowWrap: 'break-word'}
      },
      {
        header: web3.utils.fromWei(balance, 'ether'),
        meta: 'Campaign Balance (ether)',
        description: 'The balance is how much money this campaign has left to spend.',
        style: {overflowWrap: 'break-word'}
      }
    ];

    return <Card.Group items={Items} />;
  }

  render () {
    return (
      <Layout>
        <h3>Campaign Show</h3>
        <Grid>
          <Grid.Row>
            <Grid.Column width = {10}>
              {this.renderCards()}
            </Grid.Column>

            <Grid.Column width = {6}>
              <ContributeForm address = {this.props.address} />
            </Grid.Column>
          </Grid.Row>

          <Grid.Row>
            <Grid.Column>
              <Link route = {`/campaigns/${this.props.address}/requests`}>
            {/*
              <Link route = {`/campaigns/0xb447F1f56974437f313aA0E3F2054307b92556a9/requests`}>
              */}
                <a>
                  <Button primary>
                    View Requests
                  </Button>
                </a>
              </Link>
            </Grid.Column>
          </Grid.Row>

        </Grid>
      </Layout>
    );
  };
}

export default CampaignShow;
