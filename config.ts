export default {
  Address: {
    Oracle: {
      mainnet: "0xD276fCF34D54A926773c399eBAa772C12ec394aC",
      testnet: "0x2514895c72f50D8bd4B4F9b1110F0D6bD2c97526",
      goerli: "0xD4a33860578De61DBAbDc8BFdb98FD742fA7028e",
    },
    Admin: {
      mainnet: "0x5a5Ac66eB58A4fe9C6BCBA394211A05Ef9f2c881",
      testnet: "0x5a5Ac66eB58A4fe9C6BCBA394211A05Ef9f2c881",
      goerli: "0x5a5Ac66eB58A4fe9C6BCBA394211A05Ef9f2c881",
    },
    Operator: {
      mainnet: "0x5a5Ac66eB58A4fe9C6BCBA394211A05Ef9f2c881",
      testnet: "0x5a5Ac66eB58A4fe9C6BCBA394211A05Ef9f2c881",
      goerli: "0x5a5Ac66eB58A4fe9C6BCBA394211A05Ef9f2c881",
    },
  },
  Block: {
    Interval: {
      mainnet: 300,
      testnet: 300,
      goerli: 300,
    },
    Buffer: {
      mainnet: 15,
      testnet: 15,
      goerli: 15,
    },
  },
  Treasury: {
    mainnet: 300, // 3%
    testnet: 1000, // 10%
    goerli: 1000, // 10%
  },
  BetAmount: {
    mainnet: 0.001, // 1000000000000000
    testnet: 0.001,
    goerli: 0.001,
  },
  OracleUpdateAllowance: {
    mainnet: 300,
    testnet: 300,
    goerli: 300,
  },
};