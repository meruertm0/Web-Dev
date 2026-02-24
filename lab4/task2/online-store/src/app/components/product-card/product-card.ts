import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Product } from '../../models/product.model';

@Component({
  selector: 'app-product-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-card.html',
  styleUrl: './product-card.css',
})
export class ProductCard {
  @Input({ required: true }) product!: Product;

  selectedImage: string | null = null;

  getProductImage(): string {
    return this.selectedImage || this.product.image || this.product.images?.[0] || '';
  }

  changeImage(imageUrl: string): void {
    this.selectedImage = imageUrl;
  }

  share(platform: 'wa' | 'tg'): void {
    const encodedLink = encodeURIComponent(this.product.link);
    const messageText = `Check out this product: ${this.product.name}`;
    const encodedText = encodeURIComponent(messageText);

    const url =
      platform === 'wa'
        ? `https://wa.me/?text=${encodedText}%20${encodedLink}`
        : `https://t.me/share/url?url=${encodedLink}&text=${encodedText}`;

    window.open(url, '_blank');
  }
}
