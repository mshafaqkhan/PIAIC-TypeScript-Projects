import chalk from "chalk";
import inquirer from "inquirer";

async function transfer(Balance: number) {
  const answer_val = await inquirer.prompt([
    {
      name: "accountNumber",
      type: "number",
      message: "Enter Account Number : ",
    },
    {
      name: "amount",
      type: "number",
      message: "Enter Your Amount : ",
    },
  ]);
  if(Balance>answer_val.amount)
  Balance -= answer_val.amount;
  else
  console.log(chalk.redBright("Insufficient Balance"));
  
  return Balance;
}

export default transfer