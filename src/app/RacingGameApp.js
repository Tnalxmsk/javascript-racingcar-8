import { RaceGame } from "../model/RaceGame.js";
import { InputView } from "../ui/InputView.js";
import { Player } from "../model/Player.js";

let instance;

export default class RacingGameApp {
  constructor() {
    if (instance) {
      return instance;
    }
    instance = this;
  }

  start() {
    this.run();
  }

  run() {
    const raceGame = new RaceGame();
    const inputView = new InputView();
    const players = inputView.readPlayersName().map((name) => new Player(name));


    raceGame.registerPlayers(players);

  }
}
