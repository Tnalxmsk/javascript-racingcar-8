export class Player {
  #name;
  #distanceCount = 0;

  /**
   * @param {string} name
   */
  constructor(name) {
    this.#name = name;
  }

  move() {
    this.#distanceCount++;
  }

  get distanceCount() {
    return this.#distanceCount;
  }

  get name() {
    return this.#name;
  }
}
