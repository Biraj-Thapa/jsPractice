//objects are given in key value pair
//we write object inside curly brackets
//they are used to store my infromation about particular item
const obj1={
    name:"ram", //name is key and ram is value i.e key value pair
    age:30,
    class:3,
}
console.log(obj1.name)
console.log(obj1.age)

const obj2={
    name:"sita",
    age:25,
    address:{
        country:"Nepal",
        state:"Bagmati",    
    }
}

console.log(obj2.address.country)

const obj3={
    name:"senorita",
    age:30,
    sayMyName:function(){//this function inside and object are called methods
     console.log(`My name is ${this.name}`)
    }
}

console.log(obj3.sayMyName())


