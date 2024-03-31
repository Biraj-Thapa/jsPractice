function isPalindrome(num){
let strNum=num.toString();
let revNum=strNum.split("").reverse().join("")
if(strNum===revNum){
    return("Number is palindrome")
}
else{
     return("Number is not palindrome")
}

}
console.log(isPalindrome(212))
console.log(isPalindrome(1))
console.log(isPalindrome(34))
