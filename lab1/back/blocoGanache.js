const ethers = require("ethers")

const provider = new ethers.providers.JsonRpcProvider("http://127.0.0.1:8545");

getBloco();

async function getBloco() {
    let bloco = await provider.getBlockNumber();
    console.log("Número do bloco: " + bloco);

}

