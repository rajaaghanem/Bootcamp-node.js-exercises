import yargs from "yargs";
import { hideBin } from "yargs/helpers";

//! add
// yargs(hideBin(process.argv))
//   .command({
//     command: "add",
//     describe: "addition",
//     handler: (argv) => {
//       console.log(argv._[1] + argv._[2]);
//     },
//   })
//   .parse();

yargs(hideBin(process.argv))
  .command({
    command: "add",
    describe: "addition",
    builder:{
        num1:{
            describe: "first number",
            demandOptions: true,
            type: "integer"
        },
        num1:{
            describe: "secound number",
            demandOptions: true,
            type: "integer"
        },
    },
    handler: (argv) => {
      console.log(argv.num1 + argv.num2);
    },
  })
  .parse();

//! substract
yargs(hideBin(process.argv))
  .command({
    command: "sub",
    describe: "substract",
    handler: (argv) => {
      console.log(argv._[1] - argv._[2]);
    },
  })
  .parse();

//! multiply
yargs(hideBin(process.argv))
  .command({
    command: "mult",
    describe: "multiply",
    handler: (argv) => {
      console.log(argv._[1] * argv._[2]);
    },
  })
  .parse();

//!pow
yargs(hideBin(process.argv))
  .command({
    command: "pow",
    describe: "pow",
    handler: (argv) => {
      console.log(argv._[1] ** 2);
    },
  })
  .parse();
