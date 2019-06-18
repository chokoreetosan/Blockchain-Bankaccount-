const credentials = require('./config.js')
const TronWeb = require('tronweb')
const tronWeb = new TronWeb({
  fullHost: 'https://api.trongrid.io',
  privateKey: credentials.PRIVATE_KEY
})
//tronweb.trx.getContract('contract address'),
//should return object with abi
//put abi into tronWeb.contract(abi object) and it return a contract instance method
//then we can use the contract's function
//contract.withdraw('password', 3);
async function getPaid(){
// const contractdata =  tronWeb.trx.getContract('TBK6cGP9LpGquGohtpSdbk8pE7NzpBhE5J')
const contract = await tronWeb.contract().at('TBK6cGP9LpGquGohtpSdbk8pE7NzpBhE5J')
let returnvalue  = await contract.withdraw('password',1000000).send({feeLimit:200000,callValue:200000,shouldPollResponse:true}).catch((error)=>{
console.log(error);
});
console.log(returnvalue);
}
getPaid();