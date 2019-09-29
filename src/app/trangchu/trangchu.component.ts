import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-trangchu',
  templateUrl: './trangchu.component.html',
  styleUrls: ['./trangchu.component.css']
})
export class TrangchuComponent implements OnInit {
  messhiden=true;
  constructor() { }

  ngOnInit() {
  }
  anhien(){
    this.messhiden=!this.messhiden;
  }
}
