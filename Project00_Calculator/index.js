#!/usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
import chalkAnimation from "chalk-animation";
const sleep = () => {
    return new Promise((res) => {
        setTimeout(res, 2000);
    });
};
async function welcome() {
    let rainbow = chalkAnimation.rainbow("Let Start Calculation"); // Animation starts
    await sleep();
    rainbow.stop();
    let rainbow2 = chalkAnimation.karaoke("Calculator By MSK"); // Animation starts
    await sleep();
    rainbow2.stop();
}
async function AskQuestion() {
    const answers = await inquirer.prompt([
        /* Pass your questions in here */
        {
            type: "list",
            name: "operator",
            message: "Select your operation : ",
            choices: ["Addition", "Subtraction", "Multiplication", "Division"],
        },
        {
            type: "number",
            name: "num1",
            message: "Select First Number   : ",
        },
        {
            type: "number",
            name: "num2",
            message: "Select Second Number  : ",
        },
    ]);
    // Use user feedback for... whatever!!
    if (answers.operator == "Addition") {
        console.log(chalk.red(`${answers.num1} + ${answers.num2} = ${answers.num1 + answers.num2}`));
    }
    else if (answers.operator == "Subtraction") {
        console.log(chalk.green(`${answers.num1} - ${answers.num2} = ${answers.num1 - answers.num2}`));
    }
    else if (answers.operator == "Multiplication") {
        console.log(chalk.yellow(`${answers.num1} x ${answers.num2} = ${answers.num1 * answers.num2}`));
    }
    else if (answers.operator == "Division") {
        console.log(chalk.blue(`${answers.num1} / ${answers.num2} = ${answers.num1 / answers.num2}`));
    }
    else {
        console.log("Undefined");
    }
}
async function AgainCalculation() {
    do {
        await AskQuestion();
        var again = await inquirer.prompt({
            type: "input",
            name: "restart",
            message: "Press 'Y' to Continue or Press any key to Exit : ",
        });
    } while (again.restart == "Y" || again.restart == "y");
}
await welcome();
AgainCalculation();
