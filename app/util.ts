class Util {
  static getInputValue(elementId: string): string {
    let inputElement: HTMLInputElement = <HTMLInputElement> document.getElementById(elementId);
    return inputElement.value;
  }
}
