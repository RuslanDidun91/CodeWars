//Highest and Lowest
// function highAndLow(numbers){
//     let temp = numbers.split(' ');
//     temp.sort(function(a,b){
//         return a-b;
//     });
//     return  temp[temp.length-1] + ' ' + temp[0];
// }

//iq test
// function iqTest(numbers){
//
//     numbers = numbers.split(" ").map(function(el){return parseInt(el)});
//
//     let odd = numbers.filter(function(el){ return el % 2 === 1});
//     let even = numbers.filter(function(el){ return el % 2 === 0});
//
//     return odd.length < even.length ? (numbers.indexOf(odd[0]) + 1) : (numbers.indexOf(even[0]) + 1);
// }

//Regex validate PIN code
// function validatePIN(pin) {
//     const checkLength = pin.length === 4 || pin.length === 6;
//
//     const numMatch = /^[0-9]/g
//     let er = /^-?[0-9]+$/;
//     if (er.test(pin)) {
//         if (checkLength && pin.match(numMatch)) {
//             return true;
//         }
//     }
//     return false;
// }

//Exes and Ohs
// function XO(str) {
//     str = str.toLowerCase();
//
//     let arrayOfCharacters = str.split("");
//
//     let countX = arrayOfCharacters.reduce( function( n, val ) {
//         return n + (val === 'x');
//     }, 0);
//
//     let countO = arrayOfCharacters.reduce( function( n, val ) {
//         return n + (val === 'o');
//     }, 0);
//
//     if ( countX == countO ) {
//         return true;
//     } else {
//         return false;
//     }
// }

//Sum of two lowest positive integers

//sum of two lowest positive integers
// let arrayNumbers = [5, 10, 7, -5, 1, -7];
// arrayNumbers.sort(function(a, b) {
//     return a - b;
// });
//
// for( var i = 0; i < arrayNumbers.length; i= i + 1 ){
//     var total = 0;
//     total = total + arrayNumbers[i];
//
// }
//
// const sumTwoSmallestNumbers = (numbers) => {
//
//     let ordered = numbers.sort(function (a, b) {
//         return a - b;
//     });
//
//     let result = 0;
//     for (let i = 0; i < ordered.length; i++) {
//         if (i === 0) {
//             result = result + ordered[0];
//             console.log(result);
//         }
//         if (i === 1) {
//             result = result + ordered[1];
//             console.log(result);
//         }
//     }
//     return result;
// };

//shortest word
// function findShort(s){
//     let stringArray = s.split(" ");
//     let orderedArray = stringArray.sort((a, b) => {
//         return a.length - b.length;
//     })
//     return orderedArray[0].length;
//
// }

//chain me
// function chain(v, fns) {
//     return fns.reduce(function(v, fn) { return fn(v) }, v);
// }

//Product Array
// function productArray(numbers){
//     return numbers.map(el => numbers.reduce((prev,curr) => prev * curr) / el)
// }

// const nums = [100, 5, 23, 15, 21, 72, 9, 45, 66, 7, 81, 90];
// let fizz = [];
// let buzz = [];
// let fizzbuzz = [];
//
// nums.forEach((el) => (el % 3 === el % 5) ? fizz.push(el)
//     : (el % 3 === 0) ? buzz.push(el)
//         : (el % 5 === 0) ? fizzbuzz.push(el) : el)
//
// //alternative syntax
// nums.forEach((el) => {
//     if (el % 3 === el % 5) {
//         fizz.push(el)
//     }
//     else if( el % 3 === 0) {
//         buzz.push(el)
//     }
//     else if (el % 5 === 0) {
//         fizzbuzz.push(el)
//     }
// })
//
// console.log(fizz);
// console.log(buzz);
// console.log(fizzbuzz);

//isPalindrome
//const isPalindrome = (str) => {
//     let re = /[\W_]/g;
//     let string = str.toLowerCase().replace(re, '')
//     let newStr = string.split('').reverse().join('')
//     return newStr === string || string.length === 0 || string.length === 1 || string === '';
// }

//hamming distance
// const hammingDistance = (str1, str2) => {
//     if (str1.length !== str2.length) {
//         return NaN;
//     } else {
//         let num = 0;
//         for (let i = 0; i < str1.length; i++){
//             if(str1.charAt(i) !== str2.charAt(i)) num++;
//         }
//         return num;
//     }
// }

//format with padding
// const formatWithPadding = (int, char, len) => {
//     let number = int.toFixed(0);
//     while (number.length < len) {
//         number = char + number;
//     }
//     return number
// }
//
// console.log(formatWithPadding(5, 0, 10))

//returns new char * position[i]
// const mumble = (str) => {
//    return Array.from(str, (c, i) =>
//        `${c}${c.repeat(i)}`).join('-');
// }
// console.log(mumble(''));
// console.log(mumble('a'));
// console.log(mumble('xyz'));

// return object from array
// const fromPairs = (array) => {
//     let obj = {}
//     array.forEach((pair) => {
//         obj[pair[0]] = pair[1]
//     });
//     return obj;
// }

