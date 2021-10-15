const Token = artifacts.require("Token");
const EthSwap = artifacts.require("EthSwap");

module.exports = async function(deployer) {

  await deployer.deploy(Token);
  const token = await Token.deployed();

  await deployer.deploy(EthSwap, token.address);
  const ethSwap = await EthSwap.deployed();

  //Transfer to EthSwap
  await token.transfer(ethSwap.address,'1000000000000000000000000');
};