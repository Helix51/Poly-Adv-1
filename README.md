

# Cats NFT Collection (ERC721A)

This project implements an ERC721A contract named `Cats`, allowing the creation and minting of a limited NFT collection based on different cat breeds. The NFT images were created using DALL-E with a specific prompt. The contract is deployed on the Sepolia network.

## Table of Contents

- [Project Overview](#project-overview)
- [Features](#features)
- [Contract Details](#contract-details)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Usage](#usage)
  - [Deploying the Contract](#deploying-the-contract)
  - [Minting NFTs](#minting-nfts)
  - [Prompt Description](#prompt-description)
  - [Scripts](#scripts)
- [License](#license)

## Project Overview

The `Cats` NFT contract utilizes ERC721A, an optimized version of ERC721, enabling efficient minting of multiple NFTs in a single transaction. The collection consists of a maximum of 5 NFTs, each representing a different breed of cat. The images were generated using DALL-E with the following prompt:

> **"Different Types Of Cat Breeds Resting On Sofa"**

## Features

- **ERC721A Contract**: More efficient than ERC721 for minting multiple NFTs.
- **Limited Collection**: A maximum of 5 NFTs can be minted.
- **DALL-E Images**: The NFTs feature AI-generated images based on the provided prompt.

## Contract Details

- **Contract Name**: Cats
- **Symbol**: CS
- **Max Supply**: 5 NFTs
- **Base URI**: [Pinata IPFS URL](https://gray-traditional-tapir-662.mypinata.cloud/ipfs/QmSEN6JZ8zcKY5FzB1WdiUp1KsmxyPGNvXBRLwYftW41Ms/)
- **Network**: Sepolia (Testnet)

## Prerequisites

- [Node.js](https://nodejs.org/) and npm
- [Hardhat](https://hardhat.org/)
- [ERC721A](https://www.erc721a.org/)
- A Sepolia testnet account with test ETH

## Installation

1. Clone the repository:
    ```bash
    git clone <repository-url>
    cd cats-nft
    ```

2. Install the necessary dependencies:
    ```bash
    npm install
    ```

3. Set up your environment and connect to the Sepolia network.

## Usage

### Deploying the Contract

Before you can mint NFTs, the contract needs to be deployed to the Sepolia testnet. Use the `deploy.js` script:

```bash
npx hardhat run scripts/deploy.js --network sepolia
```

Once deployed, make sure to note the contract address, as you'll need it for further interactions.

### Minting NFTs

After the contract is successfully deployed, you can mint NFTs (only the owner can perform this action). Use the `mint.js` script to mint the NFTs:

```bash
npx hardhat run scripts/mint.js --network sepolia
```

You cannot mint more than 5 NFTs, as per the contract’s limitations.

### Bridging NFTs between networks

After the NFTs are minted , you can transfer the NFTs (only the owner can perform this action). Use the `approveDeposit.js` script to Transfer the NFTs:

```bash
npx hardhat run scripts/approveDeposit.js --network sepolia
```


### Prompt Description

To view the prompt used to generate the NFT images, you can run the `promptDescription.js` script:

```bash
npx hardhat run scripts/promptDescription.js --network sepolia
```

### Scripts

All the following scripts need to be run for the full project functionality:

- **deploy.js**: Deploys the Cats contract to the Sepolia testnet.
- **mint.js**: Mints the NFTs (restricted to the contract owner).
- **getNftBalance.js**: Shows the number of NFTs in the wallet on Sepolia testnet, useful for checking balances before and after bridging NFTs.
- **promptDescription.js**: Displays the prompt used to create the images for the NFTs.
- **approveDeposit.js**: Transfers the 5 NFTs from Sepolia testnet to the Amoy testnet.

### Script Execution Order

1. **Deploy** the contract (`deploy.js`).
2. **Mint** the NFTs (`mint.js`).
3. **Check NFT balance** in your wallet using (`getNftBalance.js`).
4. **Approve NFT transfer** between networks (`approveDeposit.js`).

## License

This project is Unlicensed and is done by @HElix51 as a Simple Project.(Not For Commercial use)


