const assert = require('assert');
const ganache = require('ganache-cli');
const Web3 = require('web3');
const web3 = new Web3(ganache.provider());

const compiledFactory = require('../ethereum/build/CampaignFactory.json');
const compiledCampaign = require('../ethereum/build/Campaign.json');

let accouts;
let factory;
let campaignAddress;
let campaign;

beforeEach(async () => {
  accounts = await web3.eth.getAccounts();

  factory = await new web3.eth.Contract(JSON.parse(compiledFactory.interface))
    .deploy({data: compiledFactory.bytecode})
    .send({from: accounts[0], gas: '1000000'});

  // Create an instance of Campaign with the minimum
  // contribution to be 100 Wei.
  await factory.methods.createCampaign('100')
    .send({from: accounts[0], gas: '1000000'});

  /*
  // getDeployedCampaign() is a "view" function. so use
  // "call()" instead of "send()" here.
  const address = await factory.methods.getDeployedCampaigns().call();
  campaignAddress = address[0];
  */
  //ES6 syntex.
  [campaignAddress] = await factory.methods.getDeployedCampaigns().call();

  // Since the Campaign is already deployed,
  // we need to pick it up.
  campaign = await new web3.eth.Contract(
      JSON.parse(compiledCampaign.interface),
      campaignAddress
    );
});

describe('Test Campaigns', () => {
  it('Deploys a factory and a campaign', () => {
    assert.ok(factory.options.address);
    assert.ok(campaign.options.address);
  });

  it('Mark caller as the campaign manager', async () => {
    const manager = await campaign.methods.manager().call();
    assert.equal(accounts[0], manager);
  });

  it('Allows people to contribute money and marks them as approvers', async () => {
    // Add a contributor who contributes 200 Wei.
    await campaign.methods.contribute().send({
      from: accounts[1],
      value: '200'
    });
    // approvers is a mapping(address=>bool) variable. Need
    // to use address to get bool.
    const isContributor = await campaign.methods.approvers(accounts[1]).call();
    assert(isContributor);
  });

  it('Test the minimum contributation', async () => {
    try {
      // contribute just 5 Wei. it should fail.
      await campaign.methods.contribute().send({
        from: accounts[1],
        value: '5'
      });
      // if it does not fail (or caught by try-catch),
      // the following assert() should report the test
      // fails.
      assert(false);
    } catch(err) {
      assert(err);
    }
  });

  it('Manager makes a request', async () => {
    await campaign.methods.createRequest(
      'Buy Batteries',
      100,
      accounts[1]
    ).send({from: accounts[0], gas: '1000000'});

    const request = await campaign.methods.requests(0).call();

    assert.equal('Buy Batteries', request.description);
    assert.equal('100', request.value);
    assert.equal(accounts[1], request.recipient);
  });

  it('Process requests', async () => {
    await campaign.methods.contribute().send({
      from: accounts[0],
      value: web3.utils.toWei('10', 'ether')
    });

    await campaign.methods.createRequest(
      'Buy Printers',
      web3.utils.toWei('5', 'ether'),
      accounts[1]
    ).send({from: accounts[0], gas: 1000000});

    // Get the balance from accounts[1].
    // It is used to check whether it gets 5 ether
    // at the end of the test.
    let early_balance = await web3.eth.getBalance(accounts[1]);
    early_balance = web3.utils.fromWei(early_balance, 'ether');
    console.log(early_balance);
    early_balance = parseFloat(early_balance);
    console.log(early_balance);

    await campaign.methods.approveRequest(0).send({
      from: accounts[0],
      gas: 1000000
    });

    await campaign.methods.finalizeRequest(0).send({
      from: accounts[0],
      gas: 1000000
    });

    let balance = await web3.eth.getBalance(accounts[1]);
    balance = web3.utils.fromWei(balance, 'ether');
    console.log(balance);
    // parseFloat() is a Javascript built-in helper.
    balance = parseFloat(balance);
    console.log(balance);
    // Check whether accounts[1] gets 5 ether.
    assert(balance === early_balance + 5);
  });

});
