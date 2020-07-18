
// JAVASCRIPT FULL ASSIGNMENT FROM CHAP 1 - 67 //

/*
// CHAP # 1 TASK NUMBER 1 //
alert("Hello! Welome");

// CHAP # 1 TASK NUMBER 2 //
alert("Error! Pleae enter a valid password");

// CHAP # 1 TASK NUMBER 3 //
alert("Welcome to JS Land... \nHappy Coding!");

// CHAP # 1 TASK NUMBER 4//
alert("Welcome to JS Land...");
alert("Happy Coding!\n Prevent this page from creating other dialogs")

// CHAP # 1 TASK NUMBER 5//
console.log("Hello... I can run JS through my web browser's console.")

// CHAP # 1 TASK NUMBER 6 AND 7//
/* HTML Code with ALERTS

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <script src="app.js"></script>
</head>
<body>
    <h1> JAVASCRIPT BASICS</h1>
</body>
</html>
*/



// CHAP # 2 TASK NUMBER 1//
var username;

// CHAP # 2 TASK NUMBER 2//
var myName = "Mariam Khan";

// CHAP # 2 TASK NUMBER 3//
var message;
message = "hello world";
alert(message);

// CHAP # 2 TASK NUMBER 4 //
var studentName = "Mariam";
var age="15 Years Old";
var qualification="Certified Mobile Application Development";
alert(studentName);
alert(age);
alert(qualification);

// CHAP # 2 TASK NUMBER 5//
var food ="PIZZA";
alert(food + "\n" + food.slice(0,4) + "\n" + food.slice(0,3) + "\n" + food.slice(0,2) + "\n" + food.slice(0,1));

// CHAP # 2 TASK NUMBER 6//
var email = "mariam17cs@gmail.com";
alert("My Email address is " +email);


// CHAP # 2 TASK NUMBER 7//
var book = "A smarter way to learn JavaScript";
alert("I am trying to learn from the Book " +book);

// CHAP # 2 TASK NUMBER 8//
document.write("Yah! I can write HTML content through JavaScript")

// CHAP # 2 TASK NUMBER 9//
alert("▬▬▬▬▬▬▬▬▬ஜ۩۞۩ஜ▬▬▬▬▬▬▬▬▬");


// CHAP # 3 TASK 1 //
var age = 21;
alert("I am " +age + " years old.");

// CHAP # 3 TASK 2 //
var  visits = 28;
alert("You have visited this site " +visits + " times");

// CHAP # 3 TASK 3 //
var  birthYear = 1999;
document.write("\nMy birth year is " +birthYear +"\nData type of my declared variable is number.")

// CHAP # 3 TASK 4 //
var visitorsName = "Mariam";
var product = "Scarf";
var quantity = 5;
document.write(visitorsName +" ordered " +quantity +" " +product +"(s) on online Clothing store");

// CHAP # 4 TASK 1//
var name, number, address;

// CHAP # 4 TASK 2//

//legal variable's name
var name1;
var number_6;
var $address;
var rollNumber;
var _schoolName;
//illegal variable's name
var 1name;
var #number;
var alert;
var rollNumber#;
var school-Name;



// CHAP # 4 TASK 3//
document.write("<h1> Rules for naming JS variables </h1> \n Variable names can only contain numbers, $ and _. For example $my_1stVariable <br/> Variables must begin with a letter, $ and _. For example $name, _name or name <br/> Variable names are case sensitive. <br/> Variable names should not be JS keywords.")


// CHAP # 5 TASK 1 //
var num1 = prompt("Enter first number");
var num2 = prompt("Enter second number");
var ans = +num1 + +num2;
document.write("Sum of " +num1 +" and " +num2 +" is " +ans);


// CHAP # 5 TASK 2 //
var num1 = prompt("Enter first number");
var num2 = prompt("Enter second number");
var ans = +num1 - +num2;
document.write("<br>Sum of " +num1 +" and " +num2 +" is " +ans);
 ans = +num1 * +num2;
document.write("<br>Sum of " +num1 +" and " +num2 +" is " +ans);
 ans = +num1 / +num2;
document.write("<br>Sum of " +num1 +" and " +num2 +" is " +ans);
 ans = +num1 % +num2;
document.write("<br> Sum of " +num1 +" and " +num2 +" is " +ans);


// CHAP # 5 TASK 3 //
var test;
document.write("Value after variable declaration is " +test);
test = 5;
document.write("<br/>Initial value: " +test);
test++;
document.write("<br/>Value after increment is: "+test);
test = test+7;
document.write("<br/>Value after addition is: "+test);
test--;
document.write("<br/>Value after decrement is: "+test);
test = test%3;
document.write("<br/>The remainder is: "+test);



// CHAP # 5 TASK 4 //
var ticketCost = 600;
document.write("The cost to buy 5 tickets to a movie is " +(ticketCost*5) +"PKR.");


// CHAP # 5 TASK 5 //
document.write("<h2>Table of 3 </h2>");
for(var i=1; i<=10; i++)
{
    document.write("<br/>3 * "+i +" = " +(3*i));
}

// CHAP # 5 TASK 6 //
var tempC = 25;
var tempF = (tempC * (9/5) + 32);
document.write(tempC +"<sup>0</sup>C is " +tempF+"<sup>0</sup>F.");
tempC = (tempF - 32 * (5/9));
document.write("<br>" +tempF +"<sup>0</sup>F is " +tempC+"<sup>0</sup>C.");


// CHAP # 5 TASK 7 Shopping Cart //
var price1 = 650;
var price2 = 100;
var quan1 = 3;
var quan2 = 7;
var shipping = 100;
document.write("<h1> SHOPPING CART </h1> <br>");
document.write("<br> Price of Item 1 is " +price1);
document.write("<br> Price of Item 1 is " +price2);
document.write("<br> Quantity of Item 1 is " +quan1);
document.write("<br> Quantity of Item 1 is " +quan2);
document.write("<br> Shipping Cgarges is 100");
var cost = (price1*quan1) + (price2*quan2) + shipping;
document.write("<br><br><br> Total Cost of your Order is " +cost);



// CHAP # 5 TASK 8 Marksheet //
var totMarks = 650;
var obtMarks = 500;
var per = (obtMarks/totMarks)*100;

document.write("<br> Total Marks: " +totMarks);
document.write("<br> Obtained Marks: " +obtMarks);
document.write("<br> Percentage: " +per);




// CHAP # 5 TASK 9  //
var dollar = 10;
var riyal = 25;
var rupees = (dollar*104.80) + (riyal * 28);
document.write("<h1> CURRENCY IN PKR </h1> <br>");
document.write("<br> Total currency in PKR is " +rupees);



// CHAP # 5 TASK 10//
var num = 10;
var result = ((((+num) + 5) *10 ) /2 );
document.write(result);




