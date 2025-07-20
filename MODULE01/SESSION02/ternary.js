var age = 12;
// selalu bernilai boolean, biasanya statementnya menggunakan operator perbandingan
// console.log(age >= 17); // false
// if (age >= 17) {
//     console.log("You have an ID.");
// }
// else {
//     console.log("You don't have an ID.");
// }
// let res: string = 
console.log(age >= 17 ? "You have an ID." : "You don't have an ID.");
var trafficLight = "green";
if (trafficLight === "red") {
    console.log("Stop");
    console.log("You must wait for the light to turn green.");
}
else if (trafficLight === "yellow") {
    console.log("Caution");
    console.log("Prepare to stop or go, depending on the situation.");
}
else if (trafficLight === "green") {
    console.log("Go");
    console.log("You can proceed through the intersection.");
}
else {
    console.log("Invalid traffic light color");
    console.log("Please check the traffic light.");
}
console.log(trafficLight == "red" ? "Stop" : trafficLight == "yellow" ? "Caution" : trafficLight == "green" ? "go" : "Invalid traffic light color");
console.log(!(5 > 3) && "Comment Show here");
console.log((5 > 3) && "Comment Show here");
console.log(!(5 > 3) || 0);
console.log((5 > 3) || 0);
