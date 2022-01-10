import yargs from "yargs";
import { hideBin } from 'yargs/helpers';

//! add
yargs(hideBin(process.argv)).command({
  command: "add",
  describe: "addition",
  handler: (argv) => {
      console.log((argv._[1]+argv._[2]));
  },
}).parse();

//! substract
yargs(hideBin(process.argv)).command({
    command: "sub",
    describe: "substract",
    handler: (argv) => {
        console.log((argv._[1]-argv._[2]));
    },
  }).parse();