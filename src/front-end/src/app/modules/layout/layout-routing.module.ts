import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ListCCDVComponent} from '../../component/User/CCDV/list-ccdv/list-ccdv.component';
import {DetailCcdvComponent} from '../../component/User/CCDV/detail-ccdv/detail-ccdv.component';
import {EditPriceComponent} from '../../component/service/edit-priceService/edit-price.component';
import {RegisterServiceComponent} from '../../component/service/register-service/register-service.component';
import {ListServiceRegisterComponent} from '../../component/service/list-service-register/list-service-register.component';
import {HowToUseComponent} from '../../component/how-to-use/how-to-use.component';
import {PersonalpageComponent} from '../../component/personalpage/personalpage.component';
import {MessageComponent} from "../../component/message/message.component";
import {SignInComponent} from '../../component/sign-in/sign-in.component';
import {SignUpComponent} from '../../component/sign-up/sign-up.component';
import {RentBySDDVComponent} from '../../component/rent-by-sddv/rent-by-sddv.component';
import {RentByCCDVComponent} from '../../component/rent-by-ccdv/rent-by-ccdv.component';

const routes: Routes = [
  {
    path: 'messages',
    component: MessageComponent
  },
  {
    path: '',
    component: ListCCDVComponent
  },

  {
    path: 'usersCCDV/:id',
    component: DetailCcdvComponent
  },
  {
    path: 'edit-price',
    component: EditPriceComponent
  },
  {
    path: 'categoryServices',
    component: RegisterServiceComponent
  },
  {
    path: 'categoryService/listRegister',
    component: ListServiceRegisterComponent
  },
  {
    path: 'howToUse',
    component: HowToUseComponent
  },
  {
    path: 'me/:id',
    component: PersonalpageComponent
  },

  {
    path: 'login',
    component: SignInComponent
  },
  {
    path: 'create',
    component: SignUpComponent
  },
  {
    path : 'userSDDV/:id',
    component : RentBySDDVComponent
  },
  {
    path : 'userCCDV/:id',
    component : RentByCCDVComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LayoutRoutingModule { }
