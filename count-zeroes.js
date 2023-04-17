function countZeroes(arr) {
    let zeroIdx = divideArr(arr);
    if (zeroIdx === -1) {
        return 0;
    }

    return arr.length - zeroIdx;
}

function divideArr(arr, min = 0, max = arr.length - 1) {
    //Avoiding invalid values and ensuring single digit arrays.
    if (max >= min) {
        //Setting a mid-point of the array.
        let mid = min + Math.floor((max - min) / 2);
        //Determining the end of the loop to find the first 0.
        if ((mid === 0 || arr[mid - 1] === 1) && arr[mid] === 0) {
            return mid;
        } else if (arr[mid] === 1) {
            //Recursively calling the function with the mid-point moved up one index.
            return divideArr(arr, mid + 1, max);
        }
        //Recursively moving down by one index from the mid-point.
        return divideArr(arr, min, mid - 1);
    }
    //Returning false value to end the loop and return that no zeroes are in the array.
    return -1;
}

module.exports = countZeroes