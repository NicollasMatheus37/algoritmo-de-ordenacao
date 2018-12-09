import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuxiliarService {

  constructor() {}

  heapRoot(array, i) {
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
      this.swap(array, i, max);
      this.heapRoot(array, max);
    }
  }
  
  swap(array, index_A, index_B) {
    let temp = array[index_A];
  
    array[index_A] = array[index_B];
    array[index_B] = temp;
  }

  isSorted(arr) {
    for(var i = 1; i < arr.length; i++){
        if (arr[i-1] > arr[i]) {
            return false;
        }
    }
    return true;
};

shuffle(arr){
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
}
