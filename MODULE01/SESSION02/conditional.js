var age = 12;
// selalu bernilai boolean, biasanya statementnya menggunakan operator perbandingan
console.log(age >= 17); // false
if (age >= 17) {
    console.log("You have an ID.");
}
else {
    console.log("You don't have an ID.");
}
var trafficLight = "yellow";
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
// console.log(trafficLight === "red"); // true
// console.log(trafficLight === "yellow"); // false
// console.log(trafficLight === "green"); // false
// console.log(trafficLight === "blue"); // false
// keyword dibandungkan dngan case 
switch (trafficLight) {
    case "red": // trafficLight == "red"
        console.log("Stop");
        console.log("You must wait for the light to turn green.");
        break;
    case "yellow": // trafficLight == "yellow"
        console.log("Caution");
        console.log("Prepare to stop or go, depending on the situation.");
    case "green": // trafficLight == "green"
        console.log("Go");
        console.log("You can proceed through the intersection.");
        break;
    default:
        console.log("Invalid traffic light color");
        console.log("Please check the traffic light.");
        break;
}
var fruit = "mangoes";
switch (fruit) {
    case "apples":
        console.log("You selected apples.");
        break;
    case "bananas":
        console.log("You selected bananas.");
        break;
    case "mangoes":
    case "papayas":
        console.log("You selected mangoes or papayas.");
        break;
    default:
        console.log("Unknown fruit.");
        break;
}
