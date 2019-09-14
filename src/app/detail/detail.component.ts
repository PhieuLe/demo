import { Component, OnInit } from '@angular/core';
import { ActivatedRoute ,ParamMap} from '@angular/router'; 


@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {
  lastname :string='';
  FirstMidName:string='';
  arrname =['Alexander','Alonso','Anand','Barzdukas','Li','Justice','Norman','Olivetto'];
  courses = [
    {
      id:1050,
      title:"Chemistry",
      credits:3,
      StudentID:1,
      Grade:'A',
    },
    {
      id:4022,
      title:"Python",
      credits:3,
      StudentID:1,
      Grade:'C'
    },
    {id:4041,
      title:"Macroeconomics",
      credits:3,
      StudentID:1,
      Grade:'B'
    },
    {
      id:1045,
      title:"Calculus",
      credits:4,
      StudentID:2,
      Grade:'B'
    },
    {
      id:3141,
      title:"DjAngo",
      credits:4,
      StudentID:2,
      Grade:'F'
    },
    {
      id:2021,
      title:"Composition",
      credits:3,
      StudentID:2,
      Grade:'F'
    },
    {
      id:2042,
      title:"Literature",
      credits:4,
      StudentID:3,
      Grade:'B'
    }
    ];
             
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
    
  constructor(private route :ActivatedRoute) { }

  ngOnInit() {
   this.route.paramMap.subscribe((params: ParamMap)=>{
     const id =params.get('id');
     console.log(id);
      this.lastname =params.get('lastname');    
   });
  }

}
