// *********************************************************
// Author : Cheserae Bidgood(Beukes)
//    Date : 28/05/2018  
// *********************************************************

// Basic Syntax and structure for JAVAScript
// Rule 1. CASE SENSATIVE
// Rule 2. most things in Java is statements and each end in a semi colon
// Rule 3. Add comments
// Rule 4. Script runs from top to bottom

// Functions
function myfirstJS(){
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

// Break and Continue**********************************************
    for (i = 1; i < 10; i++) {

       if(i===5 || i===3){
           continue; /*leaves the loop to go back up to the start of the loop*/
       } 
        console.log(i); 

        if(i===7){
            // alert("You have reached seven")   
            break;/*break completely out of the loop*/
        }
    }
// Practical example**********************************************
    var link2 = document.getElementsByTagName("a");

    for (index2 = 0; index2 < link2.length; index2++) {
        
        link2[index2].className = "links-" + index2;
    }
}
// more functions************************************************
function getAvarage(a,b){
    var avarage = (a + b) / 2; /*local variable*/
    console.log(avarage);
    return avarage;
}

// Working with numbers
var avarage_result = getAvarage(9,18); /*global variable*/

console.log(avarage_result);
console.log(typeof(avarage_result));
avarage_result = Math.round(avarage_result);
console.log(avarage_result);
avarage_result = avarage_result + "0";/*this will convert it to a string*/
console.log(avarage_result);
console.log(typeof(avarage_result));
avarage_result = avarage_result + 1;/*this will not convert it to a number*/
console.log(avarage_result);
console.log(typeof(avarage_result));
avarage_result = Math.round(avarage_result);/*this will round it and change it back to a number*/
console.log(avarage_result);
console.log(typeof(avarage_result));

// NaN - Not a number

function checkNaN(){
    var a = 6;
    var b = 6;

    if(isNaN(a)){
        console.log("NOT A BLADY NUMBER!!!!")     
    } else{
        console.log(a * b);
    }
}
checkNaN();
// Strings
function strings(){
    var string = "I am a string";
    var string2 = 'I\'m a "fun" string';

    console.log(string2);
    console.log(string2.length);
    console.log(string2.toUpperCase(string2));
    console.log(string2.toLowerCase(string2));
    console.log(string2.indexOf("fun"));
}

strings();
// Split & Slicing Strings

