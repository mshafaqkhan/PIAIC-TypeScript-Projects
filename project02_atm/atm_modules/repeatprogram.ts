import inquirer from "inquirer";

async function repeatProgram() {
  const answer = await inquirer.prompt([
    {
      name: "repeat",
      type: "list",
      message: "\nDo you want to repeat? ",
      choices: ["Yes", "No"],
    },
  ]);
  if (answer.repeat === "Yes") return true;
  else return false;
}

export default repeatProgram;
