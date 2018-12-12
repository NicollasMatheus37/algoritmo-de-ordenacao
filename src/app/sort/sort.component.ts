import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { MethodsService } from '../services/methods.service';
import { NgbModal, NgbAlertModule, NgbPopover } from '@ng-bootstrap/ng-bootstrap';
import { CodesService } from '../services/codes.service';

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
  public url;

  public dangerAlert: boolean = false;

  constructor(private methodsService: MethodsService, private modalService: NgbModal, alertModule: NgbAlertModule, private codesService: CodesService) {
    this.getMethods();
  }

  openModal() {
    this.modalSort = this.modalService.open(this.content, {centered: true, size: 'lg'});
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

  onlyNumbers(event) {
    if(event.keyCode == 44) {
      return;
    }
    if(event.keyCode > 57 || event.keyCode < 48) {
      event.preventDefault();
    }
  }

  verifyField() {
    this.dangerAlert = false;
    if(!this.array) this.dangerAlert = true;
    else this.sort();
  }
  
  sort() {
    this.url = window.location.pathname;
    let urlString = this.url.split('/');
    this.url = urlString[2];
    this.codesService.chooseCode(this.url, this.array);
  }

  ngOnInit() {
  }

}
