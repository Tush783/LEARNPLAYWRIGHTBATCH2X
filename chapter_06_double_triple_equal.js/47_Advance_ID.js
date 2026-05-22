let a = 10;
console.log(++a + a); //PRE INCREMENT + A
console.log(a);

let a = 10;
console.log (a++ + ++a); //10(assigned and then incremented to 11) + 12(increment from 11 to 12 and then assigned)
console.log(a);

let a = 10;
console.log(++a + ++a); //23
console.log(a); //12
//11+12 =23

let a = 5; 
console.log(a++ + ++a - --a + a-- + ++a);
console.log.apply(a);


