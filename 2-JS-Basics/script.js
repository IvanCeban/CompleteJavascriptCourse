//Lecture variables
/*
var name = 'John';

var lastName = 'Smith';
console.log('Hi ' + name + ' ' + lastName);

var age = 26;
console.log(age);

var fullAge = true;
console.log(fullAge);
*/

// Lecture operators
/*
var now = 2016;
var birthDate = now - 26;
birthDate = now - 26 * 2;


console.log(birthDate);

var ageJohn = 30;
var ageMark = 30;

ageJohn = (3 + 5) * 4 - 6;

console.log(ageJohn);*/

///////////////////////////////////
// Lecture boolean logic and switch
/*
var age = 25;

if(age < 20) {
    console.log('John is a teenager');
} else if (age > 20 && age < 30) {
    console.log('John is young man');  
} else {
    console.log('John is a man');
}

var job = 'teacher';

job = prompt('What does John do?');

switch(job) {
    case 'teacher':
        console.log('John teaches kids');
        break;
    case 'driver':
        console.log('John drives a can in Lisbon');
        break;
    case 'cop':
        console.log('John helps find crime');
        break;
    default:
        console.log('John does something else');
}
*/
/*
var johnHeight = 180;
var johnAge = 38;
var mikeHeight = 190;
var mikeAge = 52;
var glennHeight = 170;
var glennAge = 31;

var johnScore = johnHeight + johnAge * 5;
var mikeScore = mikeHeight + mikeAge * 5;
var glennScore = glennHeight + glennAge * 5;

    console.log('John:' + johnScore + ' Mike:' + mikeScore + ' Gleen:' + glennScore);

if (johnScore > mikeScore && johnScore > glennScore) {
    console.log('John wins with ' + johnScore + ' points!');
} else if (mikeScore > johnScore && mikeScore > glennScore) {
    console.log('Mike wins with ' + mikeScore + ' points!');
} else if (glennScore > johnScore && glennScore > mikeScore) {
    console.log('Glenn wins with ' + glennScore + ' points!');
} else {
    console.log('no one wins :(');
}
*/

////////////////////////////
////Functions/////////
/*
function calculateAge(yearOfBirth) {
    var age = 2018 - yearOfBirth;
    return age;
}

var ageJohn = calculateAge(1990);
var ageMike = calculateAge(1969);
var ageMary = calculateAge(1948);

console.log('John is ' + ageJohn);
console.log('John is ' + ageMike);
console.log('John is ' + ageMary);

function yearsUntilRetirement(name, yearOfBirth) {
    var age = calculateAge(yearOfBirth);
    var retirement = 65 - age;
    
    if (retirement >= 0) {
        console.log(name + ' retires in ' + retirement);  
    } else {
        console.log (name + ' is already retired for ' + Math.abs(retirement) + 'years')
    }
}

yearsUntilRetirement('John', 1990);
yearsUntilRetirement('Mike', 1969);
yearsUntilRetirement('Mary', 1948);
*/

//////////////////////////////////
///////Function statements and expressions
/*
function someFun(par) {
    // function statement/ Doesn't return any value
}

var someFun = function(par) {
    // function expression (is a value)
}*/

//////////////////////////////////////
/////////Arrays//////////////
/*
var names = ['John', 'Jane', 'Mark'];
var years = new Array(1990, 1969, 1948);

console.log(names[0]);
names[1] = 'Ben';
console.log(names);

var john = ['John', 'Smith', 1990, 'designer', false];

john.push('blue');
john.unshift('Mr.');
john.pop(); // removes last element
john.shift(); // removes 1st element
console.log(john);

console.log(john.indexOf('Smith'));

if(john.indexOf('teacher') === -1) {
    console.log('John is not a teacher');
} else {
    console.log('He is a teacher');
}
*/


////////////////////////////////////////
/////////////Objects///////////////
/*
var john = {
        name: 'John',
        lastName: 'Smith',
        yearOfBirth: 1990,
        job: 'Teacher',
        isMarried: false
};
console.log(john.lastName);
console.log(john['lastName']);

var xyz = 'job';
console.log(john[xyz]);

john.lastName = 'Miller';
john['job'] = 'prorammer';
console.log(john);

var jane = new Object();
jane.name = 'Jane';
jane.lastName = 'Smith';
jane['yearOfBirth'] = 1969;
jane['job'] = 'retired';
jane['isMarried'] = true;
console.log(jane);
*/

//////////////////////////////////
///////Objects and methohds///////

/* v1.0
var john = {
        name: 'John',
        lastName: 'Smith',
        yearOfBirth: 1990,
        job: 'Teacher',
        isMarried: false,
        family: ['Jane', 'Mark', 'Bob'],
        calculateAge: function() {
            return 2018 - this.yearOfBirth;
        }
};
console.log(john.calculateAge());

var age = john.calculateAge();

john.age = age;
console.log(john);
*/

// v2.0
/*
var john = {
        name: 'John',
        lastName: 'Smith',
        yearOfBirth: 1990,
        job: 'Teacher',
        isMarried: false,
        family: ['Jane', 'Mark', 'Bob'],
        calculateAge: function() {
            //return 2018 - this.yearOfBirth;
            this.age = 2018 - this.yearOfBirth;
        }
};

john.calculateAge();
console.log(john);
*/

////////////////////////////////////
///////// Loops ///////////////////
/*
var names = ['John', 'Jane', 'Mary', 'Mark', 'Bob'];

// for

for (var i = 0; i < 10; i++) {
    console.log(i+1);
}
for (var i = names.length - 1; i >= 0; i--) {
    console.log(names[i]);
}

// while
var i = 0;
while(i < names.length) {
    console.log(names[i]);
    i++;
}
*/
var names = ['John', 'Jane', 'Mary', 'Mark', 'Bob'];
var years = [1990, 1980, 1975, 1925, 2003];
var ages = [];
var d = new Date();
var n = d.getFullYear();
var full_1 = printFullAge(years); 
var full_2 = printFullAge([1998, 2008, 1975]); 


function printFullAge(years) {
    var fullAges = [];
    for (var i=0; i<years.length; i++) {
        var age = n - years[i];
        ages.push(age);

        if(age < 18) {
            console.log('Person' + (i+1) + ' is too young, just ' + age + ' years old');
            fullAges.push(false);
        } else {
            console.log('Person' + (i+1) + ' is old, already ' + age + ' years old');
            fullAges.push(true);
        }
    }
    return fullAges;
}










