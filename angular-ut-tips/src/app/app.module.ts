import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {HttpClientModule} from "@angular/common/http";
import {HighlightDirective} from './directives/highlight.directive';
import {EmployeeNamePipe} from './pipes/employee-name.pipe';
import {PlaygroundComponent} from './components/playground/playground.component';
import {RouterModule} from "@angular/router";

@NgModule({
  declarations: [
    AppComponent,
    HighlightDirective,
    EmployeeNamePipe,
    PlaygroundComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      {component: PlaygroundComponent, path: 'playground'},
      {redirectTo: 'playground', path: '**'},
    ]),
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
