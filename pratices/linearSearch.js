function linearSearch(arr,val){
    for(i=0;i<arr.length;i++){
        if(arr[i]===val){
            return [i]
        }
    }
    return -1;
}
console.log(linearSearch([1,2,3],3))
console.log(linearSearch([1,5,8,9,3,2],1))