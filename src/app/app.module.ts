import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Router }  from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AppRoutingModule } from './app-routing.module';
import { SimpleMethodComponent } from './simple-method/simple-method.component';
import { NavbarComponent } from './navbar/navbar.component';
import { MethodsService } from './services/methods.service';
import { CodeMethodsService } from './services/code-methods.service';
import { SofisticatedMethodComponent } from './sofisticated-method/sofisticated-method.component';
import { SearchMethodComponent } from './search-method/search-method.component';
import { SortComponent } from './sort/sort.component';
import { NgbModule, NgbAlertModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SimpleMethodComponent,
    NavbarComponent,
    SofisticatedMethodComponent,
    SearchMethodComponent,
    SortComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    NgbAlertModule,
    AppRoutingModule
  ],
  providers: [
    MethodsService,
    CodeMethodsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
