// Wait for the page to load
document.addEventListener("DOMContentLoaded", function() {
    let accounts = null;
    // Check if Metamask is installed
    if (typeof window.ethereum !== "undefined") {
        const connectButton = document.getElementById("connectBtn");
  
        // Handle the connect button click
        connectButton.addEventListener("click", async function() {
            try {
                // Request account access
                accounts = await window.ethereum.request({ method: "eth_requestAccounts" });
  
                // Once the user approves the connection, the first account is available in the accounts array
                const account = accounts[0];

                document.getElementById("wallet-address").innerHTML = `Your wallet address is ${account}`;
                alert(`Connected to Metamask! Your wallet address is ${account}`);

                toggleDisplay("connectEle");
                toggleDisplay("disconnectEle");
                toggleDisplay("contractEle");
            } catch (error) {
                console.error(error);
                alert("An error occurred while connecting to Metamask.");
            }
        });

        const disconnectButton = document.getElementById("disconnectBtn");
        disconnectButton.addEventListener("click", async function() {
            if (window.ethereum.isConnected()) {
                try {
                    // Disconnect from Metamask
                    await window.ethereum.send({ method: 'eth_logout' });
                    alert('Disconnected from Metamask');

                    toggleDisplay("connectEle");
                    toggleDisplay("disconnectEle");
                    toggleDisplay("contractEle");
                } catch (error) {
                    console.error(error);
                    alert('An error occurred while disconnecting from Metamask');
                }
            } else {
                alert('Metamask is disconnected');
            }
        });

    } else {
        alert('Metamask is not install')
    }

    function toggleDisplay(id) {
        var x = document.getElementById(id);
        if (x.style.display === "none") {
        x.style.display = "block";
        } else {
        x.style.display = "none";
        }
    }

    // ===== Contracts =====
    const web3 = new Web3('http://localhost:8545'); // use hardhat network

    const nameContractAddress = '0x5FbDB2315678afecb367f032d93F642f64180aa3'; // smart contract address deployed.
    // const nameContractABI = fetch('./contracts/NameContract.json').then((response) => response.abi);
    const nameContractABI = [{"inputs":[{"internalType":"string","name":"_name","type":"string"}],"stateMutability":"nonpayable","type":"constructor"},{"inputs":[],"name":"getName","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"string","name":"_name","type":"string"}],"name":"setName","outputs":[],"stateMutability":"nonpayable","type":"function"}]
    const nameContract = new web3.eth.Contract(nameContractABI, nameContractAddress);

    const writeNameButton = document.getElementById("writeNameBtn");
    writeNameButton.addEventListener("click", async function() {
        const name = document.getElementById('name').value;

        try {
            await nameContract.methods.setName(name).send({ from: accounts[0] });
            alert("Write name to blockchain success!");
        } catch (error) {
            console.error(error);
        }
    });

    const getNameButton = document.getElementById("getNameBtn");
    getNameButton.addEventListener("click", async function() {
        try {
            const name = await nameContract.methods.getName().call();
            if (name) {
                document.getElementById("display-name").innerHTML = `Your name is "${name}"`;
            } else {
                alert("Please write name to blockchain")
            }
        } catch (error) {
            console.error(error);
        }
    });
});

