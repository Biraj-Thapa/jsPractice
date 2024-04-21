function romanToInt(num) {
    const rule = {
        'I': 1,
        'V': 5,
        'X': 10,
        'L': 50,
        'C': 100,
        'D': 500,
        'M': 1000
    };

    let result = 0;
    for (let i = 0; i < num.length; i++) {
        const current = rule[num[i]];
        const next = rule[num[i + 1]];

        if (current < next) {
            result -= current;
        } else {
            result += current;
        }
    }

    return result;
}
console.log(romanToInt("I"))
console.log(romanToInt("IV"))
console.log(romanToInt("V"))
console.log(romanToInt("MI"))