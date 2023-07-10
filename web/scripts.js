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
});

function toggleDisplay(id) {
    var x = document.getElementById(id);
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
}


// const contractAddress = 'YOUR_CONTRACT_ADDRESS'; // ใส่ที่อยู่ของ smart contract ที่คุณได้เสร็จสิ้นการตั้งค่า
// const contractABI = [
//     // ใส่ ABI ของ smart contract ที่คุณได้เสร็จสิ้นการคอมไพล์
// ];

// const web3 = new Web3(Web3.givenProvider || 'http://localhost:8545'); // ใช้ provider ของเครือข่าย Ethereum ที่เราเชื่อมต่อ
// const contract = new web3.eth.Contract(contractABI, contractAddress);

// async function writeName() {
//     const amount = document.getElementById('name').value;
//     const accounts = await web3.eth.requestAccounts();

//     try {
//         await contract.methods.deposit().send({ from: accounts[0], value: web3.utils.toWei(amount, 'ether') });
//         displayStatus('Deposit successful!', true);
//     } catch (error) {
//         console.error(error);
//         displayStatus('Deposit failed!', false);
//     }
// }