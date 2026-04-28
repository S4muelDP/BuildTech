import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Product } from '../models/product.model';

export interface FavoriteItem {
  id: number;
  name: string;
  price: number;
  category: string;
  categoryLabel: string;
  image: string;
  spec: string;
}

@Injectable({
  providedIn: 'root'
})
export class FavoritesService {

  private readonly STORAGE_KEY = 'buildtech_favorites';
  private favoritesSubject = new BehaviorSubject<FavoriteItem[]>(this.loadFromStorage());

  favorites$ = this.favoritesSubject.asObservable();

  private loadFromStorage(): FavoriteItem[] {
    const data = localStorage.getItem(this.STORAGE_KEY);
    return data ? JSON.parse(data) : [];
  }

  private saveToStorage(favs: FavoriteItem[]): void {
    localStorage.setItem(this.STORAGE_KEY, JSON.stringify(favs));
    this.favoritesSubject.next(favs);
  }

  getAll(): FavoriteItem[] {
    return this.favoritesSubject.value;
  }

  getCount(): number {
    return this.favoritesSubject.value.length;
  }

  isFavorite(productId: number): boolean {
    return this.favoritesSubject.value.some(f => f.id === productId);
  }

  add(product: Product): boolean {
    const favs = this.getAll();
    if (favs.find(f => f.id === product.id)) {
      return false;
    }
    favs.push({
      id: product.id,
      name: product.name,
      price: product.price,
      category: product.category,
      categoryLabel: product.categoryLabel,
      image: product.image,
      spec: product.spec
    });
    this.saveToStorage(favs);
    return true;
  }

  remove(productId: number): void {
    const favs = this.getAll().filter(f => f.id !== productId);
    this.saveToStorage(favs);
  }

  toggle(product: Product): boolean {
    if (this.isFavorite(product.id)) {
      this.remove(product.id);
      return false;
    } else {
      this.add(product);
      return true;
    }
  }
}
