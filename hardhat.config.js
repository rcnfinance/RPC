require('dotenv').config();
require("@nomiclabs/hardhat-waffle");
require('@openzeppelin/hardhat-upgrades');

const { MAINNET_API_KEY, RINKEBY_API_KEY, MAINNET_PRIVATE_KEY } = process.env;


/**
 * @type import('hardhat/config').HardhatUserConfig
 */
module.exports = {
  solidity: "0.8.2",
  networks: {
    mainnet: {
      url: `https://eth-mainnet.alchemyapi.io/v2/${MAINNET_API_KEY}`,
      accounts: [`0x${MAINNET_PRIVATE_KEY}`]
    },
    rinkeby: {
      url: `https://eth-rinkeby.alchemyapi.io/v2/${RINKEBY_API_KEY}`,
      accounts: [`0x${MAINNET_PRIVATE_KEY}`]
    }
  }
};