//merge 2 objects
// const mergeObjects = (obj1, ...obj2) => {
//     return Object.assign(obj1, ...obj2);
// }

// flatten arrays
// const flatten = (arr) =>
//     arr.reduce((a, b) => a.concat(Array.isArray(b) ? flatten(b) : b), [])
//
// const flatten = (arr)  => {
//     return Array.isArray(arr) ? [].concat(...arr.map(flatten)) : arr;
// }

// is price numbers
// const primeFactors = (x) => {
//     const arr = [];
//     if (!Number.isInteger(x)) return arr
//     let divisor = 2;
//     while (x >= 2) {
//         if (x % divisor === 0) {
//             x = x / divisor
//             arr.push(divisor)
//         } else {
//             divisor++
//         }
//     }
//     return arr
// }

//array intersection
// const intersection = (arr1, arr2) => {
//     let newArr = []
//     arr1.forEach(el => {
//         if (arr2.includes(el)) {
//             newArr.push(el)
//             arr2.splice(el, 1)
//         }
//     })
//     return newArr
// }

//are brackets balanced
// function balancedBrackets(str) {
//   let a = [];
//   return str.split('')
//       .every(c => '([{'.includes(c) ? a.push(c)
//           : '() {} []'.includes(a.pop() + c)) && a.length === 0;
// }

//check for winning ticket
// const isWinningTicket = (arr) => {
//     return arr.every(el => {
//         return el[0].includes(String.fromCharCode(el[1]))
//     })
// }

//getting proper IP address
// function getNumForIP(ip) {
//     let chunks = ip.split('.').reverse();
//     let sum = 0;
//     chunks.forEach(function(chunk, idx) {
//         sum += parseInt(chunk) * 256**idx;
//     });
//     return sum;
// }

//easy wallpaper
// function wallpaper (length, width, height) {
//     if (length === 0 || width === 0) return 'zero'
//
//     const roomArea = 2 * (length + width) * height
//     const rollArea = 0.52 * 10
//
//     const rollsRequired = Math.ceil(roomArea / rollArea * 1.15)
//     return numbers[rollsRequired]
// }

/* efficient solution - leveraging the sorted array */
// function addChecker(nums, total) {
//   let result = false;
//   let start = 0
//   let end = nums.length - 1;
//   while (start < end) {
//     let sum = nums[start] + nums[end];
//     if (sum === total) return true;
//     sum < total ? start++ : end--;
//   }
//   return result;
// }

//array checker
// const addChecker = (int, sum) => {
//     equals = false;
//     for (let i = 0; i < int.length - 1; i++) {
//         for (let y = i + 1; y < int.length; y++){
//             if (int[i] + int[y] === sum) return true;
//         }
//     }
//     return equals
// }

//is string isogram
// function isIsogram(str){
//     return !str.match(/([a-z]).*\1/i);
// }

//function contact(hallway) {
//   let res = hallway.match(/>-{0,}</g)?.map(e => Math.floor(e.length/2));
//   return res ? Math.min(...res) : -1;
// }


// highest num from array that not presented in arr
// function solution(A) {
//   const filtered = A.filter((num, i) => {
//       return A.indexOf(num) === i
//   });
//   const sorted = filtered.sort((a, b) => {
//       return a - b});
//   const result = sorted.map((num, i) => {
//       if (num > 0 && sorted[i + 1] !== sorted[i] + 1) {
//           return sorted[i] + 1
//       }
//   }).filter(num => num !== undefined)[0]
//   return result === undefined ? 1 : result
// }


// function collatz(n) {
//   let count = 1
//   while (n > 1) {
//       n = n % 2 ? 3 * n + 1 : n / 2
//       count++
//   }
//   return count
// }

// const freqSeq = (str, sep) =>
//   [...str].map((el, i, arr) => arr.filter(el1 => el1 === el).length).join(sep)


// const createDict = (keys, values) => {
//   let result = {}
//   for (let i = 0; i < keys.length; i++) {
//     if (i < values.length) {
//       result[keys[i]] = values[i]
//     } else {
//       result[keys[i]] = null
//     }
//   }
//   return result
// }

// function createDict(keys, values){
//   let dict = {}
//   keys.map((el, i , arr) => dict[el] = values[i] != undefined ? values[i] : null);
//   return dict;
// }

// generate nums between 0 and 10000
// const seedNums = () => {
//   let nums = Array.from({ length: 10000 }, (_, i) => i + 1)
//   for (let i = nums.length - 1; i > 0; i--) {
//     let j = Math.floor(Math.random() * (i + 1));
//     let temp = nums[i];
//     nums[i] = nums[j];
//     nums[j] = temp;
//   }
//   return nums
// }

// function findProduct(arr) {
//   let left = 1;
//   let product = [];
//   for (let i = 0; i < arr.length; i++) {
//     product[i] = left;
//     left *= arr[i];
//   }
//   let right = 1;
//   for (let i = arr.length - 1; i >= 0; i--) {
//     product[i] *= right;
//     right *= arr[i];
//   }
//   return product;
// }