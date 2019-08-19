const SHA256 = require('crypto-js/sha256');
class Block{
    constructor(index, timestamp, data, previousHash=''){
        this.index = index;
        this.timestamp = timestamp;
        this.data = data;
        this.previousHash = previousHash;
        this.hash = this.calculateHash();
    }

    calculateHash(){
        return SHA256(this.index + this.timestamp + JSON.stringify(this.data) + this.previousHash).toString();
    }
}

class BLockChain{
    constructor(){
        this.chain = [this.createGenesisBlock()];
    }

    createGenesisBlock(){
        return new Block(0, "01/01/2019", "Genesis Block", "0");
    }

    getLatestBlock(){
        return this.chain[this.chain.length - 1];
    }

    addBlock(newBlock){
        newBlock.previousHash = this.getLatestBlock().hash;
        newBlock.hash = newBlock.calculateHash();
        this.chain.push(newBlock);
    }

    isChainValid(){
        for(let i = 1; i < this.chain.length; i++){
            const currentBLock = this.chain[i];
            const previousBlock = this.chain[i-1];
            
            if(currentBLock.hash !== currentBLock.calculateHash()){
                console.log(`The hash for the block at index ${i} is not correct!!!`);
                return false;
            }

            if(currentBLock.previousHash !== previousBlock.hash){
                console.log(`The previous hash for the block at index ${i} is not correct!!!`);
               return false; 
            }
        }

        return true;
    }
}

let myCoin = new BLockChain();
myCoin.addBlock(new Block(1, "01/01/2019", {sender: "harry", reciever: "sajel", amount:"100"}));
myCoin.addBlock(new Block(2, "02/01/2019", {sender: "sajel", reciever: "harry", amount:"50"}));
console.log(`The block chain is : ${JSON.stringify(myCoin.chain, null , 4)}`);

myCoin.chain[2].data.amount = "0";
console.log(`Is block chain valid? ${myCoin.isChainValid()}`);

console.log(`Correcting the invalid block...`);
myCoin.chain[2].hash = myCoin.chain[2].calculateHash();
console.log(`Is block chain valid? ${myCoin.isChainValid()}`);
console.log(`The block chain is : ${JSON.stringify(myCoin.chain, null , 4)}`);
