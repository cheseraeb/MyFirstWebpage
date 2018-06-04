// *********************************************************
// Author : Cheserae Bidgood(Beukes)
//    Date : 30/05/2018  
// *********************************************************
var price_class = document.getElementsByClassName("cheese_info");
// var price_change = document.getElementsByTagName("span");
var priceSection = document.getElementById("cheese_info")
.getElementsByTagName("div")[0];/*define parent via ID then the child via a tag which 
will hold multiple elemets and specify the first element or any other element number
you wish to target*/
var remove_span = priceSection.getElementsByTagName("span");


function DOMchange1() {
    // Reset_all();
    var price_change = document.createElement("p");
    priceSection.appendChild(price_change)
    price_change.innerHTML = "You are too cheap, try again";
    priceSection.removeChild(remove_span[0]);
    addPrice1();
};

function DOMchange2() {
    // Reset_all();
    var price_change = document.createElement("p");
    priceSection.removeChild(remove_span[0]);
    priceSection.appendChild(price_change)
    price_change.innerHTML = "You can do better then that?";
    addPrice2();
};

function DOMchange3() {
    // Reset_all();
    var price_change = document.createElement("p");
    priceSection.removeChild(remove_span[0]);
    priceSection.appendChild(price_change)
    price_change.innerHTML = "Keep going, you are almost there";
    addPrice3();
};

function DOMchange4() {
    // Reset_all();
    var price_change = document.createElement("p");
    priceSection.removeChild(remove_span[0]);
    priceSection.appendChild(price_change)
    price_change.innerHTML = "Almost.....ALMOST! 1 more";
    addPrice4();
};

function DOMchange5() {
    // Reset_all2();
    var price_change = document.createElement("p");
    priceSection.removeChild(remove_span[0]);
    priceSection.appendChild(price_change)
    price_change.innerHTML = "THERE you go thats the perfect price";

    setTimeout(function(){addPrice6()}, 2000) ;
};
function DOMchange6() {
    // Reset_all2();
    // price_change[6].innerHTML = '<br> alert("ARE YOU FREE OR ARE YOU DOOOOOOMMM!!!")';
    alert("ARE YOU FREE...OR ARE YOU DOOOOOOOOMMM!!!!!!");
    priceSection.removeChild(remove_span[0]);

    addPrice5();
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
// Adding more elements
function addPrice1(){
    var newPrice = document.createElement("span");/*define the newtag/element*/
    // var old_attribute = document.getElementsByTagName("span")[0];
    // old_attribute.setAttribute("onclick", "");
    priceSection.appendChild(newPrice);
    newPrice.innerHTML ="R60.00";
    newPrice.setAttribute("onclick", "DOMchange2()") 
}
function addPrice2(){
    var newPrice = document.createElement("span");/*define the newtag/element*/
    priceSection.appendChild(newPrice);
    newPrice.innerHTML ="R70.00";
    newPrice.setAttribute("onclick", "DOMchange3()") 
}
function addPrice3(){
    var newPrice = document.createElement("span");/*define the newtag/element*/
    priceSection.appendChild(newPrice);
    newPrice.innerHTML ="R80.00";
    newPrice.setAttribute("onclick", "DOMchange4()") 
}
function addPrice4(){
    var newPrice = document.createElement("span");/*define the newtag/element*/
    priceSection.appendChild(newPrice);
    newPrice.innerHTML ="R90.00";
    newPrice.setAttribute("onclick", "DOMchange5()") 
}
function addPrice5(){
    var newPrice = document.createElement("span");/*define the newtag/element*/

    priceSection.appendChild(newPrice);
    newPrice.innerHTML ="Super Duper Secret Special Price";
    priceSection.insertBefore(newPrice, priceSection.getElementsByTagName("span")[0])
    newPrice.setAttribute("onclick", "Reset_Page()") 
    remove_Element();
}
function addPrice6(){
    
    var newPrice = document.createElement("span");/*define the newtag/element*/
    // var priceSection = document.getElementById("cheese_info")
    priceSection.innerHTML = '<span onclick="DOMchange6()">Forget all of the above,'+
    ' click here if you want it free</span>' ;
    // priceSection.appendChild(newPrice);
    // newPrice.innerHTML ="<br> Forget all of the above," +
    //  " click here if you want it free";
    // priceSection.setAttribute("onclick", "DOMchange6()") 
}
// Removing elements
function remove_Element() {
    var parent_nav = document.getElementById("wrapper")
    .getElementsByTagName("ul")[0];

    var child_nav = parent_nav.getElementsByTagName("li")[2];
    parent_nav.removeChild(child_nav);
}
// Java script events
function change_navigation(index){
    var navigation_links = document.getElementById("wrapper").
    getElementsByTagName("ul")[0];
    if (index === undefined){
        index = 0;
    }
    var link = navigation_links.getElementsByTagName("li")[index];
    var link_next = navigation_links.getElementsByTagName("li")[index + 1];
    link.onclick = function(){
        alert("you clicked me");
    }
    link_next.onmouseover = function(){
        alert("You hovered over me");
    }

}
change_navigation(0);
// more definite and in depth events
function onclick_event(){
    
}
