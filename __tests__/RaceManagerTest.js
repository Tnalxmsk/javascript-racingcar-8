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

  test('레이스 단일 우승자 결정 테스트', () => {
    const raceManager = new RaceManager(5);
    const player1 = new Player('minsu');
    const player2 = new Player('javaji');
    const player3 = new Player('tong');
    const players = [player1, player2, player3];
    player1.move();
    player1.move();
    player2.move();
    const winners = raceManager.determineWinners(players);
    expect(winners.length).toBe(1);
    expect(winners[0].name).toBe('minsu');
  });

  test('레이스 공동 우승자 결정 테스트', () => {
    const raceManager = new RaceManager(5);
    const player1 = new Player('minsu');
    const player2 = new Player('javaji');
    const player3 = new Player('tong');
    const players = [player1, player2, player3];
    player1.move();
    player1.move();
    player2.move();
    player2.move();
    player3.move();
    const winners = raceManager.determineWinners(players);
    expect(winners.length).toBe(2);
    expect(winners[0].name).toBe('minsu');
    expect(winners[1].name).toBe('javaji');
  });
});
