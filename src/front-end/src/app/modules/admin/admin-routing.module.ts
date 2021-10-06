import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ListCCDVComponent} from "../../component/User/CCDV/list-ccdv/list-ccdv.component";
import {PersonalpageComponent} from "../../component/personalpage/personalpage.component";
import {ListUserSystemComponent} from '../../component/admin-component/list-user-system/list-user-system.component';
import {RentAdminPageComponent} from '../../component/admin-component/rent-admin-page/rent-admin-page.component';
import {AdminCategoryComponent} from '../../component/admin-component/admin-category/admin-category.component';
import {ListUserToCCDVComponent} from '../../component/admin-component/list-user-to-ccdv/list-user-to-ccdv.component';


const routes: Routes = [
  {
    path: '',
    component: ListUserSystemComponent
  },
  {path : 'rentAdmin',
    component : RentAdminPageComponent},
  {path : 'categoryAdmin',
  component : AdminCategoryComponent
  },{

    path: 'list-user-to-CCDV',
    component: ListUserToCCDVComponent
  },
  {
    path: 'list-user-system',
    component: ListUserSystemComponent
  },


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
