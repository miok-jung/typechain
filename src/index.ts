class Block {
  public index: number;
  public hash: string;
  public previousHash: string;
  public date: string;
  public timestamp: number;
  constructor(
    index: number,
    hash: string,
    previousHash: string,
    date: string,
    timestamp: number
  ) {
    this.index = index;
    this.hash = hash;
    this.previousHash = previousHash;
    this.date = date;
    this.timestamp = timestamp;
  }
}

const genesisBlock: Block = new Block(
  0,
  "230492348023498",
  "",
  "Hello",
  123456
);

let blockchain: [Block] = [genesisBlock];

console.log(blockchain);
export {};
