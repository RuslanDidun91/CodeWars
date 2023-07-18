// Gap in primes
// function gap(g, m, n) {
//     let lastPrime = 0;
//     let isPrime = function(x) {
//         for (let i=2; i*i<=x; i++) { if (x % i == 0) return false; } return true;
//     }
//
//     for(let i = m; i <= n; i++)
//         if(isPrime(i)) {
//             if(i - lastPrime == g) return [lastPrime, i];
//             else lastPrime = i;
//         }
//
//     return null;
// }

//Merged string checker
// function isMerge(s, part1, part2) {
//     let arr = new Array(s.length);
//     for (let i = 0; i < s.length; ++i) {
//         if (part1.indexOf(s[i]) > -1 | arr[i] === null) {
//             arr[i] = s[i];
//         }
//         if (part2.indexOf(s[i]) > -1 | arr[i] === null) {
//             arr[i] = s[i];
//         }
//     }
//     return s.length === (part1.length + part2.length) && isOrderCorrect(s, part1) && isOrderCorrect(s, part2) && arr.join('') === s;
// }
//
// function isOrderCorrect(s, part) {
//     let o = -1;
//     return part.split('').every(function (c) {
//         return (o = s.indexOf(c, o + 1)) !== -1;
//     });
// }

//Diophantine Equation
// function solequa(n) {
//     let result = [], a, b;
//     for(let a = 1;a <= Math.sqrt(n); a++) {
//         if(Number.isInteger(b = n/a)){
//             if(Number.isInteger(x = (b+a)/2)){
//                 if(Number.isInteger(y = (b-a)/4)){
//                     result.push([x, y]);
//                 }
//             }
//         }
//     }
//     return result;
// }

//Hashtag generator
// function generateHashtag(string) {
//     if (string.trim() === '') return false;
//
//     const stringWithCamelCase = string
//         .split(' ')
//         .map(word => word.charAt(0).toUpperCase() + word.slice(1))
//         .join('');
//
//     const stringWithHashtag = `#${stringWithCamelCase.trim()}`;
//
//     return stringWithHashtag.length > 140 ? false : stringWithHashtag;
// }

// function score( dice ) {
//     // Business rules of the game:
//     //  v: the dice value
//     //  c: the number of dice required to trigger the rule
//     //  p: the points added each time the rule is triggered
//     const scoringRules = [
//         {v: 1, c: 3, p: 1000},
//         {v: 6, c: 3, p: 600},
//         {v: 5, c: 3, p: 500},
//         {v: 4, c: 3, p: 400},
//         {v: 3, c: 3, p: 300},
//         {v: 2, c: 3, p: 200},
//         {v: 1, c: 1, p: 100},
//         {v: 5, c: 1, p: 50}
//     ]
//
//     // returns the score given a histogram mapping a dice value to the number of dice with that value
//     const scoreForHistogram = counts => {
//         let score = 0
//         for (const {v, c, p} of scoringRules) {
//             const ruleCount = Math.floor((counts[v] || 0) / c);
//             counts[v] -= ruleCount * c;
//             score += ruleCount * p;
//         }
//         return score;
//     };
//
//     // Generate the histogram required by scoreForHistogram
//     const counts = [...Array(7)].map(v=>0);// note that the rest of the logic uses 1-indexed arrays, so we need 7 entries to get a valid counts[6] entry
//     for (const v of dice) counts[v]++;
//
//     return scoreForHistogram(counts)
// }

// function chooseBestSum(t, k, ls) {
//     var biggestCount = 0;
//     var recurseTowns = function(townsSoFar, lastIndex) {
//         townsSoFar = townsSoFar || [];
//         //base case
//         if (townsSoFar.length === k) {
//             var sumDistance = townsSoFar.reduce((a,b)=>a+b);
//             if (sumDistance <= t && sumDistance > biggestCount) {
//                 biggestCount = sumDistance;
//             }
//             return; //EJECT
//         }
// //recursive case
//         for (var i = lastIndex + 1 || 0; i < ls.length; i++) {
//             recurseTowns(townsSoFar.concat(ls[i]), i);
//         }
//     }
//     recurseTowns();
//     return biggestCount || null;
// }

//string incrementer
// function incrementString (string) {
//     //separating number from string
//     let x = (string).replace( /^\D+/g, '');
//     //getting the length of original number from the string
//     let len = x.length;
//
//     //getting the string part from string
//     str = string.split(x);
//
//     //incrementing number by 1
//     let number = Number(x) + 1 + '';
//
//     //padding the number with 0 to make it's length exactly to original number
//     while(number.length < len){
//         number = '0' + number;
//     }
//
//     //new string by joining string and the incremented number
//     str = (str + number).split(',').join('');
//     //return new string
//     return str;
// }

// maximum array sum
// let maxSequence = function(arr){
//     let positive_index = []
//
//     arr.filter(function positive_check(element, index){
//         if(element>0){
//             positive_index.push(index);
//         }
//     })
//
//     if (positive_index.length === 0) return 0;
//
//     let sum = Array(positive_index.length).fill(null).map(() => Array(positive_index.length));
//     let max = Number.MIN_SAFE_INTEGER;
//
//     for(let i=0; i<positive_index.length; i++){
//         sum[i][i] = arr[positive_index[i]];
//         if(max < sum[i][i]){
//             max = sum[i][i];
//         }
//         if(i+1<positive_index.length){
//             sum[i][i+1] = arr.slice(positive_index[i], positive_index[i+1]+1).reduce((a,b)=>a+b);
//             if(max < sum[i][i+1]){
//                 max = sum[i][i+1];
//             }
//         }
//     }
//
//     for(let i=0; i< positive_index.length; i++){
//         for(let j=i+2; j< positive_index.length; j++){
//             sum[i][j] = sum[i][j-1] + sum[j-1][j] - arr[positive_index[j-1]];
//             if(max < sum[i][j]){
//                 max = sum[i][j];
//             }
//         }
//     }
//     return max;
// }


//linked lists
// var reorderList = function(head) {
//   if (!head || !head.next) return head;

//   let slow = head, fast = head.next;
//   const findMiddle = (slow, fast) => {
//       while (fast && fast.next) {
//           slow = slow.next;
//           fast = fast.next.next;
//       }
//       return slow;
//   }
//   slow = findMiddle(slow, fast);

//   let curr = slow.next;
//   slow.next = null;
//   const reverse = (curr) => {
//       let prev = null;
//       while (curr) {
//           [prev, curr.next, curr] = [curr, prev, curr.next];
//       }
//       return prev;
//   }
//   let second = reverse(curr);

//   let first = head;
//   const interleave = (first, second) => {
//       while (second) {
//           [first.next, second.next, first, second] = [second, first.next, first.next, second.next];
//       }
//   }
//   interleave(first, second);
// };

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

// function countColHits(k, c, [a, b]) {
//   let d = {}
//   for (let i = 2, p = 1; p <= b; i++) {
//     if (p >= a && p <= b) {
//       d[c[(p - 1) % c.length]] = d[c[(p - 1) % c.length]] + 1 || 1
//     }
//     p = p + i + k
//   }
//   let m = Math.max(...Object.values(d))
//   let r = Object.keys(d).filter(k => d[k] === m).sort()
//   return r.length ? [m, r.length > 1 ? r : r[0]] : []
// }

const maxSequence = (arr) => {
  let maxSum = 0;
  let currentSum = 0;

  for (const num of arr) {
    currentSum = Math.max(num, currentSum + num);
    maxSum = Math.max(maxSum, currentSum);
  }

  return maxSum;
};