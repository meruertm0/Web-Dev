import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Product } from '../../models/product.model';
import { ProductCard } from '../product-card/product-card';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [CommonModule, ProductCard],
  templateUrl: './product-list.html',
  styleUrl: './product-list.css',
})
export class ProductListComponent {
  @Input({ required: true }) products: Product[] = [];
  sortDirection: 'asc' | 'desc' = 'asc';

  onDelete(id: number): void {
    this.products = this.products.filter(p => p.id !== id);
  }

  sortByPrice(direction: 'asc' | 'desc') {
    this.sortDirection = direction;
    this.products = [...this.products].sort((a, b) => {
      return direction === 'asc' ? a.price - b.price : b.price - a.price;
    });
  }

}



