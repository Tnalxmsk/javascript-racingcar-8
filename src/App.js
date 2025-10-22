import RacingGameApp from "./app/RacingGameApp.js";

class App {
  async run() {
    const racingGameApp = new RacingGameApp();
    await racingGameApp.start();
  }
}

export default App;
