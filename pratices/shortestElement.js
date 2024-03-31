//1st method
let arr=[1,3,5,8,4,6,35,28]
arr.sort((a,b)=>a-b)
console.log(arr[arr.length-1])



//2nd Method
let arr2=[35,36,45,50,25,44,100]

function findLargestElement(arr) {
    if (arr.length === 0) {
        return "Array is empty";
    }

    let max = arr[0]; 
    
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i]; 
        }
    }
    
    return max;
}
console.log( findLargestElement(arr2));


