import { Validator } from "../src/util/Validator.js";

describe('Validation', () => {
  test('예외 테스트 - 입력 값이 빈 값이면 에러를 던진다.', () => {
    const name = '';

    expect(() => {
      Validator.validateNames(name);
    }).toThrow('[ERROR]');
  });

  test('예외 테스트 - 입력 값에 공백이 포함되면 에러를 던진다.', () => {
    const name = 'minsu, jai ';

    expect(() => {
      Validator.validateNames(name);
    }).toThrow('[ERROR]');
  });

  test('예외 테스트 - 잘못된 구분자를 입력했을 시 에러를 던진다.', () => {
    const name = 'minsu;jav,aaa';
    expect(() => {
      Validator.validateNames(name);
    }).toThrow('[ERROR]');
  });

  test('예외 테스트 - 이름 형식이 올바르지 않을 경우 에러를 던진다.', () => {
    const name = 'miㅁㅁ,java';
    expect(() => {
      Validator.validateNames(name);
    }).toThrow('[ERROR]');
  });

  test('예외 테스트 - 이름 길이가 5자를 초과할 경우 에러를 던진다.', () => {
    const name = 'minsu,javaji,tong,minsu';
    expect(() => {
      Validator.validateNames(name);
    }).toThrow('[ERROR]');
  });

  test('예외 테스트 - 중복된 이름이 있을 경우 에러를 던진다.', () => {
    const name = 'minsu,javi,tong,minsu';
    expect(() => {
      Validator.validateNames(name);
    }).toThrow('[ERROR]');
  });

  test('예외 테스트 - 참가자의 수가 11명 이상일 경우 에러를 던진다.', () => {
    const name = 'a,b,c,d,e,f,g,h,i,k,z';
    expect(() => {
      Validator.validateNames(name);
    }).toThrow('[ERROR]');
  });

  test('예외 테스트 - 시도 횟수가 0보다 작을 경우 에러를 던진다.', () => {
    const attemptCount = '0';
    expect(() => {
      Validator.validateAttemptCount(attemptCount);
    }).toThrow('[ERROR]');
  });

  test('예외 테스트 - 시도 횟수가 숫자 값이 아닐 경우 에러를 던진다.', () => {
    const attemptCount = 'a';
    expect(() => {
      Validator.validateAttemptCount(attemptCount);
    }).toThrow('[ERROR]');
  });

  test('예외 테스트 - 시도 횟수를 100회 이상 입력할 경우 에러를 던진다.', () => {
    const attemptCount = '100';
    expect(() => {
      Validator.validateAttemptCount(attemptCount);
    }).toThrow('[ERROR]');
  });
});
