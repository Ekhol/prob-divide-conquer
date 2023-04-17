function sortedFrequency(arr, num) {
    let firstIdx = divideArrFirst(arr, num);
    if (firstIdx === -1) {
        return firstIdx;
    }

    let lastIdx = divideArrLast(arr, num);
    return lastIdx - firstIdx + 1;
}

function divideArrFirst(arr, num, min = 0, max = arr.length - 1) {

    if (max >= min) {
        let mid = min + Math.floor((max + min) / 2);

        if ((mid === 0 || num > arr[mid - 1] === 1) && arr[mid] === num) {
            return mid;
        } else if (arr[mid] === 1) {

            return divideArr(arr, num, mid + 1, max);
        } else {

            return divideArr(arr, min, mid - 1);
        }
    }

    return -1;
}

function divideArrLast(arr, num, min = 0, max = arr.length - 1) {

    if (max >= min) {

        let mid = min + Math.floor((max + min) / 2);
        if ((mid === 0 || num < arr[mid - 1] === 1) && arr[mid] === num) {
            return mid;
        } else if (arr[mid] === 1) {
            return divideArr(arr, num, min, mid - 1);
        } else {
            return divideArr(arr, num, mid + 1, max);
        }
    }

    return -1;
}

module.exports = sortedFrequency