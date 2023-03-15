const mergeSort = (arr) => {
    let n = arr.length;
    // Base case
    if (n === 1) return arr;

    // Division step
    let left = n % 2 === 0 ? arr.splice(0, n/2) : arr.splice(0, (n-1)/2);
    let right = arr;

    const leftS = mergeSort(left)
    const rightS = mergeSort(right)

    const sorted = [];
    while (leftS.length && rightS.length) {

        if (leftS[0] < rightS[0]) {
            sorted.push(leftS.shift())
        } else {
            sorted.push(rightS.shift())
        }
    }

    console.log(sorted, leftS, rightS)
    // return sorted
    return [...sorted, ...leftS, ...rightS]

}

export default mergeSort;