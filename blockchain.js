const Block = require('./block.js')
const Random = require('./random.js')
module.exports = class BlockChain{
    constructor(){
        this.chain = [this.createGenesisBlock()]
    }

    initialize(count){
        let block
        for(let i = 1; i < count; i++){
            block = this.generateRandomBlock()
            block.index = i
            this.addBlock(block)
        }
    }

    generateRandomBlock(){
        let block = new Block()
        let random = new Random()
        block.timestamp = random.getDate()
        block.data = {sender: random.getFirstName(), reciever: random.getLastName(), amount: Math.floor(Math.random() * 100)}
        return block
    }

    createGenesisBlock(){
        return new Block(0, new Date(), "Genesis Block", "0")
    }

    getLatestBlock(){
        return this.chain[this.chain.length - 1]
    }

    addBlock(newBlock){
        newBlock.previousHash = this.getLatestBlock().hash
        newBlock.hash = newBlock.calculateHash()
        this.chain.push(newBlock)
    }

    isChainValid(){
        for(let i = 1; i < this.chain.length; i++){
            const currentBLock = this.chain[i]
            const previousBlock = this.chain[i-1]
            
            if(currentBLock.hash !== currentBLock.calculateHash()){
                console.log(`Hash value of block[${i}] is incorrect.`)
                return false
            }

            if(currentBLock.previousHash !== previousBlock.hash){
               return false 
            }
        }
        return true
    }

    rebuild(){
        for(let i = 1; i < this.chain.length; i++){
            const currentBLock = this.chain[i]
            const previousBlock = this.chain[i-1]
            
            if(currentBLock.hash !== currentBLock.calculateHash()){
                console.log(`The hash for the block at index ${i} is not correct. Recalculating the hash for this block...`)
                currentBLock.hash = currentBLock.calculateHash()
            }

            if(currentBLock.previousHash !== previousBlock.hash){
                console.log(`The previous hash for the block at index ${i} is not correct. Correcting the chain...`)
                currentBLock.previousHash = previousBlock.hash
            }
        }   
    }
}