abstract class Machine {
  protected constructor(protected gas: string) {
    // this class cannot be instantiated
    console.log('Machine constructor called');
  }

  abstract printInfo(): void;
}

class Car extends Machine {

  static NumOfWheels: number = 4;

  private _make: string = '';

  constructor(private _model: string = 'Lancer', private _year?: number) {
    // This constructor declares model
    super('gasoline');
  }

  set make(value: string) {
    console.log('Setting make');
    this._make = value;
  }

  get make(): string {
    console.log('Getting make');
    return this._make;
  }

  get model(): string {
    console.log('Getting model');
    return this._model;
  }

  set year(value: number | undefined) {
    console.log('Setting year');
    this._year = value;
  }

  get year(): number | undefined {
    console.log('Getting year');
    return this._year;
  }

  /**
   * This method overrides the one in Machine class
   */
  printInfo(): void {
    console.log(
        `Vehicle Info:
make: ${object.make},
model: ${object.model},
year: ${object.year},
gas type: ${object.gas},
wheels: ${Car.NumOfWheels}`
    );
  }
}

let machine: Machine; // works
// machine = new Machine(); // doesn't work
machine = new Car(); // works
// machine.printInfo(); // this calls the implementation in the Car class

console.log('****************************************');

let object: Car = new Car();

console.log('about to set make');
object.make = 'Mitsubishi'; // calling setter

console.log('about to set year');
object.year = 2018; // calling setter

console.log('about to print info');
object.printInfo();
