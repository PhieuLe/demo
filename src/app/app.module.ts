import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Route, RouterModule, Routes} from '@angular/router';

import{ CommonModule } from '@angular/common';
const RoutesConfig: Routes =[
  { path: '', component: TrangchuComponent },
  {path : 'detail/:id/:lastname', component: DetailComponent},
  {path : '**' ,component:NotfoundComponent}
];

import { AppComponent } from './app.component';
import { DetailComponent } from './detail/detail.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { TrangchuComponent } from './trangchu/trangchu.component';






@NgModule({
  declarations: [
    AppComponent,
    DetailComponent,
    NotfoundComponent,
    TrangchuComponent,
  
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(RoutesConfig ),
    CommonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
