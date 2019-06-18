pragma solidity ^0.4.25;

contract Account{
    address private vault;

    string private password;
  constructor() public{
    vault = msg.sender;
    password = 'password';
  }


  function withdraw ( string pw, uint howmuch) public {
    require(keccak256(bytes(pw)) == keccak256(bytes(password)),"Not authorized as account holder");
    msg.sender.transfer(howmuch);


  }
}