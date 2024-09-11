
const hre = require("hardhat");
const tokenContractJSON = require("../artifacts/contracts/Cats.sol/Cats.json");

const tokenAddress = "0x33284DA1Ad1fD312DB26ace46c79024cA9f67Cf7"; // Replace with your ERC721A contract address
const tokenABI = tokenContractJSON.abi;

async function main() {
  // Get the contract instance using the address and ABI
  const token = await hre.ethers.getContractAt(tokenABI, tokenAddress);

  // Call the promptDescription function from the contract
  const description = await token.promptDescription();

  // Log the description result
  console.log("Prompt Description:", description);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
