import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HomeComponent } from '../home/home.component';
import { MethodsService } from '../services/methods.service';

@Component({
  selector: 'app-simple-method',
  templateUrl: './simple-method.component.html',
  styleUrls: ['./simple-method.component.css']
})
export class SimpleMethodComponent implements OnInit {

  public simpleMethods = [];
  public selector;
  public simpleMethod = 'simpleMethod';

  constructor(private activatedRoute: ActivatedRoute, private router: Router, private methodsService: MethodsService) {
    this.simpleMethods = methodsService.simpleMethods;
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
    this.simpleMethods.forEach(method => {
      if(method.url == url) {
        this.selector = method.selector;
      }
    });
  }

  getCodeOf(method) {
    this.simpleMethods = this.methodsService.getCodeOf(method, this.simpleMethod);
  }

  ngOnInit() {
  }

}