// var can be redeclare
// var are global scoped
var name="biraj";
console.log(name);

var roll=5;
var roll=6;
console.log(roll);

{
    var age=5;
}

console.log(age)

// let cannot be redeclare 
//let are block scoped

let country="Nepal";
// let country="India"; cannot do this
county="america";
console.log(country)
{
    let a=5
    console.log(a)
}

// console.log(a) cannot do this as it i a block scoped

//const cannot be redeclared nor can be updated they are fixed value both let and var can be re updated

// they are also block scoped

const pi=3.14
// const pi=3.2 cannot do this
// pi=4 cannot do this either
console.log(pi)

{
    const c=3
    console.log(c)
    
}
// console.log(c) no baby cannot do this