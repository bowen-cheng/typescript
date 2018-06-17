interface myLoggerType {
  (value: string) : void;
}

let logger1: myLoggerType = (value: string) => console.log(value);
let logger2: myLoggerType = (value: string) => console.log(value + "1");

logger1("Output");
logger2("Output");
