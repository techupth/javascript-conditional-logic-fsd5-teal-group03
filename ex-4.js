//Exercise 4
// Switch Statement
let lightBulbStatus = "On";

//Start coding here
let lightBulbMessage;
switch (lightBulbStatus) {
    case "On" : 
        lightBulbMessage = "Light bulb is On.";
        break;
    case "Off" : 
        lightBulbMessage = "Light bulb is Off.";
        break;
    case "Broken" : 
        lightBulbMessage = "Light bulb is Broken.";
        break;
    default: 
        lightBulbMessage = "Please choose the correct input (On/Off/Broken)";
        break;
}

console.log(lightBulbMessage);