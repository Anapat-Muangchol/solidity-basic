async function main() {
    await deployMyContract();
    await deployDoubleDepositContract();
}

async function deployMyContract() {
    const MyContract = await ethers.getContractFactory('MyContract');
    const myContract = await MyContract.deploy("My Contract");

    console.log("My Contract deployed to:", myContract.address);
}

async function deployDoubleDepositContract() {
    const DoubleDepositContract = await ethers.getContractFactory('DoubleDeposit');
    const doubleDepositContract = await DoubleDepositContract.deploy();

    console.log("Double Deposit deployed to:", doubleDepositContract.address);
}

main()
    .then(() => process.exit(0))
    .catch(err => {
        console.error(err);
        process.exit(1);
    })