function findFloor(arr, num, min = 0, max = arr.length - 1) {
    if (min > max) return -1;
    if (num >= arr[max]) return arr[max];

    let mid = Math.floor((min + max) / 2);

    if (arr[mid] === num) return arr[mid];

    if (mid > 0 && arr[mid - 1] <= num && num < arr[mid]) {
        return arr[mid - 1];
    }

    if (num < arr[mid]) {
        return findFloor(arr, num, min, mid - 1);
    }

    return findFloor(arr, num, mid + 1, max);
}

module.exports = findFloor