const ethers = require("ethers")

const provider = new ethers.providers.JsonRpcProvider("http://127.0.0.1:9545");

var contratoEndereco = '0xa56845A935e0B252227bBa3Db0ede85c644954F7';
const abiLegivel = [
    "function atestar(string _nome)",
    "function comparaString(string a, string b) pure returns (bool)",
    "function primeiroNome() view returns (string)",
    "function todosNomes() view returns (string[])"
  ];

acionandoContrato();

async function acionandoContrato() {     
      const contrato = new ethers.Contract(contratoEndereco, abiLegivel, provider);
      var retorno = await contrato.todosNomes();
      console.log(retorno);
}

