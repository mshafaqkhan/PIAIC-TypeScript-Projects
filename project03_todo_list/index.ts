#!/usr/bin/env node
import inquirer from "inquirer";

var todolist: string[] = [];
async function taskAdd() {
  let inputValue: { task: string } = await inquirer.prompt([
    {
      type: "input",
      name: "task",
      message: "Enter Your Task ",
    },
  ]);
  return inputValue.task;
}

async function taskdisplay(todolist: string[]) {
  console.clear()
  console.log(" ----- Display ----- ");
  for (let index = 0; index < todolist.length; index++) {
    console.log(index + 1, "-", todolist[index]);
  }
}

async function taskdelete() {
  let inputValue: { deletetask: string } = await inquirer.prompt([
    {
      type: "input",
      name: "deletetask",
      message: "To delete a task ,Enter Task No.",
    },
  ]);

  return inputValue.deletetask;
}

async function todoApp() {
  let inputValue: { options: string } = await inquirer.prompt([
    {
      type: "list",
      name: "options",
      message: "Select your option : ",
      choices: ["Add", "Delete", "Display", "Exit"],
    },
  ]);
  if (inputValue.options === "Add") {
    let tasktemp = await taskAdd();
    todolist.push(tasktemp);
  } else if (inputValue.options === "Delete") {
    // console.log("Delete");
    taskdisplay(todolist)
    let deletetaskvaltemp = await taskdelete();
    let deletetaskval = deletetaskvaltemp as unknown as number;
    todolist.splice(deletetaskval - 1, 1);
    taskdisplay(todolist);
  } 
  else if (inputValue.options === "Display") {
    taskdisplay(todolist);
  } else {
    // console.log("Exit");
    process.exit(0);
  }
}
console.clear();
while (1) {
  await todoApp();
}
