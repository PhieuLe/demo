import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menudmmh',
  templateUrl: './menudmmh.component.html',
  styleUrls: ['./menudmmh.component.css']
})
export class MenudmmhComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  subject=[
    {
      "monhoc":"PHP",
      "img":"../assets/image/php.svg"
    },
    {
      "monhoc":"MYSQL",
      "img":"../assets/image/mysql.svg"
    },
    {
      "monhoc":"HTMLCSS",
      "img":"../assets/image/html5.png"
    },
    {
      "monhoc":"JAVASCRIP",
      "img":"../assets/image/js.png"
    }
  ]
}
