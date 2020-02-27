import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.less']
})
export class DetailComponent implements OnInit {
  flag = true;

  studentRoster = ['carl', 'kenny'];
  currentName = ''
;  constructor() { }

  ngOnInit() {
  }

  add() {
    this.studentRoster.push(this.currentName);
  }

  toggleFlag() {
    this.flag = !this.flag;
    return this.flag;
  }

  getColor() {
    return this.flag ? 'green' : 'red';
  }

}
