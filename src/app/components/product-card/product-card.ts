import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Product } from '../../services/product';
import { ProductService } from '../../services/product';

@Component({
  selector: 'app-product-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-card.html'
})
export class ProductCard {

  @Input() product!: Product; // Recibe un producto desde el padre

  constructor(private productService: ProductService) {}
  
  eliminar() {
  this.productService.eliminarProducto(this.product._id);
}
}
