import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gopy',
  templateUrl: './gopy.component.html',
  styleUrls: ['./gopy.component.css']
})
export class GopyComponent implements OnInit {
messhiden=true;
  constructor() { }

  ngOnInit() {
  }
  anhien(){
    this.messhiden=!this.messhiden;
  }
}
