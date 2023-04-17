function findRotatedIndex(arr, num) {
    let rotation = findRotation(arr);
    if (rotation > 0 && num >= arr[0] && num <= arr[rotation - 1]) {
        return searchArr(arr, num, 0, rotation - 1);
    } else {
        return searchArr(arr, num, rotation, arr.length - 1);
    }
}

function findRotation(arr) {
    if (arr.length === 1 || arr[0] < arr[arr.length - 1]) {
        return 0;
    }

    let min = 0;
    let max = arr.length - 1;

    while (min <= max) {
        let mid = Math.floor((min + max) / 2);
        if (arr[mid] > arr[mid + 1]) {
            return mid + 1;
        } else if (arr[min] <= arr[mid]) {
            min = mid + 1;
        } else {
            max = mid - 1;
        }
    }
}

function searchArr(arr, num, min, max) {
    if (arr.length === 0) {
        return -1;
    }
    if (num < arr[min] || num > arr[max]) {
        return -1;
    }

    while (min <= max) {
        let mid = Math.floor((min + max) / 2);
        if (arr[mid] === num) {
            return mid;
        } else if (num < arr[mid]) {
            max = mid - 1;
        } else {
            min = mid + 1;
        }
    }
    return -1;
}

module.exports = findRotatedIndex