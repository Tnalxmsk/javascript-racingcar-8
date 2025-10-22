export class Player {
  #name;
  #distanceCount = 0;

  constructor(name) {
    this.#name = name;
  }

  move(distance) {
    this.#distanceCount += distance;
  }

  get distanceCount() {
    return this.#distanceCount;
  }

  get name() {
    return this.#name;
  }
}
