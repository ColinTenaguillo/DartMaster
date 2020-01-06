class Player {
  constructor(name) {
    this.name = name;
    this.score = 0;
  }

  updateScore(value, operator) {
    if (operator === "-") {
      this.score -= value;
    } else if (operator === "+") {
      this.score += value;
    }
  }
}

module.exports = Player;
