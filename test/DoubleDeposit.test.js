const { expect } = require('chai');
const { ethers } = require('hardhat');

describe('MyContract', () => {
    it('should return its name', async () => {
        // --- Given ---
        const name = 'My Contract'

        // --- When ---
        const DoubleDeposit = await ethers.getContractFactory('DoubleDeposit');
        const myContract = await DoubleDeposit.deploy();

        await myContract.deployed();

        // --- Then ---
        expect(await myContract.getName()).to.equal(name)
    })

    it('should change its name when requested', async () => {
        // --- Given ---
        const oldName = 'My Contract'
        const newName = 'Another Contract'

        // --- When ---
        const MyContract = await ethers.getContractFactory('MyContract');
        const myContract = await MyContract.deploy(oldName);

        // await myContract.deployed();
        await myContract.setName(newName);

        // --- Then ---
        expect(await myContract.getName()).to.equal(newName)
    })
})