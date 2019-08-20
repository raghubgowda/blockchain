# Blockchain
Sample programs to learn block chain.


This program shows 
* How to create a simple block chain
* Alter the data in a block to make the chain invalid
* Recalculate the hash to make the chain valid again.

## How to run
cd ~/blockchain and run the below command


# To build a sample blockchain and print
```
$ node main build

```

# To demonstrate how the chain will be broken when a block data is altered
```
$ node main modify 2

```
* Here the last parameter denotes the block number to be altered.

# To demonstrate how the chain will be rebuilt after altering a block data
```
$ node main alterAndbuild 1

```
* Here the last parameter denotes the block number to be altered.
