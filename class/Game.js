let Player = require("./Player");

class Game {
  constructor(nbPlayers, listNamePlayers) {
    console.log(listNamePlayers);
    this.nbPlayers = nbPlayers;
    this.Players = listNamePlayers.map(element => {
      return new Player(element);
    });
  }
}

module.exports = Game;
