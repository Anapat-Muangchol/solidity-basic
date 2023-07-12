async function main() {
    await deployNameContract();
    // await deployDoubleDepositContract();
}

async function deployNameContract() {
    const NameContract = await ethers.getContractFactory('NameContract');
    const contractDeployed = await NameContract.deploy("");

    console.log("Name Contract deployed to:", contractDeployed.address);
}

async function deployDoubleDepositContract() {
    const DoubleDepositContract = await ethers.getContractFactory('DoubleDeposit');
    const contractDeployed = await DoubleDepositContract.deploy();

    console.log("Double Deposit deployed to:", contractDeployed.address);
}

main()
    .then(() => process.exit(0))
    .catch(err => {
        console.error(err);
        process.exit(1);
    })