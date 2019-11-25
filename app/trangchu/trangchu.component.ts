import { Component, OnInit } from '@angular/core';
import { ActivatedRoute ,ParamMap} from '@angular/router'; 

@Component({
  selector: 'app-trangchu',
  templateUrl: './trangchu.component.html',
  styleUrls: ['./trangchu.component.css']
})
export class TrangchuComponent implements OnInit {
  id
  messhiden=true;
  constructor(private route :ActivatedRoute) { }

  ngOnInit() {
    this.route.paramMap.subscribe((params: ParamMap)=>{
      const id =params.get('id');
      this.id=id;          
    });
  }
  anhien(){
    this.messhiden=!this.messhiden;
  }
}
