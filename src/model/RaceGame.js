export class RaceGame {
  #players;
  #gameManager;

  registerPlayers(players) {
    if (players.length < 1) {
      return;
    }
    this.#players = players;
  }
}
