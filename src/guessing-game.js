class GuessingGame {
  constructor() {}

  setRange(min, max) {
    this.min = min;
    this.max = max;
  }

  guess() {
    this.part = Math.round((this.max + this.min) / 2);
    return this.part;
  }

  lower() {
    this.max = this.part;
  }

  greater() {
    this.min = this.part;
  }
}

module.exports = GuessingGame;
