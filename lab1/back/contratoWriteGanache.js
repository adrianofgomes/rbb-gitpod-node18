const ethers = require("ethers")

const provider = new ethers.providers.JsonRpcProvider("http://127.0.0.1:8545");

var contratoEndereco = '0x9946c5b0797e37ed1a408bfd7f44834d8772fa05';
const abiLegivel = [
    "function atestar(string _nome)",
    "function comparaString(string a, string b) pure returns (bool)",
    "function primeiroNome() view returns (string)",
    "function todosNomes() view returns (string[])"
  ];

acionandoContrato();

async function acionandoContrato() {     
      const contrato = new ethers.Contract(contratoEndereco, abiLegivel, provider);
      const signer = provider.getSigner()
      const contratoComAssinador = contrato.connect(signer);
      var tx = await contratoComAssinador.atestar("Minha msg ganache " + Date.now());      
      console.log(tx);
}

