import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductService } from './services/product';
import { Category } from './models/category.model';
import { Product } from './models/product.model';

import { ProductListComponent } from './components/product-list/product-list';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, ProductListComponent],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  categories: Category[] = [];
  selectedCategoryId: number | null = null;
  selectedProducts: Product[] = [];

  constructor(private productService: ProductService) {
    this.categories = this.productService.getCategories();
  }

  selectCategory(id: number): void {
    this.selectedCategoryId = id;
    this.selectedProducts = this.productService.getProductsByCategory(id);
  }
}
