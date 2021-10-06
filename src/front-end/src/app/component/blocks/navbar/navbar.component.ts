import {Component, OnInit} from '@angular/core';
import {JwtResponse} from '../../../models/in-out/jwt-response';
import {User} from '../../../models/user/user';
import {UserService} from '../../../service/user/user.service';
import {Router} from '@angular/router';
import {RentService} from "../../../service/rent/rent.service";

import {INotification} from "../../../models/notification/notification";
import {NotificationService} from "../../../service/notification/notification.service";
import {Imessage} from "../../../models/message/Imessage";
import {MessageService} from "../../../service/message/message.service";
import { RentServiceService } from 'src/app/service/rent/rent-service.service';
import {Irent} from "../../../models/rent/Irent";


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  // @ts-ignore
  jwt: JwtResponse = JSON.parse(localStorage.getItem('jwtResponse'));
  hidden = true;
  // @ts-ignore
  user: User = {};
  userName = localStorage.getItem('userName');
  listUser: User[] = [];
  // @ts-ignore
  listMessage : Imessage[] = [];
  listNotification: INotification[] = [];

  constructor(private userService: UserService,
              private rentService: RentService,
              private router: Router,
              private notification: NotificationService,
              private message: MessageService,
              private rent : RentServiceService
  ) {


  }

  ngOnInit(): void {
    setInterval(() => {
      this.checkListNotification();
      this.checkListMessage()
    }, 1000)
    this.checktoken();
    // @ts-ignore
    this.getById(this.jwt.id)
    this.showTop6();
    this.getListNotification()
    this.getAllVip()
  }

  // tslint:disable-next-line:typedef
  logout() {
    localStorage.removeItem('jwtResponse');
    window.location.reload();
  }

  // tslint:disable-next-line:typedef
  checktoken() {
    if (this.jwt == null) {
      this.hidden = false;
    }
  }

  getById(id: number) {
    this.userService.getById(id).subscribe(data => {
      this.user = data;
    })
  }

  reloadHome() {


    this.router.navigate(['']);

    // window.location.reload();
  }


  showTop6() {
    this.rentService.showTop6().subscribe(data => {
      for (let i = 0; i < data.length; i++) {
        // @ts-ignore
        this.userService.getById(data[i].user.id).subscribe(data1 => {
          this.listUser.push(data1);
          console.log(data1,"a")
        })
      }
    })
  }


  checkListMessage() {
    // @ts-ignore
    this.message.getByReceiverIdAndStatus(this.jwt.id).subscribe(data => {
      this.listMessage = data
    })
  }

  checkListNotification() {
    // @ts-ignore
    this.notification.findByStatus0(this.jwt.id).subscribe(data => {
      this.listNotification = data;
    })
  }
  updateNotification(){
    for (let i = 0; i < this.listNotification.length; i++) {
      this.notification.updateStatus(this.listNotification[i].id).subscribe(()=>{

      })
    }
  }
  listNotificationById: INotification[] = [];
  getListNotification(){
    // @ts-ignore
    this.notification.findByUserId(this.jwt.id).subscribe(data => {
      this.listNotificationById = data;
    })
  }
  updateMessage() {
    for (let i = 0; i < this.listMessage.length; i++) {
      this.message.updateStatusMs(this.listMessage[i].id).subscribe(() => {

      })
    }
  }

  vipUserCCDV : User[] = []
  getAllVip(){
    this.userService.getAllVipUser().subscribe(data=>{
      this.vipUserCCDV = data;
      console.log(data)
    })
  }
  rentList : Irent[] = []
  getRentByUserCCDVId(id : any){

      this.rent.getListRentByCCDV(id).subscribe(data=>{
        this.rentList = data;
        console.log(data)
      })

  }
}
