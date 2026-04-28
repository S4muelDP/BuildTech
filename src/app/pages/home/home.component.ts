import { Component, OnInit, ElementRef, ViewChild, AfterViewInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ProductService } from '../../services/product.service';
import { Product } from '../../models/product.model';
import { ProductCardComponent } from '../../components/product-card/product-card.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink, ProductCardComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit, AfterViewInit {
  featured: Product[] = [];

  @ViewChild('carouselTrack') carouselTrack!: ElementRef<HTMLDivElement>;

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.featured = this.productService.getFeatured(6);
  }

  ngAfterViewInit(): void {
    this.initScrollAnimations();
  }

  scrollCarousel(direction: number): void {
    const track = this.carouselTrack?.nativeElement;
    if (!track || !track.children[0]) return;
    const card = track.children[0] as HTMLElement;
    const style = window.getComputedStyle(track);
    const gap = parseInt(style.gap) || 24;
    const amount = (card.offsetWidth + gap) * 3;
    track.scrollBy({ left: direction * amount, behavior: 'smooth' });
  }

  private initScrollAnimations(): void {
    const elements = document.querySelectorAll('.fade-in');
    if (elements.length === 0) return;

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.15,
      rootMargin: '0px 0px -50px 0px'
    });

    elements.forEach(el => observer.observe(el));
  }
}