// CHAP # 5 TASK 11 //
var currentYear = 2020;
var birthYear = 1999;
document.write("<h1> AGE CALCULATOR </h1> <br>");
document.write("<br> Current Year " +currentYear);
document.write("<br> Current Year " +birthYear);
document.write("<br><br> Your Age is: " + (currentYear-birthYear));



// CHAP # 5 TASK 12 //
var radius = 10.4;
var circumference = 2 * 3.14 * radius;
var area = 3.14 * radius * radius;
document.write("<h1> The Geometrizer </h1> <br>");
document.write("<br> Radius of a Circle is " +radius);
document.write("<br> The circumference is " +circumference);
document.write("<br> The area is: " + area);


// CHAP # 5 TASK 12 //
var favSnake = "chips";
var currentAge = 21;
var maxAge = 50;
var estimatePerDay = 5;
var canEat = (maxAge - currentAge)*estimatePerDay;
document.write("<h1> The Life Time Supply Calculator </h1> <br>");
document.write("<br> Favourite Snake: " +favSnake);
document.write("<br> Current Age: " +currentAge);
document.write("<br> Maximum Age: " +maxAge);
document.write("<br> Amount of Snakes per day: " +estimatePerDay);
document.write("<br> You will need "+estimatePerDay +" " +favSnake +" to ;ast yopu until the ripe old age of  " +maxAge);




// CHAP # 6-9 TASK 1 //
var a = +prompt("Enter a Number");
document.write(" Result: <br/> The Value of a is: " +a +"<br/> .................................................");

document.write("<br/><br/> The value of ++a is: " + (++a));
document.write("<br/> Now the value of a is: " +a);

document.write("<br/><br/> The value of a++ is: " + (a++));
document.write("<br/> Now the value of a is: " +a);

document.write("<br/><br/> The value of --a is: " + (--a));
document.write("<br/> Now the value of a is: " +a);

document.write("<br/><br/> The value of a-- is: " + (a--));
document.write("<br/> Now the value of a is: " +a)



// CHAP # 6-9 TASK 2 //
var a = 2, b = 1;

    var result = --a - --b + ++b + b--;
// Step by step execution //
       // --a - --b + ++b + b--;
     //     2 -  0  +  1  +  1
     //     2 -  0  +  1  +  0
     //     result =  3
document.write(result);



// CHAP # 6-9 TASK 2 //
var name = prompt("What is your Name?", "Enter Name");
alert("Hello "+name);



// CHAP # 6-9 TASK 4 //

var table_num = +prompt("Enter the number for table");
    if (table_num > 0){
        document.write("<h2>Table of " +table_num +"</h2>");
        for(var i=1; i<=10; i++)
            {
                document.write("<br/>"+table_num +"* " +i  +" = " +(table_num*i));
            }
    }
    else{
        document.write("<h2>Table of 5 </h2>");
        for(var i=1; i<=10; i++)
            {
                document.write("<br/> 5 * " +i  +" = " +(5*i));
            }
    }



// CHAP # 6-9 TASK 5 //

    var sub1 = prompt("Enter First Subject");
    var sub2 = prompt("Enter Second Subject");
    var sub3 = prompt("Enter Third Subject");
    var marks1 = +prompt("Enter Marks of First Subject");
    var marks2 = +prompt("Enter Marks of Second Subject");
    var marks3 = +prompt("Enter Marks of Third Subject");
    var total_marks = 100;
    var per1 = (marks1/100)*100;
    var per2 = (marks2/100)*100;
    var per3 = (marks3/100)*100;
    var totObtMarks = marks1 + marks2 + marks3;
    var tot_per = (totObtMarks/300)*100;

    document.write("<table> <tr> <th>Subjects</th> <th>Total Marks</th> <th>Obtained Marks</th> <th>Percentage</th>  </tr> <tr> <td>"+sub1 +"</td> <td>100</td> <td>" +marks1 +"</td> <td>" +per1 +"%</td>  </tr> <tr> <td>"+sub2 +"</td> <td>100</td> <td>" +marks2 +"</td> <td>" +per2 +"%</td>  </tr> <tr> <td>"+sub3 +"</td> <td>100</td> <td>" +marks3 +"</td> <td>" +per3 +"%</td> </tr> <tr> <td></td> <td>300</td> <td>" +totObtMarks +"</td> <td>" +tot_per +"%</td>  </tr></table>");



// CHAP # 9-11 TASK 1 //
var cityName = prompt("Enter your City", "City Name");
if(cityName === "Karachi"){
    alert("Welcome to city of lights");
}



// CHAP # 9-11 TASK 2 //
var gender = prompt("Enter Gender");
if(gender === "Male" || gender === "male"){
    alert(" Good Morning Sir");
}
else{
    alert(" Good Morning Ma'am");
}


// CHAP # 9-11 TASK 3 //
var color = prompt("Enter color of traffic signal");
document.write("<table> <tr> <td> Signal Color </td> <td> Message </td></tr> <tr> <td> Red </td> <td> Must Stop </td></tr> <tr> <td> Yellow </td> <td> Ready to move </td></tr> <tr> <td> Green </td> <td> Move Now </td></tr></table>")


// CHAP # 9-11 TASK 4 //
var remainFuel = +prompt("Remaining Fuel", "Enter remaining fuel in liters");
if(remainFuel < 0.25){
    alert("Please refill the fuel in your car");
}
else{
    alert("You can travel");
}


// CHAP # 9-11 TASK 5 //
var a = 4; 
if (++a === 5){ 
    alert("given condition for variable a is true"); 
  }
// Displayed//

var b = 82; 
if (b++ === 83){ 
    alert("given condition for variable b is true"); } 
    // Not Displayed //

var c = 12; 
    if (c++ === 13){ alert("condition 1 is true"); }  
    if (c === 13){ alert("condition 2 is true"); }  // Displayed //
    if (++c < 14){ alert("condition 3 is true"); } 
    if(c === 14){ alert("condition 4 is true"); }  // Displayed //

var materialCost = 20000; 
var laborCost = 2000; 
var totalCost = materialCost + laborCost; 
if (totalCost === laborCost + materialCost)
{ alert("The cost equals"); } 
 // Displayed //

 if (true)
 { alert("True"); } // Displayed //
  if (false){ alert("False"); }  // Not Displayed //

  if("car" < "cat")
  { alert("car is smaller than cat"); }  // Displayed //
 
 

