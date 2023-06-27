# solidity-basic

create package.json file
```
npm init -y
```

create hardhat config file
```
npx hardhat
```

install dependency hardhat
```
npm install --save-dev hardhat
```

install dependency hardhat plug-in
```
npm install --save-dev @nomiclabs/hardhat-waffle @nomiclabs/hardhat-ethers ethereum-waffle chai solidity-coverage
```


log from deploy MyContract
```
Compiled 1 Solidity file successfully
My Contract deployed to: 0x5FbDB2315678afecb367f032d93F642f64180aa3
```

log from local eth chain
```
hardhat_addCompilationResult
eth_chainId
eth_accounts
eth_blockNumber
eth_chainId (2)
eth_estimateGas
eth_getBlockByNumber
eth_feeHistory
eth_sendTransaction
  Contract deployment: MyContract
  Contract address:    0x5fbdb2315678afecb367f032d93f642f64180aa3
  Transaction:         0x9e8b1c602b08a310f92050b724a634e9d75e2690018b3489ae18a48c1fbba3d0
  From:                0xf39fd6e51aad88f6f4ce6ab8827279cfffb92266
  Value:               0 ETH
  Gas used:            454401 of 454401
  Block #1:            0x61c32a73f97aa055e910c374cceafd709fb02036c1e1d5a0ab3083a57a39df34

eth_chainId
eth_getTransactionByHash
```