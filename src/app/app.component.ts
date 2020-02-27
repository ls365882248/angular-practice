import { Component } from '@angular/core';
import {Hero} from '../base/index';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {
  title = 'Heroes';

  onContentMouseDown = (e) => {
    e.stopPropagation();
    console.log('content mouse down');
  }
  onContentMouseUp = (e) => {
    e.stopPropagation();
    console.log('content mouse up');
  }
  onContentClick = (e) => {
    e.stopPropagation();
    console.log('content mouse click');
  }
  onInputMouseDown = (e) => {
    e.stopPropagation();
    e.stopImmediatePropagation();
    console.log('input mouse down1');
  }
  onInputMouseUp = (e) => {
    e.stopPropagation();
    console.log('input mouse up');
  }
  onInputClick = (e) => {
    e.stopPropagation();
    console.log('input mouse click');
  }
}
