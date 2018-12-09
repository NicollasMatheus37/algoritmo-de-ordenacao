import { Component, OnInit, ViewChild } from '@angular/core';
import { MethodsService } from '../services/methods.service';
import { NgbModal, NgbAlertModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-sort',
  templateUrl: './sort.component.html',
  styleUrls: ['./sort.component.css']
})
export class SortComponent implements OnInit {

  @ViewChild('content') private content;
  private modalSort;

  public methods = [];
  public array: String = "";

  constructor(private methodsService: MethodsService, private modalService: NgbModal, alertModule: NgbAlertModule) {
    this.getMethods();
  }

  openModal() {
    this.modalSort = this.modalService.open(this.content, {centered: true});
  }

  closeModal() {
    this.modalSort.close();
  }

  getMethods() {
    this.methodsService.simpleMethods.forEach(method => {
      this.methods.push(method);
    });
    this.methodsService.sofisticatedMethods.forEach(method => {
      this.methods.push(method);
    });
    this.methodsService.searchMethods.forEach(method => {
      this.methods.push(method);
    });
  }

  getValue(event) {
    if(event.keyCode == 44) {
      return;
    }
    if(event.keyCode > 57 || event.keyCode < 48) {
      event.preventDefault();
    }
  }
  
  sort(method, array) {
    
  }

  ngOnInit() {
  }

}
