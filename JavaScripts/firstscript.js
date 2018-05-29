// *********************************************************
// Author : Cheserae Bidgood(Beukes)
//    Date : 28/05/2018  
// *********************************************************

// Basic Syntax and structure for JAVAScript
// Rule 1. CASE SENSATIVE
// Rule 2. most things in Java is statements and each end in a semi colon
// Rule 3. Add comments
// Rule 4. Script runs from top to bottom

// Variables************************************************
// Dont have to specify variable types
// String
var myStringVariable_1;
// Number
var myNumberVariable_1;
// Boolean
var myBooleanVariable_1;
var myBooleanVariable_2;
// Array
var myArrayVariable_1;
// *********************************************************
// document.write (Writes to the web page)
// console.log (writes to the console)
// {} is called a code block
myBooleanVariable_1 = true;
myNumberVariable_1 = 10;

if (myBooleanVariable_1){
    document.write("CHEEEEEEEEEEEEZZZZZZZZZZZZZZEEEEEEEEEE!!!!!!!!!!!");
} else{
    document.write("Hello Motto!!")
}
if (myNumberVariable_1 > 9){
    document.write("Hellow Cheeze!!!");
} else{
    document.write("leave me alone")
}

myBooleanVariable_2 = false;

if (!(myBooleanVariable_2)){
    document.write("Hellow me");

} else if (myBooleanVariable_1){
    document.write("Hello you!");

} else {
    document.write("Hello US!!!!");

}
// Logical operators
if (myBooleanVariable_1 && /*stands for AND*/ myBooleanVariable_2){
    document.write("Hellow cheeze!!");
} else{
    document.write("Get Lost")
}

if (myBooleanVariable_1 || /*stands for or*/ myBooleanVariable_2){
    document.write("Hellow cheeze!!");
} else{
    document.write("Get Lost");
}
// Loops !!!!!!!!!!!!!**********************************************
// While Loop
while (myNumberVariable_1 < 20){
    console.log("what the hell 1");
    myNumberVariable_1++ ;
}
document.write("ello");
// For Loops

for (myNumberVariable_1 = 1; myNumberVariable_1 <= 20; myNumberVariable_1++)
{
    console.log("what the hell");
}
document.write("ello");

var links = document.getElementsByTagName("a");

for (index = 1; index < links.length; index++ ) {
    console.log(
        "This is link number " + index
    ) ;
    
}
document.write(" You have " + index + " Links on your page");