pragma solidity ^0.5.16;

import "openzeppelin-solidity/contracts/token/ERC20/DetailedERC20.sol";
import "openzeppelin-solidity/contracts/token/ERC20/MintableToken.sol";
import "openzeppelin-solidity/contracts/token/ERC20/PausableToken.sol";

contract ABCToken is MintableToken, PausableToken, DetailedERC20 {
    constructor(string memory _name, string memory _symbol, uint8 _decimals)
        DetailedERC20(_name, _symbol, _decimals) 
        public         
    {

    }
}


