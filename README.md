# Liquidation Test
## Setup
To make sure everything is working follow these instructions.
1. Install NodeJS https://nodejs.org/en
2. Add any address on the goerli test network to `balance.js`
3. Run the following commands which will fetch the `node_modules` needed and then run the code in `balance.js`
```
npm update
node balance.js
```
## Liquidation
To run a liquidation call:
1. Make sure the setup works.
2. Edit the `liquidate.js` file with the correct values
3. Run the following code
```
node liquidate.js
```