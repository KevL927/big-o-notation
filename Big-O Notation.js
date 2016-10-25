//O(log(n)) Logarithmic time - When running findNthElement alone: When we double the elements of an array, the best case went up by 1 and worse case by 2;

// Finds the nth element in an array
var counter2 = 0;
var counter1 = 0;
var pushCounter = 0;
var findNthElement = function(array, n) {
	counter2++;
    if (array.length == 1) {
        return array[n];
    }

    var middle = Math.floor(array.length / 2);
    if (n < middle) {
        return findNthElement(array.slice(0, middle), n);
    }
    else {
        return findNthElement(array.slice(middle, array.length), n - middle);
    }
};

//----------------------------------------------------------------------



//  O(n) - Linear time and O(log(n)) - Logarithmic time - The for-loop inside findElement runs as much as the length of the input toFind array (If the length of the toFind array is 2, then the for-loop runs twice).
// Depending on the length of the toFind array, the findNthElement function run increments as much as the length of the toFind array.
// ex: array.length = 10; toFind.length = 1; findNthElement = 5;
// ex: array.length = 20; toFind.length = 1; findNthElement = 6;
// ex: array.length = 40; toFind.length = 1; findNthElement = 8;

// ex: array.length = 10; toFind.length = 2; findNthElement = 11;
// ex: array.length = 20; toFind.length = 2; findNthElement = 13;
// ex: array.length = 40; toFind.length = 2; findNthElement = 15;
var findElements = function(array, toFind) {
    var elements = [];
    for (var i=0; i<toFind.length; i++) {
 		counter1++;
        var element = findNthElement(array, toFind[i]);
        elements.push(element);
    	pushCounter++;
    }
    return elements;
};

findElements(Array(160), [3,4]);

console.log('findElements: ' + counter1 + ' findNthElement: ' + counter2 + ' pushCounter: ' + pushCounter + ' Equals to: ' + (counter1+counter2+pushCounter));


//----------------------------------------------------------------------

//O(1)- Constant time. How long it takes is independent of how many items. The holy grail of complexity.
// Returns whether a number is odd or even
var isOdd = function(number) {
    var remainder = number % 2;
    return remainder == 1;
};

//----------------------------------------------------------------------


// Calculates the sample autocorrelation matrix (i.e. the matrix found by
// multiplying every item in an array with every other item)

//O(n^2) - Polynomial time. As n increases, things start to get slow pretty quickly.
var counter1= 0;
var arr = [1,2,3,4,5]
var sampleAutocorrelationMatrix = function(array) {
    var matrix = [];
    for (var i=0; i<array.length; i++) {
         counter1++;
        var row = [];
        for (var j=0; j<array.length; j++) {
            counter1++;
            row.push(array[i] * array[j]);
        }
        matrix.push(row);
    }
};

sampleAutocorrelationMatrix(arr);
console.log("Cost for this function with input size " + arr.length + " is " + counter1);


//----------------------------------------------------------------------
//O(n) - Linear time. Twice as many inputs will take roughly twice as much time.

// Doubles every value in an array
var doubleArray = function(array) {
    var arr = [1, 2, 3, 4, 5];
    for (var i=0; i<array.length; i++) {
        array[i] = array[i] * 2;
    }
    return array;
};

doubleArray(arr);

//----------------------------------------------------------------------

// Calculates the nth triangle number
// This one's a challenge! :)
var triangleNumbers = function(n) {
    if (n == 0 || n == 1) {
        return n;
    }
    return triangleNumbers(n - 1) + triangleNumbers(n - 1) - triangleNumbers(n - 2) + 1;
};