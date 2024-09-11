
const hre = require("hardhat");
const fxRootContractABI = require("../fxRootContractABI.json");
const tokenContractJSON = require("../artifacts/contracts/Cats.sol/Cats.json");

const tokenAddress = "0x33284DA1Ad1fD312DB26ace46c79024cA9f67Cf7"; // place your erc271a contract address here
const tokenABI = tokenContractJSON.abi;
const fxERC271ARootAddress = "0x9E688939Cb5d484e401933D850207D6750852053";
const walletAddress = "0xd2BE47D50E052979d4e7DD85713f49521f76d648"; // place your public address for your wallet here

async function main() {

    const tokenContract = await hre.ethers.getContractAt(tokenABI, tokenAddress);
    const fxContract = await hre.ethers.getContractAt(fxRootContractABI, fxERC271ARootAddress);
    
    const approveTx = await tokenContract.setApprovalForAll(fxERC271ARootAddress, true);
    await approveTx.wait();

    console.log('Approval confirmed');
for( i=0;i<5;i++){
    const depositTx = await fxContract.deposit(tokenAddress, walletAddress, i, "0x6556");
    await depositTx.wait();
}

    console.log("NFTs  Transfered");
    console.log("Current NFT Balance : " + await tokenContract.balanceOf(walletAddress) );
  
  }
  

  main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
  });