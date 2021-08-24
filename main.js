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

// Lesson objects

const deathStar = {
        diameter: 120000, //diameter is property (własność)
        fire: (target) => {
            console.log(`${target} destroyed *`)
        }, //fire is method (metoda)
        isOperating: true,
        levels: 357,
        name: 'Death Star',
        population: 10000,
        isLightOn: true,
        commander: {
            name: 'Darth Vader',
            age: 44,
        }
    }
    //console is object .log is method
    // deathStar is object .name is method
    // dot notation
    // How do the dots work? :)
console.log(deathStar.name)
console.log(console) //shows all possible methods "console"
console.log(deathStar.commander) //shows object "commander"
console.log(deathStar.commander.name) //shows the method of the object "commander"
    // method call
deathStar.fire('Rebel ship')

// bracket notation
const myProperty = 'name'

const showMyProperty = (myProperty) => {
    console.log(`Twoja własność ${myProperty} to:${deathStar[myProperty]}`);
}

showMyProperty('levels')