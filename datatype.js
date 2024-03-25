//primitive
//Number
const age=20;
const roll=30;
//all of them are numbers whch have numeric value

//String

const name="Biraj";
const symbolNo='twenty';
//any thing inside single quotes or double quotes are string

//Boolean
const isMale= true;
const isFemale=false;
//Boolean are datatype which gives ture or false value

//undefined

let marks;
console.log(marks)

//such variable which are declared but not given value falls under undefined that means they are not defined

//null

const yourName= null;
console.log(yourName)

//simply null means empty

//bigInt

const biggy= 1234567890n
console.log(biggy)

//bigInt is specially for big intergers numbers and we add n at last  of the number to make it big int

//symbol

const sym= Symbol("Biraj")
console.log(sym)

//symbol are used to create object that are always unique

//nonPrimitiveDatatype

//Array

const arr=[1,2,3,4,5]
const ages=[20,22,23]
const gods=["ram","krishna","shiva"]

//array are used to store more than one elemnt in single name

//object

const hero1={
    name:"biraj", //always in key value pair and seperated by comma
    age:20,
    clas:3,
}
const hero2={
    name:"Thapa",
    age:30,
    clas:3
}

//objects are used to store collection of data

//notes:
// we can find the data types by use typeof operator
console.log(typeof age)
console.log(typeof hero2)
console.log(typeof biggy)
console.log(typeof yourName) //type of null is always an object 






