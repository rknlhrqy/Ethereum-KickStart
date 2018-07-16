import web3 from './web3';
import CampaignFactory from './build/CampaignFactory.json';

const instance = new web3.eth.Contract(
  JSON.parse(CampaignFactory.interface),
  '0xb447F1f56974437f313aA0E3F2054307b92556a9'
);

export default instance;
