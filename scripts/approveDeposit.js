const { ethers } = require("hardhat");
const { FXRootContractAbi } = require("../artifacts/FXRootContractAbi.js");
const ABI = require("../artifacts/contracts/KillerRobots.sol/KillerRobot.json");
require("dotenv").config();

async function main() {
  const networkAddress =
    "https://sepolia.infura.io/v3/0037bef9095145179a5f0e3616481a22";
  const privateKey = process.env.PRIVATE_KEY;
  const provider = new ethers.providers.JsonRpcProvider(networkAddress);

  const wallet = new ethers.Wallet(privateKey, provider);

  
  const [signer] = await ethers.getSigners();

  
  const NFT = await ethers.getContractFactory("KillerRobot");
  const ethNFTAddress = await NFT.attach("0x8382E7065448F1620C366a141e6aC00281e7aA9e"); 

  
  const fxRootAddress = "0xF9bc4a80464E48369303196645e876c8C7D972de";
  const fxRoot = await ethers.getContractAt(FXRootContractAbi, fxRootAddress);

  
  const tokenIds = [0, 1, 2, 3, 4];




  for (let i = 0; i < tokenIds.length; i++) {
    const tokenId = tokenIds[i];
    
    const approveTx = await ethNFTAddress.connect(signer).approve(fxRootAddress, tokenId);
    await approveTx.wait();
    console.log(`NFT with Token ID ${tokenId} approved for transfer`);
  }

  for (let i = 0; i < tokenIds.length; i++) {
    const tokenId = tokenIds[i];
    const depositTx = await fxRoot.connect(signer).deposit(ethNFTAddress.address, wallet.address, tokenId, "0x6566");
    await depositTx.wait();
    console.log(`NFT with Token ID ${tokenId} transferred and deposited to polygon address`);
  }

  console.log("NFT : Cute dog");
  console.log("Approved and deposited");

  
  console.log("NFT balance on Polygon Network ")
  console.log(" NFT's Holding in wallet:",wallet.address.toString());
  console.log("NFT balance in wallet:", (await ethNFTAddress.balanceOf(wallet.address)).toString());

}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });