//"Document" type is referenced from lib.d.ts, which is referenced by default
declare var document: Document;
document.title = "Hello";

// Imports typing from jquery.d.ts file
///<reference path="jquery.d.ts"/>
declare  let $;
$('div').text("Hello");
