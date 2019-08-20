const BlockChain = require('./blockchain.js')
let myCoin = new BlockChain()
myCoin.initialize(3)
const args = process.argv.slice(2)
const index = args[1]
switch(args[0]){
  case 'build' : 
    console.log(`The block chain is : ${JSON.stringify(myCoin.chain, null , 4)}`)
    break
  case 'modify':
    if(index <=0 | index > myCoin.chain.length-1){
      console.log(`Invalid index. Index must be between 1 and ${myCoin.chain.length}`)
      break
    }
    myCoin.chain[index].data.amount = "100"  
    console.log(`The block chain is : ${JSON.stringify(myCoin.chain, null , 4)}`)
    console.log(`Is block chain valid? ${myCoin.isChainValid()}`)
    break
  case 'alterAndbuild':
    if(index <=0 | index > myCoin.chain.length-1){
      console.log(`Invalid index. Index must be between 1 and ${myCoin.chain.length}`)
      break
    }
    myCoin.chain[index].data.amount = "100" 
    console.log(`Recalculating the hash for the modified block[${index}].`)
    myCoin.rebuild()
    console.log(`Is block chain valid? ${myCoin.isChainValid()}`)
    console.log(`The block chain is : ${JSON.stringify(myCoin.chain, null , 4)}`)  
    break
}




