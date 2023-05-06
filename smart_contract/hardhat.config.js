require('@nomiclabs/hardhat-waffle');

module.exports = {
  solidity: '0.8.0',
  networks: {
    ropsten: {
      url: 'https://eth-mainnet.g.alchemy.com/v2/C5INT0sb2Rv7KYmQECQtEtrAZ_2m1p5i',
      accounts: ['60b26319351b1a3dc1d18ccd8e8fc6fd3164317cf708185b595351b3b0f93e8a'],
    },
  },
};
//https://eth-mainnet.g.alchemy.com/v2/C5INT0sb2Rv7KYmQECQtEtrAZ_2m1p5i