function Pattern1(n) {
    for (let i = 1; i <= n; i++) {
        let pattern = '';
        for (let j = 1; j <= i; j++) {
            pattern += ' *';
        }
        console.log(pattern);
    }
}

Pattern1(5);
Pattern1(10);
