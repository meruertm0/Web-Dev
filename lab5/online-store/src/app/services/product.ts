import { Injectable } from '@angular/core';
import { Product } from '../models/product.model';
import { Category } from '../models/category.model';
import { PRODUCTS } from '../data/products';
import { CATEGORIES } from '../data/categories';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private products: Product[] = structuredClone(PRODUCTS);

  getCategories(): Category[] {
    return CATEGORIES;
  }

  getProductsByCategory(categoryId: number): Product[] {
    return this.products.filter(p => p.categoryId === categoryId);
  }

  deleteProduct(productId: number): void {
    this.products = this.products.filter(p => p.id !== productId);
  }

  likeProduct(productId: number): void {
    const p = this.products.find(x => x.id === productId);
    if (p) p.likes++;
  }
}
