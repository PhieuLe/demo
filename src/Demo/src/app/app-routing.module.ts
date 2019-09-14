import { NgModule } from '@angular/core';
import { Route, RouterModule, Routes} from '@angular/router';

import{ CommonModule } from '@angular/common';


import { DetailComponent } from './detail/detail.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { TrangchuComponent } from './trangchu/trangchu.component';


const RoutesConfig: Routes =[
    { path: '', component: TrangchuComponent },
    {path : 'detail/:id', component: DetailComponent},
    {path : '**' ,component:NotfoundComponent}
  ];
  @NgModule({
    declarations: [
      DetailComponent,
      NotfoundComponent,
      TrangchuComponent,
    
    ],
    imports: [
      RouterModule.forRoot(RoutesConfig ),
      CommonModule
    ],
exports : [RouterModule]
  })
  export class AppRoutingModule {}