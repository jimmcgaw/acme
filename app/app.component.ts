import { Component } from 'angular2/core';

@Component({
  selector: 'acme-app',
  template: `
  <div><h1>Welcome to Acme</h1>
    <div>Hello to Angular 2!</div>
  </div>
  `
})
export class AppComponent {
  pageTitle: string = "Acme E-Commerce Store"
}