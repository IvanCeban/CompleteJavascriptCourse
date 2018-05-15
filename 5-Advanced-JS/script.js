/////////// Function constructor ///////////////////////////////////

//var john = {
//    name: 'John',
//    yearOfBirth: 1990,
//    job: 'teacher'
//};
/*
var Person = function(name, yearOfBirth, job) {
    this.name = name;
    this.yearOfBirth = yearOfBirth;
    this.job = job;
}

Person.prototype.calculateAge = function() {
    console.log(2018 - this.yearOfBirth);
}


Person.prototype.lastName = 'Smith';
var john = new Person('John', 1990, 'teacher');
john.calculateAge();

var jane = new Person('Jane', 1969, 'designer');
jane.calculateAge();

var mark = new Person('Mark', 1948, 'retired');
mark.calculateAge();

console.log(john.lastName, jane.lastName, mark.lastName);

*/
////////////////////////////////////////////////////////////////////////////////////


/////////////// Object.create/////////////////////////
/*
var personProto = {
    calculateAge: function() {
        console.log(2018 - this.yearOfBirth);
    }
}

var john = Object.create(personProto);
john.name = 'John';
john.yearOfBirth = 1990;
john.job = 'Teacher';

var jane = Object.create(personProto, {
    name: { value: 'Jane' },
    yearOfBirth: { value: 1969 },
    job: { value: 'designer' }
})
*/


///////////////////////// Primitives vs Objects////////////////////////
/*
var a = 23;
var b = a;
a = 46;

console.log(a);
console.log(b);

////////////////////////////////////////////////////////////////////////////////////

////////////////// Objects/////////////////////////
var obj1 = {
    name: 'John',
    age: 26
};

var obj2 = obj1;
obj1.age = 30;

console.log(obj1.age);
console.log(obj2.age);
////////////////////////////////////////////////////////////////////////////////////

///////////////////////////// Functions //////////////////////////////////

var age = 27;
var obj = {
    name: 'Jonas',
    city: 'Lisbon'
};

function change(a, b) {
    a = 30;
    b.city = 'San Francisco';
}

change(age, obj);

console.log(age);
console.log(obj.city);

*/
////////////////////////////////////////////////////////////////////////////////////


////////////////////// Passing functions as arguments ////////////////////////////
/*
var years = [1990, 1965, 1937, 2005, 1998];


function arrayCalc(arr, fn) {
    var arrRes = [];
    for(var i = 0; i < arr.length; i++) {
        arrRes.push(fn(arr[i]));
    }
    
    return arrRes;
}

function calculateAge(el) {
    return 2018 - el;
}

function isFullAge(el) {
    return el >= 18;
}

function maxHeartRate(el) {
    
    if(el >= 18 && el <= 81) {
        return Math.round(206.9 - (0.67 * el));
    } else {
        return -1;
    }
    
}

var ages = arrayCalc(years, calculateAge);
console.log(ages);

var fullAges = arrayCalc(ages, isFullAge);
console.log(fullAges);

var heartRate = arrayCalc(ages, maxHeartRate);
console.log(heartRate);
*/
////////////////////////////////////////////////////////////////////////////////////


/////////////// Function returning function ////////////////
/*
function interviewQuestion(job) {
    if(job === 'designer') {
        return function(name) {
            console.log(name + ', can you please explain what UX design is?');
        }
    } else if (job === 'teacher') {
        return function(name) {
            console.log('what subject do you teach? ' + name);
        }
    } else {
        return function(name) {
            console.log('Hello, ' + name + ' what do you do?');
        }
    }
}


var teacherQuestion = interviewQuestion('teacher');

teacherQuestion('John');


var designerQuestion = interviewQuestion('designer');
designerQuestion('Bill');

designerQuestion('Jane');

interviewQuestion('teacher')('Mark');


*/
////////////////////////////////////////////////////////////////////////////////////



///////////////////// IIFE /////////////////////////
//
//function game() {
//    var score =Math.random() * 10;
//    console.log(score >= 5);
//}

//game();
/*
(function() {
    var score = Math.random() * 10;
    console.log(score >= 5);
})();


(function(goodLuck) {
    var score = Math.random() * 10;
    console.log(score >= 5 - goodLuck);
})(5);

*/

////////////////////////////////////////////////////////////////////////////////////

