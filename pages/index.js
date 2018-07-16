import React, { Component } from 'react';
import { Card, Button } from 'semantic-ui-react';
import factory from '../ethereum/factory';
import Layout from '../components/Layout';
import { Link } from '../routes';

class CampaignInstance extends Component {
  // Note: Next.js server does not process
  // the function componentDidMount().
  /*
  async componentDidMount() {
    const campaigns = await factory.methods.getDeployedCampaigns().call();
    console.log(campaigns);
  }
  */

  // static member function of class CampaignInstance.
  // Call it using: CampaignInstance.getInitialProps().
  static async getInitialProps() {
    const campaigns = await factory.methods.getDeployedCampaigns().call();
    console.log(campaigns);
    //return {campaigns: campaigns};
    //ES6 syntex
    return {campaigns};
  }
 
  renderCampaigns () {
    const items = this.props.campaigns.map(address => {
      // fluid is to extend the card to the other
      // side of the screen.
      return {
        header: address,
        /* Get the route at the run-time
           It is "`". It is not"'"
         */
        description: (
          <Link route = {`/campaigns/${address}`}>
            <a>View Campaign</a>
          </Link>
        ),
        fluid: true
      };
    });
    return <Card.Group items = {items} />
  }


  render () {
    // print out the address of the first campaign
    // got by calling function getInitialProps().
    //return <div>{this.props.campaigns[0]}</div>

    // Note: Semantic CSS is included by calling
    // <link ......  />
    // Without it, Semantic CSS is not working.
    //
    // Call Semantic-ui-react and semantic-ui-css to create
    // the stylish cards
    // "primary" makes the button in Blue color.
    return (
      <Layout>
        <div>
          {/* 
            The following Cemanic CSS style is included in
            Header.js. So comment it out here.
            <link rel="stylesheet" href="//cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.2.12/semantic.min.css" /> 
          */}
          <h3>Open Campaigns</h3>
          <Link route = "/campaigns/new">
            <a>
              <Button
                floated = 'right'
                content = 'Create Campaign'
                icon = 'add circle'
                labelPosition = 'left'
                primary
              />
            </a>
          </Link>
          {this.renderCampaigns()}
        </div>
      </Layout>);
  }
}

export default CampaignInstance;
