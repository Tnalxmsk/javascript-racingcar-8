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
   */
  start({ onStart, onRound }) {
    onStart();
    const maxCount = this.#gameManager.maxCount;
    for (let count = 0; count < maxCount; count++) {
      this.#gameManager.race(this.#players);
      onRound(this.#players);
    }
  }
}
