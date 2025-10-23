import {
  MAX_NAME_LENGTH,
  MAX_NAMES_COUNT,
  NAME_FORMAT_REGEX,
  NAME_SEPARATOR_REGEX,
} from "../const/rule.js";
import { parseNames } from "./parse.js";

let instance;

export default class Validator {
  constructor() {
    if (instance) {
      return instance;
    }
    instance = this;
  }

  /**
   * @param {string} input
   */
  validateNames(input) {
    if (this.#isEmpty(input)) {
      throw new Error('[ERROR] 이름은 빈 값일 수 없습니다.');
    }
    if (this.#hasSpace(input)) {
      throw new Error('[ERROR] 이름에 공백이 포함될 수 없습니다.');
    }
    if (this.#hasInvalidSeparator(input)) {
      throw new Error('[ERROR] 이름에 잘못된 구분자가 포함되어 있습니다.');
    }

    const names = parseNames(input);
    if (this.#hasInvalidNameFormat(names)) {
      throw new Error('[ERROR] 잘못된 이름 양식입니다. 영문자, 한글의 조합만 가능합니다.');
    }
    if (!this.#isValidNameCount(names)) {
      throw new Error('[ERROR] 이름은 최대 10개까지 가능합니다.');
    }
    if (!this.#isValidNameLength(names)) {
      throw new Error('[ERROR] 각 이름은 최대 5자 이하만 가능합니다.');
    }
    if (this.#hasDuplicateName(names)) {
      throw new Error('[ERROR] 중복된 이름이 포함되어 있습니다.');
    }
    return true;
  }

  /**
   * @param {string} input
   */
  validateAttemptCount(input) {
  }

  // 빈 값
  #isEmpty(input) {
    return input === '' || input == null;
  }

  // 공백이 포함되었는지 검증
  #hasSpace(input) {
    return input.includes(' ');
  }

  #hasInvalidSeparator(input) {
    return NAME_SEPARATOR_REGEX.test(input);
  }

  #hasInvalidNameFormat(names) {
    const invalidName = names.some(name => !NAME_FORMAT_REGEX.test(name));
    return invalidName;
  }

  #isValidNameCount(names) {
    const invalidNameCount = names.length > MAX_NAMES_COUNT;
    return !invalidNameCount;
  }

  #isValidNameLength(names) {
    const invalidName = names.some(name => name.length > MAX_NAME_LENGTH);
    return !invalidName;
  }

  #hasDuplicateName(names) {
    const uniqueNames = new Set(names);
    return names.length !== uniqueNames.size;
  }
}
