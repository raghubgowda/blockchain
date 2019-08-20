const BlockChain = require('./blockchain.js')

let myCoin = new BlockChain()
myCoin.addBlock(new Block(1, "01/01/2019", {sender: "harry", reciever: "sajel", amount:"100"}))
myCoin.addBlock(new Block(2, "02/01/2019", {sender: "sajel", reciever: "harry", amount:"50"}))
console.log(`The block chain is : ${JSON.stringify(myCoin.chain, null , 4)}`)

myCoin.chain[2].data.amount = "0"  
console.log(`Is block chain valid? ${myCoin.isChainValid()}`)

console.log(`Correcting the invalid block...`)
myCoin.chain[2].hash = myCoin.chain[2].calculateHash()
console.log(`Is block chain valid? ${myCoin.isChainValid()}`)
console.log(`The block chain is : ${JSON.stringify(myCoin.chain, null , 4)}`)