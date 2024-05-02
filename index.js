// String Manipulation Functions://

// 1. Reverse a String
function reverseString(str) {
    return str.split("").reverse().join("");
}

// 2. Count Characters
function countCharacters(str) {
    return str.length;
}

// 3. Capitalize Words
function capitalizeWords(sentence) {
    return sentence.replace(/\b\w/g, char => char.toUpperCase());
}

// Test cases for String Manipulation Functions
console.log(reverseString("hello")); // ➞ "olleh"
console.log(countCharacters("apple")); // ➞ 5
console.log(capitalizeWords("hello world")); // ➞ "Hello World"


//Array Functions//

// 1. Find Maximum and Minimum
function findMax(arr) {
    return Math.max(...arr);
}

function findMin(arr) {
    return Math.min(...arr);
}

// 2. Sum of Array
function sumArray(arr) {
    return arr.reduce((acc, curr) => acc + curr, 0);
}

// 3. Filter Array
function filterArray(arr, condition) {
    return arr.filter(condition);
}

// Test cases for Array Functions
console.log(findMax([1, 5, 3, 9, 2])); // ➞ 9
console.log(findMin([1, 5, 3, 9, 2])); // ➞ 1
console.log(sumArray([1, 2, 3, 4, 5])); // ➞ 15
console.log(filterArray([1, 2, 3, 4, 5], num => num % 2 === 0)); // ➞ [2, 4]

// Mathematical Function//

// 1. Factorial
function factorial(num) {
    if (num === 0 || num === 1) {
        return 1;
    } else {
        return num * factorial(num - 1);
    }
}

// 2. Prime Number Check
function isPrime(num) {
    if (num <= 1) {
        return false;
    }
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            return false;
        }
    }
    return true;
}

// 3. Fibonacci Sequence
function fibonacci(num) {
    const sequence = [0, 1];
    for (let i = 2; i < num; i++) {
        sequence.push(sequence[i - 1] + sequence[i - 2]);
    }
    return sequence;
}

// Test cases for Mathematical Functions
console.log(factorial(5)); // ➞ 120
console.log(isPrime(7)); // ➞ true
console.log(fibonacci(10)); // ➞ [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
