To use code

Star this respository

download or clone this respository

Then run

npm install


TO compile and deploy your token

npx hardhat compile

To deploy:

Get an api key from alchemy.io for rinkeby or ethereum mainnet.

Get an api key from etherscan 

Add your key to hardhat.config.js

Then run this command 

npx hardhat run scripts/run.js --network mainnet(Your deployment network type)

To verify:

Get an api key from etherscan 

Add your key to hardhat.config.js

Then run this command

npx hardhat verify --network mainnet(Replace with the network type, e.g If deployed to rinkeby add rinkeby) contractaddress from deployment

Contact:

If you got any issues contact me on rogerscott650@gmail.com

Note: Remember not to add private keys when uploading to github
