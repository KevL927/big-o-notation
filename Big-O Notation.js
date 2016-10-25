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




// O(log(n)) - Logarithmic time - The for-loop inside findElement runs as much as the length of the input toFind array (If the length of the toFind array is 2, then the for-loop runs twice).
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
