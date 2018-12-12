import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  public btnBack: boolean = true;

  constructor(private router: Router) {
    if(this.getUrl() == "/") {
      this.btnBack = false;
    }
  }

  getUrl() {
    let url = window.location.pathname;
    return url;
  }

  ngOnInit() {
  }

}
