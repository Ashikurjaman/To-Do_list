
 let z =[];
let iq = 0;
for (let i = 1; i <= 100; i++) {
    if (i%5 == 0 && i%3 == 0 ) {
        z.push(i)
        iq+=i;
    }
    
}
console.log(z);
