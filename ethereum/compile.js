const path = require('path');
const solc = require('solc');
const fs = require('fs-extra');

const buildPath = path.resolve(__dirname, 'build');
fs.removeSync(buildPath);

const campaignFilePath = path.resolve(__dirname, 'contracts',
  'Campaign.sol');
const source = fs.readFileSync(campaignFilePath, 'utf8');
const output = solc.compile(source, 1).contracts;

// Check whether the build folder exists, if not,
// it will create it.
fs.ensureDirSync(buildPath);

//console.log(output);

for(let contract in output) {
  fs.outputJsonSync(
    path.resolve(buildPath, contract.replace(':', '') + '.json'),  
    output[contract]
  );
}
