import React, { Component } from 'react';
import { Button, Table } from 'semantic-ui-react';
import Layout from '../../../components/Layout';
import RequestRow from '../../../components/RequestRow';
import { Link, Router } from '../../../routes';
import Campaign from '../../../ethereum/campaign';

class RequestIndex extends Component {
  /* "props" is the argument of function getInitialProps().
   * "props" carries all the values which are passed to
   * this function.
   */
  static async getInitialProps (props) {
    const address = props.query.address;
    /* Any object returned from getInitialProps()
     * can be accessed in this class using
     * "this.props.your_object".
     */
    const campaign = Campaign(address);
    const approverCount = await campaign.methods.approverCount().call();
    const requestCount = await campaign.methods.getRequestCount().call();
    /* getRequestCount() returns a number in a string.
     * Call parseInt() to convert it to a number.
     */
    /* What is Promise.all()?
     */
    const requests = await Promise.all(
      Array(parseInt(requestCount))
        .fill()
        .map((element, index) => {
          return campaign.methods.requests(index).call()
        })
    );

    console.log(requests);


    //return {address: address};
    return {address, requests, requestCount, approverCount};
  }

  renderRow() {
    return this.props.requests.map((request, index) => {
      return <RequestRow
        key = {index}
        id = {index}
        request = {request}
        address = {this.props.address}
        approverCount = {this.props.approverCount}
      />;
    });
  }

  render () { 
    /* Get the items from Table.
     * Or directly use Table.Header, Table.Row,
     * Table.HeaderCell, and Table.Body.
     */
    const { Header, Row, HeaderCell, Body } = Table;
    return (
      <Layout>
        <h3>Request List</h3>
        <Link route = {`/campaigns/${this.props.address}/requests/new`}>
          <a>
            <Button primary floated = "right" style = {{marginBottom: 10}}>
              Add Request
            </Button>
          </a>
        </Link>
        <Table>
          <Table.Header>
            <Row>
              <HeaderCell>ID</HeaderCell>
              <HeaderCell>Description</HeaderCell>
              <HeaderCell>Amount (Ether)</HeaderCell>
              <HeaderCell>Recipient</HeaderCell>
              <HeaderCell>Approval</HeaderCell>
              <HeaderCell>Approve</HeaderCell>
              <HeaderCell>Finalize</HeaderCell>
              <HeaderCell>Message</HeaderCell>
            </Row>
          </Table.Header>
          <Table.Body>
            {this.renderRow()}
          </Table.Body>
        </Table>
        <div> Found {this.props.requestCount} requests</div>
      </Layout>
    );
  };
}

export default RequestIndex
