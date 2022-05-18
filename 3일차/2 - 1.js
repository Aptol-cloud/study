function insertionSort (numberSort) {
    for (let i = 1; i < numberSort.length; i++) {
    let k = numberSort[i];
    let j = i - 1;
    
    while (j >= 0 && numberSort[j] > k) {
        numberSort[j + 1] = numberSort[j];
        j--;
    }
    numberSort[j + 1] = k;
    }
    return numberSort;
};

console.log(insertionSort([2, 4, 6, 8, 10, 12, 16, 20, 1, 3, 5, 7, 9, 11, 13, 17, 19, 14, 15, 18, 19]));
