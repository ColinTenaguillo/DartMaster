let Game = require("./Game");
let inquirer = require("inquirer");

class Game1 extends Game {
  constructor(nbPlayers, listNamePlayers) {
    super(nbPlayers, listNamePlayers);
    this.scores;
  }
  async play() {
    while (20 !== this.scores.find(el => el === 20)) {
      await this.Players.forEach(async element => {
        await inquirer
          .prompt({
            type: "input",
            name: "score",
            message: `Secteur touché pour : ${element}`
          })
          .then();
      });
    }
  }
}

module.exports = Game1;
