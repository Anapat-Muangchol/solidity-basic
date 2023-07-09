// SPDX-License-Identifier: MIT

pragma solidity >=0.7.0 < 0.9.0;

contract DoubleDeposit {
    mapping(address => uint256) private deposits;

    event Deposit(address indexed depositor, uint256 amount);
    event Withdrawal(address indexed withdrawer, uint256 amount);

    constructor() {
    }

    function deposit() external payable {
        require(msg.value > 0, "Deposit amount must be greater than zero");
        deposits[msg.sender] += msg.value;
        emit Deposit(msg.sender, msg.value);
    }

    function withdraw() external {
        uint256 amount = deposits[msg.sender];
        require(amount > 0, "No deposit available to withdraw");

        deposits[msg.sender] = 0;
        uint256 withdrawalAmount = amount * 2;
        (bool success, ) = msg.sender.call{value: withdrawalAmount}("");
        require(success, "Failed to send ETH to the withdrawer");

        emit Withdrawal(msg.sender, withdrawalAmount);
    }

    function getDepositAmount(address depositor) external view returns (uint256) {
        return deposits[depositor];
    }
}