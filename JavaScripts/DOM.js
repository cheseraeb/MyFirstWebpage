// *********************************************************
// Author : Cheserae Bidgood(Beukes)
//    Date : 30/05/2018  
// *********************************************************
var price_class = document.getElementsByClassName("cheese_info");
var price_change = document.getElementsByTagName("span");

function DOMchange1() {
    Reset_all();
    console.log(price_class);
    console.log(price_change);
    price_change[0].innerHTML = "You are too cheap, try again";
};

function DOMchange2() {
    Reset_all();
    console.log(price_class);
    console.log(price_change);
    price_change[1].innerHTML = "Not there yet, keep going";
};

function DOMchange3() {
    Reset_all();
    console.log(price_class);
    console.log(price_change);
    price_change[2].innerHTML = "Almost, Almost there man";
};

function DOMchange4() {
    Reset_all();
    console.log(price_class);
    console.log(price_change);
    price_change[3].innerHTML = "THERE you go thats the perfect price";
};

function DOMchange5() {
    Reset_all();
    console.log(price_class);
    console.log(price_change);
    price_change[4].innerHTML = "WAY TOO EXPENSIVE MAN!!!!!!";
};


// Methods/ properties
function Reset_all(){
    price_change[0].innerHTML = "R50.00";
    price_change[1].innerHTML = "R60.00";
    price_change[2].innerHTML = "R70.00";
    price_change[3].innerHTML = "R80.00";
    price_change[4].innerHTML = "R90.00";
}