//Exercise 3
// Ternary Operator
let lightBulbStatus = "Off";

//Start coding here

let message =
  lightBulbStatus == "On"
    ? "Light bulb is On."
    : lightBulbStatus == "Off"
    ? "lLight bulb is Off."
    : "Please choose the correct input (On/Off)";

console.log(message);
