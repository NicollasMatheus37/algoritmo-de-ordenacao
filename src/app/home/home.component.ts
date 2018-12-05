import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MethodsService } from '../services/methods.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public simpleMethods = [];
  public sofisticatedMethods = [];
  public searchMethods = [];

  constructor(private router: Router, private methodsService: MethodsService) {
    this.simpleMethods = methodsService.simpleMethods;
    this.sofisticatedMethods = methodsService.sofisticatedMethods;
    this.searchMethods = methodsService.searchMethods;
  }

  ngOnInit() {
  }

}
