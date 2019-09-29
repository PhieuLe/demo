import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dmmh',
  templateUrl: './dmmh.component.html',
  styleUrls: ['./dmmh.component.css']
})
export class DmmhComponent implements OnInit {



  ngOnInit() {
  }
  title = 'lab4';
  itempage = 1;
  tong: number;
  p: number = 1;
  nameno = "name";

  
  question = [
    {
      "stt": 1,
      "debai": 'Insert the missing part of the code below to output "Hello World".',
      "cauhoi": '.... "Hello World";',
      "a":"echo",
      "b":"print",
      "c":"println",
      "d":"show"

    },
    {
      "stt": 2,
      "debai": 'Write the correct opening tag and close tag for PHP scripts.',
      "cauhoi": '....echo "This is PHP"; ....',
      "a":";",
      "b":"//",
      "c":"/*",
      "d":"**"

    },
    {
      "stt": 3,
      "debai": 'Insert the missing part of the code below to output "Hello World".',
      "cauhoi": '.... "Hello World";',
      "a":"echo",
      "b":"print",
      "c":"println",
      "d":"show"

    },
    {
      "stt": 4,
      "debai": 'Insert the missing part of the code below to output "Hello World".',
      "cauhoi": '.... "Hello World";',
      "a":"echo",
      "b":"print",
      "c":"println",
      "d":"show"

    },
    {
      "stt": 5,
      "debai": 'Insert the missing part of the code below to output "Hello World".',
      "cauhoi": '.... "Hello World";',
      "a":"echo",
      "b":"print",
      "c":"println",
      "d":"show"

    },
    {
      "stt": 6,
      "debai": 'Insert the missing part of the code below to output "Hello World".',
      "cauhoi": '.... "Hello World";',
      "a":"echo",
      "b":"print",
      "c":"println",
      "d":"show"

    },
    {
      "stt": 7,
      "debai": 'Insert the missing part of the code below to output "Hello World".',
      "cauhoi": '.... "Hello World";',
      "a":"echo",
      "b":"print",
      "c":"println",
      "d":"show"

    },
    {
      "stt": 8,
      "debai": 'Insert the missing part of the code below to output "Hello World".',
      "cauhoi": '.... "Hello World";',
      "a":"echo",
      "b":"print",
      "c":"println",
      "d":"show"

    },
    {
      "stt": 9,
      "debai": 'Insert the missing part of the code below to output "Hello World".',
      "cauhoi": '.... "Hello World";',
      "a":"echo",
      "b":"print",
      "c":"println",
      "d":"show"

    },
    {
      "stt": 10,
      "debai": 'Insert the missing part of the code below to output "Hello World".',
      "cauhoi": '.... "Hello World";',
      "a":"echo",
      "b":"print",
      "c":"println",
      "d":"show"

    },

  ];
  
  constructor() {
    this.tong = Math.ceil(this.question.length / this.itempage);
  }
  next() {
    if (this.p < this.question.length)
      this.p++;
  }
  Previous() {
    if (this.p > 0)
      this.p--;
  }
  dau() {
    this.p = 1;
  }
  cuoi() {
    this.p = this.tong;
  }
  locdulieu(a: string) {
    this.nameno = a;
  }

}