// CHAP # 9-11 TASK 6 //
var obtainedMarks = +prompt("Enter Obtained Marks of 3 Subjects", "Obtained Marks");
var totalMarks = +prompt("Enter Total Marks", "Total Marks");
var percent = (obtainedMarks/totalMarks)*100;
var grade = "null";
var remarks = "null";
if(percent >= 80)
{
    grade = "A-1";
    remarks = "Excellent";
}
else if(percent >= 70)
{
    grade = "A";
    remarks = "Good";
}
else if(percent >= 60)
{
    grade = "B";
    remarks = "You need to improve";
}
else{
    grade = "Fail";
    remarks = "Sorry";
}
document.write("<div> <h1> Mark Sheet </h1> <br> <br> Total Marks: " +totalMarks +"<br> Obtained Marks: " +obtainedMarks +" <br> Percentage: " +percent +"<br> Grade: " +grade +"<br> Remarks: " +remarks);



// CHAP # 9-11 TASK 7 //
var secret = 7;
var guess = +prompt("Guess the Secret Number from 1 to 10", "Enter Number");
if( guess === secret){
    alert("Bingo! Correct answer");
}
else if( guess === secret + 1){
    alert("Close enough to the correct answer");
}


// CHAP # 9-11 TASK 8 //

var inputNumber = +prompt("Enter any Number");
if( inputNumber % 3 === 0){
    alert("Number is divisible by 3");
}
else{
    alert("Number is not divisible by 3");
}


// CHAP # 9-11 TASK 9 //

var inputNumber = +prompt("Enter any Number");
if( inputNumber % 2 === 0){
    alert("Number is Even");
}
else{
    alert("Number is Odd");
}


// CHAP # 9-11 TASK 9 //

var Temp = +prompt("Enter Temperature");
if( Temp > 40 ){
    alert("It is too hot outside");
}
else if ( Temp > 30 ){
    alert("The Weather today is Normal.");
}
else if ( Temp > 20 ){
    alert("Today’s Weather is cool.");
}
else if ( Temp > 10 ){
    alert("OMG Today’s Weather is so cool." );
}
 

 // CHAP # 9-11 TASK 10 //
 var firstNumber = +prompt("Enter First Number");
 var secondNumber = +prompt("Enter Second Number");
 var operation = prompt("Enter Operation" , "Like (+, -, *, /, %) ");
 if(operation === "+")
 {
     alert("Sum of " +firstNumber +" and " +secondNumber +" is: "+(firstNumber+secondNumber));
 }
 else if(operation === "-")
 {
     alert("Subtraction of " +firstNumber +" and " +secondNumber +" is: "+(firstNumber-secondNumber));
 }
 else if(operation === "*")
 {
     alert("Multiplication of " +firstNumber +" and " +secondNumber +" is: "+(firstNumber*secondNumber));
 }
 else if(operation === "/")
 {
     alert("Division of " +firstNumber +" and " +secondNumber +" is: "+(firstNumber/secondNumber));
 }
 else if(operation === "%")
 {
     alert("Remainder From " +firstNumber +" to " +secondNumber +" is: "+(firstNumber%secondNumber));
 }
 
 

 // CHAP # 12-13 TASK 1//
 var char = prompt("Enter any Character?");
 if( char >= "A" && char <= "Z"){
     alert("Uppercase Letter..!")
 }
 else{
     alert("Lowercase Letter..!")
 }
 

 // CHAP # 12-13 TASK 2 //
 var firstNumber = +prompt("Enter First Number");
 var secondNumber = +prompt("Enter Second Number");
 if(firstNumber > secondNumber){
     alert("Lager Number is " +firstNumber);
 }
 else if( firstNumber === secondNumber)
 {
     alert("Both Numbers are Equal.");
 }
 else{
     alert("Lager Number is " +secondNumber);
 }

 

 // CHAP # 12-13 TASK 3 //
 var Number = +prompt("Enter Number");
 
 if(Number > 0){
     alert("Number is Positive");
 }
 else if(Number < 0){
    alert("Number is Negative");
}
 else{
     alert("Number is Zero");
 }


// CHAP # 12-13 TASK 4 //
var char = prompt("Enter any character");
if( char === "A" || char === "a" || char === "E" || char === "e" || char === "I" || char === "i" || char === "O" ||char === "o" || char === "U" || char === "u" )
{
    alert("TRUE...!");
}
else{
    alert("FALSE...!");
}



// CHAP # 12-13 TASK 5 //
var Password = "wer4";
var inpPassword = prompt("Enter Password");
if(inpPassword != ""){
if (inpPassword != Password){
    alert("Incorrect password.");
}
else{
    alert(" Correct! The password you entered matches the original password.");
}
}
else {
    alert(" Please enter your password.");
}


// CHAP # 12-13 TASK 6 //
var greeting; 
var hour = 13; 
if (hour < 18) 
{ greeting = "Good day"; }
else {greeting = "Good evening"; } 

// Correct Code is Shown below  //
var greeting; 
var hour = 13; 
if (hour < 18) 
{ greeting = "Good day"; }
else 
{greeting = "Good evening"; } 
 
 

 // CHAP # 12-13 TASK 7 //
 var time = +prompt("Enter Time in 24 hour format", "Like 1900 = 7pm");
 
 if(time >= 0000 && time <= 1200){
     alert("Good Morning");
 }
 else if(time >= 1200 && time <= 1700){
    alert("Good Afternoon");
}
 else if(time >= 1700 && time <= 2100){
    alert("Good Evening");
}
else{
    alert("Good Night");
}



// chap # 14-15 task 1 //
var studentNames = [];

// chap # 14-15 task 2 //
var studentNames = new Array();

// chap # 14-15 task 3 //
var stringArray = ["apple" , "mango" , "banana"];

// chap # 14-15 task 4 //
var numberArray = [12, 23, 34, 45];

// chap # 14-15 task 5 //
var stringArray = [true, false, true];

// chap # 14-15 task 6 //
var booleanArray = ["apple" , 67 , true];

// chap # 14-15 task 7 //
var arr = [ "SSC", "HSC", "BCS", "BS", "BCOM", "MS", "M. Phil", "PhD"];
document.write("Qualifications: <br>")
var j = 0;
for(var i =0; i<arr.length; i++){
    document.write("<br>"+(++j) +") " +arr[i]);
}



// chap # 14-15 task 8 //
var names = ["MARIAM", "AREEBA", "DUA"];
var score = [466, 330, 499];
for(var i =0; i<names.length; i++){
    document.write("<br> Score of " +names[i] +" is " +score[i]+ ". Percentage: " +(score[i]/500)*100);
}




// chap # 14-15 task 9 //
var colors = ["Yellow", " Purple", " Green"];
document.write(colors);
var addStart = prompt("what color he/she wants to add to the beginning");
colors.unshift(addStart);
document.write("<br>" +colors);
var addEnd = prompt("what color he/she wants to add at the end");
colors.push(addEnd);
document.write("<br>" +colors);
colors.unshift("brown", "black");
document.write("<br>" +colors);
colors.shift();
document.write("<br>" +colors);
colors.pop();
document.write("<br>" +colors);
var index =+prompt(" At which index You wants to add a color");
var colorName =prompt(" Enter color name");
colors.splice(index, 1,colorName);
document.write("<br>" +colors);
var index1 =+prompt(" From which index You wants to delete a color");
var colorNum =prompt(" How many colors you want to delete");
colors.splice(index1, colorNum);
document.write("<br>" +colors);
 


