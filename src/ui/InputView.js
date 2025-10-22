import { Console } from "@woowacourse/mission-utils";
import { READ_NAMES_MESSAGE } from "../const/input.js";

export class InputView {
  readPlayersName() {
    const input = Console.readLineAsync(READ_NAMES_MESSAGE);
    const names = input.split(',');
    return names;
  }
}
