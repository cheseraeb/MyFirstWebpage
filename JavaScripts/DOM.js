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
    Reset_all2();
    console.log(price_class);
    console.log(price_change);
    price_change[4].innerHTML = "WAY TOO EXPENSIVE MAN!!!!!!";
};

// properties
// innerhtml will change the whole html
function Reset_Page(){
    var page = document.getElementsByTagName("body");
    page[0].innerHTML = '<h1 style="font-size: 20vw">YOU ARE NOW BROKE!!!!</h1>';
    change_style();
}
// Below will change only the text
function Reset_all(){
    price_change[0].innerText = "R50.00";
    price_change[1].innerText = "R60.00";
    price_change[2].innerText = "R70.00";
    price_change[3].innerText = "R80.00";
    price_change[4].innerText = "R90.00";
}
// Below is another specified way of changing text
function Reset_all2(){
    price_change[0].textContent = "R50.00";
    price_change[1].textContent = "R60.00";
    price_change[2].textContent = "R70.00";
    price_change[3].textContent = "R80.00";
    price_change[4].textContent = "R90.00";
}
// Accessing and changing attributes
function change_Attribute(){
    var link = document.getElementById("add");
    console.log(link.getAttribute("href"));
    link.setAttribute("class", "pie");
    link.setAttribute("alt", "hello");
    console.log(link.getAttribute("alt"));
    
}
// change styles
function change_style(){
    var change_style1 = document.getElementsByTagName("body");
    console.log(change_style1);
    change_style1[0].setAttribute("style", " background-color: red");
    
}