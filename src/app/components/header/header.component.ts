import { Component, OnInit, OnDestroy } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { Subscription } from 'rxjs';
import { FavoritesService } from '../../services/favorites.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent implements OnInit, OnDestroy {
  favCount = 0;
  private sub!: Subscription;

  constructor(private favoritesService: FavoritesService) {}

  ngOnInit(): void {
    this.sub = this.favoritesService.favorites$.subscribe(favs => {
      this.favCount = favs.length;
    });
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }
}
