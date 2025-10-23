import { Console } from "@woowacourse/mission-utils";
import { READ_ATTEMPT_COUNT_MESSAGE, READ_NAMES_MESSAGE } from "../const/input.js";
import { NAME_SEPARATOR } from "../const/rule.js";
import Validator from "../util/Validator.js";

export class InputView {
  async readPlayersName() {
    const input = await Console.readLineAsync(READ_NAMES_MESSAGE);
    const validator = new Validator();
    validator.validateNames(input);
    const names = input.split(NAME_SEPARATOR);
    return names;
  }

  async readAttemptCount() {
    const input = await Console.readLineAsync(READ_ATTEMPT_COUNT_MESSAGE);
    const validator = new Validator();
    validator.validateAttemptCount(input);
    const attemptCount = parseInt(input);
    return attemptCount;
  }
}
