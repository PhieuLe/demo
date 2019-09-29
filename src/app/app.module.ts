import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {NgxPaginationModule} from 'ngx-pagination';
import {OrderModule} from 'ngx-order-pipe'

import { Route, RouterModule, Routes} from '@angular/router';

import{ CommonModule } from '@angular/common';
const RoutesConfig: Routes =[
  { path: '', component: TrangchuComponent },
  {path : 'trangchu', component: TrangchuComponent},
  {path : 'gopy', component: GopyComponent},
  {path : 'danhmucmonhoc', component: DmmhComponent},
  {path : 'gioithieu', component: GioithieuComponent},
  {path : 'hoidap', component: HoidapComponent},
  {path : '**' ,component:TrangchuComponent}
];

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TrangchuComponent } from './trangchu/trangchu.component';
import { DmmhComponent } from './dmmh/dmmh.component';
import { GioithieuComponent } from './gioithieu/gioithieu.component';
import { GopyComponent } from './gopy/gopy.component';
import { HoidapComponent } from './hoidap/hoidap.component';


@NgModule({
  declarations: [
    AppComponent,
    TrangchuComponent,
    DmmhComponent,
    GioithieuComponent,
    GopyComponent,
    HoidapComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxPaginationModule,
    RouterModule.forRoot(RoutesConfig ),
    CommonModule,
    OrderModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
