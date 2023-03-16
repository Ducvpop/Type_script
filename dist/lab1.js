var arrNum = [13, 1, 3, 5, 8, 2];
var arrString = ["lw", "rw", "cam", "cf", "cdm", "cm", "gk", "cb", "lb", "rb", "st"];
function selectionSort(arr, callback) {
    for (var i = 0; i < arr.length - 1; i++) {
        for (var j = i + 1; j < arr.length; j++) {
            if (callback(arr[i], arr[j])) {
                var temp = arr[i];
                arr[i] = arr[j];
                arr[j] = temp;
            }
        }
    }
}
selectionSort(arrNum, function (a, b) { return a > b; });
console.log(arrNum);
selectionSort(arrString, function (a, b) { return a > b; });
console.log(arrString);
