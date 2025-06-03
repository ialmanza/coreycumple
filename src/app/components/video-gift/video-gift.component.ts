import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-video-gift',
  imports: [],
  templateUrl: './video-gift.component.html',
  styleUrl: './video-gift.component.css'
})
export class VideoGiftComponent {
 videoUrl: SafeResourceUrl;

  // Cambia este ID por el ID de tu video de YouTube
  //private youtubeVideoId: string = 'dQw4w9WgXcQ';
  private youtubeVideoId: string = 'abqZA-IFZxg';

  constructor(private sanitizer: DomSanitizer) {
    // Construir la URL del video embebido
    const url = `https://www.youtube.com/embed/${this.youtubeVideoId}?autoplay=1&rel=0`;
    this.videoUrl = this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }

  ngOnInit() {
    // Aquí puedes agregar cualquier lógica adicional que necesites
  }

  goBack() {
    window.history.back();
  }
}
