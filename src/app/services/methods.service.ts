import { Injectable } from '@angular/core';
import { CodeMethodsService } from './code-methods.service';

@Injectable({
  providedIn: 'root'
})
export class MethodsService {

  public simpleMethods = [
    {name: "Insertion Sort", url: "insertion-sort", selector: "insertionSort", code: null},
    {name: "Selection Sort", url: "selection-sort", selector: "selectionSort", code: null},
    {name: "Bubble Sort", url: "bubble-sort", selector: "bubbleSort", code: null},
    {name: "CombSort", url: "comb-sort", selector: "combSort", code: null}
  ]

  public sofisticatedMethods = [
    {name: "MergeSort", url: "merge-sort", selector: "mergeSort", code: null},
    {name: "HeapSort", url: "heap-sort", selector: "heapSort", code: null},
    {name: "QuickSort", url: "quick-sort", selector: "quickSort", code: null},
    {name: "Radix Sort", url: "radix-sort", selector: "radixSort", code: null},
    {name: "TimSort", url: "tim-sort", selector: "timSort", code: null},
    {name: "Counting Sort", url: "counting-sort", selector: "countingSort", code: null}
  ]

  public searchMethods = [
    {name: "Pesquisa binária", url: "binary-search", selector: "binarySearch", code: null},
    {name: "Busca Linear", url: "linear-search", selector: "linearSearch", code: null},
    {name: "BogoBusca (BogoSort)", url: "bogo-sort", selector: "bogoSort", code: null}
  ]

  constructor(private codeMethods: CodeMethodsService) { }

  getCodeOf(method, page) {
    return this.findMethod(method, page);
  }

  findMethod(selector, page) {
    let array = this.selectPage(page);
    for(let i = 0; i < array.length; i++) {
      if(array[i].selector == selector) {
        array[i].code = this.codeMethods.codes[selector];
      }
    }
    return array;
  }

  selectPage(page) {
    if(page == 'simpleMethod') {
      return this.simpleMethods;
    } else if(page == 'sofisticatedMethod') {
      return this.sofisticatedMethods;
    } else if(page == 'searchMethod') {
      return this.searchMethods;
    }
  }
}
