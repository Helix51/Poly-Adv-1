
const hre = require("hardhat");
const tokenContractJSON = require("../artifacts/contracts/Cats.sol/Cats.json");
require('dotenv').config()

const tokenAddress = "0x33284DA1Ad1fD312DB26ace46c79024cA9f67Cf7"; // place your erc20 contract address here
const tokenABI = tokenContractJSON.abi;
const walletAddress = "0xd2BE47D50E052979d4e7DD85713f49521f76d648"; 
 // place your public address for your wallet here

async function main() {

    const token = await hre.ethers.getContractAt(tokenABI, tokenAddress);
    
    

    
      const depositTx = await token.mint(5);
  
      // Wait for the deposit to be confirmed
      await depositTx.wait();
    
  
    console.log("NFTs Minted");
    console.log("Number of NFTs: " + await token.balanceOf(walletAddress) );
}
  
  
  main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
  });