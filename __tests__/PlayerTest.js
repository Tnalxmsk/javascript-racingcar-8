import { Player } from "../src/model/Player.js";

describe('Player', () => {
  test('기능 테스트', () => {
    const player = new Player('minsu');
    player.move();
    player.move();

    expect(player.distanceCount).toBe(2);
  });
});
