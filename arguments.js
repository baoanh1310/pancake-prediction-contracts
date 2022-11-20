const config = require('config');

const args = [
    config.Address.Oracle[networkName],
    config.Address.Admin[networkName],
    config.Address.Operator[networkName],
    config.Block.Interval[networkName],
    config.Block.Buffer[networkName],
    parseEther(config.BetAmount[networkName].toString()).toString(),
    config.OracleUpdateAllowance[networkName],
    config.Treasury[networkName]
];

export default args;