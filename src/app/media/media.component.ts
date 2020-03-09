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
      src: 'https://vjs.zencdn.net/v/oceans.mp4',
      type: 'video/mp4'
    }, {
      src: 'https://vjs.zencdn.net/v/oceans.webm',
      type: 'video/webm'
    }],
    dataSetup: {
      aspectRatio: '640:267',
      playbackRates: [1, 1.5, 2]
    }
  }
  flvOptions = {
    type: 'mp4',
    url: 'https://vjs.zencdn.net/v/oceans.mp4'
  };
  constructor() { }

  ngOnInit() {
  }

}
