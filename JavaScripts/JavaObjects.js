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
