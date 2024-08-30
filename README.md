# ERC721 Sepolia to Amoy Bridge Using fxPortal

This project demonstrates how to use the fxPortal contracts to transfer ERC721 tokens from Ethereum's Sepolia testnet to Polygon's Amoy testnet.

## Prerequisites

- Node.js and npm installed
- Basic understanding of Ethereum, ERC721 tokens, and blockchain interactions
- A wallet with some Sepolia ETH for gas fees

## Setup

1. Clone this repository:
   ```
   git clone <repository-url>
   cd <repository-name>
   ```

2. Install dependencies:
   ```
   npm install
   ```

3. Create a `.env` file in the root directory and add your private key:
   ```
   PRIVATE_KEY=your_private_key_here
   ```
   Note: Never share your private key or commit it to version control.

## Deployment and Usage

### 1. Deploy the Contract

Deploy the ERC721 contract to the Sepolia testnet:

```
npx hardhat run scripts/deploy.js --network sepolia
```

Take note of the deployed contract address.

### 2. Configure Scripts

Open the following scripts and update the `tokenAddress` variable with your newly deployed contract address:
- `scripts/batchMint.js`
- `scripts/approveDeposit.js`

Also, ensure your public key is correctly set in these scripts.

### 3. Mint NFTs

Mint NFTs to your wallet on Sepolia:

```
npx hardhat run scripts/batchMint.js --network sepolia
```

### 4. Approve and Deposit

Approve the fxPortal contract to handle your tokens and deposit them to Amoy:

```
npx hardhat run scripts/approveDeposit.js --network sepolia
```

## Verification

After completing these steps, your ERC721 tokens should be bridged from Sepolia to Amoy. You can verify this by checking your wallet balance on both networks.



## License

This project is licensed under the [MIT License](LICENSE).
