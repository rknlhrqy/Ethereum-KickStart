const {rinkeby_credentials} = require('./config');
const HDWalletProvider = require('truffle-hdwallet-provider');
const Web3 = require('web3');
const compiledFactory = require('./build/CampaignFactory.json');

const provider = new HDWalletProvider(
  rinkeby_credentials.RINKEBY_KEY,
  rinkeby_credentials.INFURA_LINK
);
const web3 = new Web3(provider);

deploy = async () => {
  const accounts = await web3.eth.getAccounts();
  console.log('Attempting to deploy from account', accounts[0]);

  const factory = await new web3.eth.Contract(JSON.parse(compiledFactory.interface))
    .deploy({data: compiledFactory.bytecode})
    .send({from: accounts[0], gas: 1000000});

  console.log(compiledFactory.interface);
  console.log('Contract deployed to address: ', factory.options.address);
};

deploy();
