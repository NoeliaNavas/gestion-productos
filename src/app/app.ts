import { CommonModule, } from '@angular/common';
import { Component, signal } from '@angular/core';
import { ProductService,Product } from './services/product';
import { ProductsList } from './components/products-list/products-list';
import { ProductForm } from './components/product-form/product-form';
@Component({
  selector: 'app-root',
  imports: [CommonModule, ProductsList, ProductForm],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('gestion-productos');

  constructor (private productService: ProductService){
    this.productService.cargarProductos().subscribe(
      (datos: Product[]) => {
        console.log('Productos cargados desde la API:', datos);
      }
    );
  }

  onProductoCreado(producto: any) {
  console.log('Producto recibido desde el formulario:', producto);
}
}
