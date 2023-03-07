//     <-- CodeWars tasks -->

//min and max value
// const numbers = [1, 2, 5, 24, -55, 555, 11];
// let minValue = numbers[0]
// let k = numbers.length
// for (let i = 0; i < k; i++) {
//     if (numbers[i] < minValue) {
//         minValue = numbers[i]
//     }
// }
// console.log(minValue)

// The compare function compares all the values in the array, two values at a time (a, b).
// When comparing 40 and 100, the sort() method calls the compare function(40, 100).
// The function calculates 40 - 100 (a - b), and since the result is negative (-60),
// the sort function will sort 40 as a value lower than 100.
// const points = [1, 3, 7, -1, 50]
// let sortedPoints = points.sort(function (a, b) {
//     return a - b
// })
// console.log(sortedPoints)
//
// --------------filter and return higher numbers
// const newNumbers = [1, 3, 7, -1, 50, 100, 1000]
// let filteredNumbers = newNumbers.filter(myFunction)
//
// function myFunction(value) {
//     return value > 18
// }
//
// console.log(filteredNumbers)

//--------------squares each number and sums result
// function squareSum(numbers) {
//     let sum = 0
//     numbers.forEach(number => {
//         sum += (number * number)
//     })
//     return sum
// }

//--------------remove spaces
// function noSpace(x) {
//     return x.replace(/ /g, '')
// }

//--------------number multiply for string
// function repeatStr(num, str) {
//     let repeatedString = '' //Create an empty string that will host the repeated string
//     while (num > 0) {   //As long as times is greater than 0, the statement is executed the statement
//         repeatedString += str //Same as repeatedString = repeatedString + string;
//         num--  //Same as times = times - 1;
//     }
//     return repeatedString
// }

//--------------sum of square numbers
// function squareSumNumbers(numbers){
//     return numbers.reduce(function(sum, n){
//         return (n*n) + sum;
//     }, 0)
// }
//
// console.log(squareSumNumbers(10, 20))

//--------------prototype function inheritance
// const array = [1, 2, 3, 4, 5]
// function multiplyBy(arr,n) {
//     return arr.map(function(i){
//         return i * n
//     })
// }
// Array.prototype.multiplyBy = function (n) {
//     return this.map(function (i) {
//         return i * n
//     })
// }
// console.log(array.multiplyBy(5))

// --------------closure again
// function nameGenerator(firstName) {
//     return function (secondName) {
//         return `my name is ${firstName} ${secondName}`
//     }
// }
// --------------значение Руслан замкнуто в функции nameGenerator
// const user = nameGenerator('Ruslan')
// console.log(user('didun'))
// console.log(user('Kovalov'))
// console.log(user('mudakov'))

//--------------phrases game
// function makePhrases() {
//     var randomWords1 = ['John','Alice','Chloe','Peter','Andrew']
//     var randomWords2 = ['silly','greedy','envy','crazy','infant']
//     var randomWords3 = ['monkey','hound','elephant','boar','pig']
//     var random1 = Math.floor(Math.random() * randomWords1.length)
//     var random2 = Math.floor(Math.random() * randomWords2.length)
//     var random3 = Math.floor(Math.random() * randomWords3.length)
//     var phrase = randomWords1[random1] + ' ' + randomWords2[random2] + ' ' + randomWords3[random3]
//     console.log(phrase)
// }
// makePhrases()

