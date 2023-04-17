function findRotationCount(arr, min = 0, max = arr.length - 1) {
    if (max < min) return 0;
    if (max === min) return min;
    let mid = Math.floor((min + max) / 2);

    if (mid < max && arr[mid + 1] < arr[mid]) {
        return mid + 1;
    }

    if (mid > min && arr[mid] < arr[mid - 1]) {
        return mid;
    }

    if (arr[max] > arr[mid]) {
        return findRotationCount(arr, min, mid - 1);
    }

    return findRotationCount(arr, mid + 1, max);
}

module.exports = findRotationCount