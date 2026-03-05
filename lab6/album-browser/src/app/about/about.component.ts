import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  standalone: true,
  template: `
    <section class="about">
      <h1 class="about__title">About Album Browser</h1>
      <p class="about__text">
        This Angular single-page application was built as part of <strong>Lab 6: Routing & HTTP</strong>.
      </p>
      <p class="about__text">
        It demonstrates Angular Router navigation, HttpClient for REST API access, and a service
        layer for clean separation of concerns.
      </p>
      <p class="about__meta">
        Student: <strong>Your Name</strong><br />
        Course: <strong>Web Development</strong><br />
        API: <strong>JSONPlaceholder</strong>
      </p>
    </section>
  `,
  styleUrl: './about.component.css'
})
export class AboutComponent {}

