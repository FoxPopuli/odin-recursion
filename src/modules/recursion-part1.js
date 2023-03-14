const fibs = (num) => {

    const fibArr = [0, 1];
    while(num > fibArr.length) {
        fibArr.push(fibArr[fibArr.length - 1] + fibArr[fibArr.length - 2])
    }

    return fibArr;
}

const fibsRec = (num) => {
    if (num === 1) return [0];
    if (num === 2) return [0, 1];
    let a = fibsRec(num - 1);
    a.push(a[num - 2] + a[num - 3]);
    return a
}


export {fibs, fibsRec};
