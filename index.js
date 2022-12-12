#!/usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
import chalkAnimation from "chalk-animation";
// const sleep = ()=>new Promise((resolve,rej)=>setTimeout(resolve,10000))
// async function welcome() {
//                  const rainbow = chalkAnimation.rainbow("lets get started");
//                  await sleep()
//                  rainbow.stop()
// }
// welcome()
const sleep = (ms = 1000) => new Promise((res, rej) => setTimeout(res, ms));
async function welcome() {
    const rainbowTitle = chalkAnimation.rainbow("let get started the game");
    await sleep();
    rainbowTitle.stop();
}
let playerLife = 3;
welcome();
async function askQuestiont() {
    do {
        var randomNumber = Math.floor(Math.random() * 10 + 1);
        playerLife--;
        var que = await inquirer
            .prompt([
            {
                type: 'number',
                name: "user_num",
                message: chalk.magentaBright("Select any number between 1 - 10:"),
                // validate(user_num) {
                //                  if (isNaN(user_num)) {
                //                     return chalk.red("please enter a valid number not variable")
                //                  }
                // },
            }
        ]);
        //   console.log(  "", que.user_num  )
        if (que.user_num === randomNumber) {
            console.log(chalk.greenBright("Hurray you guess the right number"));
        }
        else if (que.user_num > randomNumber) {
            console.log(chalk.red(`your number is ${que.user_num} higher then random number`));
        }
        else if (que.user_num < randomNumber) {
            console.log(chalk.red(`your number is ${que.user_num} lower then random number`));
        }
    } while (playerLife > 0 && randomNumber !== que.user_num);
    if (playerLife == 0) {
        console.log(chalk.redBright("GAME OVER"));
    }
}
async function restartGame() {
    do {
        console.clear();
        await askQuestiont();
        var resgame = await inquirer.prompt([
            {
                type: 'input',
                name: 'start_again',
                message: chalk.cyanBright("Do you want to restart the game ? Press Y or N : ")
            }
        ]);
    } while (resgame.start_again === 'y' || resgame.start_again === 'Y' || resgame.start_again === 'yes' || resgame.start_again === 'YES' || resgame.start_again === 'Yes');
}
restartGame();
