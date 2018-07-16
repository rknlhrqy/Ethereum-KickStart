import React, { Component } from 'react';
import { Form, Button, Input, Message } from 'semantic-ui-react';
import Layout from '../../components/Layout';
import factory from '../../ethereum/factory';
import web3 from '../../ethereum/web3';

/* "Link" is a React component that allows us to render
 * link tags into React components and navigate around
 * the application.
 * "Router" redirect people move from one page to another
 * page inside our app.
 */
import { /*Link,*/ Router } from '../../routes';

class CampaignNew extends Component {
  state = {
    minimumContribution: '100',
    errorMessage: '',
    /* loading is used to control whether
     * to show the button spinning.
     */
    loading: false
  };

  onSubmit = async (event) => {
    // Prevent Event from submitting itself.
    event.preventDefault();
    /* Set the button spinning on. And clear the
     * error message caused by the previous action
     * if there is any.
     */
    this.setState({loading: true, errorMessage: ''});
    /* If there is any error happens in the following
     * code. it will be caught. And the error message
     * will be add to the state "errorMessage".
     * It will be printed during render() call.
     */
    try {
      const accounts = await web3.eth.getAccounts();
      /* When using browser and Metamask,
       * Metamask is able to calculate the gas cost.
       * There is no need to add gas cost below.
       * However if there is no Metamask with the
       * browser, you will need to define the gas limit.
       */
      await factory.methods
        .createCampaign(this.state.minimumContribution)
        .send({
          from: accounts[0]
        });


      /* Route to the base webpage "CampaignIndex".
       */
      Router.pushRoute('/');
    } catch (err) {
      /* err.message has too long descriptions.
       * Just pick up the first sentence.
       */
      this.setState({errorMessage: err.message.split('\n')[0]}); 
    }
    this.setState({loading: false});
  };

  render() {
    return (
      <Layout>
        {/*
          The following semantic CSS style is included
          in Header.js. So comment it out here.
           <link rel="stylesheet" href="//cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.2.12/semantic.min.css" />
        */}
        <h3>Create  a Campaign</h3>
        {/* error = {this.state.errorMessage} is required
            by Semantic UI to decide whether to print out
            the error message.
            If the "error" = false, no error message is
            printed out. If the "error" = true, the error
            message is printed out.
            Here we check whether this.state.errorMessage
            is empty or not. If it is empty, it means false
            in Javascript.
            However Javascript complains that
            "error" needs a boolean, but it gets a string.
            To fix this problem, we use:
            error = {!!this.state.errorMessage}
            The "!!" will convert a tring to boolean.
            */}
        <Form onSubmit = {this.onSubmit} error = {!!this.state.errorMessage}>
          <Form.Field>
            <label>
              Minimum Contribution
            </label>
            <Input
              label = "Wei"
              labelPosition = "right"
              value = {this.state.minimumContribution}
              onChange = { (event) => {
                this.setState({
                  minimumContribution: event.target.value
                });
              }}
            />
          </Form.Field>
          {/* Use Semantic UI style to print out
              Error message.
            */}
          <Message
            error
            header = 'Oops!'
            content = {this.state.errorMessage}
          />
          {/* Enable Button spinning.
              This is a feature from Semantic UI.
              */}
          <Button primary loading = {!!this.state.loading}>
            Create!
          </Button>
        </Form>
      </Layout>
    );
  };
}

export default CampaignNew;
