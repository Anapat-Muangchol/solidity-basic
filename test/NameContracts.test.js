const { expect } = require('chai');
const { ethers } = require('hardhat');

describe('NameContract', () => {
    it('should return its name', async () => {
        // --- Given ---
        const name = 'My Contract'

        // --- When ---
        const NameContract = await ethers.getContractFactory('NameContract');
        const contract = await NameContract.deploy(name);

        await contract.deployed();

        // --- Then ---
        expect(await contract.getName()).to.equal(name)
    })

    it('should change its name when requested', async () => {
        // --- Given ---
        const oldName = 'My Contract'
        const newName = 'Another Contract'

        // --- When ---
        const NameContract = await ethers.getContractFactory('NameContract');
        const contract = await NameContract.deploy(oldName);

        // await myContract.deployed();
        await contract.setName(newName);

        // --- Then ---
        expect(await contract.getName()).to.equal(newName)
    })
})