////////// Closures ///////////////
/*
function retirement(retirementAge) {
    var a = ' years left untill retirement';
    return function(yearOfBirth) {
        var age = 2018 - yearOfBirth;
        console.log((retirementAge - age) + a);
    }
}

var retirementUS = retirement(66);
var retirementGermany = retirement(65);
var retirementIceland = retirement(67);


retirementUS(1990);
retirementGermany(1990);
retirementIceland(1990);
*/

/*
function interviewQuestion(job) {

    if(job === 'designer') {
        return function(name) {
            console.log(name + ', can you please explain what UX design is?');
        }
    } else if (job === 'teacher') {
        return function(name) {
            console.log('what subject do you teach? ' + name);
        }
    } else {
        return function(name) {
            console.log('Hello, ' + name + ' what do you do?');
        }
    }
}

*/
/*
function interviewQuestion(job) {
    return function(name) {
        if(job === 'designer') {
            console.log(name + ', can you please explain what UX design is?');
        } else if (job === 'teacher') {
            console.log('what subject do you teach, ' + name + '?');
        } else {
            console.log('Hello, ' + name + ' what do you do?');
        }
    }
}

var interview = interviewQuestion('designer');
interview('John');
interviewQuestion('teacher')('Mike');
*/
////////////////////////////////////////////////////////////////////////////////////



////////////////////// Bind, call and apply ///////////////////
/*
var john = {
    name: 'John',
    age: 26,
    job: 'teacher',
    presentation: function(style, timeOfDay) {
        if(style === 'formal') {
            console.log('Good ' + timeOfDay + ' ladies and gentlemen! I\'m ' + this.name + '. I\'m a ' + this.job + ' and I\'m ' + this.age+ ' years old');
        } else if (style === 'friendly') {
            console.log('Hey, what\'up? I\'m ' + this.name + '. I\'m a ' + this.job + ' and I\'m ' + this.age+ ' years old. Have a nice ' + timeOfDay + '.' );
        }
    }
}

var emily = {
    name: 'Emily',
    age: 35,
    job: 'designer'
}

john.presentation('formal', 'morning');

john.presentation.call(emily, 'friendly', 'afternoon');

//john.presentation.apply(emily, ['friendly', 'afternoon']);

var johnFriendly = john.presentation.bind(john, 'friendly');

johnFriendly('morning');

johnFriendly('night');

johnFriendly('evening');

var emilyFormal = john.presentation.bind(emily, 'formal');
emilyFormal('night');



var years = [1990, 1965, 1937, 2005, 1999];

function arrayCalc(arr, fn) {
    var arrRes = [];
    for(var i = 0; i < arr.length; i++) {
        arrRes.push(fn(arr[i]));
    }
    return arrRes;
}

function calculateAge(el) {
    return 2018 - el;
}

function isFullAge(limit, el) {
    return el >= limit;
}
 var ages = arrayCalc(years, calculateAge);

var fullJapain = arrayCalc(ages, isFullAge.bind(this, 20));

console.log(ages);
console.log(fullJapain);
*/
////////////////////////////////////////////////////////////////////////////////////


(function() {
    function Question(question, answers, correct) {
        this.question = question;
        this.answers = answers;
        this.correct = correct;
    }

    var weather = new Question('How is the weather today?', ['sunny', 'rain', 'wind'], 1);
    var month = new Question('What month is now?', ['January', 'March', 'May'], 3);
    var year = new Question('What year is now?', [1990, 2018, 2025], 2);

    var questionsArr = [weather, month, year];
        
    Question.prototype.displayQuestion = function() {
        console.log(this.question);
        for(var i = 0; i<this.answers.length; i++) {
            console.log((i+1) + ': ' + this.answers[i]);
        }
    }
    
    Question.prototype.checkAnswer = function(answer, callback) {
        var sc;
        if(answer === this.correct) {
            console.log('Correct! \n');
            sc = callback(true);
        } else {
            console.log('Opps, you failed... \n');
            sc = callback(false);
        }   

        this.displayScore(sc);
    }
    
    Question.prototype.displayScore = function(sc){
        console.log('Your current score is: ' + sc);
        console.log('===============================');
    }
    
    
    function score() {
        var sc = 0;
        return function(correct) {
            if(correct) {
                sc++;
            } else {
                sc--;
            }
            return sc;
        }
    }
    var keepScore = score();
    
    function nextQuestion() {
        var question = questionsArr[Math.floor(Math.random() * questionsArr.length)];
        question.displayQuestion();

        var answer = prompt('Your answer is: ');

        if(answer !== 'exit') {
            question.checkAnswer(parseInt(answer), keepScore);
            nextQuestion();
        }
    }
    
    nextQuestion();
    
})();











