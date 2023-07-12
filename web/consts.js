// ========== ENVIRONMENT ==========
// ----- HARDHAT NETWORK -----
// const web3 = new Web3('http://localhost:8545'); // use hardhat network
// const nameContractAddress = '0x5FbDB2315678afecb367f032d93F642f64180aa3'; // for hardhat network | smart contract address deployed.

// ----- BSC TESTNET NETWORK -----
const web3 = new Web3('https://bsc-dataseed.binance.org'); // use bsc-testnet network
const nameContractAddress = '0xe524656e3BCb3bf4C4462C8CC3D57ca6a551E581'; // for bsc-testnet network | smart contract address deployed.

// ========== CONTRACTS ==========
// const nameContractABI = fetch('./contracts/NameContract.json').then((response) => response.abi);
const nameContractABI = [{"inputs":[{"internalType":"string","name":"_name","type":"string"}],"stateMutability":"nonpayable","type":"constructor"},{"inputs":[],"name":"getName","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"string","name":"_name","type":"string"}],"name":"setName","outputs":[],"stateMutability":"nonpayable","type":"function"}]
const nameContract = new web3.eth.Contract(nameContractABI, nameContractAddress);