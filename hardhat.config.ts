// for typechain
import '@typechain/hardhat';
import '@nomiclabs/hardhat-ethers';
// import '@nomiclabs/hardhat-waffle';

// for hardhat-deploy task
import 'hardhat-deploy';

// to reference config type
import { HardhatUserConfig } from 'hardhat/types';

const config: HardhatUserConfig = {
  solidity: '0.8.7',
  typechain: {
    outDir: 'typechain',
    target: 'ethers-v5',
  },
  namedAccounts: {
    deployer: {
      default: 0, // here this will by default take the first account as deployer
      1: 0, // similarly on mainnet it will take the first account as deployer. Note though that depending on how hardhat network are configured, the account 0 on one network can be different than on another
    },
  },
};

export default config;