//--------------cycle with output
//simple task work with arrays
// var scores = [60, 50, 60, 58, 54, 54, 58, 50, 52, 54, 48, 101,
//     34, 55, 51, 52, 44, 51, 101, 64, 66, 55, 52, 61,
//     46, 31, 57, 52, 44, 18, 41, 53, 55, 61, 51, 44, 101];
//
// var costs = [.25, .27, .25, .25, .25, .25,
//     .33, .31, .25, .29, .27, .22,
//     .31, .25, .25, .33, .21, .25,
//     .25, .25, .28, .25, .24, .22,
//     .20, .25, .30, .25, .24, .25,
//     .25, .25, .27, .25, .26, .29];
//
// function countAllScores(scores) {
//     var output;
//     var maxValue = 0
//     for (var i = 0; i < scores.length; i++) {
//         output = "Bubble solution #" + i + " score: " + scores[i];
//         console.log(output);
//         if (scores[i] > maxValue) {
//             maxValue = scores[i]
//         }
//     }
//     return maxValue
// }
// let maxValue = countAllScores(scores)
// console.log('bubbles tests:' + scores.length)
// console.log('bubbles highest value:' + maxValue)
//
// function addValuesToArray(scores, maxValue) {
//     var bestScores = []
//     for (let i = 0; i < scores.length; i++) {
//         if (scores[i] === maxValue) {
//             bestScores.push(i)
//             //alternative option
//             // bestScores[bestScores.length] = [i]
//         }
//     }
//     return bestScores
// }

// let bestScores = addValuesToArray(scores, maxValue)
// console.log('the highest values are: ' + bestScores)
// function getMostEfficientSolution(scores, costs, maxValue) {
//     var cost = 100;
//     var index;
//     for (var i = 0; i < scores.length; i++) {
//         if (scores[i] === maxValue) {
//             if (cost > costs[i]) {
//                 index = i
//                 cost = costs[i];
//             }
//         }
//     }
//     return index
// }

//rock,paper,scissors
// let mostEfficient = getMostEfficientSolution(scores, costs, maxValue)
// console.log('solution # ' + mostEfficient + ' is the most effective')
// rock, scissors, paper
// const rps = (p1, p2) => {
//     let winner = null;
//     switch(p1) {
//         case 'rock':
//             if(p2 === 'scissors')
//                 winner = 1;
//             else if (p2 ==='paper')
//                 winner = 2;
//             break;
//         case 'paper':
//             if(p2 === 'rock')
//                 winner = 1;
//             else if (p2 === 'scissors')
//                 winner = 2;
//             break;
//         case 'scissors':
//             if(p2 === 'paper')
//                 winner = 1;
//             else if (p2 === 'rock')
//                 winner = 2;
//             break;
//     }
//     if (winner !== null)
//         return console.log('Player'+' '+winner+' '+'won!')
//     return console.log('Draw!')
// };
// rps('rock', 'rock')

//validate phone number through regular expression
// function validate(phoneNumber) {
//     return phoneNumber.match(/^\d{3}-?\d{4}$/);
// }

//comparing sold(works only for numbers)
// function compareSold(colaA, colaB) {
//     return colaA.sold - colaB.sold
// }
//arrow version
// let compareSold = (colaA, colaB) => colaA.sold - colaB.sold

//comparing names
// function compareName(colaA, colaB) {
//     if (colaA.name > colaB.name) {
//         return 1;
//     } else if (colaA.name === colaB.name) {
//         return 0;
//     } else {
//         return -1;
//     }
// }

//new syntax of anonymous functions
// function done() {
//     alert("Cookies are ready, take them out to cool.");
//     console.log("Cooling the cookies.");
//
//     let cool = function () {
//         alert("Cookies are cool, time to eat!")
//     }
//     setTimeout(cool, 1000)
//
//     setTimeout(function () {
//             alert('Cookies are cool, time to eat!')
//         },
//         1000)
// }

//closure 1
// function makePassword(password) {
//     return function newFunction(passwordGuess) {
//         return (passwordGuess === password);
//     }
// }
// let tryGuess = makePassword('key')
// console.log('guess password' + tryGuess('other word'))

//closure 2
// function multN(n) {
//     return function multX(x) {
//         return n*x;
//     };
// }
// let multBy3 = multN(3)
// console.log('mult 3' + multBy3(10))

// //closure 3
// function randomString(string) {
//     return function anotherString(otherString) {
//         return string + otherString
//     }
// }
// let phrase = randomString('closure is ')
// console.log(phrase('awesome'))

