import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {EmployeesListComponent} from './components/employees-list/employees-list.component';
import {HttpClientModule} from "@angular/common/http";
import { HighlightDirective } from './directives/highlight.directive';
import { EmployeeNamePipe } from './pipes/employee-name.pipe';
import { HomeComponent } from './components/home/home.component';
import {RouterModule} from "@angular/router";

@NgModule({
  declarations: [
    AppComponent,
    EmployeesListComponent,
    HighlightDirective,
    EmployeeNamePipe,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      {component: HomeComponent, path: 'home'},
      {component: EmployeesListComponent, path: 'employees'},
      {redirectTo: 'home', path: '**'},
    ]),
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
