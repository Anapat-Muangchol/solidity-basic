async function main() {
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