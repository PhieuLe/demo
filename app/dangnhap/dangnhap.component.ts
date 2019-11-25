import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dangnhap',
  templateUrl: './dangnhap.component.html',
  styleUrls: ['./dangnhap.component.css']
})
export class DangnhapComponent implements OnInit {
  eye:string="fa-eye";
  anhien=true;
  hienan=false;
  showpassword="password";
  uname="";
  pass="";
  an=false;
  id='phieu';
  link="/trangchu/{{uname}}";
  constructor() { }

  ngOnInit() {
  }
  student=[
    {
      "id":1,
      "name":'phieu',
      "pass":'123'
    },
    {
      "id":2,
      "name":'phieupro',
      "pass":'123'
    },
    {
      "id":3,
      "name":'phieu1234phieu',
      "pass":'123'
    }
    ,
    {
      "id":4,
      "name":'phieuprokute',
      "pass":'1234'
    }
  ]
  onsubmit(signin){
    console.log(signin);
  }
  hello(){
    this.anhien=!this.anhien;
    this.hienan=!this.hienan;
    if(this.showpassword=="password"){
      this.showpassword="text";
    }else{
      this.showpassword="password";
    }
  }
  dangnhap(){
    var tktrue;
    for (const element of this.student) {
      console.log(element);
    if(this.uname == 'phieu123' && this.pass == '123'){
        tktrue=1;
        console.log(element.name);
        
        //break;
    }else{
        tktrue=0; 
      //break;
    }
  }
  if(tktrue == 1 ){
    alert('Tài Khoản mật khẩu chính xác !!!');
    location.href = "/trangchu/"+this.uname;
  }else{
    alert('Sai tài khoản hoặc mật khẩu !!!');
  }
}
}
