import { Console } from "@woowacourse/mission-utils";
import { READ_ATTEMPT_COUNT_MESSAGE, READ_NAMES_MESSAGE } from "../const/input.js";
import { Validator } from "../util/Validator.js";
import { parseNames } from "../util/parse.js";

export class InputView {
  async readPlayersName() {
    const input = await Console.readLineAsync(READ_NAMES_MESSAGE);
    Validator.validateNames(input);
    return parseNames(input);
  }

  async readAttemptCount() {
    const input = await Console.readLineAsync(READ_ATTEMPT_COUNT_MESSAGE);
    Validator.validateAttemptCount(input);
    return parseInt(input);
  }
}
