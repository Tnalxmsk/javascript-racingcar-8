import RandomNumberGenerator from "../util/RandomNumberGenerator.js";
import { MIN_MOVE_NUMBER } from "../const/rule.js";

export class RaceManager {
  #currentCount = 0;
  #maxCount;

  constructor(maxCount) {
    this.#maxCount = maxCount;
  }

  race(players) {
    if (this.#currentCount >= this.#maxCount) {
      return;
    }
    players.forEach((player) => {
      const generatedNumber = new RandomNumberGenerator().generate();
      if (generatedNumber >= MIN_MOVE_NUMBER) {
        player.move();
      }
    });
    this.#currentCount++;
  }

  get currentCount() {
    return this.#currentCount;
  }

  get maxCount() {
    return this.#maxCount;
  }
}
