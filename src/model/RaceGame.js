export class RaceGame {
  #players;
  #gameManager;

  /**
   * @param {Player[]} players
   */
  registerPlayers(players) {
    if (players.length < 1) {
      return;
    }
    this.#players = players;
  }

  /**
   * @param {RaceManager} gameManager
   */
  registerGameManager(gameManager) {
    if (!gameManager) {
      return;
    }
    this.#gameManager = gameManager;
  }

  /**
   * @param {{onStart: () => void, onRound: (players: Player[]) => void}} callback { onStart: () => void, onRound: (players: Player[]) => void }
   * 게임을 시작하고 라운드 진행 결과 출력을 위한 콜백함수를 전달 받습니다.
   */
  start({ onStart, onRound }) {
    onStart();
    const maxCount = this.#gameManager.maxCount;
    for (let count = 0; count < maxCount; count++) {
      this.#gameManager.race(this.#players);
      onRound(this.#players);
    }
  }

  /**
   * @param {{onEnd: (winnersName: string) => void}} callback { onEnd: (winnersName: string) => void }
   */
  finish({ onEnd }) {
    const winners = this.#gameManager.determineWinners(this.#players);
    const winnersName = winners.map((winner) => winner.name).join(', ');
    onEnd(winnersName);
  }
}
