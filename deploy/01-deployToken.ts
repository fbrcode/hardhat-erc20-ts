import { DeployFunction } from 'hardhat-deploy/types';
import { HardhatRuntimeEnvironment } from 'hardhat/types';

const deployToken: DeployFunction = async function (hre: HardhatRuntimeEnvironment) {
  const contractName = 'OurToken';
  const { deployments, getNamedAccounts, network, ethers } = hre;
  const { deploy, log } = deployments;
  log(`Deploying ERC20 Token "${contractName}" on network: ${network.name}`);
  log(`Token "${contractName}" Deployed!`);
  log('----------------------------------------------------------');
};

export default deployToken;
deployToken.tags = ['all', 'token', 'erc20'];
