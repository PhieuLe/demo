import { Component, OnInit } from '@angular/core';
import { ActivatedRoute ,ParamMap} from '@angular/router'; 

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  id
  constructor(private route :ActivatedRoute) { }
  dangnhap = 'Đăng nhập';
  ngOnInit() {
    this.route.paramMap.subscribe((params: ParamMap)=>{
      const id =params.get('id');
      this.id=id;    
      //console.log("hd"+id);
      if(this.id == 'phieu123'){
        this.dangnhap="Đăng xuất"
      }      
    });
  }

}