//join method adding symbol to new string
// let array = [1,2,3,5,6]
// array.join('-')
// let newArray = array.join(" - ")
// console.log(newArray)

// looping through object
// const person = {
//     name: 'Ruslan',
//     sName: 'Didun',
//     role: 'programmer',
//     age: 30
// }
// let txt = ' '
// for (let x in person) {
//     txt += person[x] + ' '
// }
//
// console.log(txt)

//return array power of two
// function powerOfTwo(n) {
//     let myArray = []
//     for (let i = 0; i<= n; i++){
//         myArray.push(2**i)
//     }
//     return myArray
// }
//
// console.log(powerOfTwo(4))

//check numbers divide by two
// function divisibleByTwo (numbers,divisor) {
//     return numbers.filter(numbers => numbers % divisor === 0)
// }
//
// let result = divisibleByTwo([1,2,3,4,5,6,7,8], 2)
// console.log(result)

//methods fill() +reduce()
// const billboard = (name, price = 30) =>
//     [...new Array(name.length)].fill(price).reduce((prev,curr) => prev+curr, 0)

//concatenation of strings
// function solution(a,b) {
//     if (a.length < b.length) {
//         return  a + b + a
//     } else if ( a.length > b.length) {
//       return  b + a + b
//     }
// }
//
// let result = solution('me', 'you')
// console.log(result)

//array .from()method
// countBy = (x,n) => Array.from({length: n}, (_,index)=> x+ index *x)
// console.log(countBy(1,5))

//from() method find multiples
// function findMultiples(integer, limit) {
//     return Array.from({length: parseInt(limit / integer)}, (_,index)=> (index+1)*integer)
// }

// function digitize(n) {
//     return n.toString().split('').reverse().map(Number)
// }
//
// let result = digitize(10)
// console.log(result)

//chain methods from()
// function digitize (n) {
//     return n.toString().split('').reverse().map(Number)
// }
// function digitize(n) {
//     return Array.from(String(n), Number).reverse();
// }

// function positiveSum(arr) {
//     return arr.filter(item => item >= 0).reduce((a, b) => a + b, 0)
// }
//
// let result = positiveSum([1,2,3,4,5])
// console.log(result)

// integer between
// function between (a,b) {
//     let newArr = []
//     for (let i = a; i <= b; i++)
//         newArr.push(i)
//     return newArr
// }
//
// let result = between(1,15)
// console.log(result)

// function findMinMax (n) {
//     let minValue = [0]
//     for (let i = 0; i < n.length; i++)
//         if (n[i] < minValue) {
//             minValue = n[i]
//         }
//     return minValue
// }
//
// let result = findMinMax([-1,1,3,4,6,7,8,-10])
// console.log(result)

//sum of all integers
// function summation (num) {
// //   return num * (num +1)  / 2
//     return Array(num).fill(0).reduce((prev, _,index) => prev + index +1,0)
// }

// function arrayFromString(n) {
//     return Array.from({length: n - 1}, (v, i) => i)
// }
// console.log(arrayFromString(10))

// function contamination(text, char) {
//     return [...text].map(e => e = char).join('')
// }
// console.log(contamination('rrr', 'x'))
//
//
// const myFunction = new Function('a', 'b', 'return a * b')
// let x = myFunction(5,5)
// console.log(x)

// const array = [1,2,5,7,9,-1,11]
// let minValue = [0]
// for (let i = 0; i < array.length; i++){
//     if(minValue > array[i]){
//         minValue = array[i]
//     }
// }
//
// console.log(minValue)

// let investment = 1000;
// for(let year = 1; year < 11; year++){
//     if(year === 7){
//         investment = investment * 0.25;
//     }else{
//         investment = investment * 1.10;
//     }
//     console.log("Years: " + year + " Value: " + investment);
// }

//localStorage click counter
// function clickCounter() {
//     if (localStorage.clickcount) {
//         localStorage.clickcount = Number(localStorage.clickcount)+1;
//     } else {
//         localStorage.clickcount = 1;
//     }
//     document.getElementById("demo").innerHTML = localStorage.clickcount;
// }

