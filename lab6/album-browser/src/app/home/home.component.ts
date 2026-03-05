import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink],
  template: `
    <section class="home">
      <h1 class="home__title">Album Browser</h1>
      <p class="home__subtitle">
        Browse albums from the JSONPlaceholder API, view details, and explore photos.
      </p>
      <button class="home__button" routerLink="/albums">Browse Albums</button>
    </section>
  `,
  styleUrl: './home.component.css'
})
export class HomeComponent {}

