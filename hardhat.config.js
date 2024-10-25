require("@nomicfoundation/hardhat-toolbox");

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.27",
};
require("@nomiclabs/hardhat-waffle");
require("@nomiclabs/hardhat-ethers");

module.exports = {
  networks: {
    sepolia: {
      url: `ID_Project_Infura`, // Remplace par ton Infura Project ID
      accounts: [`Private_key_metamask`], // Remplace par ta clé privée Metamask
    },
  },
};
