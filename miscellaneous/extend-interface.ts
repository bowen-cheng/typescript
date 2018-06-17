interface Person {
  name: string;
}

interface Driver extends Person {
  // Driver type also has property 'name' which is inherited from 'Person'
  car: string;
  printInfo: () => void;
}
