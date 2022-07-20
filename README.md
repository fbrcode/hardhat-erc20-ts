# ERC20 Token Standard Project

## Ethereum Improvement Proposals (EIP)

Reference: <https://eips.ethereum.org/>

Ethereum Improvement Proposals (EIPs) describe standards for the Ethereum platform, including core protocol specifications, client APIs, and contract standards. Network upgrades are discussed separately in the Ethereum Project Management repository.

## Ethereum Request for Comments (ERC)

Application-level standards and conventions, including contract standards such as token standards (ERC-20), name registries (ERC-137), URI schemes (ERC-681), library/package formats (EIP190), and wallet formats (EIP-85).

References:

- <https://www.youtube.com/watch?v=8rpir_ZSK1g&t=39s>
- <https://ethereum.org/en/developers/docs/standards/tokens/erc-20/>
- <https://eips.ethereum.org/EIPS/eip-20>

## Init

- `git init`
- `yarn init -y`
- `yarn add --dev hardhat`
- `yarn add --dev prettier prettier-plugin-solidity`
- `yarn hardhat`

```txt
👷 Welcome to Hardhat v2.10.1 👷‍

✔ What do you want to do? · Create an empty hardhat.config.js
✨ Config file created ✨

Give Hardhat a star on Github if you're enjoying it! 💞✨

https://github.com/NomicFoundation/hardhat
```

## ERC 20 Contract

In a manual version we have to code everything the standard defines.

- `contracts/ManualToken.sol`

But we can use openzeppelin to reference the standard and work on top of it.

Openzeppelin ERC20: <https://docs.openzeppelin.com/contracts/4.x/erc20>

- `yarn add --dev @openzeppelin/contracts`
- `contracts/OurToken.sol`

## Next

Deployment and tests are implemented in `typescript` branch.
