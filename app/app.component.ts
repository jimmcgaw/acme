import { Component } from 'angular2/core';
import { ProductListComponent } from './products/product-list.component';
import { ProductService } from './products/product.service';

@Component({
  selector: 'acme-app',
  template: `
  <div>
    <h1>{{ pageTitle }}</h1>
    <acme-books></acme-books>
  </div>
  `,
  directives: [ProductListComponent],
  providers: [ProductService]
})
export class AppComponent {
  pageTitle: string = "Acme E-Commerce Store"
}