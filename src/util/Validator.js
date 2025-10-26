import { parseNames } from "./parse.js";
import { ERROR_TYPES, throwError } from "./error.js";

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
      throwError(ERROR_TYPES.EMPTY_VALUE);
    }
  }

  static #validateNoSpace(input) {
    if (input.includes(space)) {
      throwError(ERROR_TYPES.CONTAINS_SPACE);
    }
  }

  static #validateSeparator(input) {
    if (nameSeparatorRegex.test(input)) {
      throwError(ERROR_TYPES.INVALID_SEPARATOR);
    }
  }

  static #validateNameFormat(names) {
    if (names.some(name => !nameFormatRegex.test(name))) {
      throwError(ERROR_TYPES.INVALID_NAME_FORMAT);
    }
  }

  static #validateNameCount(names) {
    if (names.length > maxNamesCount) {
      throwError(ERROR_TYPES.TOO_MANY_NAMES);
    }
  }

  static #validateNameLength(names) {
    const invalidName = names.some(name => name.length > maxNameLength);
    if (invalidName) {
      throwError(ERROR_TYPES.NAME_TOO_LONG);
    }
  }

  static #validateNoDuplicateName(names) {
    const uniqueNames = new Set(names);
    if (names.length !== uniqueNames.size) {
      throwError(ERROR_TYPES.DUPLICATE_NAME);
    }
  }

  static #validateNatureNumber(input) {
    if (!(Number.isInteger(+input) && input >= minAttemptCount)) {
      throwError(ERROR_TYPES.INVALID_ATTEMPT_COUNT);
    }
  }

  static #validateMaxAttemptCount(input) {
    if (parseInt(input, radix) > maxAttemptCount) {
      throwError(ERROR_TYPES.MAX_ATTEMPT_EXCEEDED);
    }
  }
}
