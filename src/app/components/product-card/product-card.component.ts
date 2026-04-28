import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from '../../models/product.model';
import { FavoritesService } from '../../services/favorites.service';
import { ToastService } from '../../services/toast.service';

@Component({
  selector: 'app-product-card',
  standalone: true,
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.css'
})
export class ProductCardComponent {
  @Input() product!: Product;
  @Input() variant: 'catalog' | 'carousel' | 'favorite' = 'catalog';

  constructor(
    private router: Router,
    private favoritesService: FavoritesService,
    private toastService: ToastService
  ) {}

  get isFav(): boolean {
    return this.favoritesService.isFavorite(this.product.id);
  }

  get formattedPrice(): string {
    return this.product.price.toLocaleString('en-US', { minimumFractionDigits: 2 });
  }

  navigateToProduct(): void {
    this.router.navigate(['/producto', this.product.id]);
  }

  toggleFavorite(event: Event): void {
    event.preventDefault();
    event.stopPropagation();
    const added = this.favoritesService.toggle(this.product);
    this.toastService.show(
      added ? 'Producto agregado a favoritos ♡' : 'Producto eliminado de favoritos'
    );
  }

  removeFavorite(): void {
    this.favoritesService.remove(this.product.id);
    this.toastService.show('Producto eliminado de favoritos');
  }

  handleImageError(event: Event): void {
    const img = event.target as HTMLImageElement;
    img.src = this.generatePlaceholder(this.product.name);
    img.onerror = null;
  }

  private generatePlaceholder(name: string): string {
    const colors = ['#1a1a2e', '#16213e', '#0f3460', '#533483', '#2c3333', '#395B64', '#2C3333', '#1B2430'];
    let hash = 0;
    for (let i = 0; i < name.length; i++) {
      hash = ((hash << 5) - hash) + name.charCodeAt(i);
      hash |= 0;
    }
    const color = colors[Math.abs(hash) % colors.length];
    const escapedName = name.substring(0, 20).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
    const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="300" height="300" viewBox="0 0 300 300">
      <rect width="100%" height="100%" fill="${color}"/>
      <text x="50%" y="45%" dominant-baseline="central" text-anchor="middle"
            font-family="Montserrat, sans-serif" font-size="14" font-weight="700"
            fill="white" letter-spacing="2">${escapedName}</text>
      <text x="50%" y="58%" dominant-baseline="central" text-anchor="middle"
            font-family="Montserrat, sans-serif" font-size="10" fill="rgba(255,255,255,0.5)"
            letter-spacing="1.5">BUILDTECH</text>
    </svg>`;
    return 'data:image/svg+xml;charset=UTF-8,' + encodeURIComponent(svg);
  }
}
