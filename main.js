let Game1 = require("./class/Game1");
let Game2 = require("./class/Game2");
let Game3 = require("./class/Game3");
let inquirer = require("inquirer");

let nbPlayers = 0;
let gameType;
let listPlayers = [];
let Game;

async function main() {
  await inquirer
    .prompt([
      {
        type: "input",
        name: "nbPlayers",
        message: "Number of players :",
        validate: function(value) {
          if (value < 2 || isNaN(value)) {
            return "Please enter a valid number";
          } else {
            return true;
          }
        }
      },
      {
        type: "list",
        name: "gameType",
        message: "Type de partie :",
        choices: ["Le tour du monde", "Le 301", "Le Cricket"]
      }
    ])
    .then(async answers => {
      nbPlayers = answers.nbPlayers;
      gameType = answers.gameType;

      let questions = [];
      let newQuestion;

      for (let i = 1; i <= nbPlayers; i++) {
        newQuestion = {
          type: "input",
          name: `player${i}`,
          message: `Name of Player ${i} :`
        };
        questions.push(newQuestion);
      }

      await inquirer.prompt(questions).then(answers => {
        for (let i = 1; i <= nbPlayers; i++) {
          listPlayers.push(answers[`player${i}`]);
        }
      });
      console.log(listPlayers);
      if (gameType === "Le tour du monde") {
        Game = new Game1(nbPlayers, listPlayers);
      } else if (gameType === "Le 310") {
        Game = new Game2(nbPlayers, listPlayers);
      } else if (gameType === "Le Cricket") {
        Game = new Game3(nbPlayers, listPlayers);
      }
    });
  Game.play();
}

main();
