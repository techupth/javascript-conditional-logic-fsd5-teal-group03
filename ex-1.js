//Exercise 1
let lightBulbStatus = "On";

// Start coding here.
const checkLightBulbStatus = status => {
    if (status === "On") {
        return "Light bulb is On.";
    } else {
        return "Light bulb is Off.";
    }
}

const lightBulbMessage = checkLightBulbStatus(lightBulbStatus);
console.log(lightBulbMessage);