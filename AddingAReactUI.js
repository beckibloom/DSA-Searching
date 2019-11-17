//Adding a React UI

//1) Linear search
//Given the following dataset, find out how many tries it took to search for a particular item in the dataset. If the item is not in the dataset, provide a message and indicate how many searches it took to find that out.

let array = [89, 30, 25, 32, 72, 70, 51, 42, 25, 24, 53, 55, 78, 50, 13, 40, 48, 32, 26, 2, 14, 33, 45, 72, 56, 44, 21, 88, 27, 68, 15, 62, 93, 98, 73, 28, 16, 46, 87, 28, 65, 38, 67, 16, 85, 63, 23, 69, 64, 91, 9, 70, 81, 27, 97, 82, 6, 88, 3, 7, 46, 13, 11, 64, 76, 31, 26, 38, 28, 13, 17, 69, 90, 1, 6, 7, 64, 43, 9, 73, 80, 98, 46, 27, 22, 87, 49, 83, 6, 39, 42, 51, 54, 84, 34, 53, 78, 40, 14, 5]

//To implement this, I will create a React UI with a simple text input area to put the value to be searched for, with two buttons below it. The first button is "Linear search". When the button is clicked, it will do a linear search through the given array for the value using the function below:

function indexOf(array, value) {
    let ticks = 0
    for (let i = 0; i < array.length; i++) {
        ticks++
        if (array[i] == value) {
            return `Value was found after searching ${ticks} items.`;
        }
    }
    return `Value not found after searching ${ticks} items.`;
};

//The return value will be displayed directly below the "Linear search" button in the UI to show the user the result.

//2) Binary search
//Use the same front end and the dataset from the previous exercise for this exercise. Use array.sort to sort the dataset. Then implement a binary search to find a particular value in the dataset. Display how many tries it took to search for a particular item in the dataset using binary search. If the item is not in the dataset, provide a message and indicate how many searches it took to find that out.

//To implement, I will set up the UI similarly to the linear search with the following function. The return response will render below a "Binary Search" button.

function binarySearch(array, value, start, end, ticks) {
    sortedArray = array.sort

    var start = start === undefined ? 0 : start;
    var end = end === undefined ? array.length : end;
    let ticks = ticks === undefined ? 0 : ticks;

    if (start > end) {
        return `Value not found after searching ${ticks} items.`;
    }

    const index = Math.floor((start + end) / 2);
    const item = sortedArray[index];

    console.log(start, end);
    if (item == value) {
        ticks++
        return `Value found after searching ${ticks} items.`;
    }
    else if (item < value) {
        ticks++
        return binarySearch(sortedArray, value, index + 1, end, ticks);
    }
    else if (item > value) {
        ticks++
        return binarySearch(sortedArray, value, start, index - 1, ticks);
    }
};