// find the missing letter
// function findMissingLetter(array) {
//     let string = array.join("");
//     for (let i = 0; i < string.length; i++) {
//         if (string.charCodeAt(i + 1) - string.charCodeAt(i) != 1) {
//             return String.fromCharCode(string.charCodeAt(i) + 1);
//         }
//     }
// }

// Counting duplicates
// function duplicateCount(text){
//     let result = 0,
//         soltingObject = {};
//     text.toLowerCase().split('').map(str => {
//         if (!soltingObject.hasOwnProperty(str)) {
//             soltingObject[str] = 0;
//         } else {
//             if (soltingObject[str] === 0) {
//                 result += 1;
//             }
//             soltingObject[str] = soltingObject[str] + 1;
//         }
//     });
//     return result;
// }

// sort the odd
// function sortArray(array) {
//     const oddArr = [];
//     const evenArr = [];
//     const result = [];
//     for (let i = 0; i < array.length; i += 1) {
//         if (array[i]%2 === 0) {
//             evenArr.push(array[i]);
//         } else {
//             oddArr.push(array[i]);
//         }
//     }
//     oddArr.sort((a, b) => a - b);
//     for (let i = 0; i < array.length; i += 1) {
//         if (array[i]%2 === 0) {
//             result.push(evenArr.shift());
//         } else {
//             result.push(oddArr.shift());
//         }
//     }
//     return result;
// }

//Bit Counting
//let countBits = function(n) {
//    // make an array with the bit result
//    const base = (n).toString(2).split('');
//
//    // make a sum with the array and make the index a Number
//    const result = base.reduce((sum, num) => sum + Number(num), 0);
//
//    return result;
// };

//isPrime function
// const isPrime = (num) => {
//     return Array.from({ length: num }, (i, index) => index + 1).filter(
//         (item, i) => (num % item) === 0).length === 2;
// }

//function addChecker
// function addChecker(nums, total) {
//     let result = false;
//     for (let i = 0; i < nums.length - 1; i++) {
//         for (let j = i + 1; j < nums.length; j++) {
//             if (nums[i] + nums[j] === total) return true;
//         }
//     }
//     return result;
// }


//banking account balance
// function solution(A, D) {
//   let balance = 0;
//   let cardPayments = {};
//   for (let i = 0; i < A.length; i++) {
//       balance += A[i];
//       let month = D[i].substring(5, 7);
//       let year = D[i].substring(0, 4);
//       if (A[i] < 0) {
//           if (!cardPayments[year]) {
//               cardPayments[year] = {};
//           }
//           if (!cardPayments[year][month]) {
//               cardPayments[year][month] = {
//                   count: 1,
//                   total: -A[i]
//               }
//           }
//           else {
//               cardPayments[year][month].count++;
//               cardPayments[year][month].total -= A[i];
//           }
//       }
//   }

