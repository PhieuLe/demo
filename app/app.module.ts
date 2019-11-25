import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {NgxPaginationModule} from 'ngx-pagination';
import {OrderModule} from 'ngx-order-pipe';
import { FormsModule} from '@angular/forms';
import { Route, RouterModule, Routes} from '@angular/router';

import{ CommonModule } from '@angular/common';
const RoutesConfig: Routes =[
  { path: '', component: TrangchuComponent },
  {path : 'trangchu', component: TrangchuComponent},
  {path : 'gopy', component: GopyComponent},
  {path : 'danhmucmonhoc/PHP', component: DmmhComponent},
  {path : 'danhmucmonhoc/HTMLCSS', component: Dmmh2Component},
  {path : 'danhmucmonhoc/MYSQL', component: Dmmh1Component},
  {path : 'danhmucmonhoc/JAVASCRIP', component: Dmmh3Component},
  {path : 'gioithieu', component: GioithieuComponent},
  {path : 'hoidap/:id', component: HoidapComponent},
  {path : 'dangki', component: DangkiComponent},
  {path : 'dangnhap', component: DangnhapComponent},
  {path : 'menumonhoc', component: MenudmmhComponent},
  {path : 'trangchu/:id', component: TrangchuComponent},
  {path : '**' ,component:TrangchuComponent}
];

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TrangchuComponent } from './trangchu/trangchu.component';
import { DmmhComponent } from './dmmh/dmmh.component';
import { GioithieuComponent } from './gioithieu/gioithieu.component';
import { GopyComponent } from './gopy/gopy.component';
import { HoidapComponent } from './hoidap/hoidap.component';
import { DangkiComponent } from './dangki/dangki.component';
import { DangnhapComponent } from './dangnhap/dangnhap.component';
import { MenudmmhComponent } from './menudmmh/menudmmh.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { TableftComponent } from './tableft/tableft.component';
import { Dmmh1Component } from './dmmh1/dmmh1.component';
import { Dmmh2Component } from './dmmh2/dmmh2.component';
import { Dmmh3Component } from './dmmh3/dmmh3.component';



@NgModule({
  declarations: [
    AppComponent,
    TrangchuComponent,
    DmmhComponent,
    GioithieuComponent,
    GopyComponent,
    HoidapComponent,
    DangkiComponent,
    DangnhapComponent,
    MenudmmhComponent,
    HeaderComponent,
    FooterComponent,
    TableftComponent,
    Dmmh1Component,
    Dmmh2Component,
    Dmmh3Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxPaginationModule,
    RouterModule.forRoot(RoutesConfig ),
    CommonModule,
    OrderModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
