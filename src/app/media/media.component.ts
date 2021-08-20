import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-media',
  templateUrl: './media.component.html',
  styleUrls: ['./media.component.less']
})
export class MediaComponent implements OnInit {
  videoOptions = {
    controls: true,
    preload: 'none',
    sources: [{
      src: 'rtmp://localhost:7001/live/test.flv',
      type: 'rtmp/flv'
    }],
    dataSetup: {
      aspectRatio: '640:267',
      playbackRates: [1, 1.5, 2]
    }
  }
  flvOptions = {
    type: 'flv',
    isLive: true,
    url: 'http://localhost:7001/live/test.flv'
  };
  constructor() { }

  ngOnInit() {
  }

}
