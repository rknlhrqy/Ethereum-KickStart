import assert from 'assert';
import Reach, { Component } from 'react';
import { Form, Input, Message, Button } from 'semantic-ui-react';
import Campaign from '../ethereum/campaign';
import web3 from '../ethereum/web3';
import { Router } from '../routes';

class ContributeForm extends Component {
  state = {
    value: '',
    errorMessage: '',
    loading: false
  };

  onSubmit = async (event) => {
    /* Prevent event from submitting itself. */
    event.preventDefault();
    this.setState({loading: true, errorMessage: ''});
    const campaign = Campaign(this.props.address); 
    try {
      const accounts = await web3.eth.getAccounts();
      /* accounts[0] is always the current account you are
       * using to access Rinkeby network in your browser.
       */
      await campaign.methods.contribute().send({
        from: accounts[0],
        value: web3.utils.toWei(this.state.value, 'ether')
      });

      /* Refresh the web page to update the data:
       * approversCount, requestsCount.
       */
      Router.replaceRoute(`/campaigns/${this.props.address}`);
    } catch (err) {
      this.setState({errorMessage: err.message.split('\n')[0]});
    }
    this.setState({loading: false, value: ''});
  };

  render () {
    return (
      <Form onSubmit = {this.onSubmit} error = {!!this.state.errorMessage}>
        <Form.Field>
          <label>Amount to Contribute</label>
          <Input
            value = {this.state.value}
            onChange = {(event) => this.setState({value: event.target.value})}
            label = "ether"
            labelPosition = "right"
          />
        </Form.Field>
        <Button primary loading = {this.state.loading}>
          Contribute!
        </Button>
        <Message
          error
          header = "Oops!"
          content = {this.state.errorMessage}
        />
      </Form>
    );
  };
}

export default ContributeForm;
