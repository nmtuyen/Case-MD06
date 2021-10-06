
import {Component, OnInit} from '@angular/core';
import {UserService} from '../../../service/user/user.service';
import {User} from '../../../models/user/user';
import {NotificationService} from '../../../service/notification/notification.service';
import {INotification} from '../../../models/notification/notification';
import {Router} from "@angular/router";
import {JwtResponse} from "../../../models/in-out/jwt-response";


@Component({
  selector: 'app-list-user-to-ccdv',
  templateUrl: './list-user-to-ccdv.component.html',
  styleUrls: ['./list-user-to-ccdv.component.css']
})
export class ListUserToCCDVComponent implements OnInit {

  // @ts-ignore
  notification: INotification = {};

  // @ts-ignore
  user: User = {};

  listUserToCCDV: User[] = [];

  idUs = 0;
  page = 1;
  count = 0;
  tableSize = 10;
  tableSizesArr = [5, 10, 15];
  currentIndex = 1;

  constructor(private userService: UserService,
              private notificationService: NotificationService,
              private router: Router) {
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
    this.getAllByStatusCCDV3();
  }

  createNotification(id: any) {
    this.notification.content = 'Bạn đã được duyệt thành người cung cấp dịch vụ';
    this.userService.getById(id).subscribe(data => {
      this.notification.user = data;
    });
    this.notificationService.create(this.notification).subscribe(() => {
      console.log('đã thành công');
    });
  }

  getAllByStatusCCDV3() {
    this.userService.findAllByStatusCCDV3().subscribe(data => {
      this.listUserToCCDV = data;
    });
  }

  getUserById(id: any) {
    this.userService.getById(id).subscribe(user => {
      this.user = user;
    });
  }

  deleteUserDetail() {
    // @ts-ignore
    this.user = {};
  }

  confirmCCDV(id: any) {
    this.userService.changeStatusCCDV(id).subscribe(() => {
    });
  }

  reloadPage() {
    window.location.reload();
  }

  tabSize(event: any) {
    this.page = event;
    this.getAllByStatusCCDV3();
  }

  tableData(event: any): void {
    this.tableSize = event.target.value;
    this.page = 1;
    this.getAllByStatusCCDV3();
  }


}
