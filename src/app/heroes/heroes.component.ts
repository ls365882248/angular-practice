import { Component, OnInit, NgZone, ChangeDetectorRef, ChangeDetectionStrategy, Input } from '@angular/core';

// @Component({
//   selector: 'app-heroes',
//   templateUrl: './heroes.component.html',
//   styleUrls: ['./heroes.component.less']
// })
// export class HeroesComponent implements OnInit {
//   title = 'subTitle';
//   _time;

//   get time() {
//     return this._time;
//   }
//   constructor(public zone: NgZone) {
//     this._time = Date.now()
//     zone.runOutsideAngular(() => {
//       setInterval(() => {
//         this._time = Date.now()
//       }, 1);
//     });
//   }

//   ngOnInit() {
//   }

// }


@Component({
  selector: 'app-heroes',
  // 
  template: `
      <div [textContent]="text"></div>
      <child-comp [text]="text"></child-comp>
  `
})
export class HeroesComponent {
  text = 'Original text in parent component';

  constructor(private cd: ChangeDetectorRef) {
    setTimeout(() => {
      this.text = 'updated'
    }, 2000);
  }
}

@Component({
  selector: 'child-comp',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<span>I am child component</span>
  <p>See if I change: {{changed}}</p>
  <p>{{text}}</p>
  `
})
export class ChildComponent {
  @Input() text: string;
  changed = 'false';
  constructor(private parent: HeroesComponent, private cd: ChangeDetectorRef) {
    setTimeout(() => {
      this.cd.detach();
      this.changed = 'true';
    }, 2000);

    // setTimeout(() => {
    //   this.cd.reattach();
    //   console.log(234234)
    //   this.changed = 'reattach';
    // }, 4000)
  }

  ngOnChanges(values) {
    // this.cd.reattach();
    console.log(234234, values)
    this.changed = 'reattach';
  }

  ngOnInit() {
    this.parent.text = 'Updated text in parent component';
  }
}
