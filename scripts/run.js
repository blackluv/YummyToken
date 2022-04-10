const hre = require("hardhat");

async function main() {

  const YummyToken = await hre.ethers.getContractFactory("YummyToken");
  const yummytoken = await YummyToken.deploy;
  await yummytoken.deployed();

  const developeraddress = "0x42DdCb0f5717191A0af97D2E118776Cf2EdDd0A4";

  console.log("Your Token has ben deployed to:", greeter.address);
  console.log("Please contribute to the developer:", developeraddress);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
