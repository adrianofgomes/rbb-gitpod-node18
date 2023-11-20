module.exports = {
  networks: {
    development: {
      host: "localhost",
      port: 9545,
      network_id: "*", // Match any network id
      //gas: 7952388  // Gas limit used for deploys      
    },
    ganache: { //para fazer deploy na rede ganache utilize npx truffle migrate --network ganache
        host: "127.0.0.1",
        port: 8545,
        network_id: "*"
    }
  },
  compilers: {
    solc: {
      version: "0.8.0"
    }
  }
};