// chap # 14-15 task 10 //

var score = [466, 330, 499];
document.write(" Score of Students: " +score);
score.sort();
document.write("<br> Ordered Score of Students: " +score);


 

// chap # 14-15 task 11 //
var cities = ["Karachi", "Lahore", "Islamabad", "Quetta", "Pesshawar"];
document.write(" <h1>Cities List:</h1> <br> " +cities);
var selectedCities = cities.slice(2,4);
document.write("<br> <h1>Selected Cities List:</h1> <br> " +selectedCities);



// chap # 14-15 task 12 //
var arr =["This ", "is ", "my ", "cat "]; 
document.write(" <h1>Array:</h1> " +arr);
 
document.write(" <h1>String:</h1> " +arr.join(" "));



// chap # 14-15 task 13 //
var array = ["A", "B", "C", 1, 2, 3];
document.write("<h3> FIRST IN FIRST OUT </h3>");
for(var i =0; i<array.length; i++){
    document.write("<br> OUT: "+array[i]);
}


// chap # 14-16 task 14 //
var array = ["A", "B", "C", 1, 2, 3];
document.write("<h3> LAST IN FIRST OUT </h3>");
for(var i = array.length-1; i>=0 ; i--){
    document.write("<br> OUT: "+array[i]);
}
 

// chap # 14-16 task 15 //
var array = ["Apple", "Samsung", "Motorola", "Nokia", "Sony", "Haier"];
document.write("<select> <option> Mobile Brands </option> <option>" +array[0] +" </option> <option>" +array[1] +" </option> <option>" +array[2] +" </option> <option>" +array[3] +" </option> <option>" +array[4] +" </option> <option>" +array[5] +" </option>  </select>");



// CHAP # 17-20 TASK 1 //
var multiDimensional = [];

// CHAP # 17-20 TASK 2 //
var multiDimensional = [
    [0, 1, 2, 3],
    [1, 0, 1, 2],
    [2, 1, 0, 1]

];
for( var i=0; i<=multiDimensional.length; i++)
{   for( var j=0; j<=multiDimensional.length; j++){
    document.write(+multiDimensional[i][j] +" ");
}
document.write("<br>")
}
 

// CHAP # 17-20 TASK 3 //
for( var i=1; i<=10; i++)
{
    document.write("<br> "+i);

}


// CHAP # 17-20 TASK 4 //
var table_num = +prompt("Enter a Number to show it's Multiplication Table");
var length = +prompt("Enter length of a Table");
document.write("Multiplication Table of " +table_num +" Length "+length);
for(var i=1; i<=length; i++)
            {
                document.write("<br/>"+table_num +"* " +i  +" = " +(table_num*i));
            }



// CHAP # 17-20 TASK 5 //
var fruits = ["Apple", "Mango", "Banana", "Orange", "Strawberry"];
document.write("<div> ");
for(var i = 0; i<fruits.length; i++){
    document.write("<br> " +fruits[i]);
}

for(var i = 0; i<fruits.length; i++){
    document.write("<br> Element at index "+i +" is " +fruits[i]);
}
document.write("</div> ");

// CHAP # 17-20 TASK 6 //
document.write("<h3> COUNTING: </h3> <div>");
for( var i=1; i<=15; i++)
{
    document.write(" "+i +",");

}
document.write("<h3> REVERSSE COUNTING: </h3>");
for( var i=10; i>=1; i--)
{
    document.write(" "+i +",");

}

document.write("<h3> EVEN: </h3>");
for( var i=0; i<=20; i+=2)
{
    document.write(" "+i +",");

}

document.write("<h3> ODD: </h3>");
for( var i=1; i<=20; i+=2)
{
    document.write(" "+i +",");

}

document.write("<h3> SERIESS: </h3>");
for( var i=2; i<=20; i+=2)
{
    document.write(" "+i +"k,");

}
document.write("</div>")



// CHAP # 17-20 TASK 7 //
var A = ["CAKE", "APPLE PIE", "COOKIE", "CHIPS", "PATTIES"];
var order = prompt("Welcome to ABC Bakery. What do you want to order?");
var index = -1;
var item = "";
for(var i = 0; i< A.length; i++){
    if(order === A[i]){
        item = A[i];
        index = i;
        break;
    }
    
}
if(index != -1 && item != ""){
    document.write("<div> "+order +" is available at index "+i +" in our Bakery. </div>");
}

else{
    document.write("<div> We are Sorry. "+order +" is not available in our Bakery </div>");
}



// CHAP # 17-20 TASK 8 //
var arr = [24, 53, 78, 91, 12];
document.write("<div> Array Items:  "+arr);
var largest = arr[0];
for(var i = 1; i< arr.length; i++){

    if( largest < arr[i]){
        largest = arr[i];
    }

}
document.write(" <br> <br>The Largest Number is: "+largest +"</div>");



// CHAP # 17-20 TASK 9 //
var arr = [24, 53, 78, 91, 12];
document.write("<div> Array Items:  "+arr);
var smallest = arr[0];
for(var i = 1; i< arr.length; i++){

    if( smallest > arr[i]){
        smallest = arr[i];
    }

}
document.write(" <br> <br>The Smallest Number is: "+smallest +"</div>");



// CHAP # 17-20 TASK 10 //
document.write("<div>");
for(var i = 1; i <= 100; i++){
    if( i % 5 === 0){
        document.write(" "+i +",");
    }
}
document.write("</div>");



// CHAP 21-25 TASK 1 //
var firstName = prompt("Enter First Name");
var lastName = prompt("Enter Last Name");
var fullName = firstName + lastName;
alert("Hello! "+fullName);


// CHAP 21-25 TASK 2 //
var favPhone = prompt("Enter your Favourite Phone");
var length = favPhone.length;
document.write("<div> My Favourite phone is: "+favPhone +" <br> Length of String: " +length +"</div>");



// CHAP 21-25 TASK 3 //
var nationality ="Pakistani";
var index = nationality.indexOf("n");
document.write("<div> String: "+nationality +" <br> Index of 'n': " +index +"</div>");


// CHAP 21-25 TASK 4 //
var variable ="Hello World";
var index = variable.lastIndexOf("l");
document.write("<div> String: "+variable +" <br> Last Index of 'l': " +index +"</div>");



