# ERC721 Sepolia to Amoy Bridge Using fxPortal
This project demonstrates how to use the fxPortal contracts to transfer ERC721 tokens from Sepolia to Amoy.

### Steps for Bridging

1. Run npm i to install dependencies
2. paste your private key in the .env file
3. Run `npx hardhat run scripts/deploy.js --network sepolia` to deploy the contract
4. Paste the newly deployed contract address in the tokenAddress variable for the other scripts
5. Make sure to fill in your public key
6. Run `npx hardhat run scripts/batchMint.js --network sepolia` to mint NFTs to your wallet
7. Run `npx hardhat run scripts/approveDeposit.js --network sepolia` to approve and deposit your tokens to amoy polygon