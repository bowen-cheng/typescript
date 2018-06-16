export interface Person {
  name: string;
  age?: number; // this field is optional
  formatName: () => string; // A function that takes no parameters and returns a string
}
