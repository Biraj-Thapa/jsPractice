// A closure is the combination of a function bundled together (enclosed) with references to its surrounding state (the lexical environment
// Closures are automatically created every time a function is defined in JavaScript.
// 
function Outer(){
    let a=5;
    function inner1(){
        console.log(a)
    }
    function inner2(){
        console.log(a+5)
    }
    console.log("hello");
    inner1();
    inner2();
}
Outer()