// CHAP 21-25 TASK 5 //
var nationality ="Pakistani";
var index = nationality.charAt(3);
document.write("<div> String: "+nationality +" <br> Character at index 3: " +index +"</div>");



// CHAP 21-25 TASK 6 //
var firstName = prompt("Enter First Name");
var lastName = prompt("Enter Last Name");
var fullName = firstName.concat(lastName, " ")
alert("Hello! "+fullName);




// CHAP 21-25 TASK 7 //
var city = "Hyderabad";
var replacedCity = city.replace("Hyder", "Islam")
document.write("<div> City: "+city +" <br> After Replacement: " +replacedCity +"</div>");




// CHAP 21-25 TASK 8 //
var message = "Ali and Sami are best friends. They play cricket and football together."; 
var replacement = message.replace(/and/g, "&")
document.write("<div> "+message +" <br><br><br> After Replacement: <br>" +replacement +"</div>");



// CHAP 21-25 TASK 9 //
var string = "472";
var number = parseInt(string);
document.write("<div> Value: "+string +" <br> Type: " +typeof(string) +" <br> Value: " +number +" <br> Type: " +typeof(number) +"</div>");



// CHAP 21-25 TASK 10 //
var input = prompt("Enter any Dry Fruit");
var changeCase = input.toUpperCase();
document.write("<div> User Input: "+input +" <br> Upper Case: " +changeCase +"</div>");



// CHAP 21-25 TASK 11 //
var input = prompt("Enter any Dry Fruit");
var first = input.slice(0,1);
first = first.toUpperCase();
var second = input.slice(1);
second = second.toLowerCase();
changeCase = first + second;
document.write("<div> User Input: "+input +" <br> Title Case: " +changeCase +"</div>");




// CHAP 21-25 TASK 12 //
var num = 35.36;
var str = num.toString();
str = str.replace(".","")
document.write("<div> Number: "+num +" <br> Result: " +str +"</div>");



// CHAP 21-25 TASK 13 //
var user = prompt("Enter Username");
 for( var i = 0; i < user.length; i++){
     if (user[i] === "@" || user[i] === "," || user[i] === "." || user[i] === "!" ){
         alert("Please Enter a Valid Password");
         break;
     }
 }

 

// CHAP 21-25 TASK 14 //
var A = ["CAKE", "APPLE PIE", "COOKIE", "CHIPS", "PATTIES"];
var order = prompt("Welcome to ABC Bakery. What do you want to order?");
order = order.toUpperCase();
var index = -1;
var item = "";
for(var i = 0; i< A.length; i++){
    if(order === A[i]){
        item = A[i];
        index = i;
        break;
    }
    
}
if(index != -1 && item != ""){
    document.write("<div> "+order +" is available at index "+i +" in our Bakery. </div>");
}

else{
    document.write("<div> We are Sorry. "+order +" is not available in our Bakery </div>");
}


// CHAP 21-25 TASK 15 //
var Password = prompt("Enter Password");
for( var i = 0; i < Password.length; i++){
    if( Password.slice(0) >= 'A' && Password.slice(0) <= 'Z' || Password.slice(0) >= "a" && Password.slice(0) <= 'z')
    {
        if( Password[i] >= 'A' && Password[i] <= 'Z' || Password[i] >= "a" && Password[i] <= 'z' || Password[i] >= 0 && Password[i] <= 9)
        {
             if(Password.length >= 6)  
                {
                    alert('Strong Password..!');
                }
             else{
                alert('Password must be atleast 6 characters long..!');
                break;
             } 

        }
        else{
            alert("Password must contains only characters and numbers...!");
            break;
        }
    }
    else{
        alert("Password can not begin with a Number or Character. \nPlease Enter a Valid Password");
        break;
    }
}



// CHAP # 21-25 TASK 16 //
var university = "University of Karachi";
var uni = university.split("");
document.write("<div> ")
for(var a=0; a < uni.length; a++){
    document.write("<br>" +uni[a] )
}
document.write("</div> ");




// CHAP # 21-25 TASK 17 //
var input = prompt("Enter you Country");
var lastChar = input.charAt(input.length-1);
alert("Last character of input: " +lastChar)



// CHAP # 21-25 TASK 18 //
var string = "The quick brown fox jumps over the lazy dog";
var count = 0;
for(var i = 0; i < string.length; i++){
    if (string.slice(i,i+3) === "the" || string.slice(i,i+3) === "The"){
        count=count+1;
    }
}
document.write("<div> Text: "+string +" <br> There are " +count +" occurence(s) of word 'the'." +"</div>");






// CHAP 26-30 TASK 1 //
var num = prompt("Enter any positive integer?");
var round = Math.round(num);
var ceil = Math.ceil(num);
var floor = Math.floor(num);
document.write("<div> Number: "+num +" <br> Round Off Value: " +round +"<br> Ceil Value: " +ceil +"<br> Floor Value: " +floor +"</div>");




// CHAP 26-30 TASK 2 //
var num = prompt("Enter any Negative Integer?");
var round = Math.round(num);
var ceil = Math.ceil(num);
var floor = Math.floor(num);
document.write("<div> Number: "+num +" <br> Round Off Value: " +round +"<br> Ceil Value: " +ceil +"<br> Floor Value: " +floor +"</div>");



// CHAP 26-30 TASK 3 //
var num = prompt("Enter any integer?");
var absolute = Math.abs(num);

document.write("<div> Number: "+num +" <br> Absolute Value: " +absolute +"</div>");



// CHAP 26-30 TASK 4 //
var randonDice = Math.random();
var dice = randonDice * 6;
dice = Math.ceil(dice);
alert("Random Dice Value: " +dice);




// CHAP 26-30 TASK 5 //
var randonCoin = Math.random();
var coin = randonCoin * 2;
coin = Math.ceil(coin);
if( coin === 2){
    alert(+coin +"\nRandom Coin Value: Heads");
}
else{
    alert(+coin +"\nRandom Coin Value: Tails");
}



// CHAP 26-30 TASK 6 //
var random = Math.random();
var num = random * 100;
num = Math.floor(num);
document.write("<div> Random Number between 1 and 100: "+num +"</div>");
 


// CHAP 26-30 TASK 7 //
var weight = prompt("Enter your weight in kgs?");
weight = parseFloat(weight);
document.write("<div> The weight of user is: "+weight +" kilograms </div>");
 



// CHAP 26-30 TASK 8 //
var secret = Math.random() * 10;
secret = Math.ceil(secret);
var guess = prompt("Guess a Number between 1 to 10?");
if ( guess === secret){
    alert("Congratulations...!");
}
else{
    alert("Sorry! Try Again..!")
}




// CHAP 31-34 TASK 1 //
var today = new Date();
document.write("<div>" +today +"</div>");




