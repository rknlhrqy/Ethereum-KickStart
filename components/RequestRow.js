import React, { Component } from 'react';
import { Table, Button, Message } from 'semantic-ui-react';
import web3 from '../ethereum/web3';
import Campaign from '../ethereum/campaign';
import { Router } from '../routes';

class RequestRow extends Component {
  state = {
    onApproveLoading: false,
    onFinalizeLoading: false,
    errorMessage: ''
  };
  onApprove = async () => {
    this.setState({
      onApproveLoading: true,
      errorMessage: ''
    });
    const accounts = await web3.eth.getAccounts();
    const campaign = Campaign(this.props.address);
    try {
      await campaign.methods.approveRequest(this.props.id)
        .send({
        from: accounts[0] 
      });
      
      Router.pushRoute('/campaigns/${this.props.address}/requests');
    } catch (err) {
      this.setState({errorMessage: err.message.split('\n')[0]});
      console.log(this.state.errorMessage);
    }
    this.setState({onApproveLoading: false});
  };

  onFinalize = async () => {
    this.setState({
      onFinalizeLoading: true,
      errorMessage: ''
    });
    const accounts = await web3.eth.getAccounts();
    const campaign = Campaign(this.props.address);
    try {
      await campaign.methods.finalizeRequest(this.props.id)
        .send({
        from: accounts[0] 
      });
      
      Router.replaceRoute('/campaigns/${this.props.address}/requests');
    } catch (err) {
      this.setState({errorMessage: err.message.split('\n')[0]});
      console.log(this.state.errorMessage);
    }
    this.setState({onFinalizeLoading: false});
  };

  render () {
    const { Row, Cell } = Table;
    const { id, request, approverCount } = this.props;
    const readToFinalize
      = request.approvalCount > approverCount / 2;

    return (
      <Row disabled = {request.complete} positive = {readToFinalize && !request.complete}>
        <Cell>{id}</Cell>
        <Cell>{request.description}</Cell>
        <Cell>{web3.utils.fromWei(request.value, 'ether')}</Cell>
        <Cell>{request.recipient}</Cell>
        <Cell>{request.approvalCount}/{approverCount}</Cell>
        {
        <Cell>
        {/* if request.complete is true, hide the button.
            */}
          { request.complete ? null : (
            <Button
              color = "green"
              basic
              onClick = {this.onApprove}
              loading = {this.state.onApproveLoading}>
              Approve
            </Button>
            )
          }
        </Cell>
        }
        <Cell>
          { request.complete ? null : (
            <Button
              color = "teal"
              basic
              onClick = {this.onFinalize}
              loading = {this.state.onFinalizeLoading}>
              Finalize
            </Button>
          )}
        </Cell>
        <Cell>{this.state.errorMessage}</Cell>
      </Row>
    );
  }
}

export default RequestRow;
