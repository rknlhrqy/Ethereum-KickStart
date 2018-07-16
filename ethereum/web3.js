import Web3 from 'web3';

// get the current provider used by metamask.
// "window" is a global variable only in browser.
// Next.js will complain about it is undefined.
//const web3 = new Web3(window.web3.currentProvider);

let web3;
// If the brower is process this .js file
// window will be a valid value.
if (typeof window !== 'undefined' && window.web3 !== 'undefined') {
  // We are in the browser and Metamask is running.
  web3 = new Web3(window.web3.currentProvider);
} else {
  // We are in the Next server or Metamask is not running.
  // We create our own provider.
  const provider = new Web3.providers.HttpProvider(
    'https://rinkeby.infura.io/0FYTWZYFYrhgxg2fQkt9' 
  );
  web3 = new Web3(provider);
}


export default web3;
