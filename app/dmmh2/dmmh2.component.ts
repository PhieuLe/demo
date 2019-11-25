import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dmmh2',
  templateUrl: './dmmh2.component.html',
  styleUrls: ['./dmmh2.component.css']
})
export class Dmmh2Component implements OnInit {

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
      "debai": 'Choose the best answer for each question.',
      "cauhoi": 'What does SQL stand for?";',
      "a": " Structured Question Language",
      "b": " Strong Question Language",
      "c": "Structured Query Languageintln",
      "d": "B & C",
      "value": '9',
      "valuetrue": 'b'

    },
    {
      "stt": 2,
      "debai": 'Choose the best answer for each question.',
      "cauhoi": 'Which SQL statement is used to extract data from a database?',
      "a": "EXTRACT",
      "b": "GET",
      "c": " SELECT",
      "d": " OPEN",
      "value": '9',
      "valuetrue": 'c'
    },
    {
      "stt": 3,
      "debai": 'Choose the best answer for each question.',
      "cauhoi": 'Which SQL statement is used to update data in a database?',
      "a": "UPDATE",
      "b": "SAVE",
      "c": "MODIFY",
      "d": "SAVE AS",
      "value": '9',
      "valuetrue": 'a'

    },
    {
      "stt": 4,
      "debai": 'Choose the best answer for each question.',
      "cauhoi": 'Which SQL statement is used to delete data from a database?',
      "a": "DELETE",
      "b": 'COLLAPSE',
      "c": 'REMOVE',
      "d": "COMMIT",
      "value": '9',
      "valuetrue": 'a'

    },
    {
      "stt": 5,
      "debai": 'Choose the best answer for each question.',
      "cauhoi": 'With SQL, how do you select a column named "FirstName" from a table named "Persons"?',
      "a": "EXTRACT FirstName FROM Persons",
      "b": "SELECT FirstName FROM Persons",
      "c": "SELECT Persons.FirstName",
      "d": "ALL",
      "value": '9',
      "valuetrue": 'b'

    },
    {
      "stt": 6,
      "debai": 'Choose the best answer for each question.',
      "cauhoi": 'Which SQL statement is used to insert new data in a database?',
      "a": "INSERT NEW",
      "b": "ADD RECORD",
      "c": "INSERT INTO",
      "d": "ADD NEW",
      "value": '9',
      "valuetrue": 'c'

    },
    {
      "stt": 7,
      "debai": 'Choose the best answer for each question.',
      "cauhoi": 'With SQL, how do you select all the columns from a table named "Persons"?',
      "a": "SELECT Persons",
      "b": "SELECT [all] FROM Persons",
      "c": "SELECT * FROM Persons",
      "d": "SELECT *.Persons",
      "value": '9',
      "valuetrue": 'c'

    },
    {
      "stt": 8,
      "debai": 'Choose the best answer for each question.',
      "cauhoi": 'With SQL, how do you select all the records from a table named "Persons" where the value of the column "FirstName" is "Peter"?',
      "a": "SELECT [all] FROM Persons WHERE FirstName LIKE 'Peter'",
      "b": "SELECT * FROM Persons WHERE FirstName='Peter'",
      "c": "SELECT * FROM Persons WHERE FirstName<>'Peter'",
      "d": "SELECT [all] FROM Persons WHERE FirstName='Peter'",
      "value": '9',
      "valuetrue": 'b'


    },
    {
      "stt": 9,
      "debai": 'Choose the best answer for each question.',
      "cauhoi": 'PWith SQL, how do you select all the records from a table named "Persons" where the value of the column "FirstName" starts with an "a"?',
      "a": "SELECT * FROM Persons WHERE FirstName='%a%'",
      "b": "SELECT * FROM Persons WHERE FirstName LIKE 'a%'",
      "c": "SELECT * FROM Persons WHERE FirstName LIKE '%a'",
      "d": "SELECT * FROM Persons WHERE FirstName='a'",
      "value": '9',
      "valuetrue": 'b'

    },
    {
      "stt": 10,
      "debai": 'Choose the best answer for each question.',
      "cauhoi": 'The OR operator displays a record if ANY conditions listed are true. The AND operator displays a record if ALL of the conditions listed are true";',
      "a": "True",
      "b": "False",
      "c": "A & B",
      "d": "Other answers",
      "value": '9',
      "valuetrue": 'a'

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

