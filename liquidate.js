// Makes a liquidationCall on the goerli test network using the aave library
console.log("Starting import...");
import { Pool } from '@aave/contract-helpers';
import { ethers } from 'ethers';

console.log("Creating pool...");
const provider = ethers.getDefaultProvider("goerli") // https://docs.ethers.org/v5/api/providers/
const poolAddress = "0xCE5f067F3D0AEe076EB6122c8989A48f82f2499a"; // From https://docs.aave.com/developers/deployed-contracts/v3-testnet-addresses
const wethGatewayAddress = "";

const pool = new Pool(
  provider, {
  POOL: poolAddress,
  WETH_GATEWAY: wethGatewayAddress,
});

console.log("Making liquidationCall...");
/*
- @param `liquidator` The ethereum address that will liquidate the position 
- @param `liquidatedUser` The address of the borrower 
- @param `debtReserve` The ethereum address of the principal reserve 
- @param `collateralReserve` The address of the collateral to liquidated 
- @param `purchaseAmount` The amount of principal that the liquidator wants to repay 
- @param @optional `getAToken` Boolean to indicate if the user wants to receive the aToken instead of the asset. Defaults to false
*/
await pool.liquidationCall({
  liquidator: "",
  liquidatedUser: "",
  debtReserve: "",
  collateralReserve: "",
  purchaseAmount: "",
  getAToken: false,
});

console.log("Done");