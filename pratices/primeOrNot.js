function checkPrime(num) {
    if(num < 2) return ("Number is not prime"); 

    for(let i = 2; i < num; i++) {
        if(num % i === 0) {
            return ("Number is not prime"); 
        }
    }
    return ("Number is prime"); 
}
console.log(checkPrime(5));
console.log(checkPrime(10));
