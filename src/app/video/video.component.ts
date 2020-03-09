import { Component, ElementRef, Input, OnDestroy, OnInit, ViewChild } from '@angular/core';

import videojs from 'video.js';

@Component({
  selector: 'app-video',
  templateUrl: './video.component.html',
  styleUrls: ['./video.component.less']
})
export class VideoComponent implements OnInit, OnDestroy {
  @ViewChild('videoTarget', {static: true}) target: ElementRef;
  // see options: https://github.com/videojs/video.js/blob/master/docs/guides/options.md
  @Input() options: {
      fluid?: boolean,
      aspectRatio?: string,
      autoplay?: boolean,
      controls?: boolean,
      sources: {
          src: string,
          type: string,
      }[],
  };
  option: videojs
  player: videojs.Player;
  constructor(
    private elementRef: ElementRef,
  ) { }
  ngOnInit() {
    // instantiate Video.js
    this.player = videojs(this.target.nativeElement, this.options, function onPlayerReady() {
      console.log('onPlayerReady', this);
    });
  }
  ngOnDestroy() {
    // destroy player
    if (this.player) {
      this.player.dispose();
    }
  }
}
