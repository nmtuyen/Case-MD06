import { Component, OnInit } from '@angular/core';
import {User} from '../../../models/user/user';
import {UserService} from '../../../service/user/user.service';
import {Irent} from '../../../models/rent/Irent';
import {categoryService} from '../../../models/categoryService/categoryService';
import {RentServiceService} from '../../../service/rent/rent-service.service';
import {CategoryServiceService} from '../../../service/service/category-service.service';
import {Router} from "@angular/router";
import {JwtResponse} from "../../../models/in-out/jwt-response";


@Component({
  selector: 'app-navbar-admin',
  templateUrl: './navbar-admin.component.html',
  styleUrls: ['./navbar-admin.component.css']
})
export class NavbarAdminComponent implements OnInit {

  rents : Irent[] = [];
  category : categoryService[] = [];
//
  constructor(private userService: UserService,
              private router: Router,
              private rentService : RentServiceService,private categoryService : CategoryServiceService) {
    this.checkTonken()
  }
  roles = [];
  // @ts-ignore
  jwt: JwtResponse = JSON.parse(localStorage.getItem('jwtResponse'));
  checkTonken() {
    console.log(this.jwt.roles)
    if (!this.jwt){
      this.router.navigate([''])
    }else {
      // @ts-ignore
      for (let i = 0; i < this.jwt.roles?.length; i++) {
        // @ts-ignore
        if (this.jwt.roles[i].authority === 'ROLE_ADMIN'){
          // @ts-ignore
          this.roles.push(this.jwt.roles[i])
        }
      }
      if (this.roles.length != 0){}
      else {
        this.router.navigate([''])
      }

    }
  }
  ngOnInit(): void {
    // this.getAllByStatusCCDV3();
    // this.getAllUserSystem();
    this.getAllRent(),
      this.getAllCategory()
    this.getAllByStatusCCDV3();
    this.getAllUserSystem()
  }

  getAllRent(){
    this.rentService.getAllRent().subscribe(data=>{
      this.rents= data;
      console.log(data)
    })
  }
  getAllCategory(){
    this.categoryService.getAll().subscribe(data=>{
      this.category = data;
      console.log(data)
    })
  }

  listUserToCCDV: User[] = [];
  listUserSystem: User[] = [];


  getAllByStatusCCDV3() {
    this.userService.findAllByStatusCCDV3().subscribe(data => {
      this.listUserToCCDV = data;
    })
  }
  getAllUserSystem() {
    this.userService.getAll().subscribe(list => {
      this.listUserSystem = list;
    })
  }
  logout(){
    localStorage.removeItem('jwtResponse')
    window.location.href="/login"
  }


}
