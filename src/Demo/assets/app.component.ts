import { Component, Input } from '@angular/core';
import { equal } from 'assert';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'baitap';
  soluonga :number=0;
  soluongb :number=0;
  soluongc :number=0;
  soluongd :number=0;
  Total	:number=0;
  fogot:boolean=false;
  deletelana :boolean=false;
  deletelanb :boolean=false;
  deletelanc :boolean=false;
  deleteland :boolean=false;
  students = [
    {
    fullName: 'Nguyễn Văn Tèo',
    birthday: '20-01-1999',
    gender: 'Nam',
    photo: 'https://scontent.fsgn2-3.fna.fbcdn.net/v/t1.0-9/31498735_850789548440540_3849160964964352000_n.jpg?_nc_cat=106&_nc_oc=AQlaTWibbwRUEITgeNLipbpM9xzaqqgtt-d43ZkX9WvYjwrO8s5ZfoA6aj1WoDaL9ds&_nc_ht=scontent.fsgn2-3.fna&oh=5c1500a4bc897091ebb1ec2935f32f33&oe=5E151497',
    mark: 8.5
    },
    {
    fullName: 'Phan thị nở',
    birthday: '20-12-1999',
    gender: 'Nữ',
    photo:'https://i.pinimg.com/originals/7e/7b/f6/7e7bf68999ed12f4393a2ef81750675b.png',
    mark: 8.5
    },
    {
    fullName: 'Nguyễn khá Bảnh',
    birthday: '20-01-2000',
    gender: 'Nam',
    photo:'https://scontent.fsgn2-3.fna.fbcdn.net/v/t1.0-9/31498735_850789548440540_3849160964964352000_n.jpg?_nc_cat=106&_nc_oc=AQlaTWibbwRUEITgeNLipbpM9xzaqqgtt-d43ZkX9WvYjwrO8s5ZfoA6aj1WoDaL9ds&_nc_ht=scontent.fsgn2-3.fna&oh=5c1500a4bc897091ebb1ec2935f32f33&oe=5E151497',
    mark: 8.5
    }
  ];
  product =[
    {
        "productId": 1,
        "productName": "Leaf Rake",
        "productCode": "GDN-0011",
        "releaseDate": "March 19, 2016",
        "description": "Leaf rake with 48-inch wooden handle.",
        "price": 19.95,
        "starRating": 3.2,
        "imageUrl": "../assets/image/leafrake.jpg"
    },
    {
        "productId": 2,
        "productName": "Garden Cart",
        "productCode": "GDN-0023",
        "releaseDate": "March 18, 2016",
        "description": "15 gallon capacity rolling garden cart",
        "price": 32.99,
        "starRating": 4.2,
        "imageUrl": "../assets/image/gardencart.jpg"
    },
    {
        "productId": 5,
        "productName": "Hammer",
        "productCode": "TBX-0048",
        "releaseDate": "May 21, 2016",
        "description": "Curved claw steel hammer",
        "price": 8.9,
        "starRating": 4.8,
        "imageUrl": "../assets/image/hammer.jpg"
    },
    {
        "productId": 8,
        "productName": "Saw",
        "productCode": "TBX-0022",
        "releaseDate": "May 15, 2016",
        "description": "15-inch steel blade hand saw",
        "price": 11.55,
        "starRating": 3.7,
        "imageUrl": "../assets/image/saw.jpg"
    },
    {
        "productId": 10,
        "productName": "Video Game Controller",
        "productCode": "GMG-0042",
        "releaseDate": "October 15, 2015",
        "description": "Standard two-button video game controller",
        "price": 35.95,
        "starRating": 4.6,
        "imageUrl": "../assets/image/gamecontroller.jpg"
    }
]
bainam =[
  {
  "id":1,
  "firstname":"Cong",
  "lastname":"Ngo",
  "email":"ntcong@tma.com.vn"
  },
  {
    "id":2,
    "firstname":"Thuy",
    "lastname":"Thanh",
    "email":"aa.com.vn"
    },
    {
      "id":3,
      "firstname":"Thanh",
      "lastname":"Thuy",
      "email":"thanhthuy@.com.vn"
      },
      {
        "id":4,
        "firstname":"Quy",
        "lastname":"Tran",
        "email":"quytran@.com.vn"
        },
        {
          "id":5,
          "firstname":"Nguyen",
          "lastname":"Tran",
          "email":"nguyentran@.com.vn"
          },
]
  baiba=[
    {
      "id":"pd100",
      "image":"../assets/image/windown.jpg",
      "name":"Windows",
      "price":"300000",
      "sl":0
    },
    {
      "id":"pd200",
      "image":"../assets/image/mobile.jpg",
      "name":"Mobile",
      "price":"220000",
      "sl":0
    },
    {
      "id":"pd300",
      "image":"../assets/image/television.jpg",
      "name":"Television",
      "price":"240000",
      "sl":0
    },
    {
      "id":"pd400",
      "image":"../assets/image/headphones.jpg",
      "name":"Headphones",
      "price":"140000",
      "sl":0
    }
  ]
  constructor(){
    
  }
    toggleFogot(e){
      alert("oke")
      if(this.fogot == false){
        this.fogot =true;
      }
      else{
        this.fogot=false;
      }
      
    }
    conga(e){
       this.soluonga +=1;
       this.Total= this.soluonga* 300000 + this.soluongb*220000 + this.soluongc*240000 +this.soluongd*140000;
    }
    congb(e){
      this.soluongb +=1;
      this.Total= this.soluonga* 300000 + this.soluongb*220000 + this.soluongc*240000 +this.soluongd*140000;
    }
   congc(e){
    this.soluongc +=1;
    this.Total= this.soluonga* 300000 + this.soluongb*220000 + this.soluongc*240000 +this.soluongd*140000;
    }
    congd(e){
      this.soluongd +=1;
      this.Total= this.soluonga* 300000 + this.soluongb*220000 + this.soluongc*240000 +this.soluongd*140000;
   }
    trua(e){
      if(this.soluonga >=1){
      this.soluonga -=1;
      this.Total= this.soluonga* 300000 + this.soluongb*220000 + this.soluongc*240000 +this.soluongd*140000;
    }else{
      alert("erro")
      this.soluonga=0;
      this.Total=0;
    }
    }
    trub(e){
      if(this.soluongb >=1){
      this.soluongb -=1;
      this.Total= this.soluonga* 300000 + this.soluongb*220000 + this.soluongc*240000 +this.soluongd*140000;
    }else{
      alert("erro")
      this.soluongb=0;
      this.Total=0;
    }
    }
    truc(e){
      if(this.soluongc >=1){
      this.soluongc -=1;
      this.Total= this.soluonga* 300000 + this.soluongb*220000 + this.soluongc*240000 +this.soluongd*140000;
    }else{
      alert("erro")
      this.soluongc=0;
      this.Total=0;
    }
    }
    trud(e){
      if(this.soluongd >=1){
      this.soluongd -=1;
      this.Total= this.soluonga* 300000 + this.soluongb*220000 + this.soluongc*240000 +this.soluongd*140000;
    }else{
      alert("erro")
      this.soluongd=0;
      this.Total=0;
    }
    }
    deletea(e){
      alert("delete finish")
      this.deletelana = !this.deletelana;
    }
    deleteb(e){
      alert("delete finish")
      this.deletelanb = !this.deletelanb;
    }
    deletec(e){
      alert("delete finish")
      this.deletelanc = !this.deletelanc;
    }
    deleted(e){
      alert("delete finish")
      this.deleteland = !this.deleteland;
    }
    filter(){
     
    }
}
