const HDWalletProvider = require('@truffle/hdwallet-provider');
const Web3 = require('web3');
const { interface, bytecode } = require('./compile');

//the mnemonic below belongs to a wallet only used for testing purposes
const provider = new HDWalletProvider(
    "only can expect lion glove pudding rain hotel enemy pupil gadget make",
    "https://rinkeby.infura.io/v3/4b5b32a4e0d14a3ba8a80ee206a0c812"
);

const web3 = new Web3(provider);

const deploy = async () => {
    const accounts = await web3.eth.getAccounts();

    console.log("Attempting to deploy from account", accounts[0]);

    const result = await new web3.eth.Contract(JSON.parse(interface))
        .deploy({ data: bytecode, arguments: ['Hi there!'] })
        // don't forget to get some eth on your wallet through faucets to be able to execute the transaction
        .send({ gas: '1000000', from: accounts[0] });

    console.log("Contract deployed to", result.options.address);
    //this line is added to prevent a hanging deployment
    provider.engine.stop();
};

deploy();