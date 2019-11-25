import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dmmh',
  templateUrl: './dmmh.component.html',
  styleUrls: ['./dmmh.component.css']
})
export class DmmhComponent implements OnInit {;

  constructor() {
    this.tong = Math.ceil(this.question.length / this.itempage);
 
  }
  ngOnInit() {
    setTimeout(function () { window.location.href = '../trangchu/trangchu.component.html'; }, 1000 * 3600 * 2);
    const copy = [];
    
    this.question.forEach(function (element) {
      
      copy.push(element.valuetrue);
    });
    
    this.list = copy;
  }
  title = 'lab4';
  itempage = 1;
  hiden = false;
  back='Xem lại câu trả lời của bạn';
  nopbai='Nộp Bài'
  tong: number;
  socausai:number;
  p: number = 1;
  complete:number;
  nameno = "name";
  //count :number = 10;
  color = '';
  dis = false;
  list:any[];
  anvinhvien=false;
  colorfalse='';
  colortrue='';
  a='a';
  b='b';
  c='c';
  d='d';

  question = [
    {
      "stt": 1,
      "debai": 'Insert the missing part of the code below to output "Hello World".',
      "cauhoi": '.... "Hello World";',
      "a": "echo",
      "b": "print",
      "c": "println",
      "d": "show",
      "value": '9',
      "valuetrue": 'a'

    },
    {
      "stt": 2,
      "debai": 'Write the correct opening tag and close tag for PHP scripts.',
      "cauhoi": '....echo "This is PHP"; ....',
      "a": "<?php && ?>",
      "b": "<-- && -->",
      "c": "< && >",
      "d": "**",
      "value": '9',
      "valuetrue": 'a'
    },
    {
      "stt": 3,
      "debai": 'Choose the best answer for each question.',
      "cauhoi": 'What does PHP stand for?',
      "a": "Private Home Page",
      "b": "Personal Hypertext Processor",
      "c": "Personal Home Page",
      "d": "PHP: Hypertext Preprocessor",
      "value": '9',
      "valuetrue": 'd'

    },
    {
      "stt": 4,
      "debai": 'Choose the best answer for each question.',
      "cauhoi": 'How do you write "Hello World" in PHP',
      "a": "Hello World",
      "b": 'Document.Write("Hello World");',
      "c": 'echo "Hello World";',
      "d": "Personal",
      "value": '9',
      "valuetrue": 'c'

    },
    {
      "stt": 5,
      "debai": 'Choose the best answer for each question.',
      "cauhoi": 'The PHP syntax is most similar to:',
      "a": "Perl and C",
      "b": "VBScript",
      "c": "Typescrip",
      "d": "JavaScript",
      "value": '9',
      "valuetrue": 'a'

    },
    {
      "stt": 6,
      "debai": 'Choose the best answer for each question.',
      "cauhoi": 'How do you get information from a form that is submitted using the "get" method?',
      "a": "Request.QueryString;",
      "b": "$_GET[];",
      "c": "Request.Form;",
      "d": "$POST[];",
      "value": '9',
      "valuetrue": 'b'

    },
    {
      "stt": 7,
      "debai": 'Choose the best answer for each question.',
      "cauhoi": 'When using the POST method, variables are displayed in the URL:',
      "a": "True",
      "b": "False",
      "c": "No",
      "d": "Yes",
      "value": '9',
      "valuetrue": 'b'

    },
    {
      "stt": 8,
      "debai": 'Choose the best answer for each question.',
      "cauhoi": 'In PHP you can use both single quotes ( "" ) and double quotes ( " " ) for strings:',
      "a": "True",
      "b": "False",
      "c": "No",
      "d": "Yes",
      "value": '9',
      "valuetrue": 'a'


    },
    {
      "stt": 9,
      "debai": 'Choose the best answer for each question.',
      "cauhoi": 'PHP server scripts are surrounded by delimiters, which?',
      "a": "<&>...</&>",
      "b": "<?php>...</?>",
      "c": "<script>...</script>",
      "d": "<?php…?>",
      "value": '9',
      "valuetrue": 'd'

    },
    {
      "stt": 10,
      "debai": 'Choose the best answer for each question.',
      "cauhoi": 'All variables in PHP start with which symbol?";',
      "a": "!",
      "b": "$",
      "c": "&",
      "d": "</php>",
      "value": '9',
      "valuetrue": 'b'

    },

  ];


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
  onSubmit() {
    const copy = [];
    const copyt = [];
    var count = 0;
    var tongdiem = 10;
    var socausai = 0;
    this.question.forEach(function (element) {
      if (element.value == element.valuetrue) {
        count++;
      }
      copy.push(element.value);
      
      copyt.push(element.valuetrue);
      console.log(element.value);
    });
    this.list=copy;
    this.tong = count;
    socausai = tongdiem - count;
    this.socausai=socausai;
    console.log('tongdiem' + this.tong);
    this.dis=true;
    var ran=0.1+Math.random()*(0.9-0.1);
    this.complete=(this.tong/this.question.length)*100;
    this.hiden=!this.hiden;
    this.anvinhvien=true;
    this.nopbai='Xem Điểm';
    this.colortrue='#a4c600';
    this.colorfalse='red';
  }
  dapandung(a, b) {//c= radio,b=value,a=valuetrue
    if (b == a) {
      return true;
    } else {
      return false;
    }
  }
  dapansai(a,b,c,d){
    if(d !=a && d !=b && d !=c){
      return true;
      
      }
      
  }
  lisst(a,b){
    
      if(a != b ){
       return true;     
    }
  }
}
