import inquirer from "inquirer";

async function cashDeposit(Balance: number) {
 // console.log(`1 Balance is ${Balance}`);
  const answer = await inquirer.prompt([
    {
      name: "amount",
      type: "number",
      message: "Enter Amount : ",
    },
  ]);
  Balance+=answer.amount;
  // console.log(`2 Deposit Amount is ${answer.amount}`);
  // console.log(`3 Deposit : Balance is ${Balance}`);
  return Balance;
}

export default cashDeposit