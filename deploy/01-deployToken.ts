import { DeployFunction } from 'hardhat-deploy/types';
import { HardhatRuntimeEnvironment } from 'hardhat/types';

const deployToken: DeployFunction = async function (hre: HardhatRuntimeEnvironment) {
  const contractName = 'OurToken';
  const { deployments, getNamedAccounts, network } = hre;
  const { deploy, log } = deployments;
  const { deployer } = await getNamedAccounts();
  log(`Deploying ERC20 Token "${contractName}" on network: ${network.name}`);
  const token = await deploy(contractName, {
    from: deployer, // deployer is the default account
    args: [1000000], // 1 million tokens as initial supply
    log: true, // log the transaction
    waitConfirmations: 1, // wait for 1 block confirmation
  });
  log(`Token "${contractName}" Deployed!`);
  log('----------------------------------------------------------');
};

export default deployToken;
deployToken.tags = ['all', 'token', 'erc20'];