// CHAP 31-34 TASK 2 //
var monthsName = ["January", "Feburary", "March", "April", 'May', "June", "July", "August", "Septembe", "October", "November", "December"];
var today = new Date();
var month = today.getMonth();
alert(monthsName[month]);


// CHAP 31-34 TASK 3 //
var date = new Date();
var today = date.toString();
var day = today.slice(0,3);
alert("Today is " +day);



// CHAP 31-34 TASK 4 //
var date = new Date();
var day = date.getDay();
if(day === 0 || day === 1){
    alert("It's a Fun Day");
}
else{
    alert("It's a Working Day");
}



// CHAP 31-34 TASK 5 //
var date = new Date();
var day = date.getUTCDate();
if( day < 16 ){
    alert("First fifteen days of the month");
}
else{
    alert("Last days of the month");
}



// CHAP 31-34 TASK 6 //
var date = new Date();
alert(date.getHours());
var miliseconds = date.getTime();
var minutes = miliseconds / (60*60);
document.write("<div> Current Date: "+date +"<br> Elapsed Miliseconds since January 1, 1970: "+miliseconds +"<br> Elapsed Minutes since January 1, 1970: " +minutes +"</div>");




// CHAP 31-34 TASK 7 //
var date = new Date();
var hour = date.getHours();
if( hour < 12 ){
    alert("It's AM");
}
else{
    alert("It's PM");
}



// CHAP 31-34 TASK 8 //
var laterDate = new Date("Dec 31, 2020");
document.write("<div> Later Date: " +laterDate +"</div>");



// CHAP 31-34 TASK 9 //
var d = new Date("Jun 18, 2015");
var dMili = d.getTime();
var date = new Date();
var mili = date.getTime();
var difference = mili - dMili;
var totalDays = difference / ( 1000 * 60 * 60 * 24 );
totalDays = Math.round(totalDays);
document.write("<div>" +totalDays +" days have passed since 1st Ramdan, 2015" +"</div>");




// CHAP 31-34 TASK 10 //
var d = new Date("Jan 1, 2015");
var dMili = d.getTime();
var refDate = new Date("Dec 5, 2015");
var refMili = refDate.getTime();
var difference = refMili - dMili;
difference = difference / (1000 * 60);
difference = Math.round(difference);
document.write("<div> On Reference Date " +refDate +", " +difference +" secons have passed since begining of 2015" +"</div>");




// CHAP 31-34 TASK 11 //
var date = new Date();
document.write("<div> Curent Date : " +date +" 1 hour ago, it was "); 
var hour = date.getHours();
date.setHours(hour - 1);
document.write( date +" </div>")



// CHAP 31-34 TASK 12 //
var date = new Date();
document.write("<div> Curent Date : " +date +" 100 years ago, it was "); 
var year = date.getFullYear();
date.setFullYear(year - 100);
document.write( date +" </div>")



// CHAP 31-34 TASK 13 //
var age = prompt("Enter your Age?");
var date = new Date();
var year = date.getFullYear();
var birthYear = year - age;
document.write("<div> Your Age is " +age +"<br> Your Birth Year is " +birthYear +"</div>");



// CHAP 31-34 TASK 14 //
var customerName = prompt("Enter User Name?");
var month = prompt("Enter Month");
var units = 410.44789;
var charges = 16;
var chargesDue = units * charges;
var payable = chargesDue;
var lateCharges = 350;
var chargesAfter = lateCharges + payable;
var afterDue = chargesAfter.toFixed(2);
document.write("<div> <h1> K - Electric Bill </h1> <br> Customer Name: "+customerName +" <br> Month: "+month + " <br> Number of Units: "+units +"<br> Charges per unit: "+charges +" <br><br> Net Amount Payable ( within Due Date): " +payable + " <br> Late Payment Charges "+lateCharges + "<br> Gross Amount Payable ( after Due Date): "+afterDue +"</div>");





// CHAP # 34-38 TASK 1 //
function displayDate () {
    var date = new Date();
    document.write("<div>" +date +"</div>");
}
displayDate();


// CHAP # 34-38 TASK 2 //
function greet (firstName, lastName){
    firstName = prompt("Enter First Name");
    lastName = prompt("Enter Last Name");
    var fullName = firstName + " " + lastName;
    alert("Hello! "+fullName);
}
greet();
 


// CHAP # 34-38 TASK 3 //
function sum (a, b){
    var c = a + b;
    return c;
}
var first = +prompt("Enter First Number");
var second = +prompt("Enter Second Number");
alert(sum (first, second));




// CHAP # 34-38 TASK 4 //
function calculator (num1 , num2 , operator ) {
 if(operator === "+")
 {
    return num1 + num2;
 }
 else if(operation === "-")
 {
    return num1 - num2;
 }
 else if(operation === "*")
 {
    return num1 * num2;
 }
 else if(operation === "/")
 {
    return num1 / num2;
 }
 else if(operation === "%")
 {
    return num1 % num2;
 }
 
}

var firstNumber = +prompt("Enter First Number");
var secondNumber = +prompt("Enter Second Number");
var operation = prompt("Enter Operation" , "Like (+, -, *, /, %) ");
document.write("<div> "+firstNumber +" " + operation +" "+secondNumber +" = " +calculator(firstNumber, secondNumber, operation) +"</div>");




// CHAP # 34-38 TASK 5 //
function square (number){
    return number * number;
}



// CHAP # 34-38 TASK 6 //
function factorial (number) {
    var fact = 1;
    for (var i = number; i >= 1; i--){
        fact = fact * i;
    }
    return fact;
}

document.write("<div> Factorial of 6 = " +factorial(6) +"</div>");



// CHAP # 34-38 TASK 7 //
function counting ( start, end ){
    document.write("<div> ");
    for (var i = start; i <= end; i++)
    {
        document.write(" &nbsp " +i);
    }
    document.write("</div> ");
}
counting(20, 100);



// CHAP # 34-38 TASK 8 //
function Hypotenuse ( base, perp){
    var hyp = square(base) + square(perp);
    return hyp;

}
var base = +prompt("Enter Base of a Triangle ");
var perp = +prompt("Enter Perpendicular of a Triangle ");
document.write("<div> Hypotenuse of Triangle = " +Hypotenuse(base, perp) +"</div>");




// CHAP # 34-38 TASK 9 //
function area( width , height){
    var A = width * height;
    return A;
}
    // Passing Arguements as Values //
    document.write("<div> Area = " + area ( 7, 3) +"</div>");

    // Passing Arguements as Variables //
    var width = +prompt("Enter Width");
    var height = +prompt("Enter Height");
    document.write("<div> Area = " + area ( width, height) +"</div>");




