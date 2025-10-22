import { RaceGame } from "../model/RaceGame.js";
import { InputView } from "../ui/InputView.js";
import { Player } from "../model/Player.js";
import { RaceManager } from "../model/RaceManager.js";

let instance;

export default class RacingGameApp {
  constructor() {
    if (instance) {
      return instance;
    }
    instance = this;
  }

  async start() {
    await this.run();
  }

  async run() {
    const raceGame = new RaceGame();
    const inputView = new InputView();
    const names = await inputView.readPlayersName();
    const players = names.map((name) => new Player(name));
    const maxCount = await inputView.readAttemptCount();
    const raceManager = new RaceManager(maxCount);

    raceGame.registerPlayers(players);
    raceGame.registerGameManager(raceManager);
  }
}
