/*function testExample(a)
{
    var greeting = "HI My name is " + a;
    return greeting;
}
console.log(testExample('Hi'))

var name= "Shaffee"
console.log(testExample(name));
*/

function add()
{
    num1 = parseInt(myform.num1.value);
    num2 = parseInt(myform.num2.value);
    result = num1 + num2;
    myform.result.value = result;
    return result;
}
function Subtract()
{
    num1 = parseInt(myform.num1.value);
    num2 = parseInt(myform.num2.value);
    result = num1 - num2;
    myform.result.value = result;
    return result;
}
function Multiply()
{
    num1 = parseInt(myform.num1.value);
    num2 = parseInt(myform.num2.value);
    result = num1 * num2;
    myform.result.value = result;
    return result;
}
function Divide()
{
    num1 = parseInt(myform.num1.value);
    num2 = parseInt(myform.num2.value);
    result = num1 / num2;
    myform.result.value = result;
    return result;
}
function Modulus()
{
    num1 = parseInt(myform.num1.value);
    num2 = parseInt(myform.num2.value);
    result = num1 % num2;
    myform.result.value = result;
    return result;
}
function Absolute()
{
    num1 = parseInt(myform.num1.value);
    num2 = parseInt(myform.num2.value);
    result = Math.abs(num1 - num2);
    myform.result.value = result;
    return result;
}
function Square_Root()
{
    num1 = parseInt(myform.num1.value);
    results= Math.sqrt(num1);
    result = results.toFixed(3)
    myform.result.value = result;
    return result;   
}



function validation()
{
    var phoneno = /^\d{10}$/;
    var correct = /^[A-Za-z]+$/;
    var name = document.getElementById("name").value;
    var phone = document.getElementById("phone").value;
    var mail = document.getElementById("mail").value;

    if(name == ""){
        document.getElementById("checkname").innerHTML= "** Please fill your name"
        return false;
    }        
    if(name.match(correct))
    true;
    else{
    document.getElementById("checkname").innerHTML= "** Only Charactes are allowed"
    return false;
    }

    if(phone == ""){
        document.getElementById("checkphone").innerHTML= "** Please fill Phone no"
        return false;
    }
    if(phone.length < 10){
        document.getElementById("checkphone").innerHTML= "**Enter appropriate number"
        return false;
    }
    if(phone.length > 10){
        document.getElementById("checkphone").innerHTML= "**Enter appropriate number"
        return false;
    }
    if(isNaN(phone)){
    document.getElementById("checkphone").innerHTML= "** Only Numbers are allowed"
    return false;
    }
    
    if(mail == ""){
        document.getElementById("checkmail").innerHTML= "** Please fill your Email-ID"
        return false;
    }
    if(mail.indexOf('@') <= 0){
        document.getElementById("checkmail").innerHTML= "** Invalid Email"
        return false;
    }
    if((mail.charAt(mail.length - 4)!='.') && (mail.charAt(mail.length - 3)!='.')) {
        document.getElementById("checkmail").innerHTML= "** Invalid Email"
        return false;
    }
}




function palindrome(){
    var word = document.getElementById("word").value;
    var x = /[\W_]/g;
    var y = word.toLowerCase().replace(x,"");
    console.log(y);
    var reversed = y.split("").reverse().join("");
    if (reversed == y){
        document.getElementById("check1").innerHTML = "Palindrome";
        return true;
    }
    else{
        document.getElementById("check1").innerHTML = "Not Palindrome";
        return false;
    }
}

function anagram(){
    var str1 = document.getElementById("str1").value;
    var str2 = document.getElementById("str2").value;

    str1 = str1.replace(/[^\w]/g, '').toLowerCase()
    str2 = str2.replace(/[^\w]/g, '').toLowerCase()

    if (str1.length !== str2.length) {
        document.getElementById("check2").innerHTML = "Not Anagram";
        return false
    }

    let pro = str2.split("")

    for (let char of str1 ){ 
        if (!pro.includes(char)) {
            document.getElementById("check2").innerHTML = "Not Anagram";
            return false;
            break;
        } else {
            pro.splice(pro.indexOf(char), 1)
        }
    }
    document.getElementById("check2").innerHTML = "Anagram";
    return true;
};



function rand1(){
    var p = Math.floor(Math.random() * (1000 - 1));
    document.getElementById("value1").value = p;
    return p;
}

function rand2(){
    var q = Math.floor(Math.random() * (1000 - 1));
    document.getElementById("value2").value = q;
    return q;
}
function winner(p,q){

    var map = new Map();

    map.set(0,'Human');
    map.set(1,'Cockroach');
    map.set(2,'Nuclear Bomb');

    a = p % 3;
    b = q % 3;

    if (a == 0 && b == 0){
        document.getElementById("pro").innerHTML = map.get(0)+" Vs "+map.get(0);
        document.getElementById("ret").value = "Tie";
        return "Winner : Tie";
    }
    else if (a == 0 && b == 1) {
        document.getElementById("pro").innerHTML = map.get(0)+" Vs "+map.get(1);
        document.getElementById("ret").value = "Human";
        return "Winner : Human";
    }
    else if (a == 0 && b == 2) {
        document.getElementById("pro").innerHTML = map.get(0)+" Vs "+map.get(2);
        document.getElementById("ret").value = "Nuclear Bomb";
        return "Winner : Nuclear Bomb";
    }
    else if (a == 1 && b == 0) {
        document.getElementById("pro").innerHTML = map.get(1)+" Vs "+map.get(0);
        document.getElementById("ret").value = "Human";
        return "Winner : Human";
    }
    else if (a == 1 && b == 1) {
        document.getElementById("pro").innerHTML = map.get(1)+" Vs "+map.get(1);
        document.getElementById("ret").value = "Tie";
        return "Winner : Tie";
    }
    else if (a == 1 && b == 2) {
        document.getElementById("pro").innerHTML = map.get(1)+" Vs "+map.get(2);
        document.getElementById("ret").value = "Human";
        return "Winner : Human";
    }
    else if (a == 2 && b == 0) {
        document.getElementById("pro").innerHTML = map.get(2)+" Vs "+map.get(0);
        document.getElementById("ret").value = "Nuclear Bomb";
        return "Winner : Nuclear Bomb";
    }
    else if (a == 2 && b == 1) {
        document.getElementById("pro").innerHTML = map.get(2)+" Vs "+map.get(1);
        document.getElementById("ret").value = "Nuclear Bomb";
        return "Winner : Nuclear Bomb";
    }
    else (a == 2 && b == 2) 
    {
        document.getElementById("pro").innerHTML = map.get(2)+" Vs "+map.get(2);
        document.getElementById("ret").value = "Tie";
        return "Winner : Tie";
    }
}
