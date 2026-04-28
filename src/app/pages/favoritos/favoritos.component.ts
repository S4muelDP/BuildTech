import { Component, OnInit, OnDestroy } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Subscription } from 'rxjs';
import { FavoritesService, FavoriteItem } from '../../services/favorites.service';
import { ProductService } from '../../services/product.service';
import { ProductCardComponent } from '../../components/product-card/product-card.component';
import { Product } from '../../models/product.model';

@Component({
  selector: 'app-favoritos',
  standalone: true,
  imports: [RouterLink, ProductCardComponent],
  templateUrl: './favoritos.component.html',
  styleUrl: './favoritos.component.css'
})
export class FavoritosComponent implements OnInit, OnDestroy {
  favorites: Product[] = [];
  private sub!: Subscription;

  constructor(
    private favoritesService: FavoritesService,
    private productService: ProductService
  ) {}

  ngOnInit(): void {
    this.sub = this.favoritesService.favorites$.subscribe(favs => {
      // Convert FavoriteItems to Products for the card component
      this.favorites = favs.map(f => {
        const full = this.productService.getById(f.id);
        return full || {
          id: f.id,
          name: f.name,
          price: f.price,
          category: f.category,
          categoryLabel: f.categoryLabel,
          image: f.image,
          spec: f.spec,
          description: '',
          fullDescription: ''
        } as Product;
      });
    });
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }
}
