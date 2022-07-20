// SPDX-License-Identifier: MIT
pragma solidity ^0.8.7;

import '@openzeppelin/contracts/token/ERC20/ERC20.sol';

contract OurToken is ERC20 {
  /// @notice initialize the contract with the initial supply tokens to the creator of the contract
  /// @dev if initial supply is 50, then it will be 50 wei (then we multiply by 10**18)
  /// @param initialSupplyETH the initial supply of the token
  constructor(uint256 initialSupplyETH) ERC20('OurToken', 'OT') {
    // Update total supply with the decimal amount
    _mint(msg.sender, initialSupplyETH * 10**uint256(decimals()));
  }
}
