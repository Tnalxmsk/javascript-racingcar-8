import { Random } from "@woowacourse/mission-utils";
import { MAX_RANDOM_NUMBER, MIN_RANDOM_NUMBER } from "../const/rule.js";

let instance;

export default class RandomNumberGenerator {
  constructor() {
    if (instance) {
      return instance;
    }
    instance = this;
  }

  generate() {
    const generatedNumber = Random.pickNumberInRange(MIN_RANDOM_NUMBER, MAX_RANDOM_NUMBER);
    if (generatedNumber < MIN_RANDOM_NUMBER || generatedNumber > MAX_RANDOM_NUMBER) {
      throw Error("[ERROR] 난수는 0과 9사이 값입니다.");
    }
    return generatedNumber;
  }
}
