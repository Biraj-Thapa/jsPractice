// array are varibale which can store more than one same or different type of value
// array are written i side [] and each element is sepearted by ,
//Each value in the array is called element
//array start from 0 index 
const arr=[1,2,"Ram",'Shyam'];
console.log(arr[0]);
console.log(arr[3]);
console.log(arr[4]);// it results in undefined as that element doesnot exists in array

console.log(arr.length)//to find the length of array
//different array methods

//length
const arr2=[1,2,3,4,5,6]
console.log(arr2.length)

//at

console.log(arr2.at(2))

//join
console.log (arr2.join("+")) //the result after this is string

//push 
const arr3=["Ram","Shyam","Hari","Geeta"]
arr3.push("senorita")
console.log(arr3)

//pop
arr3.pop()//last ko element lai hatiedinxa
console.log(arr3)

//shift
arr3.shift()
console.log(arr3)//removes first ko element

//unshift
arr3.unshift("Krishna")//add element in 0 index
console.log(arr3)

//concat
const arr4=[1,2,3,4,5]
console.log(arr4.concat(arr3))//2uita array lai jodxa

//splice
const arr5=[1,2,3,4,5,6]
const arr6=arr5.splice(0,2)
console.log(arr5)
console.log(arr6)

//slice
const arr7=[1,2,3,4,5,6]
const arr8=arr7.slice(0,2)
console.log(arr7)
console.log(arr8)











