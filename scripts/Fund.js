const { getNamedAccounts, ethers } = require("hardhat");

async function main() {
  const { deployer } = await getNamedAccounts();
  const fundMe = await ethers.Contract("FundMe", deployer);
  console.log(`Got contract FundMe at ${fundMe.address}`);
  console.log("Funding contract...");
  const transactionResponse = fundMe.fund({
    value: ethers.utils.parseEther("0.1"),
  });
  await transactionResponse.wait("1");
  console.log("Funded!");
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
