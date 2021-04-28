export default class Team {
  constructor() {
    this.members = new Set();
  }

  add(character) {
    if (!this.members.has(character)) {
      this.members.add(character);
    } else {
      throw new Error('Персонаж уже в команде!');
    }
  }

  addAll(...allCharacter) {
    allCharacter.forEach((character) => {
      this.members.add(character);
    });
  }

  toArray() {
    return [...this.members];
  }
}