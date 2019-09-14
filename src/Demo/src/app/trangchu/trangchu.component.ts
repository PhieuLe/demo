import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-trangchu',
  templateUrl: './trangchu.component.html',
  styleUrls: ['./trangchu.component.css']
})
export class TrangchuComponent implements OnInit {
  hien :boolean=false;
  hiena :boolean=false;
  hienb :boolean=false;
  hienc :boolean=false;
  hiend :boolean=false;
  hiene :boolean=false;
  hienf :boolean=false;
  hieng :boolean=false;
  students = [
    {
      ID: 1,
      FirstMidName: "Carson",
      LastName: "Alexander",
      EnrollmentDate: "2005-09-01"
    },
    {
      ID: 2,
      FirstMidName: "Meredith",
      LastName: "Alonso",
      EnrollmentDate: "2002-09-01"
    },
    {
      ID: 3,
      FirstMidName: "Arturo",
      LastName: "Anand", 
      EnrollmentDate: "2003-09-01"
    },
    {
      ID: 4,
      FirstMidName: "Gytis",
      LastName: "Barzdukas",
      EnrollmentDate: "2002-09-01"
    },
    {
      ID: 5,
      FirstMidName: "Yan", 
      LastName: "Li", 
      EnrollmentDate: "2002-09-01"
    },
    {
      ID: 6,
      FirstMidName: "Peggy", 
      LastName: "Justice",
      EnrollmentDate: "2001-09-01"
    },
    {
      ID: 7,
      FirstMidName: "Laura",
      LastName: "Norman", 
      EnrollmentDate: "2003-09-01"
    },
    {
      ID: 8,
      FirstMidName: "Nino",
      LastName: "Olivetto", 
      EnrollmentDate: "2005-09-01"
    }

  ];


  constructor() {
  
   }
   anhien(e){
    var r = confirm("bạn có muốn xóa.");
    if (r == true) {
      alert('delete finish');
      this.hien=true;
    } else {
      
    } 
    }
   
   anhiena(e){
    var r = confirm("Bạn có muốn xóa.");
    if (r == true) {
      alert('delete finish');
      this.hiena=true;
    } else {
      
    } 
   }
   anhienb(e){
    var r = confirm("bạn có muốn xóa.");
    if (r == true) {
      alert('delete finish');
      this.hienb=true;
    } else {
      
    } 
   }
   anhienc(e){
    var r = confirm("bạn có muốn xóa.");
    if (r == true) {
      alert('delete finish');
      this.hienc=true;
    } else {
      
    } 
   }
   anhiend(e){
    var r = confirm("bạn có muốn xóa.");
    if (r == true) {
      alert('delete finish');
      this.hiend=true;
    } else {
      
    } 
   }
   anhiene(e){
    var r = confirm("bạn có muốn xóa.");
    if (r == true) {
      alert('delete finish');
      this.hiene=true;
    } else {
      
    } 
   }
   anhienf(e){
    var r = confirm("bạn có muốn xóa.");
    if (r == true) {
      alert('delete finish');
      this.hienf=true;
    } else {
      
    } 
   }
   anhieng(e){
    var r = confirm("bạn có muốn xóa.");
    if (r == true) {
      alert('delete finish');
      this.hieng=true;
    } else {
      
    } 
   }
  ngOnInit() {
  }

}

