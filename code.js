
function favcolor(name, color){
    return name + " your fav color is " + color + ".";
}
console.log(favcolor("ismail", "black")); 

function numbers(a, b){
    return a + b;
}
console.log(numbers(8, 4));

function introduce(name, city){
    return "hello, my name is  " + name + " and i live at " + city + ".";
}
console.log(introduce("ismail", "tangier"));


function intro(name, age){
    if (age < 18){
        return name + " you are a junior";

    }else {
        return name + " your are a minor";
    
    }
}
console.log(intro("ismail", 17));

function deert(age){
    if (age < 18){
        return " you are a child ";
    }else if (age == 18){
        return " you are a teenager ";
    }else {
        return " you are an adult ";
    }
    
}
console.log(deert(15));
console.log(deert(18));
console.log(deert(20));


    function division(a, b){
        if (b != 0){
            return "result = " + a / b;
        }else{
            return "EROR";
        }
    }
console.log(division(10, 2));


function repeat(name, times) {
    for (var i = 0; i < times; i++) {
        console.log(i + 1 + " : hello, " + name + "!");

    }

}
repeat("ismail", 5);


function count(number){
    while (number > 0) {
        console.log(number);
        number = number - 2;
    }
    console.log("Go!");
}
count(10);

var i = 0;
while (true){
    console.log("loop number: " + i);
    i++;
    if (i > 7){
        break;
    }
}

var secret = 5;
var guess = 1;

while(true) {
    console.log(" trying guess: " + guess);

    if(guess === secret) {
        console.log(" found the secret number :" + secret);
        break;
    }
    guess++;
}


function countt(limit) {

var number = 1;
while(true) {
    console.log(number)
    if (number === limit){
        break;
    
    }
number++;
}
}
countt(7); 



function counttt(limit) {
    var number = 6;
    while(true) {
        console.log(number);
        if (number === limit) {
            break;
        }
        number--;
    }
}
counttt(1);

/* */
 function calculer(a, b, operation){
    if ( operation === "+"){
        return a + b;
    } else if ( operation === "-"){
        return a - b;
    } else if ( operation === "*"){
        return a * b;
    } else if ( operation === "/"){
        return a / b;
    } else {
        return " operation invalide "
    }
 }
 console.log(calculer(10, 12,"+"));
 console.log(calculer(10, 12,"-"));
 console.log(calculer(10, 12,"*"));
 console.log(calculer(10, 12,"/"));



function counts(limit) {
    var number = 2;
    while(number <= 10) {
        console.log(number);
        number = number + 2;
        }
        
    }
counts(10);


function start(go) {
    var number = 1;
    while(true) {
        console.log(number);
        if (number === 3){
            break;
        }
        number++;
    }
}
start(1);


function sum(limit1) {
    var i = 1;
    var total = 0;
    while (i <= limit1) {
       total = total + i;
       i++;   
    } 
    console.log(total);    
    }
sum(10);


function summ(limitt) {
    var y = 2;
    var totall = 0;
    while(y <= limitt) {
        totall = totall + y;
        y = y + 2;
    }
    console.log(totall);
}
summ(10);


function dome(limt) {
    var h = 1;
    var totl = 0;
    while(h <= limt) {
        totl = totl + h;
        h = h + 2;
    }
    console.log(totl);
}
dome(9)



function bro(limittt, type) {
    var tott = 0;
    if (type === "even") {
        var bo = 2;
        while (bo <= limittt) {
            tott = tott + bo;
            bo = bo + 2;
        }
    }else if (type === "odd") {
        var no = 1;
        while(no <= limittt) {
            tott = tott + no;
            no = no + 1;
        }
    }
    console.log(tott);
}
bro(6, "even");
bro(7, "odd");
    

