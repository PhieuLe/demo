import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hoidap',
  templateUrl: './hoidap.component.html',
  styleUrls: ['./hoidap.component.css']
})
export class HoidapComponent implements OnInit {
 messhiden=true;
  constructor() { }

  ngOnInit() {
  }
  anhien(){
    this.messhiden=!this.messhiden;
  }
}
