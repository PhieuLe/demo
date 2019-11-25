import { Component, OnInit } from '@angular/core';
import { ActivatedRoute ,ParamMap} from '@angular/router'; 
@Component({
  selector: 'app-hoidap',
  templateUrl: './hoidap.component.html',
  styleUrls: ['./hoidap.component.css']
})
export class HoidapComponent implements OnInit {
 messhiden=true;
 monhoc;
  constructor(private route :ActivatedRoute) { }

  ngOnInit() {
    this.route.paramMap.subscribe((params: ParamMap)=>{
      const id =params.get('id');
      this.monhoc=id;    
      console.log("hd"+id);      
    });
  }
  anhien(){
    this.messhiden=!this.messhiden;
  }
}
