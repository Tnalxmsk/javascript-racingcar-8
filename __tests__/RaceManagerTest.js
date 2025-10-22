import { Player } from "../src/model/Player.js";
import { RaceManager } from "../src/model/RaceManager.js";

describe('RaceManager', () => {
  test('레이스 횟수 기능 테스트', () => {
    const raceManager = new RaceManager(5);
    const player1 = new Player('minsu');
    const player2 = new Player('javaji');
    const players = [player1, player2];

    for (let i = 0; i < 5; i++) {
      raceManager.race(players);
    }

    expect(raceManager.currentCount).toBe(5);
    expect(raceManager.maxCount).toBe(5);
  });
});
