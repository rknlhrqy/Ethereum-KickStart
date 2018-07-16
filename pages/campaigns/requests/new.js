import React, { Component } from 'react';
import { Form, Button, Message, Input } from 'semantic-ui-react';
import { Link, Router } from '../../../routes';
import web3 from '../../../ethereum/web3';
import Campaign from '../../../ethereum/campaign';
import Layout from '../../../components/Layout';

class RequestNew extends Component{
  state = {
    value: '',
    description: '',
    recipient: '',
    loading: false,
    errorMessage: ''
  };

  /* getInitialProps() can capture and return
   * the web address of this class component.
   * The web address of this class component is a
   * dynamic address.
   */
  static async getInitialProps (props) {
    const address = props.query.address;
    return { address };
  }

  onSubmit = async (event) => {
    event.preventDefault();

    const { description, value, recipient } = this.state;

    this.setState({loading: true, errorMessage: ''});
    const campaign = Campaign(this.props.address);

    try {
      const accounts = await web3.eth.getAccounts();
      await campaign.methods.createRequest(
        description,
        web3.utils.toWei(value, 'ether'),
        recipient)
        .send({from: accounts[0]});
      /* Return back to the request list page
       */
      Router.pushRoute(`/campaigns/${this.props.address}/requests`);
    } catch (err) {
      this.setState({errorMessage: err.message.split('\n')[0]});
    }
    this.setState({loading: false});
  };

  render () {
    return (
      <Layout>
        <Link route = {`/campaigns/${this.props.address}/requests`}>
          <a>
              Back
          </a>
        </Link>
        <h3>Create a Request</h3>
        <Form onSubmit = {this.onSubmit} error = {!!this.state.errorMessage}>
          <Form.Field>
            <label>Description</label>
            <Input
              value = {this.state.description}
              onChange = {(event) => {this.setState({description: event.target.value})}}
            />
          </Form.Field> 
          <Form.Field>
            <label>Value in Ether</label>
            <Input
              value = {this.state.value}
              onChange = {(event) => {this.setState({value: event.target.value})}}
            />
          </Form.Field> 
          <Form.Field>
            <label>Recipient</label>
            <Input
              value = {this.state.recipient}
              onChange = {(event) => {this.setState({recipient: event.target.value})}}
            />
          </Form.Field> 
          <Button primary loading = {this.state.loading}>
            Create!
          </Button>
          <Message
            error
            header = "Oops!"
            content = {this.state.errorMessage}
          />
        </Form>
      </Layout>
    );
  };
}

export default RequestNew;
