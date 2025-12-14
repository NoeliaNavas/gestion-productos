import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductService } from './services/product';
import { ProductsList } from './components/products-list/products-list';
import { ProductForm } from './components/product-form/product-form';
import { ProductFilterComponent } from './components/product-filter/product-filter';

@Component({
  selector: 'app-root',
  imports: [CommonModule, ProductsList, ProductForm, ProductFilterComponent],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class App {

  protected readonly title = signal('productos-crud');

  constructor(private productService: ProductService) {
  }

  onProductoCreado(producto: any) {
    this.productService.agregarProducto(producto);
  }
}
