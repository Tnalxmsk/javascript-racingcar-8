import { MAX_RANDOM_NUMBER, MIN_MOVE_NUMBER, MIN_RANDOM_NUMBER } from "../const/rule.js";
import { Random } from "@woowacourse/mission-utils";

export class RaceManager {
  #currentCount = 0;
  #maxCount;

  /**
   * @param {number} maxCount
   * 최대 시도 횟수를 생성자의 파라미터로 전달 받습니다.
   */
  constructor(maxCount) {
    this.#maxCount = maxCount;
  }

  /**
   * @param {Player[]} players
   */
  race(players) {
    if (this.#currentCount >= this.#maxCount) {
      return;
    }
    players.forEach((player) => {
      const generatedNumber = Random.pickNumberInRange(MIN_RANDOM_NUMBER, MAX_RANDOM_NUMBER);
      if (generatedNumber >= MIN_MOVE_NUMBER) {
        player.move();
      }
    });
    this.#currentCount++;
  }


  /**
   * @param {Player[]} players
   * @returns {Player[]}
   */
  determineWinners(players) {
    const maxDistanceCount = Math.max(...players.map((player) => player.distanceCount));
    const winners = players.filter((player) => player.distanceCount === maxDistanceCount);
    return winners;
  }

  get currentCount() {
    return this.#currentCount;
  }

  get maxCount() {
    return this.#maxCount;
  }
}
