#!/usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
import chalkAnimation from "chalk-animation";
import { createSpinner } from "nanospinner";

var attempts=0;
var maxNumber = 5; //Change it for Max Number to be Guessed
var flag=false;
const sleep = (timeout = 1500) => {
  return new Promise((res, rej) => setTimeout(res, timeout));
};

async function welcome() {
  let rainbow = chalkAnimation.rainbow("Welcome to Guess Game");
  await sleep();
  rainbow.stop();
}

async function getUserInput() {
  let randomNumber = Math.ceil(Math.random() * maxNumber);
  let userInput = await inquirer.prompt([
    {
      type: "number",
      name: "userInputValue",
      message: `Enter Value between 1 to ${maxNumber} : `,
      validate: (answers: number) => {
        if (isNaN(answers)) {
            attempts+=1;
            console.log(chalk.redBright("\nPress UP key and clear your input"))
            console.log(chalk.redBright(`Enter Numeric Value from 1 to ${maxNumber}`));           
            return false
        }
        else if(answers>maxNumber||answers<0)
        {
          attempts+=1;
          console.log(chalk.redBright("\nPress UP key and clear your value"))
          console.log(chalk.redBright(`Enter Value ranges from 1 - ${maxNumber}`));
          return false
        }
        return true;
      },
    },
  ]);
  const spinner = createSpinner("Checking Answer...").start();
  await sleep();
  if (userInput.userInputValue === randomNumber) {
    spinner.success({text:"Your Guess is Correct"});
    flag=true;
  } else {
    //console.log(chalk.red("Wrong"));
    if (userInput.userInputValue > randomNumber) {
        spinner.error({text:"Your Guess is High ↑"});
    } else {
        spinner.error({text:"Your Guess is Low ↓"});
    }
  }
}

async function repeatedFunction() {
    do{
    await getUserInput();
    attempts+=1;    
    }
    while(!flag)
}

console.clear();
await welcome();
await repeatedFunction();
console.log(`You Guessed in ${attempts} attempts.`);