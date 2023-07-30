export default class Team {
  constructor() {
    this.members = new Set();
  }

  add(character) {
    if (this.members.has(character)) {
      throw new Error('Игрок уже добавлен');
    }
    this.members.add(character);
  }

  addAll(...characters) {
    characters.forEach((character) => {
      this.members.add(character);
    });
  }

  toArray() {
    return Array.from(this.members);
  }

  [Symbol.iterator]() {
    const chars = this.toArray();
    let index = 0;
    return {
      next() {
        if (index < chars.length) {
          return {
            value: chars[index++], // eslint-disable-line
            done: false,
          };
        }
        return {
          done: true,
        };
      },
    };
  }
}
