import yargs from "yargs";
import { hideBin } from "yargs/helpers";
import {addUser} from "./users.js";

//create add user
yargs(hideBin(process.argv))
  .command({
    command: "create",
    describe: "create new user",
    builder:{
        id:{
            describe: "user id",
            demandOptions: false,
            type: "string"
        },
        name:{
            describe: "user name",
            demandOptions: true,
            type: "string"
        },
        email:{
          describe: "user email",
          demandOptions: true,
          type: "string"
      },
    },
    handler: (argv) => {
      addUser(argv.name, argv.email);
    },
  })
  .parse();



