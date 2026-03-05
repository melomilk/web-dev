import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { AlbumService } from '../services/album.service';
import { Photo } from '../models/photo.model';

@Component({
  selector: 'app-album-photos',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './album-photos.component.html',
  styleUrl: './album-photos.component.css'
})
export class AlbumPhotosComponent implements OnInit {
  photos: Photo[] = [];
  albumId: number | null = null;
  loading = false;
  error: string | null = null;

  constructor(
    private readonly route: ActivatedRoute,
    private readonly router: Router,
    private readonly albumService: AlbumService
  ) {}

  ngOnInit(): void {
    this.loadPhotos();
  }

  loadPhotos(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));

    if (!id) {
      this.error = 'Invalid album id.';
      return;
    }

    this.albumId = id;
    this.loading = true;
    this.error = null;

    this.albumService.getAlbumPhotos(id).subscribe({
      next: (photos) => {
        this.photos = photos;
        this.loading = false;
      },
      error: () => {
        this.error = 'Unable to load photos. Please try again.';
        this.loading = false;
      }
    });
  }

  goBack(): void {
    if (this.albumId == null) {
      this.router.navigate(['/albums']);
    } else {
      this.router.navigate(['/albums', this.albumId]);
    }
  }
}

