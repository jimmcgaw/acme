import { Component } from 'angular2/core';
import { ProductListComponent } from './products/product-list.component';

@Component({
  selector: 'acme-app',
  template: `
  <div>
    <h1>{{ pageTitle }}</h1>
    <acme-books></acme-books>
  </div>
  `,
  directives: [ProductListComponent]
})
export class AppComponent {
  pageTitle: string = "Acme E-Commerce Store"
}