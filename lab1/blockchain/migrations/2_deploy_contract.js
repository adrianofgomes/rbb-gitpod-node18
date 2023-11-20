var myContract = artifacts.require("Ateste");

module.exports = function(deployer){
  deployer.deploy(myContract);
}