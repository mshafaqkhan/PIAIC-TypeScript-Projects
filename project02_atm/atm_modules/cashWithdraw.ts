import inquirer from "inquirer";
import chalk from "chalk";

async function cashWithdraw(Balance: number) {
  const answer = await inquirer.prompt([
    {
      name: "amount",
      type: "list",
      choices: ["500", "1000", "2000", "5000", "Others Amount"],
      message: "Select Your Amount : ",
    },
  ]);
    //  console.log("Balance from Cash With draw : ", Balance);

  if (Balance > answer.amount || answer.amount === "Others Amount") {
    switch (answer.amount) {
      case "500":
        Balance -= 500;
        //console.log(`Your New Balance is ${Balance}`);
        break;
      case "1000":
        Balance -= 1000;
        //console.log(`Your New Balance is ${Balance}`);
        break;
      case "2000":
        Balance -= 2000;
        //console.log(`Your New Balance is ${Balance}`);
        break;
      case "5000":
        Balance -= 5000;
        //console.log(`Your New Balance is ${Balance}`);
        break;
      case "Others Amount":
        const amount_val = await inquirer.prompt([
          {
            name: "other_amount",
            type: "number",
            message: "Select Your Amount : ",
          },
        ]);
        Balance -= amount_val.other_amount;
        //console.log(`Your New Balance is ${Balance}`);
        break;
      default:
        break;
    }
  } else {
    console.log(chalk.redBright("Insufficient Balance"));
  }
  return Balance
}

export default cashWithdraw;
