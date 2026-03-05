import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { AlbumService } from '../services/album.service';
import { Album } from '../models/album.model';

@Component({
  selector: 'app-album-detail',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink],
  templateUrl: './album-detail.component.html',
  styleUrl: './album-detail.component.css'
})
export class AlbumDetailComponent implements OnInit {
  album: Album | null = null;
  loading = false;
  saving = false;
  error: string | null = null;

  constructor(
    private readonly route: ActivatedRoute,
    private readonly router: Router,
    private readonly albumService: AlbumService
  ) {}

  ngOnInit(): void {
    this.loadAlbum();
  }

  get albumId(): number | null {
    return this.album?.id ?? null;
  }

  loadAlbum(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));

    if (!id) {
      this.error = 'Invalid album id.';
      return;
    }

    this.loading = true;
    this.error = null;

    this.albumService.getAlbum(id).subscribe({
      next: (album) => {
        this.album = album;
        this.loading = false;
      },
      error: () => {
        this.error = 'Unable to load album. Please try again.';
        this.loading = false;
      }
    });
  }

  save(): void {
    if (!this.album) {
      return;
    }

    this.saving = true;
    this.error = null;

    this.albumService.updateAlbum(this.album).subscribe({
      next: (updated) => {
        this.album = updated;
        this.saving = false;
      },
      error: () => {
        this.error = 'Failed to save album. Please try again.';
        this.saving = false;
      }
    });
  }

  goBack(): void {
    this.router.navigate(['/albums']);
  }
}

