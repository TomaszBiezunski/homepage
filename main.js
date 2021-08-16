const firstName = 'Tomasz';
var today = new Date();
var yr = today.getFullYear();
var yrBirth = 1979;
var age = yr - yrBirth;


// alert(`Siema, nazywam się ${firstName} i mam ${age} lata`);
console.log(firstName);
console.log(age);
console.log(`Siema, nazywam się ${firstName} i mam ${age} lata`);


function calculate(myNumber) {
    console.log(`Dostałem ${myNumber}`);
    return myNumber * 7;
}

const myResult = calculate(age);

console.log(myResult);
console.log(age);


function greetOld(age, firstName) {
    console.log(
        `Siema, nazywam się ${firstName} i mam ${age} lata`
    );
}

greetOld(age, firstName);

// (Fat) arrow function
const greet = (age, firstName) => {
    console.log(
        `Siema, nazywam się ${firstName} i mam ${age} lata`
    );
}

greet(18, 'Tomasz');



function helloWorld() {
    console.log('Witaj świecie')
}

helloWorld();