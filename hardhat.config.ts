// for typechain
import '@typechain/hardhat';
import '@nomiclabs/hardhat-ethers';
import '@nomiclabs/hardhat-waffle';

// for hardhat-deploy task
import 'hardhat-deploy';

// to reference config type
import { HardhatUserConfig } from 'hardhat/config';

const config: HardhatUserConfig = {
  solidity: '0.8.7',
  typechain: {
    outDir: './artifacts/typechain-types',
  },
};

export default config;
