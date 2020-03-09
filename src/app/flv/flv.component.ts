import { Component, OnInit, ElementRef, ViewChild, Input } from '@angular/core';
import flvjs from 'flv.js';

@Component({
  selector: 'app-flv',
  templateUrl: './flv.component.html',
  styleUrls: ['./flv.component.less']
})
export class FlvComponent implements OnInit {
  @ViewChild('flvTarget', {static: true}) target: ElementRef;
  @Input() options : {
    type: string,
    url: string
  }
  constructor() { }

  ngOnInit() {
    console.log(555, this.target.nativeElement)
    let videoElement = this.target.nativeElement;
    if (flvjs.isSupported()) {
      console.log(6666, flvjs.getFeatureList());
      let flvPlayer = flvjs.createPlayer(this.options);
      flvPlayer.attachMediaElement(videoElement);
      flvPlayer.load();
      // flvPlayer.play();
    }
  }

}