// CHAP # 34-38 TASK 10 //
function checkPalindrome( string ) {
    var reverse = "" ;
    for ( var i = string.length - 1; i >= 0; i--){
        reverse += string[i];
    }
    if ( reverse === string){
        alert("The given String is Palindrome");
    }
    else{
        alert("The given String is not Palindrome");
    }
    
}
var str = prompt("Enter any String"); 
checkPalindrome(str);



// // CHAP # 34-38 TASK 11 //
function titleCase(str) {
    var result= str.split(" ");
      
    
    for(var i = 0; i < result.length; i++) {
    result[i] = result[i].charAt(0).toUpperCase() + result[i].slice(1, result[i].length);
    }
    return result.join(" ");
    }
    document.write("<div> "+titleCase("the quick brown fox") + "</div>");



// CHAP # 34-38 TASK 12 //
function findLongestWord(str) {
    var strSplit = str.split(' ');
    var longestWord = 0;
    var word = "";
    for(var i = 0; i < strSplit.length; i++){
      if(strSplit[i].length > longestWord){
      longestWord = strSplit[i].length;
      word = strSplit[i];
       }
    }
    return word;
  }
  var string = prompt('Enter a String');
  document.write("<div> String: " +string + "<br> The longest Word is "+findLongestWord(string) +"</div>");




// CHAP # 34-38 TASK 13 //
function occurence(string, letter){
    var count = 0;
        for(var i = 0; i < string.length; i++){
             if (string.slice(i,i+1) === letter){
             count=count+1;
            }
        }
    return count;

}
var string = "JSResourceS.com";
var char = 'o';
document.write("<div> Text: "+string +" <br> There are " +occurence(string,char) +" occurence(s) of letter " +char + "</div>");




// CHAP # 34-38 TASK 14 //
function calcCircumference( radius){
     var circum = 2 * 3.14 * radius;
     document.write("<div> The Circumference of Circle: " +circum + "</div>");
}
function calcArea( radius){
    var area = 3.14 * 3.14 * radius;
    document.write("<div> The Area of Circle: " +area + "</div>");
}
var r = +prompt("Enter Radius of Circle");
calcCircumference(r);
calcArea(r);



// ASSIGNMENT 8 //
// CHAP # 38-42 TASK 1 //
function pow(base, power){
    var ans = 1;
    for( var i=1; i <= power; i++){
        ans = ans * base;
    }
    return ans;
}

var base = prompt("Enter Base");
var power = prompt("Enter Power");
alert( pow(base, power));


// CHAP # 38-42 TASK 2 //
function leapYear(year)
{
    if ((year % 100 === 0) ? (year % 400 === 0) : (year % 4 === 0)){
        alert(+year +" is a Leap Year");
    }
    else{
        alert(+year +" is not a Leap Year");
    }
}
var year = prompt("Enter any Year. For Example 2011");
leapYear(year);



// CHAP # 38-42 TASK 3 //
function calcS(a, b, c){
    var s = (a+b+c)/2;
    return s;
}

function triangleArea(a, b, c){
    var area = calcS(a, b, c)*(calcS(a, b, c) - a)*(calcS(a, b, c) - b)*(calcS(a, b, c) - c);
    return area;
}
alert( triangleArea(2,4,5));


// CHAP # 38-42 TASK 4 //
function average (sub1, sub2, sub3){
    var avg = (sub1 + sub2 + sub3)/3;
    return avg.toFixed(3);
}
function percentage(total, obtainedMarks){
    var per = (obtainedMarks/total)*100;
    per = Math.round(per);
    return per;
}
function mainFunction(){
    var sub1 = +prompt("Enter Obtained Marks of English out of 100");
    var sub2 = +prompt("Enter Obtained Marks of Urdu out of 100");
    var sub3 = +prompt("Enter Obtained Marks of Math out of 100");
    var sum = sub1 + sub2 + sub3;
    alert("Average Marks : " +average(sub1, sub2, sub3));
    alert("Percentage : " +percentage (300, sum) +"%");
}

mainFunction();


// CHAP # 38-42 TASK 5 //
function findIndex(string, char){
   
    var index;
    for (var i = 0; i < string.length; i++){
        if( string[i] == char){
            index = i;
            return index;
        }
    }

}

var str = "Mariam";
alert(findIndex(str, 'r'));



// // CHAP # 38-42 TASK 6 //
function delVowels(string){
    if (string.length <= 25) {
        string = string.toLowerCase();
        return string.replace(/[aeiou]/gi, '');
    }
    else{
        var err = "Sorry! Length of String can not exceed to 25 characters!";
        return err;
    }
    
}
alert(delVowels("Hello World"));



// CHAP # 38-42 TASK 7 //
function vowelOccurence(str) {
    str = str.toLowerCase();
    var result= str.split(" ");
    var count = 0;
    var res;
    for(var i = 0; i < result.length; i++) {
        res = result.slice(i, i+2);
        if(res.match(/aeiou/gi))

    }
    return count;
    }
    alert(vowelOccurence("Pleases read this application and give me gratuity"));



// CHAP # 38-42 TASK 8 //
function kmToMeter(km){
    return km*1000;
}

function kmToFeet(km){
    return km*3280.839895;
}

function kmToIn(km){
    return km*39370.078740157;
}
function kmToCm(km){
    return km*100000;
}

// CHAP # 38-42 TASK 8 //
function overTime(workHour, salary){

    if(workHour > 40){
        for(var i = 41; i <= workHour; i++){
            salary = salary + 12;
        }
    }
    return salary;  
}
 var sal = prompt("Enter Your Monthly Salary");
 var hour = prompt("Enter number of Worked Hours");
alert(overTime(hour, sal));



// CHAP # 38-42 TASK 10 //
function withdraw(rupees){
    var hund, fifty, ten;
    
    hund = Math.floor(rupees / 100);
    rupees = rupees % 100;
    fifty = Math.floor(rupees / 50);
    rupees = rupees % 50;
    ten = Math.floor(rupees / 10);

    document.write("<div> You will have "+hund +" hundred notes, " +fifty +" fifty notes and " +ten +" ten notes" + "</div>");

}
var rup = prompt("Enter the amount to be withdraw?", "Amount")
withdraw(rup);




// CHAP # 43-48 TASK 1 //
function hello(){
    alert(" Welcome to Saylani!")
}


// CHAP # 43-48 TASK 2 //
function image(){
    alert("Thanks for purchasing a Phone from us!")
}



// CHAP # 43-48 TASK 3 //

function deleteRow(row){
    var count = row.parentNode.parentNode.rowIndex;
    document.getElementById("myTable").deleteRow(count);
}


// CHAP # 43-48 TASK 4 //

function MouseOver(){
    document.getElementById("imgClick").src = "4.jpg";
}
function MouseOut(){
    document.getElementById("imgClick").src = "3.jpg";
}

