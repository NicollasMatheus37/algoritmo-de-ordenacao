import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router'
import { HomeComponent } from './home/home.component';
import { SimpleMethodComponent } from './simple-method/simple-method.component';
import { SofisticatedMethodComponent } from './sofisticated-method/sofisticated-method.component';
import { SearchMethodComponent } from './search-method/search-method.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SortComponent } from './sort/sort.component';

const appRoutes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'navbar',
    component: NavbarComponent
  },
  {
    path: 'simple-method',
    component: SimpleMethodComponent
  },
  {
    path: 'simple-method/:url',
    component: SimpleMethodComponent
  },
  {
    path: 'sofisticated-method',
    component: SofisticatedMethodComponent
  },
  {
    path: 'sofisticated-method/:url',
    component: SofisticatedMethodComponent
  },
  {
    path: 'search-method',
    component: SearchMethodComponent
  },
  {
    path: 'search-method/:url',
    component: SearchMethodComponent
  },
  {
    path: 'sort',
    component: SortComponent
  },
  { 
    path: '**', 
    component: HomeComponent
  }
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(appRoutes
    // , { enableTracing: true }
    )
  ],
  exports: [
    RouterModule
  ],
  declarations: []
})
export class AppRoutingModule { }
