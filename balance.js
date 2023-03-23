// Fetches the balance of any address on the goerli test network
console.log("Starting import...");
import { ethers } from 'ethers';

console.log("Creating pool...");
var provider = ethers.getDefaultProvider("goerli") // From https://docs.aave.com/developers/deployed-contracts/v3-testnet-addresses
const result = await provider.getBalance(""); // Fill in address here

console.log(result.toBigInt()); // result is displayed as an integer instead of a decimal for some reason