import users from "./users.js";
import inquirer from "inquirer";
import chalk from "chalk";
import mainScreen from "./mainScreen.js";
import repeatProgram from "./repeatprogram.js";

async function login() {
  const answer = await inquirer.prompt([
    {
      name: "accountNumber",
      type: "number",
      message: "Enter your Account Number : ",
    },
    {
      name: "pin",
      type: "password",
      message: "Enter your PIN code : ",
    },
  ]);
  var programRepeat = true;
  let user = users.find(
    (x) => x.AccountNumber == answer.accountNumber && x.PinCode == answer.pin
  );
  if (typeof user != "undefined") {
    console.clear()
    console.log(chalk.yellowBright(`Welcome ${user.name}`));
    do {
      console.clear()
      user.Balance=await mainScreen(user.Balance);
      programRepeat = await repeatProgram();
    } while (programRepeat);
  } else {
    console.log(chalk.redBright("Enter Valid Credintials"));
  }
}

export default login;