//N-th power
//index = (array, n) => array[n] ** n || -1

//count sheep
// let countSheep = function (length){
//     return Array.from({length}, (x,y) => ++y + ' sheep...').join('')
// }
//
// let result = countSheep(5)
// console.log(result)

//return 5 not using numbers or operators
// function unusualFive() {
//     let value = 'plane'
//     return value.split('').length
// }

//school paperwork
// const paperwork = (n, m) =>  (n < 0 || m < 0) ? 0 : n * m;

//code block
// function getGrade (s1, s2, s3) {
//     var avg = (s1 + s2 + s3)/3;
//     switch(true) {
//         case (avg >= 90):
//             return 'A';
//         case ( avg >= 80):
//             return 'B';
//         case ( avg >= 70):
//             return 'C';
//         case ( avg >= 60):
//             return 'D';
//         default:
//             return 'F';
//     }
// }

//basic mathematics
// const basicOp = (operation, value1, value2) => eval(value1 + operation + value2)

// Exercise 11:
//   - Use the forEach method to iterate through the provided nums array and add each odd number to a new array named odds.
//   - Hint: Initialize the odds variable to an empty array before the iteration.
// const nums = [100, 5, 23, 15, 21, 72, 9, 45, 66, 7, 81, 90];
// let odds = [];
// nums.forEach(el => el % 2 === 0 ? odds.push(el) : el)
// console.log( odds);

// const numArrays = [
//     [100, 5, 23],
//     [15, 21, 72, 9],
//     [45, 66],
//     [7, 81, 90],
// ];
// let total = numArrays.flat().reduce((a, b) => a + b, 0)
// console.log(total)

//find the highest integer of 3 arguments
// const result = (a, b, c) => (a >= b && a >= c) ? a
//     : (b >= c && b >= a) ? b
//         : c
//
// console.log(result(7, 7, 7))

//is Char vovel
// function isCharAVowel (char) {
//     let result
//  result = char === "a" || char === "a" || char === "i" || char === "o" || char === "u";
//     return result
// }
//
// console.log(isCharAVowel('a'))

//sum of  not given arguments

//find reminder
// const computeRemainder = (dividend,divisor) => {
//    return (divisor === 0) ? Infinity: (dividend - divisor * parseInt(dividend / divisor))
// }
//
// console.log(computeRemainder(10,3))

//find range
// const range = (a, b) => {
//     if (a > b) {
//         return "First argument must be less than second"
//     } else {
//         let newArr = []
//         for (let i = a; i < b; i++)
//             newArr.push(i)
//         return newArr
//     }
// }
// console.log(range(15, 10))

//reversed string + uppercase
// const reverseUpCaseString = (string) => {
//     return string.toUpperCase().split('').reverse().join('').toString()
// }

//count elements in object
// const charCount = (str) => {
//     let obj = {}
//     for (let i = 0; i < str.length; i++) {
//        (obj[str[i]])? obj[str[i]] += 1 : obj[str[i]] = 1
//     }
//     return obj
// }

//countDown
// const countdown = (num) => {
//     let timer = setInterval(() => {
//         console.log(`Count: ${num}`);
//         num--;
//         if (num < 0) {
//             clearInterval(timer);
//         }
//     }, 1000);
// }
//
// countdown(4);

//string to camel case
// function toCamelCase(str) {
//     return str.replace(/[^a-zA-Z0-9]+(.)/g, (m, chr) => chr.toUpperCase());
// }

//return the number of bits binary
// const countTheBits = (int) => {
//     return int.toString(2).replace(/0/g, '').length
// }

//Cat shelves
// const solution = (start, finish, difference = finish - start) =>
//     Math.floor(difference / 3) + difference % 3

// closure counter 
// function makeCounter() {
//     let value = 0;
//     return function() {
//         return value++
//     }
// }
// makeCounter()()