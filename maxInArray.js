function maxArray(arr){
    if(arr.length===0){
        return "Empty array"
    }
    let max=arr[0]
    for(i=1;i<arr.length;i++){
        if(arr[i]>max){
        max=arr[i]
        }
    }
    return max
}
console.log("the largest no in array is : ",maxArray([1,2,6,88,3,4]))

    