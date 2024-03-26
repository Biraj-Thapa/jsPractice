//function are the piece of code which can be reused
//function are code which are designed to perform particualr task again and again bye the user

firstNum=10;
secondNum=5;

function sum(){
    console.log(firstNum+secondNum)
}
sum()
sum()
function diff(){
    console.log(firstNum-secondNum)
}
diff()
diff()



//WE CAN RETURN VALUE IN FUNCTION
function mul(){
    return firstNum*secondNum
}
 console.log(mul())


function add(firstNumber,secondNumber){// parameters
    return firstNumber+secondNumber
}
let ans=add(100,200)//arguments
console.log(ans)


//Arrow function
//It is easy and short way to write function
const div=()=>{
    return firstNum/secondNum 
}
console.log(div())

const myName=(name)=>{
    console.log(`my name is ${name}`)
}
myName("Biraj")



