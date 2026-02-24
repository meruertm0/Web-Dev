import { Component, Input, Output, EventEmitter} from '@angular/core';
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
  liked = false;

  toggleLike(): void {
    this.liked = !this.liked;

    if (this.liked) {
      this.product.likes++;
    } else {
      this.product.likes = Math.max(0, this.product.likes - 1);
    }
  }
  @Output() delete = new EventEmitter<number>();

  onDeleteClick(): void {
    const ok = confirm(`Удалить "${this.product.name}"?`);
    if (ok) this.delete.emit(this.product.id);
  }
  
}
