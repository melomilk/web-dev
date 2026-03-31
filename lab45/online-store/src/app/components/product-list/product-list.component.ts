import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Product } from '../../models/product.model';
import { ProductItemComponent } from '../product-card/product-card.component';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [CommonModule, ProductItemComponent],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css',
})
export class ProductListComponent implements OnChanges {
  @Input() products: Product[] = [];

  displayedProducts: Product[] = [];

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['products']) {
      this.displayedProducts = [...this.products];
    }
  }

  handleDelete(productId: number): void {
    this.displayedProducts = this.displayedProducts.filter((p) => p.id !== productId);
  }

  trackById(_index: number, product: Product): number {
    return product.id;
  }
}