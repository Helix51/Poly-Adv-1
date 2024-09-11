

async function main() {
 
  const CS = await hre.ethers.getContractFactory("Cats");

  const cats = await CS.deploy();

  await cats.deployed();

  console.log("NFT contract deployed Address: ", cats.address);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
