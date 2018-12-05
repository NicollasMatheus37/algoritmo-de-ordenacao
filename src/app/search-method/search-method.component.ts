import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MethodsService } from '../services/methods.service';

@Component({
  selector: 'app-search-method',
  templateUrl: './search-method.component.html',
  styleUrls: ['./search-method.component.css']
})
export class SearchMethodComponent implements OnInit {

  public searchMethods = [];
  public selector;
  public searchMethod = 'searchMethod';

  constructor(private activatedRoute: ActivatedRoute, private router: Router, private methodsService: MethodsService) {
    this.searchMethods = methodsService.searchMethods;
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
    this.searchMethods.forEach(method => {
      if(method.url == url) {
        this.selector = method.selector;
      }
    });
  }

  getCodeOf(method) {
    this.searchMethods = this.methodsService.getCodeOf(method, this.searchMethod);
  }

  ngOnInit() {
  }
}
