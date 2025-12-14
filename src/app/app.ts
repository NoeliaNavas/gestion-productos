import { CommonModule, } from '@angular/common';
import { Component, signal } from '@angular/core';
import { ProductService,Product } from './services/product';
import { ProductsList } from './components/products-list/products-list';
@Component({
  selector: 'app-root',
  imports: [CommonModule, ProductsList],
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
}
