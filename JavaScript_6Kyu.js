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

//reversed strings
// function solve(s){
//   let openBracketCount = 0 
//   let countReversals = 0
//   for (let i=0; i<s.length; i++) {
//     const curr = s[i]
//     if (curr === "(") {
//       openBracketCount += 1
//     } 
//     else if (openBracketCount > 0 && curr === ")") {
//       openBracketCount -= 1
//     } 
//     else {
//       countReversals += 1
//       openBracketCount += 1
//     }
//   }
//   countReversals += Math.ceil(openBracketCount/2)
//   return openBracketCount%2 === 0 ? countReversals : -1
// }

//zipWith 
// function zipWith(fn,a0,a1) {
//   let arr = [];
//   const short = Math.min(a0.length, a1.length); 
//   for (let i=0;i<short;i++){
//     arr.push(fn(a0[i],a1[i]))
//   }
//   return arr
// }

// function CalculateRollingAverage(input, windowSize) {
//   const result = [];

//   let sum = 0;
//   for (let i = 0; i < windowSize; i++) {
//     sum += input[i].temperature;
//   }

//   for (let i = 0; i < input.length; i++) {
//     const rollingAverage = sum / windowSize;

//     result.push({
//       temperature: rollingAverage,
//       timestamp: input[i].timestamp
//     });

//     if (i + 1 < input.length) {
//       // slide the window
//       sum = sum - input[i - windowSize + 1].temperature + input[i + 1].temperature;
//     }
//   }

//   return result;
// }

// var maxSequence = function (arr) {
//   let maxSum = 0;
//   let currentSum = 0;

//   for (let i = 0; i < arr.length; i++) {
//     currentSum += arr[i];

//     if (currentSum > maxSum) {
//       maxSum = currentSum;
//     }

//     if (currentSum < 0) {
//       currentSum = 0;
//     }
//   }

//   return maxSum;
// };


const child = (bird1, bird2) => {
  if (bird1 === bird2) return false;
  return getDifference(bird1, bird2) < 3;
};

const grandchild = (bird1, bird2) => {
  if (bird1.length === 1 && bird2.length === 1 && bird2 !== bird1) return false;
  return getDifference(bird1, bird2) <= 4;
};

const getDifference = (bird1, bird2) => {
  let dif = 0;
  for (let i = 0; i < bird1.length; i++) {
    if (bird1[i] !== bird2[i]) dif++;
  }
  return dif;
};


function canalMania(lowQueue, highQueue, lockLength) {
  let total = 0;
  while (lowQueue.length || highQueue.length) {
    let boatlen = 0;
    while (lowQueue.length && boatlen + lowQueue[0] <= lockLength) boatlen += lowQueue.shift();
    total += boatlen * 2 + 2;
    boatlen = 0;
    while (highQueue.length && boatlen + highQueue[0] <= lockLength) boatlen += highQueue.shift();
    total += boatlen * 2 + 2;
  }
  return total;
}