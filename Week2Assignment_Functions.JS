function userProfile (name){
    console.log("Hello" + " " +  name ); //named function
}
userProfile ("Srividhya"); 

const double = (num) => {return num * num }; //Arrow Function
console.log(double(25));

let greet =function (setTimeout, delay) {
    console.log ("This messaged is delayed by 2 seconds"); //Anonymous Function and assigned to variable greet
}
setTimeout(greet, 2000); //Delay of 2 seconds in milliseconds

function getUserdata (callback) {
setTimeout(() => {console.log ("Callback Function");}, 2000); //Delay of 2 seconds in milliseconds
}
getUserdata();
