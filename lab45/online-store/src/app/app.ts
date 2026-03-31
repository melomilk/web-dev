import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Category } from './models/category.model';
import { Product } from './models/product.model';
import { ProductListComponent } from './components/product-list/product-list.component';
import { ProductService } from './services/product.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, ProductListComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App implements OnInit {
  title = 'online-store';

  categories: Category[] = [];
  selectedCategoryId: number | null = null;
  currentProducts: Product[] = [];

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.categories = this.productService.getCategories();

    if (this.categories.length > 0) {
      this.onSelectCategory(this.categories[0].id);
    }
  }

  onSelectCategory(categoryId: number): void {
    this.selectedCategoryId = categoryId;
    this.currentProducts = this.productService.getProductsByCategory(categoryId);
  }
}
