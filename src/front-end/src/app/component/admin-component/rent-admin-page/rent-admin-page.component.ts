import {Component, OnInit} from '@angular/core';
import {RentService} from '../../../service/rent/rent.service';
import {RentDetailService} from '../../../service/rent_detail/rent-detail.service';
import {UserService} from '../../../service/user/user.service';
import {CategoryServiceService} from '../../../service/service/category-service.service';
import {User} from '../../../models/user/user';
import {Irent} from '../../../models/rent/Irent';
import {IRentDetail} from '../../../models/rent_detail/irent-detail';
import {RentServiceService} from '../../../service/rent/rent-service.service';
import {Router} from "@angular/router";
import {JwtResponse} from "../../../models/in-out/jwt-response";

@Component({
  selector: 'app-rent-admin-page',
  templateUrl: './rent-admin-page.component.html',
  styleUrls: ['./rent-admin-page.component.css']
})
export class RentAdminPageComponent implements OnInit {

  constructor(private rentService: RentServiceService, private rentDetailService: RentDetailService,
              private userService: UserService,
              private categoryService: CategoryServiceService,
              private router: Router
  ) {
    this.checkTonken()
  };
  // @ts-ignore
  user: User = {};
  rentList : Irent[] = [];
  rentById : Irent = {};
  rentDetail : IRentDetail = {};
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
    this.getAllRentList()
  }
  getAllRentList(){
    this.rentService.getAllRent().subscribe(data=>{
      this.rentList = data;
      console.log(data)
    })
  }
  rentByDetailId : IRentDetail[] = []
  getRentDetailById(id: any){
    console.log(id,"abc")
    this.rentDetailService.getByRentId(id).subscribe(
    data =>{
      this.rentByDetailId = data;
      console.log(this.rentByDetailId,"a")
    }
    )
  }
  findbyId(id : any){
    this.rentService.getById(id).subscribe(data=>{
      this.rentById = data;
    })
  }
  hidden = false;
  checkHidden(){
    this.hidden = true;
  }
  getRentbyid(id : any){
    this.rentService.getById(id).subscribe(data=>{
      this.rentById = data;
    })
  }




}

