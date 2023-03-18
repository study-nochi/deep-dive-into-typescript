import { Data } from "./types/data";

declare const myGlobalValue: string;
console.log(myGlobalValue);

export function logWindowVersion() {
  console.log(`Window version is: ${window.myVersion}`);
  window.alert("Built-in window type still work! Hooray!");
}

function logData(data: Data) {
  console.log(`Data version is: ${data.version}`);
}

logData(globallyDeclared);
