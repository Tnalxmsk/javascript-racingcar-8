import { NAME_SEPARATOR } from "../const/rule.js";

/**
 * @param {string} str - 이름에 대한 입력 값을 인자로 전달 받습니다.
 */
export const parseNames = (str) => str.split(NAME_SEPARATOR);
