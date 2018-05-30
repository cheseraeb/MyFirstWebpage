// *********************************************************
// Author : Cheserae Bidgood(Beukes)
//    Date : 30/05/2018  
// *********************************************************
function DOM(){
    var price_class = document.getElementsByClassName("cheese_info");
    console.log(price_class);
    var price_change = document.getElementsByTagName("span");
    console.log(price_change);
    price_change[4].innerHTML = "WAY TOO EXPENSIVE MAN!!!!!!";
}

//  DOM();