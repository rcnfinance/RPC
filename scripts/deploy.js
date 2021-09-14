const { ethers, upgrades } = require("hardhat");

async function main() {
    const [deployer] = await ethers.getSigners();

    console.log(
      "Deploying contracts with the account:",
      deployer.address
    );
    console.log("Account balance:", (await deployer.getBalance()).toString());
  
    const Token = await ethers.getContractFactory("RipioCoin");

    const token = await upgrades.deployProxy(Token, [], {gasLimit: "5000000"});

    await token.deployed();
    console.log("Token address:", token.address);
    console.log("Token balance:", (await token.balanceOf(deployer.address)).toString());
}
  
main().then(() => process.exit(0)).catch(error => {
      console.error(error);
      process.exit(1);
});