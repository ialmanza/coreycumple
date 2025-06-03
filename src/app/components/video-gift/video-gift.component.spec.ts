import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VideoGiftComponent } from './video-gift.component';

describe('VideoGiftComponent', () => {
  let component: VideoGiftComponent;
  let fixture: ComponentFixture<VideoGiftComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VideoGiftComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VideoGiftComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
