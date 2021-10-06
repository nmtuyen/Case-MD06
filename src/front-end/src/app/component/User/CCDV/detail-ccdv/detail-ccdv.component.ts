import {Component, OnInit} from '@angular/core';
import {FormArray, FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {UserService} from '../../../../service/user/user.service';
import {ActivatedRoute, Router} from '@angular/router';
import {UserServiceService} from '../../../../service/user-service/user-service.service';
import {IuserService} from '../../../../models/userService/Iuser-service';
import {Irent} from '../../../../models/rent/Irent';
import {User} from '../../../../models/user/user';
import {RentService} from '../../../../service/rent/rent.service';
import {RentDetailService} from '../../../../service/rent_detail/rent-detail.service';
import {IRentDetail} from '../../../../models/rent_detail/irent-detail';
import {categoryService} from '../../../../models/categoryService/categoryService';
import {CategoryServiceService} from '../../../../service/service/category-service.service';
import {ImgService} from '../../../../service/image/img.service';
import {MessageService} from '../../../../service/message/message.service';
import {NotificationService} from '../../../../service/notification/notification.service';
import {Img} from '../../../../models/image/img';
import {Imessage} from '../../../../models/message/Imessage';



@Component({
  selector: 'app-detail-ccdv',
  templateUrl: './detail-ccdv.component.html',
  styleUrls: ['./detail-ccdv.component.css']
})
export class DetailCcdvComponent implements OnInit {
  // @ts-ignore
  notification: INotification ={};

  allMessage: Imessage[] = [];

  // @ts-ignore
  sender: User = {};
  // @ts-ignore
  receiver: User = {};

  // @ts-ignore
  idUser = JSON.parse(localStorage.getItem('jwtResponse')).id;

  getAllMessageWithLover() {
    this.messageService.getBySenderAndReceiver(this.idUser, this.id).subscribe(data => {
      this.allMessage = data;
      console.log(this.allMessage);
    });
  }
  messageForm: FormGroup = new FormGroup({
    sender: new FormControl(),
    receiver: new FormControl(),
    content: new FormControl(),
  });

  getSender() {
    this.userService.getById(this.idUser).subscribe(user => {
      this.sender = user;
    });
  }

  getReceiver() {
    this.userService.getById(this.id).subscribe(user => {
      this.receiver = user;
    });
  }

  onSubmit() {
    // @ts-ignore
    this.messageForm.value.receiver = this.receiver;
    // @ts-ignore
    this.messageForm.value.sender = this.sender;
    console.log(this.messageForm.value.receiver,'abc');
    this.messageService.create(this.messageForm.value).subscribe(data => {
      console.log(data);
      this.messageForm.reset();
    });
  }



  // @ts-ignore
  user1: User = {};
  serviceDetail: categoryService = {};
  rent: Irent = {};
  date: Date = new Date();
  date2 = '';
  date3 = '';
  date4 = '';
  date5 = '';
  hour = 0;
  total = 0;
  // @ts-ignore
  user: User = {};
  checkDate: Date = new Date();
  arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23];
  arr1 = [];

  rentForm: FormGroup = new FormGroup({

    startDate: new FormControl('', [Validators.required]),
    totalMoney: new FormControl(this.total),
    time: new FormControl('', [Validators.required]),
    rentDate: new FormControl('', [Validators.required]),
    // @ts-ignore

    service: new FormArray([], [Validators.required])

  });
checkReset(){
  this.router.navigate([''])
  window.location.reload()
}
  listUserService: IuserService [] = [];

  getByIdCategoryService(id: number) {
    this.category.getById(id).subscribe(data => {
      this.serviceDetail = data;
      console.log(this.serviceDetail);
    });
  }

  totalMoney: number = 0;

  // @ts-ignore
  userCCDV: FormGroup = new FormGroup({
    userName: new FormControl(),
    email: new FormControl(),
    phoneNumber: new FormControl(),
    name: new FormControl(),
    dateOfBirth: new FormControl(),
    gender: new FormControl(),
    city: new FormControl(),
    nationality: new FormControl(),
    avatar: new FormControl(),
    height: new FormControl(),
    weight: new FormControl(),
    hobby: new FormControl(),
    description: new FormControl(),
    requestToPayer: new FormControl(),
    linkFb: new FormControl(),
    createAt: new FormControl(),
    createAtCCDV: new FormControl(),
    statusCCDV: new FormControl(),
    price: new FormControl(),
  });
  id = 0;
// @ts-ignore
  idUs = 0;

  constructor(private userService: UserService,
              private activatedRoute: ActivatedRoute,
              private router: Router,
              private formBuilder: FormBuilder,
              private userServiceService: UserServiceService,
              private rentService: RentService,
              private rent_detail: RentDetailService,
              private category: CategoryServiceService,
              private imageService: ImgService,
              private messageService: MessageService,
              private notificationService: NotificationService){


  }
  listImg : Img[] = [];
  getListImageByUserId(id : any){
    this.imageService.getImgByIdUs(id).subscribe(data =>{
      this.listImg = data;
    })
  }



  setHour() {
    for (let i = this.hour + 1; i < 24; i++) {
      // @ts-ignore
      this.arr1.push(i);
    }
  }

  getByIdUs() {
// @ts-ignore
    this.idUs = JSON.parse(localStorage.getItem('jwtResponse')).id;
    this.userService.getById(this.idUs).subscribe(data => {
      this.user = data;
      console.log(this.user.price);
      console.log(data);
    });
  }

  rent1() {
    console.log(this.idUs, 'aa');
    if (this.idUs == 0) {
      this.router.navigate(['login']);
    }
    this.date = new Date();
    console.log(this.date.getHours());
    this.hour = this.date.getHours();

    this.date2 = this.date.getFullYear() + '-' + (this.date.getMonth() + 1) + '-' + this.date.getDate();
    this.date3 = this.date.getFullYear() + '-' + '0' + (this.date.getMonth() + 1) + '-' + '0' + this.date.getDate();
    this.date4 = this.date.getFullYear() + '-' + (this.date.getMonth() + 1) + '-' + '0' + this.date.getDate();
    this.date5 = this.date.getFullYear() + '-' + '0' + (this.date.getMonth() + 1) + '-' + this.date.getDate();

    console.log(this.date5);
    this.setHour();
  }

  ngOnInit(): void {


    this.activatedRoute.paramMap.subscribe(paramMap => {

      // @ts-ignore
      this.id = +paramMap.get('id');
      console.log(this.id);
      this.getUserCCDVById(this.id);
      this.getUserServiceByUserId(this.id);

      this.getListImageByUserId(this.id)

      this.getSender();
      this.getReceiver();


    });
    this.getByIdUs();

    // @ts-ignore

    console.log(this.user);
    console.log(this.idUs);
  }

  change() {
    // @ts-ignore
    this.checkDate = new Date(document.getElementById('a').value);
    console.log(this.checkDate.getDate());
  }

  change1() {
    // @ts-ignore
    this.checkDate = new Date(document.getElementById('b').value);
    console.log(this.checkDate.getDate());
  }

  change2() {
    // @ts-ignore
    this.checkDate = new Date(document.getElementById('c').value);
    console.log(this.checkDate.getDate());
  }

  change3() {
    // @ts-ignore
    this.checkDate = new Date(document.getElementById('d').value);
    console.log(this.checkDate.getDate());
  }

  getUserCCDVById(id: number) {
    // console.log(id);
    this.userService.getCCDVById(id).subscribe(userCCDV => {
      const date = new Date(userCCDV.createAt);
      const str = date.getDay() + '/' + date.getMonth() + '/' + date.getFullYear();
      this.userCCDV.patchValue(userCCDV);
      this.userCCDV.value.createAt = str;
      this.user1 = userCCDV;
      // @ts-ignore
      this.total = this.user1.price + this.total;
      console.log(this.user1.price);
      // console.log(this.userCCDV)
    });

  }

  getUserServiceByUserId(id: number) {
    this.userServiceService.findByUserId(id).subscribe(list => {
      // @ts-ignore
      this.listUserService = list;
      console.log(this.listUserService);
    });
  }

// @ts-ignore
  listCategoryServic: categoryService = [];

  onCheckboxChange(e: any) {
    const service: FormArray = this.rentForm.get('service') as FormArray;
    console.log(service);
    if (e.target.checked) {

      service.push(new FormControl(e.target.value));

      this.userServiceService.findOne(parseInt(new FormControl(e.target.value).value)).subscribe(data => {
        console.log('data', data);
        // @ts-ignore
        this.total += data.price;

        // @ts-ignore
        this.listCategoryServic.push(data.service);
      });
      this.rentForm.value.totalMoney = this.total;
    } else {
      const index = service.controls.findIndex(x => x.value === e.target.value);
      service.removeAt(index);

      this.userServiceService.findOne(parseInt(new FormControl(e.target.value).value)).subscribe(data => {
        // @ts-ignore
        this.total -= data.price;
        // @ts-ignore
        this.listCategoryServic.splice(index, 1);
      });
      this.rentForm.value.totalMoney = this.total;
    }


    console.log(this.total, '1');
  }

  rentDetail: IRentDetail = {};
// getByIdServiceUser(id: number){
//   this.userServiceService.findOne(id).subscribe()
// }
  checkPrice() {
// @ts-ignore
    let a = document.getElementById('price').value;
    this.total *= parseInt(a);
    console.log(a, 'price');
  }

  createRent() {
    console.log(this.rentForm.value.service);
    let a = '';
    if (parseInt(this.rentForm.value.startDate) < 10) {
      a = this.rentForm.value.rentDate + ' 0' + this.rentForm.value.startDate + ':00:00';
    }
    a = this.rentForm.value.rentDate + ' ' + this.rentForm.value.startDate + ':00:00';


    this.rent = {
      user: this.user1,
      userRent: this.user,
      rentDate: this.rentForm.value.rentDate,
      startTime: new Date(a),
      time: this.rentForm.value.time,
      totalMoney: this.total
    };
    this.notification.user = this.user1;
    this.notification.content = this.user.name + ' muốn thuê bạn';
    this.notificationService.create(this.notification).subscribe(() => {

    })

    this.rentService.creatRent(this.rent).subscribe(data => {
      // @ts-ignore

      for (let i = 0; i < this.listCategoryServic.length; i++) {
        // @ts-ignore
        this.category.getById(this.listCategoryServic[i].id).subscribe(data1 => {

          this.rentDetail = {
            rent: data,
            service: data1
          };
          console.log(this.rentDetail);
          this.rent_detail.createRentDetail(this.rentDetail).subscribe(() => {
          });
        });

      }
      this.message.sender = this.user;
      this.message.receiver = this.user1;
      this.message.content = this.a;
      this.messageService.create(this.message).subscribe(()=>{
        console.log(this.a,"message")
      })


    });
  }
  a = "";
  // @ts-ignore
  message: Imessage = {};
  changeInput(){
    // @ts-ignore
    this.a = document.getElementById('message-text').value


  }
}
