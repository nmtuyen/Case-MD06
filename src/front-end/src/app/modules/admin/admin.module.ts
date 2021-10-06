import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import {NgxPaginationModule} from 'ngx-pagination';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {LayoutAdminComponent} from '../../component/admin-component/layout-admin/layout-admin.component';
import {ListUserSystemComponent} from '../../component/admin-component/list-user-system/list-user-system.component';

import {ListUserToCCDVComponent} from '../../component/admin-component/list-user-to-ccdv/list-user-to-ccdv.component';
import {NavbarAdminComponent} from '../../component/admin-component/navbar-admin/navbar-admin.component';
import {AdminRoutingModule} from './admin-routing.module';

import {RentAdminPageComponent} from '../../component/admin-component/rent-admin-page/rent-admin-page.component';
import {BrowserModule} from '@angular/platform-browser';
import {CommonModule} from '@angular/common';
import {AdminCategoryComponent} from '../../component/admin-component/admin-category/admin-category.component';





@NgModule({
  declarations: [

 LayoutAdminComponent,
    ListUserSystemComponent,
    ListUserToCCDVComponent,
    NavbarAdminComponent,
    RentAdminPageComponent,
    AdminCategoryComponent,

  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    HttpClientModule,
    NgxPaginationModule,
    ReactiveFormsModule,
    FormsModule,

    NgbModule

  ]
})
export class AdminModule { }
