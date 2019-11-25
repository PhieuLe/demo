import { Component, OnInit } from '@angular/core';
import { ActivatedRoute ,ParamMap} from '@angular/router'; 

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  an=false;
  id
  constructor(private route :ActivatedRoute) { }

  ngOnInit() {
    
  }
}