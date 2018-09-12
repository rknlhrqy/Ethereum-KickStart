# Ethereum-KickStart
This is a web applicaton for crowdfunding projects. A user can create a campaign to collect fundings from the investors. The user can define the request to use a part of the fund in different areas such as contracting or purchasing. The investors will vote to reject or permit the request. Then the user can tranfer that part of fund to the contractors or sellers if the request is accepted by investors.<br>
The front-end of the web application is developed using React and the back-end is developed using Next.js and node.js. It is not using create-react-app, because I found that Next.js has many advantages compared with create-react-app when building a multi-page application. Npm module next-routes is also used to enhance the route handling<br>
The front-end of this application is developed using semantic-ui-react and semantic-ui-css. Both npm modules work together to provide the graphic elements and their CSS styles.<bc>
<br>
The steps to develop an Ethereum web application, or a Blockchain web application generally, are:<br>
1, Using http://remix.ethereum.org to develop/debug the smart contract.<br>
2, Create your web application folder and run npm to init and install the needed npm modules to build a React front-end application.<br>
3, Download your smart contract from the http://remix.ethereum.org into your project folder. And use Mocha to develop the test code to test your smart contract.<br>
4, Begin to implement the front-end application after your smart contract is tested and verified.<br>
<br>
To run it, you need to have an account in Ethereum network. To sign up in Ethereum network, do the followings:<br>
1, install Google Chrome browser.<br>
2, install MetaMask as Chrome's extension.<br>
3, apply for an account using MetaMask. Get some ethers for testing purpose: Go to faucet.rinkeby.io. or Go to rinkeby-faucet.com.<br>
<br>
This application is using the Rinkeby test network. it is not using Ethereum main network which requires the real money.<br> 
This applicatoin is using Infura API to access Rinkeby test network. Please sign up in https://infura.io and get your personal web address to access Rinkeby network and replace the one used in file web3.js.<br>
Before running this application, you need to build and deploy the smart contract in Rinkeby network. In the root folder, just run:<br>
1, "node ./ethereum/compile.js"<br>
2, "node ./ethereum/deploy.js"<br>
