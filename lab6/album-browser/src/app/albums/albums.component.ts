import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { AlbumService } from '../services/album.service';
import { Album } from '../models/album.model';

@Component({
  selector: 'app-albums',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './albums.component.html',
  styleUrl: './albums.component.css'
})
export class AlbumsComponent implements OnInit {
  albums: Album[] = [];
  loading = false;
  error: string | null = null;

  constructor(private readonly albumService: AlbumService) {}

  ngOnInit(): void {
    this.fetchAlbums();
  }

  fetchAlbums(): void {
    this.loading = true;
    this.error = null;

    this.albumService.getAlbums().subscribe({
      next: (albums) => {
        this.albums = albums;
        this.loading = false;
      },
      error: () => {
        this.error = 'Unable to load albums. Please try again.';
        this.loading = false;
      }
    });
  }

  deleteAlbum(album: Album): void {
    if (!confirm(`Delete album "${album.title}"?`)) {
      return;
    }

    this.albumService.deleteAlbum(album.id).subscribe({
      next: () => {
        this.albums = this.albums.filter((a) => a.id !== album.id);
      },
      error: () => {
        this.error = 'Failed to delete album. Please try again.';
      }
    });
  }
}

