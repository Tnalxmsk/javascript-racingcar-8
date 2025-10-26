import { parseNames } from "./parse.js";
import { NAME_SEPARATOR } from "../const/rule.js";

const nameFormatRegex = /^[a-zA-Z가-힣]+$/;
const nameSeparatorRegex = /[^a-zA-Z가-힣,]/;
const maxNamesCount = 10;
const maxNameLength = 5;
const minAttemptCount = 1;
const maxAttemptCount = 99;
const radix = 10;
const emptyString = '';
const space = ' ';

export class Validator {
  /**
   * @param {string} input
   */
  static validateNames(input) {
    this.#validateEmptyValue(input);
    this.#validateNoSpace(input);
    this.#validateSeparator(input);

    const names = parseNames(input);
    this.#validateNameFormat(names);
    this.#validateNameCount(names);
    this.#validateNameLength(names);
    this.#validateNoDuplicateName(names);
  }

  /**
   * @param {string} input
   */
  static validateAttemptCount(input) {
    this.#validateEmptyValue(input);
    this.#validateNoSpace(input);
    this.#validateNatureNumber(input);
    this.#validateMaxAttemptCount(input);
  }

  static #validateEmptyValue(input) {
    if (input === emptyString || input == null) {
      throw new Error('[ERROR] 값이 비어있을 수 없습니다.');
    }
  }

  static #validateNoSpace(input) {
    if (input.includes(space)) {
      throw new Error('[ERROR] 공백이 포함될 수 없습니다.');
    }
  }

  static #validateSeparator(input) {
    if (nameSeparatorRegex.test(input)) {
      throw new Error(`[ERROR] 이름에 잘못된 구분자가 포함되어 있습니다. 올바른 구분자는 쉼표(${NAME_SEPARATOR})입니다.`);
    }
  }

  static #validateNameFormat(names) {
    if (names.some(name => !nameFormatRegex.test(name))) {
      throw new Error('[ERROR] 잘못된 이름 양식입니다. 영문자, 한글의 조합만 가능합니다.');
    }
  }

  static #validateNameCount(names) {
    if (names.length > maxNamesCount) {
      throw new Error(`[ERROR] 이름은 최대 ${maxNamesCount}개까지 가능합니다.`);
    }
  }

  static #validateNameLength(names) {
    const invalidName = names.some(name => name.length > maxNameLength);
    if (invalidName) {
      throw new Error(`[ERROR] 각 이름은 최대 ${maxNameLength}자 이하만 가능합니다.`);
    }
  }

  static #validateNoDuplicateName(names) {
    const uniqueNames = new Set(names);
    if (names.length !== uniqueNames.size) {
      throw new Error('[ERROR] 중복된 이름이 포함되어 있습니다.');
    }
  }

  static #validateNatureNumber(input) {
    if (!(Number.isInteger(+input) && input >= minAttemptCount)) {
      throw new Error(`[ERROR] 시도 횟수는 ${minAttemptCount}이상인 자연수여야 합니다.`);
    }
  }

  static #validateMaxAttemptCount(input) {
    if (parseInt(input, radix) > maxAttemptCount) {
      throw new Error(`[ERROR] 최대 ${maxAttemptCount}회까지 가능합니다.`);
    }
  }
}
