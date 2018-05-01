///<reference path="person.ts"/>

class Player implements Person {
  name: string = '';
  age: number = 4;

  formatName() {
    return this.name.toUpperCase();
  }
}
