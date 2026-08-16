var x=20;
var x=10;
let y=20;
{
    {
        let y=20;
        var x=20;
        console.log(x);
        console.log(y);
        // let y="ww";
    }
}
let a=23;
let b=234;
function  add(a,b){ // function
    let sum=a+b;
    return sum;
}
add(2,4);
var add22 = function (a,b){   // function expression
    let sum=a+b;
    return sum;
} 
console.log(add22(a,b));
var g=45;
var h=4;
var subtra=(a,b) => a-b; // arrow expression
var multiply=(a,b) => a*b;
console.log(subtra(g,h));
console.log(multiply(g,h));
var s1="Once upon a time..";
var s2=20;
console.log(s1+" "+s2);
console.log(`one upon a time in ${g} tjere were 20 dones `); // template literal
