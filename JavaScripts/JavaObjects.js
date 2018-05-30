// *********************************************************
// Author : Cheserae Bidgood(Beukes)
//    Date : 28/05/2018  
// *********************************************************

// Objects**************************************************
var show_string = document.getElementById("Hello");
var string_1 = 'Hello Cheeze My Friend';
show_string.innerHTML = string_1;

// new object from scratch

var car = new Object();
car.maxSpeed = 50; /*assigning properties to the new object*/
car.driver = "Cheserae";
console.log(car);
car.drive = function () { /*assining a new method to the new object*/
    console.log("Driving");
};
car.drive();

// Short hand
var car2 = {
    maxspeed: 70,
    driver: "cheserae",
    Driving: function (speed, time) {
        console.log(speed * time);
    },
    test: function () {
        console.log(this);

    }
};
var car3 = {
    maxspeed: 90,
    driver: "CHEEZE",
    Driving: function (speed, time) {
        console.log(speed * time);
    },
    test: function () {
        console.log(this);/*keyword THIS references the object locally*/

    },
    logDriver: function() {
        console.log("the driver of this vehicle is " + this.driver);
        
    }
};

console.log(car2);
car2.Driving(50, 3);
car3.Driving(50, 2);
car2.test();
car3.test();
car3.logDriver();
// Constructor function
var array1 = new Array();/*this is an array constructor*/
var string1 = new String();/*this is a string constructor*/
var Car = function(maxspeed, driver){ /*this will create a constructor function*/

    this.maxspeed = maxspeed;
    this.driver = driver;
    this.drive = function (speed, time) {
        console.log(speed * time);
    };
    this.logDriver = function() {
        console.log("the driver of this vehicle is " + this.driver);
    };
}
var car4 = new Car(100, "Chesterfield1");
var car5 = new Car(90, "Chesterfield2");
var car6 = new Car(80, "Chesterfield3");
var car7 = new Car(70, "Chesterfield4");

car4.drive(30,2);
car5.drive(40,3);
car6.drive(50,4);
car7.drive(60,5);

car4.logDriver();
car5.logDriver();
car6.logDriver();
car7.logDriver();
// Date Object
var current_date = new Date();
console.log(current_date);
var past_date = new Date(2008,10,15,12,12,59);
var future_date = new Date(2028,11,1,11,59,10);
console.log(past_date);
console.log(future_date);

var birthday = new Date(1986,06,07,12,35,10);
var birthday2 = new Date(1986,06,07,12,35,10);
console.log(birthday.getMonth());
console.log(birthday.getFullYear());
console.log(birthday.getDate());
console.log(birthday.getDay());
console.log(birthday.getHours());
console.log(birthday.getTime());
console.log(birthday.getTimezoneOffset());
console.log(birthday.getMinutes());
console.log(birthday.getSeconds());

if(birthday == birthday2){
    console.log("Its the same birthday");
}else{
    console.log("Birthdays are not equal");
}
if(birthday.getTime() == birthday2.getTime()){
    console.log("Its the same birthday");
}else{
    console.log("Birthdays are not equal");
}