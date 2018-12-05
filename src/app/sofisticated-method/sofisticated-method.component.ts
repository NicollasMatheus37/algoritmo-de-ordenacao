import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MethodsService } from '../services/methods.service';

@Component({
  selector: 'app-sofisticated-method',
  templateUrl: './sofisticated-method.component.html',
  styleUrls: ['./sofisticated-method.component.css']
})
export class SofisticatedMethodComponent implements OnInit {
  
  public sofisticatedMethods = [];
  public selector;
  public sofisticatedMethod = 'sofisticatedMethod';

  constructor(private activatedRoute: ActivatedRoute, private router: Router, private methodsService: MethodsService) {
    this.sofisticatedMethods = this.methodsService.sofisticatedMethods;
    this.activatedRoute.params.subscribe((response) => {
      this.findRoute();
      this.getCodeOf(this.selector)
    })
  }

  findRoute() {
    let path = window.location.pathname;
    let _path = path.split("/");
    this.find(_path[2]);
  }

  find(url) {
    this.sofisticatedMethods.forEach(method => {
      if(method.url == url) {
        this.selector = method.selector;
      }
    });
  }

  getCodeOf(method) {
    this.sofisticatedMethods = this.methodsService.getCodeOf(method, this.sofisticatedMethod);
  }

  ngOnInit() {
  }

}
