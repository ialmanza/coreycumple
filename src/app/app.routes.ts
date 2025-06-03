import { Routes } from '@angular/router';
import { VideoGiftComponent } from './components/video-gift/video-gift.component';
import { CardSelectionComponent } from './components/card-selection/card-selection.component';

export const routes: Routes = [
  { path: '', component: CardSelectionComponent },
  { path: 'video-gift', component: VideoGiftComponent },
];
