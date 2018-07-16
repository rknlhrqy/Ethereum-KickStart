pragma solidity ^0.4.17;

contract CampaignFactory {
  address[] public deployedCampaigns;

  function createCampaign(uint minimum) public {
    address newCampaign = new Campaign(minimum, msg.sender);
    deployedCampaigns.push(newCampaign);
  }

  function getDeployedCampaigns() public view returns(address[]) {
    return deployedCampaigns;
  }
}



contract Campaign {
  struct Request {
    string description;
    uint value;
    address recipient;
    bool complete;
    uint approvalCount;
    mapping(address => bool) approvals;
  }
  
  Request[] public requests;
  address public manager;
  uint public minimumContribution;
  mapping(address => bool) public approvers;
  uint public approverCount;
  
  modifier restricted() {
    require(msg.sender == manager);
    _;
  }
  
  constructor(uint minimum, address creator) public {
    manager = creator;
    minimumContribution = minimum;
  }
  
  // Remember! this function is "payable"
  // User uses it to submit money
  function contribute() public payable {
    require(msg.value > minimumContribution);
  
    approvers[msg.sender] = true;
    approverCount ++;
  }
  
  function createRequest(string description, uint value, address recipient)
    public restricted {
    Request memory newRequest = Request({
      description: description,
      value: value,
      recipient: recipient,
      complete: false,
      approvalCount: 0
      // Note: no need to initalize "approvals". It is a reference variable.
    });
    
    requests.push(newRequest);
  }
    
  function approveRequest(uint index) public {
    // Create request to pointer to request[index]
    // require() functions can be anywhere inside the funuction.
    Request storage request = requests[index];
    
    // Check if the user a an approvers.
    // approvers is a mapping(address => bool).
    // By default bool is false. If the user is not an approver.
    // approvers[msg.sender] returns false.
    require(approvers[msg.sender]);
    // Check if the user has not yet voted.
    // approvals is a mapping(address => bool), if the user
    // has not yet voted, it does not exist in approvals[msg.sender]
    // approvals[msg.sender] return false.
    require(!request.approvals[msg.sender]);
    
    request.approvals[msg.sender] = true;
    request.approvalCount ++;
  }
    
    
  function finalizeRequest(uint index) public restricted {
    Request storage request = requests[index];
    require(!request.complete);
    //Check whether more than 50% users approves the Request.
    require(request.approvalCount > (approverCount / 2));
    
    //Transer the money to the recipient of the Request.
    request.recipient.transfer(request.value);
    
    request.complete = true;
  }

  function getSummary() public view returns (
    uint, uint, uint, uint, address) {
    return (
      minimumContribution,
      this.balance,
      requests.length,
      approverCount,
      manager
    );
  }

  function getRequestCount() public view returns (uint) {
    return requests.length;
  }
}
