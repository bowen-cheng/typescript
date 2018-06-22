/**
 * Function overloading:
 * First, define different variants of the function to be overloaded
 * Then, define the actual implementation of the overloaded function
 */
function logger(value: boolean): void;
function logger(value: string): void;
function logger(value: any): void {
  if (typeof value == 'boolean') {
    console.log('Given value is boolean type');
  }
  if (typeof value == 'string') {
    console.log('Given value is string type');
  }
}
