const numberSort = [2, 4, 6, 8, 10, 12, 16, 20, 1, 3, 5, 7, 9, 11, 13, 17, 19, 14, 15, 18, 19];
var i, j, k;
let n = numberSort.length;
for(i = n-1; i > 0; i--) {
    for(j = 0; j < i; j++) {
        if(numberSort[j] < numberSort[j+1]) {
            k = numberSort[j];
            numberSort[j] = numberSort[j+1];
            numberSort[j+1] = k;
        }
    }
}
for(i = 0; i < n; i++) {
    console.log(numberSort[i]);
} 
// 큰 수부터 정렬하는 버블 정렬
