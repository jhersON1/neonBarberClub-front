import { AfterViewInit, ChangeDetectionStrategy, Component, ElementRef, Inject, PLATFORM_ID, ViewChild } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';


@Component({
  selector: 'app-hero-video',
  imports: [],
  templateUrl: './hero-video.component.html',
  styleUrl: './hero-video.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    class: "block my-0"
  }
})
export class HeroVideoComponent implements AfterViewInit{
  @ViewChild('mobileVideo') mobileVideo!: ElementRef<HTMLVideoElement>;
  @ViewChild('desktopVideo') desktopVideo!: ElementRef<HTMLVideoElement>;

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  ngAfterViewInit() {
      if (isPlatformBrowser(this.platformId)) {
          this.playVideo(this.mobileVideo);
          this.playVideo(this.desktopVideo);
      }
  }

  private playVideo(videoRef: ElementRef<HTMLVideoElement>) {
      if (videoRef?.nativeElement) {
          videoRef.nativeElement.play().catch(error => {
              console.error('Video play failed:', error);
          });
      }
  }

}
