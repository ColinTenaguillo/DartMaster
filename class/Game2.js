let Game = require("./Game");
let inquirer = require("inquirer");

class Game2 extends Game {
  constructor(nbPlayers, listNamePlayers) {
    super(nbPlayers, listNamePlayers);
    this.scores;
  }
  async play() {
    await inquirer.prompt().then();
  }
}

module.exports = Game2;
