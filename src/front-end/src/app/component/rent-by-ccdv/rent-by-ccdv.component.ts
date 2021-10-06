import {Component, OnInit} from '@angular/core';
import {UserService} from "../../service/user/user.service";
import {ActivatedRoute, Router} from "@angular/router";
import {AngularFireStorage} from "@angular/fire/storage";
import {ImgService} from "../../service/image/img.service";
import {RentServiceService} from "../../service/rent/rent-service.service";
import {User} from "../../models/user/user";
import {Irent} from '../../models/rent/Irent';
import {RentDetailService} from '../../service/rent_detail/rent-detail.service';
import {IRentDetail} from '../../models/rent_detail/irent-detail';
import {NotificationService} from "../../service/notification/notification.service";
import {INotification} from "../../models/notification/notification";


@Component({
  selector: 'app-rent-by-ccdv',
  templateUrl: './rent-by-ccdv.component.html',
  styleUrls: ['./rent-by-ccdv.component.css']
})
export class RentByCCDVComponent implements OnInit {
  // @ts-ignore
  user: User = {};
  // @ts-ignore

  rent: Irent = {};

  // @ts-ignore
  id: number;
  rents: Irent[] = []

  constructor(private userService: UserService, private activateRoute: ActivatedRoute, private router: Router,
              private notificationService: NotificationService,
              private angularFireStore: AngularFireStorage, private img: ImgService, private rentDetailService: RentDetailService, private rentService: RentServiceService) {
  }

  ngOnInit(): void {
    this.activateRoute.paramMap.subscribe((paramMap) => {
      // @ts-ignore
      this.id = +paramMap.get(`id`);
      this.getUserbyId(this.id);
      this.getRentByCCDV(this.id)


    })

  }

  getUserbyId(id: number) {
    this.userService.getById(id).subscribe(data => {
      this.user = data;

    })
  }

  getRentByCCDV(id: any) {
    this.rentService.getListRentByCCDV(id).subscribe(data => {
      this.rents = data;

    })
  }

  chageStatus(status: number) {

    // @ts-ignore
    this.rentService.changeStatus(this.rent.id, status).subscribe(data => {
      this.rent = data;

      console.log(data)
    })


  }

  getbyId(id: any) {

    this.rent.id = id;
  }

  hidden = true;

  checkhidden() {
    this.hidden = false;
  }

  // @ts-ignore
  userSDDV: User = {};

  getByUserSDDVId(id: any) {
    this.userService.getById(id).subscribe(data => {
      this.userSDDV = data;
    })
  }

  // @ts-ignore
  notification: INotification = {};

  deleteRentById(id: any) {

    // @ts-ignore
    this.rentService.getById(this.rent.id).subscribe(data => {
      // @ts-ignore
      this.userService.getById(data.userRent?.id).subscribe(data3=>{
        this.notification.user = data3
        console.log(data3)
        console.log(this.notification)
        this.userService.getById(this.id).subscribe(data1=>{
          this.notification.content = data1.name + " đã hủy đơn thuê"
          this.notificationService.create(this.notification).subscribe(()=>{

          })
          this.rentService.deleteRent(id).subscribe(data => {

            window.location.reload()
          })
        })

      })


    })


  }

  // @ts-ignore
  rent1: Irent[] = {};
  rentDetail: IRentDetail[] = [];

  getRentDetailByRentId(id: any) {
    this.rentDetailService.getByRentId(id).subscribe(
      data => {
        this.rentDetail = data;

      }
    )
  }

  // @ts-ignore
  userCCDV: User = {};

  getByUserCCDVId(id: any) {
    this.userService.getById(id).subscribe(data => {
      this.userCCDV = data;
    });
  }

  rentbyId: Irent = {}

  getRentbyId(id: any) {
    this.rentService.getById(id).subscribe(data => {
      this.rentbyId = data;

    })
  }


}
