import { Component, OnInit, AfterViewInit } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { ProductService } from '../../services/product.service';
import { FavoritesService } from '../../services/favorites.service';
import { ToastService } from '../../services/toast.service';
import { Product } from '../../models/product.model';

interface SpecRow {
  label: string;
  value: string;
}

@Component({
  selector: 'app-producto',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './producto.component.html',
  styleUrl: './producto.component.css'
})
export class ProductoComponent implements OnInit, AfterViewInit {
  product: Product | null = null;
  notFound = false;
  activeTab = 'especificaciones';
  specRows: SpecRow[] = [];

  constructor(
    private route: ActivatedRoute,
    private productService: ProductService,
    private favoritesService: FavoritesService,
    private toastService: ToastService
  ) {}

  ngOnInit(): void {
    const idParam = this.route.snapshot.paramMap.get('id');
    const id = idParam ? parseInt(idParam) : 3;
    const product = this.productService.getById(id);

    if (!product) {
      this.notFound = true;
      return;
    }

    this.product = product;
    this.buildSpecRows();
  }

  ngAfterViewInit(): void {
    const elements = document.querySelectorAll('.fade-in');
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.15, rootMargin: '0px 0px -50px 0px' });
    elements.forEach(el => observer.observe(el));
  }

  get isFav(): boolean {
    return this.product ? this.favoritesService.isFavorite(this.product.id) : false;
  }

  get favBtnText(): string {
    return this.isFav ? '✓ EN FAVORITOS' : 'AGREGAR A FAVORITOS';
  }

  get formattedPrice(): string {
    return this.product ? `$${this.product.price.toLocaleString('en-US', { minimumFractionDigits: 2 })} Aprox` : '';
  }

  get hasSpecs(): boolean {
    return !!(this.product?.cores && this.product?.threads && this.product?.clock);
  }

  toggleFavorite(): void {
    if (!this.product) return;
    const added = this.favoritesService.toggle(this.product);
    this.toastService.show(
      added ? '¡Agregado a favoritos!' : 'Eliminado de favoritos',
      added ? 'success' : 'info'
    );
  }

  setTab(tab: string): void {
    this.activeTab = tab;
  }

  handleImageError(event: Event): void {
    const img = event.target as HTMLImageElement;
    const name = this.product?.name || 'Producto';
    const colors = ['#1a1a2e', '#16213e', '#0f3460', '#533483'];
    let hash = 0;
    for (let i = 0; i < name.length; i++) {
      hash = ((hash << 5) - hash) + name.charCodeAt(i);
      hash |= 0;
    }
    const color = colors[Math.abs(hash) % colors.length];
    const escapedName = name.substring(0, 20).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
    const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="300" height="300" viewBox="0 0 300 300"><rect width="100%" height="100%" fill="${color}"/><text x="50%" y="45%" dominant-baseline="central" text-anchor="middle" font-family="Montserrat, sans-serif" font-size="14" font-weight="700" fill="white" letter-spacing="2">${escapedName}</text><text x="50%" y="58%" dominant-baseline="central" text-anchor="middle" font-family="Montserrat, sans-serif" font-size="10" fill="rgba(255,255,255,0.5)" letter-spacing="1.5">BUILDTECH</text></svg>`;
    img.src = 'data:image/svg+xml;charset=UTF-8,' + encodeURIComponent(svg);
    img.onerror = null;
  }

  private buildSpecRows(): void {
    if (!this.product) return;
    const specs: SpecRow[] = [];
    if (this.product.cores) specs.push({ label: 'Núcleos', value: `${this.product.cores} Núcleos` });
    if (this.product.threads) specs.push({ label: 'Hilos', value: `${this.product.threads} Hilos` });
    if (this.product.clock) specs.push({ label: 'Velocidad de Reloj', value: this.product.clock });
    specs.push({ label: 'Categoría', value: this.product.categoryLabel });
    specs.push({ label: 'Precio Aprox', value: `$${this.product.price.toLocaleString('en-US', { minimumFractionDigits: 2 })}` });
    this.specRows = specs;
  }
}
