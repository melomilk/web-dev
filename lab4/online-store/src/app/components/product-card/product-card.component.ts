import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Product } from '../../models/product.model';

@Component({
  selector: 'app-product-item',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.css',
})
export class ProductItemComponent {
  @Input() product!: Product;

  @Output() delete = new EventEmitter<number>();

  stars: number[] = [1, 2, 3, 4, 5];

  getRoundedRating(): number {
    // round to nearest whole star (rating)
    return Math.round(this.product.rating);
  }

  getWhatsAppShareUrl(): string {
    var text = 'Check out this product: ' + this.product.link;
    return 'https://wa.me/?text=' + encodeURIComponent(text);
  }

  getTelegramShareUrl(): string {
    var url = encodeURIComponent(this.product.link);
    var text = encodeURIComponent(this.product.name);
    return 'https://t.me/share/url?url=' + url + '&text=' + text;
  }

  onLike(): void {
    this.product.likes += 1;
  }

  onDeleteClick(): void {
    this.delete.emit(this.product.id);
  }
}