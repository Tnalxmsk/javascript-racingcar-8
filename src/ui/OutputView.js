import { Console } from "@woowacourse/mission-utils";
import { DISTANCE_FORMAT, RACE_START_MESSAGE, RACE_WINNER_MESSAGE } from "../const/output.js";

export class OutputView {

  printRaceStart() {
    Console.print(RACE_START_MESSAGE);
  }

  /**
   * @param {Player[]} players
   */
  printRoundResult(players) {
    players.forEach((player) => {
      const { name, distanceCount } = player;
      Console.print(`${name} : ${DISTANCE_FORMAT.repeat(distanceCount)}`);
    });
    console.log();
  }

  printRaceWinners(winnersName) {
    Console.print(`${RACE_WINNER_MESSAGE}${winnersName}`);
  }
}
