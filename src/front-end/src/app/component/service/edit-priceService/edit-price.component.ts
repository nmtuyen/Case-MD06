import {Component, OnInit, Output, EventEmitter} from '@angular/core';
import {AngularFireStorage, AngularFireStorageReference} from '@angular/fire/storage';

import {User} from '../../../models/user/user';
import {JwtResponse} from '../../../models/in-out/jwt-response';
import {ImgService} from '../../../service/image/img.service';
import {FormArray, FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {BehaviorSubject, Observable} from 'rxjs';
import {IuserService} from '../../../models/userService/Iuser-service';
import {UserServiceService} from '../../../service/user-service/user-service.service';
import {categoryService} from "../../../models/categoryService/categoryService";
import {UserService} from '../../../service/user/user.service';
import {Router} from "@angular/router";

@Component({
  selector: 'app-profile',
  templateUrl: './edit-price.component.html',
  styleUrls: ['./edit-price.component.css']
})
export class EditPriceComponent implements OnInit {
  // @ts-ignore

  basePrice :IuserService[] =[]


  iuserService : FormGroup = new FormGroup({
    price : new FormControl()
    }
  );
  listUserService: IuserService[] = [];
price1: number = 0;

  idUs: number = 0;
  // @ts-ignore
  jwt: JwtResponse = JSON.parse(localStorage.getItem('jwtResponse'));
  constructor( private userService: UserServiceService,  private us: UserService, private router: Router) {

  }
  checkTonken(){
    if (!this.jwt){
      this.router.navigate([''])
    }}

  ngOnInit(): void {
    this.getListServiceRegister();
    // @ts-ignore
this.checkTonken();

  }

  getListServiceRegister(){

    // @ts-ignore
    this.userService.findByUserId(this.jwt.id).subscribe(data =>{
     // @ts-ignore
      this.listUserService = data;
      console.log(data)
      this.getListBaseService()
    })


  }

  updatePrice(id: any,index: number, usService: IuserService){
    // @ts-ignore
    usService.price = document.getElementById(""+index+"").value

    console.log(usService)
    // @ts-ignore

    this.userService.updatePrice(id,usService).subscribe(data=>{
      console.log("ok")
    })
  }

  updateAll(){
    for (let i = 0; i < this.basePrice.length; i++) {
      this.updatePrice(this.basePrice[i].id,i,this.basePrice[i]);
    }
  }
  savePriceUser(){
    // @ts-ignore
    let price = document.getElementById('price').value;
    if(price==0 || price == ''){
      price = 70000;
    }
    // @ts-ignore
    this.us.savePriceUser(this.jwt.id,price).subscribe(data =>{
      console.log(data)
      window.location.reload()
    })

  }


  getListBaseService(){
      console.log(this.listUserService)
    for (let i = 0; i < this.listUserService.length; i++) {
      // @ts-ignore
      if(this.listUserService[i].service.typeService === 'Mở rộng'){
        // @ts-ignore
        this.basePrice.push(this.listUserService[i])
      }

    }
    console.log(this.basePrice)
  }

}
