const mergeSort = (arr) => {
    let n = arr.length;
    // Base case
    if (n === 1) return arr;



    // Division step
    let left, right;
    if (n % 2 === 0) {
        left = arr.splice(0, n/2);
    } else {
        left = arr.splice(0, (n-1)/2);
    }

    // if (left.length === 1) return left;

    right = arr;

    console.log(left, right)

    // Merge step
    // if (mergeSort(left) > mergeSort(right)) {
    //     return mergeSort(left) + mergeSort(right);
    // } else {
    //     return mergeSort(right) + mergeSort(left);
    // }

    const leftSorted = mergeSort(left)
    const rightSorted = mergeSort(right)

    if (leftSorted <= rightSorted) {
        return [...leftSorted, ...rightSorted]
    } else {
        return [...rightSorted, ...leftSorted]
    }

    // if (mergeSort(left) > mergeSort(right)) {
    //     return left.concat(right);
    // } else {
    //     return right.concat(left);
    // }

}

export default mergeSort;