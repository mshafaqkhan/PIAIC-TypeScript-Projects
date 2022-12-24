import inquirer from "inquirer";
import cashWithdraw from "./cashWithdraw.js";
import cashDeposit from "./cashdeposit.js";
import transfer from "./transfer.js";
import utilityBills from "./utilityBills.js";

async function mainScreen(Balance: number) {
  // console.log("Balance : ",Balance);
  const options = await inquirer.prompt([
    {
      name: "menu",
      type: "list",
      message: "Select Option : ",
      choices: [
        "Balance Inquiry",
        "Cash Withdraw",
        "Cash Deposit",
        "Transfer",
        "Utility Bill",
        "Exit",
      ],
    },
  ]);
  switch (options.menu) {
    case "Balance Inquiry":
      console.log(`-> Your Balance is ${Balance}`);
      break;
    case "Cash Withdraw":
      Balance = await cashWithdraw(Balance);
      if (Balance == -1) {
        console.log(`!-> Your transaction is not successful.`);
        console.log(`!-> Your Balance is ${Balance}`);
      } else {
        console.log(`-> Your transaction is successful.`);
        console.log(`-> Your Balance is ${Balance}`);
      }
      break;
    case "Cash Deposit":
      Balance = await cashDeposit(Balance);
      console.log(`-> Your transaction is successful.`);
      console.log(`-> Your Balance is ${Balance}`);
      break;
    case "Transfer":
      Balance = await transfer(Balance)
      console.log(`-> Your transaction is successful.`);
      console.log(`-> Your Balance is ${Balance}`);
      break;
    case "Utility Bill":
      Balance = await utilityBills(Balance)
      console.log(`-> Your transaction is successful.`);
      console.log(`-> Your Balance is ${Balance}`);
      break;
    case "Exit":
      console.log("Exit");
      process.exit(1);
      break;
  }
  return Balance;
}

export default mainScreen;