// CHAP # 43-48 TASK 5 //
var count = 0;
function increase(){
    count++;
    document.getElementById("count").innerHTML = count;
    
}
function decrease(){
    count--;
    document.getElementById("count").innerHTML = count;
    
}

// CHAP # 49-52 TASK 1 //

function signUp(){
    var name = document.getElementById("name").value;
    var num = document.getElementById("num").value;
    var mail = document.getElementById("mail").value;
    document.getElementById("form").style.visibility = "hidden";
    document.getElementById("head").style.visibility = "visible";
    document.getElementById("heading").style.visibility = "hidden";
    document.getElementById("name").style.visibility = "hidden";
    document.getElementById("subname").style.visibility = "visible";
    document.getElementById("subname").innerHTML = name;
    document.getElementById("num").style.visibility = "hidden";
    document.getElementById("subnum").style.visibility = "visible";
    document.getElementById("subnum").innerHTML = num;
    document.getElementById("mail").style.visibility = "hidden";
    document.getElementById("submail").style.visibility = "visible";
    document.getElementById("submail").innerHTML = mail;
    document.getElementById("pass").style.visibility = "hidden";
    document.getElementById("Cpass").style.visibility = "hidden";
}


// CHAP # 49-52 TASK 2 //
function readMore(){
    var specif = "  Model : Oppo A5s <br> Status : Available <br> Size : 6.2 inches <br> Resolution : 720 x 1520 pixels <br> RAM : 2GB, 3GB, 4GB <br> ROM : 32GB, 64GB <br> Price : 22000";
    var para = document.getElementById("specification");
    para.innerHTML = specif;   
}


// CHAP # 49-52 TASK 3 //
var num;
        function edit_row(no) {
            num = no;
            document.getElementById("edit-form").style.visibility = "visible";
            document.getElementById("save_button" + num).focus();

            var name = document.getElementById("name_row" + no);
            var country = document.getElementById("country_row" + no);
            var age = document.getElementById("age_row" + no);

            document.getElementById("name-form").value = document.getElementById("name_row" + no).innerHTML;
            document.getElementById("name-form").style.backgroundColor = "rgb(163, 184, 240)";

            document.getElementById("c-form").value = document.getElementById("country_row" + no).innerHTML;
            document.getElementById("c-form").style.backgroundColor = "rgb(163, 184, 240)";

            document.getElementById("age-form").value = document.getElementById("age_row" + no).innerHTML;
            document.getElementById("age-form").style.backgroundColor = "rgb(163, 184, 240)";

        }

        function save_row() {
            
            var name_val = document.getElementById("name-form").value;
            var country_val = document.getElementById("c-form").value;
            var age_val = document.getElementById("age-form").value;

            document.getElementById("name_row" + num).innerHTML = name_val;
            document.getElementById("country_row" + num).innerHTML = country_val;
            document.getElementById("age_row" + num).innerHTML = age_val;

            // document.getElementById("edit_button" + num).style.display = "block";
            // document.getElementById("save_button" + num).style.display = "none";
            document.getElementById("edit-form").style.visibility = "hidden";
        }

        function add_row() {
            var new_name = document.getElementById("new_name").value;
            var new_country = document.getElementById("new_country").value;
            var new_age = document.getElementById("new_age").value;

            var table = document.getElementById("data_table");
            var table_len = (table.rows.length) - 1;
            var row = table.insertRow(table_len).outerHTML = "<tr id='row" + table_len + "'><td id='name_row" + table_len + "'>" + new_name + "</td><td id='country_row" + table_len + "'>" + new_country + "</td><td id='age_row" + table_len + "'>" + new_age + "</td><td><input type='button' id='edit_button" + table_len + "' value='Edit' class='edit' onclick='edit_row(" + table_len + ")'> <input type='button' id='save_button" + table_len + "' value='Save' class='save' onclick='save_row(" + table_len + ")'> <input type='button' value='Delete' class='delete' onclick='delete_row(" + table_len + ")'></td></tr>";

            document.getElementById("new_name").value = "";
            document.getElementById("new_country").value = "";
            document.getElementById("new_age").value = "";
        }

        function delete_row(no) {
            document.getElementById("row" + no + "").outerHTML = "";
        }


 // CHAP # 53-58 TASK 1 // 

  var imageArray = ["others/1.jpg", "others/2.jpg", "others/3.jpg", "others/4.png","others/5.jpg","others/6.jpg","others/7.jpg",
    "others/8.jpg","others/9.jpg","others/10.jpg","others/11.jpg","others/12.jpg","others/13.jpg","others/14.jpg","others/15.jpg"];
    

 function modalFunction(){
    for(var i = 0; i < imageArray.length; i++){
    
        document.getElementById("myImages").src = imageArray[i];
        
   
   var modal = document.getElementById("modal");
   modal.classList.add('modal-open');
   modal.classList.remove('modal-close');
   modal.style.display = "block";
   document.getElementById("myImages").src = imageArray[i];}
 }

 function onClosedImagModal(){
    var modal = document.getElementById("modal");
    modal.classList.remove('modal-open');
    modal.classList.add('modal-close');
    setTimeout(()=>{ modal.style.display = "none"; }, 550)
 }


  // CHAP # 53-58 TASK 1 // 
    function zoomIn(){
        document.getElementById("para").style.fontSize = "large";
        
    }
    function zoomOut(){
        document.getElementById("para").style.fontSize = "small";
        
    }

 
// CHAP # 58-67 TASK 1 part 1 // 
var content = document.getElementById("main-content");
console.log(content);



// CHAP # 58-67 TASK 1 part 2 //
var content = document.getElementById("main-content");
console.log(content.childNodes);


// CHAP # 58-67 TASK 1 part 3 //
var content = document.getElementsByClassName("render");
console.log(content.childNodes[0]);



// CHAP # 58-67 TASK 1 part 4 //
document.getElementById("first-name").value = "Mariam";


// CHAP # 58-67 TASK 1 part 5 //

document.getElementById("first-name").value = "Mariam";
document.getElementById("last-name").value = "Khan";
document.getElementById("email").value = "abc@gmail.com";


// CHAP # 58-67 TASK 2 part 1 //
var content = document.getElementById("form-content");
console.log(content.nodeType);



// CHAP # 58-67 TASK 2 part 2 //
var content = document.getElementById("lastName");
console.log(content.nodeType);
console.log(content.childNodes[0]);


// CHAP # 58-67 TASK 2 part 4 //
var content = document.getElementById("main-content");
console.log(content.firstChild);
console.log(content.lastChild);


// CHAP # 58-67 TASK 2 part 5 //
var content = document.getElementById("lastName");
console.log(content.previousSibling);
console.log(content.nextSibling);




// CHAP # 58-67 TASK 2 part 6 //
var content = document.getElementById("email");
console.log(content.parentNode);
console.log(content.nodeType);

*/

