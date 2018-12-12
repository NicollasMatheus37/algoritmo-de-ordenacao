import { Injectable } from '@angular/core';
import { AuxiliarService } from './auxiliar.service';

@Injectable({
  providedIn: 'root'
})
export class CodesService {

  constructor(private auxiliarService: AuxiliarService) {}

  chooseCode(type, array) {
    console.log(type);
    if(type == this.insertionSort) this.insertionSort(array);
    if(type == this.selectionSort) this.selectionSort(array);
    if(type == this.bubbleSort) this.bubbleSort(array);
    if(type == this.combSort) this.combSort(array);
    if(type == this.mergeSort) this.mergeSort(array);
    if(type == this.heapSort) this.heapSort(array);
    if(type == this.quickSort) this.quickSort(array);
    if(type == this.timSort) this.timSort(array);
    if(type == this.countingSort) this.countingSort(array);
    if(type == this.binarySearch) this.binarySearch(array);
    if(type == this.linearSearch) this.linearSearch(array);
    if(type == this.bogoSort) this.bogoSort(array);
  }

  insertionSort(array) {
    for(let i = 1, j; i < array.length; i++) {
      let temp = array[i];
      for(let j = i - 1; j >= 0 && array[j] > temp; j--) {
        array[j+1] = array[j];
      }
      array[j+1] = temp;
    }
    return array;
  }

  selectionSort(array) {
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
  }

  bubbleSort(array) {
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
  }

  combSort(array) {
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
  }

  mergeSort(array) {
    let left_part, right_part
    right_part = array['right_part'];
    left_part = array['left_part'];

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
  }

  
  
  heapSort(array) {
    for (let i = Math.floor(array.length / 2); i >= 0; i -= 1) {
      this.auxiliarService.heapRoot(array, i);
    }
  
    for (let i = array.length - 1; i > 0; i--) {
      this.auxiliarService.swap(array, 0, i);
      array.length--;
      this.auxiliarService.heapRoot(array, 0);
    }
  }

  quickSort(origArray) {
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
  
      return newArray.concat(this.quickSort(left), pivot, this.quickSort(right));
    }
  }

  radixSort(getarray) {
    let array, maxDigitSymbols;
    array = getarray['array'];
    maxDigitSymbols = getarray['maxDigits'];

    let counter = [[]];
    let mod = 10;
    let dev = 1;
    for (let i = 0; i < maxDigitSymbols; i++, dev *= 10, mod *= 10) {
      for (let j = 0; j < array.length; j++) {
        let bucket = (array[j] % mod) / dev;
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
  }

  timSort(array) {
    array.sort();
  }

  countingSort(array) {
    let arr, min, max;
    arr = array['arr'];
    min = array['min'];
    max = array['max'];

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
  }

  binarySearch(array) {
    let arr, target;
    arr = array['arr'];
    target = array['target'];

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
  }

  linearSearch(arr){
    let array, toFind;
    array = arr['array'];
    toFind = arr['array'];

    for(let i = 0; i < array.length; i++){
      if(array[i] === toFind) return i;
    }
    return -1;
  }

  bogoSort(arr){
    var sorted = false;
    while(!sorted){
        arr = this.auxiliarService.shuffle(arr);
        sorted = this.auxiliarService.isSorted(arr);
    }
    return arr;
  }

  
}
