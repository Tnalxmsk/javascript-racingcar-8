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
}
