function convertToF(celsius) {
    var fahrenheit;

    fahrenheit = (celsius *(9/5)) +32;
    return fahrenheit;
}

console.log(convertToF(30));

function convertToC(fahrenheit1) {
    var celsius1;
    celsius1 = (fahrenheit1 -32)/1.8;
    return celsius1;
}

console.log(convertToC(100))

function addPY(string){
    
    if (string.startsWith("Py")) {
        return string
    }
    else {
        var newStr;
        return newStr ="Py" + string
    }
}

console.log(addPY("thon"));

function triangle(num){
    var number;
    number = "";
    for (var i = 0 ; i <= num ; i++){
        for (var j = 1 ; j <= i; j++){
            console.log (number += "*") ;
        } 
    }
    return number + "\n";
}

console.log(triangle(2));