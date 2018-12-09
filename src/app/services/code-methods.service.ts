import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CodeMethodsService {

  public codes = {
insertionSort: `function insertionSort(array) {
  for(let i = 1, j; i < array.length; i++) {
    let temp = array[i];
    for(let j = i - 1; j >= 0 && array[j] > temp; j--) {
      array[j+1] = array[j];
    }
    array[j+1] = temp;
  }
  return array;
}`,
selectionSort: `function selectionSort(array) {
  for(let i = 0; i < array.length; i++){
    let mi = i;
    for(let j = i + 1; j < array.length; j++) {
      if(array[j] < array[mi]) mi = j;
    }
    let temp = array[i];
    array[i] = array[mi];
    array[mi] = temp;
  }
  return array;
}`,
bubbleSort: `function bubbleSort(array) {
  let length = array.length;
  for (let i = 0; i < length; i++) { 
    for (let j = 0; j < (length - i - 1); j++) {
      if(array[j] > array[j+1]) {
        let tmp = array[j];
        array[j] = array[j+1];
        array[j+1] = tmp;
      }
    }       
  }
  return array;
}`,
combSort: `function combSort(array) {
  let interval = Math.floor(array.length/1.3);
  while (interval > 0) {
    for(let i=0; i+interval<array.length; i+=1) {
      if (array[i] > array[i+interval]) {
        let small = array[i+interval];
        array[i+interval] = array[i];
        array[i] = small;
      }
    }
    interval = Math.floor(interval/1.3);
  }
  return array;
}`,
mergeSort: `function mergeSort(left_part, right_part) {
  let i = 0;
  let j = 0;
  let results = [];

  while (i < left_part.length || j < right_part.length) {
    if (i === left_part.length) {
      results.push(right_part[j]);
      j++;
    } 
      else if (j === right_part.length || left_part[i] <= right_part[j]) {
      results.push(left_part[i]);
      i++;
    } else {
      results.push(right_part[j]);
      j++;
    }
  }
  return results;
}`,
heapSort: `function heapRoot(array, i) {
  let left = 2 * i + 1;
  let right = 2 * i + 2;
  let max = i;

  if (left < array.length && array[left] > array[max]) {
    max = left;
  }

  if (right < array.length && array[right] > array[max])     {
    max = right;
  }

  if (max != i) {
    swap(array, i, max);
    heapRoot(array, max);
  }
}

function swap(array, index_A, index_B) {
  let temp = array[index_A];

  array[index_A] = array[index_B];
  array[index_B] = temp;
}

function heapSort(array) {
  let array_length = array.length;
  for (let i = Math.floor(array_length / 2); i >= 0; i -= 1) {
    heap_root(array, i);
  }

  for (i = array.length - 1; i > 0; i--) {
    swap(array, 0, i);
    array_length--;
    heap_root(array, 0);
  }
}`,
quickSort: `function quickSort(origArray) {
  if (origArray.length <= 1) { 
    return origArray;
  } else {

    let left = [];
    let right = [];
    let newArray = [];
    let pivot = origArray.pop();
    let length = origArray.length;

    for (let i = 0; i < length; i++) {
      if (origArray[i] <= pivot) {
        left.push(origArray[i]);
      } else {
        right.push(origArray[i]);
      }
    }

    return newArray.concat(quickSort(left), pivot, quickSort(right));
  }
}`,
radixSort: `function radixSort(array, maxDigitSymbols) {
  let counter = [[]];
  let mod = 10;
  let dev = 1;
  for (let i = 0; i < maxDigitSymbols; i++, dev *= 10, mod *= 10) {
    for (let j = 0; j < array.length; j++) {
      let bucket = parseInt((array[j] % mod) / dev);
      if (counter[bucket] == null ) {
        counter[bucket] = [];
      }
      counter[bucket].push(array[j]);
    }
    let pos = 0;
    for (let j = 0; j < counter.length; j++) {
      let value = null ;
      if (counter[j] != null ) {
        while ((value = counter[j].shift()) != null ) {
          array[pos++] = value;
        }
      }
    }
  }
  return array;
}`,
timSort: `function timSort(array) {
  array.sort()
}`,
countingSort: `function countingSort(arr, min, max)
{
  let i, z = 0, count = [];

  for (i = min; i <= max; i++) {
    count[i] = 0;
  }

  for (i=0; i < arr.length; i++) {
    count[arr[i]]++;
  }

  for (i = min; i <= max; i++) {
    while (count[i]-- > 0) {
      arr[z++] = i;
    }
  }
return arr;
}`,
binarySearch: `function binarySearch(arr, target) {
  let left = 0;
  let right = arr.length - 1;
  while (left <= right) {
    const mid = left + Math.floor((right - left) / 2);
    if (arr[mid] === target) {
      return mid;
    }
    if (arr[mid] < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
  return -1;
}`,
linearSearch: `function linearSearch(array, toFind){
  for(let i = 0; i < array.length; i++){
    if(array[i] === toFind) return i;
  }
  return -1;
}`,
bogoSort: `function Bogosort(arr){
  var isSorted = function(arr){
      for(var i = 1; i < arr.length; i++){
          if (arr[i-1] > arr[i]) {
              return false;
          }
      }
      return true;
  };

  function shuffle(arr){
      var count = arr.length, temp, index;

      while(count > 0){
          index = Math.floor(Math.random() * count);
          count--;

          temp = arr[count];
          arr[count] = arr[index];
          arr[index] = temp;
      }

      return arr;
  }

 function sort(arr){
      var sorted = false;
      while(!sorted){
          arr = shuffle(arr);
          sorted = isSorted(arr);
      }
      return arr;
  }

  return sort(arr);
}`,
  }

  constructor() { }
}
