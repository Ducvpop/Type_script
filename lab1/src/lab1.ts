const arrNum = [13, 1, 3, 5, 8, 2];
const arrString = ["lw", "rw", "cam","cf","cdm","cm", "gk","cb","lb","rb","st"];

function selectionSort<T>(arr: T[], callback?: (a: T, b: T) => boolean) {
    for (let i = 0; i < arr.length - 1; i++) {
      for (let j = i + 1; j < arr.length; j++) {
        if (callback(arr[i], arr[j])) {
          let temp = arr[i];
          arr[i] = arr[j];
          arr[j] = temp;
        }
      }
    }
  }
  
  selectionSort<number>(arrNum, (a, b) => a > b);
  console.log(arrNum);
  selectionSort<string>(arrString, (a, b) => a > b);
  console.log(arrString);