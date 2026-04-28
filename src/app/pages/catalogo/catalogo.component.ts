import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { Product } from '../../models/product.model';
import { Category } from '../../models/category.model';
import { ProductCardComponent } from '../../components/product-card/product-card.component';

@Component({
  selector: 'app-catalogo',
  standalone: true,
  imports: [ProductCardComponent],
  templateUrl: './catalogo.component.html',
  styleUrl: './catalogo.component.css'
})
export class CatalogoComponent implements OnInit {
  categories: Category[] = [];
  products: Product[] = [];
  activeCategory = 'procesadores';
  activeCategoryLabel = 'PROCESADORES';

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.categories = this.productService.getCategories();
    this.loadProducts();
  }

  selectCategory(category: Category): void {
    this.activeCategory = category.id;
    this.activeCategoryLabel = category.label;
    this.loadProducts();
  }

  private loadProducts(): void {
    this.products = this.productService.getByCategory(this.activeCategory);
    const cat = this.categories.find(c => c.id === this.activeCategory);
    if (cat) {
      this.activeCategoryLabel = cat.label;
    }
  }
}
