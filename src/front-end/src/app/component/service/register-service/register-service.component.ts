import { Component, OnInit } from '@angular/core';
import {categoryService} from '../../../models/categoryService/categoryService';
import {CategoryServiceService} from '../../../service/service/category-service.service';
import {FormArray, FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {UserServiceService} from '../../../service/user-service/user-service.service';
import {JwtResponse} from '../../../models/in-out/jwt-response';
import {UserService} from '../../../service/user/user.service';
import {User} from '../../../models/user/user';
import {IuserService} from '../../../models/userService/Iuser-service';


@Component({
  selector: 'app-register-service',
  templateUrl: './register-service.component.html',
  styleUrls: ['./register-service.component.css']
})
export class RegisterServiceComponent implements OnInit {
  idUs: number = 0;
  listServiceShow: categoryService[] = [];
  listServiceSelect: categoryService[] = [];
  // @ts-ignore
  service: FormGroup;
  serviceFormGroup: FormGroup;
// @ts-ignore


  // @ts-ignore
  jwt: JwtResponse = JSON.parse(localStorage.getItem('jwtResponse'));
  // @ts-ignore
  user: User = {};


  constructor(private categoryService: CategoryServiceService,
              private formBuilder: FormBuilder,
              private userService: UserServiceService,
              private us: UserService
  ) {
    this.serviceFormGroup = this.formBuilder.group({
      services: this.formBuilder.array([], [Validators.required]),
    })
  }

  ngOnInit(): void {
    this.getAll();
    this.getByIdUs();


  }

  getAll() {
    this.categoryService.getAll().subscribe(data => {
      this.listServiceShow = data;
    })
  }

  onCheckboxChange(e: any) {
    const service: FormArray = this.serviceFormGroup.get('services') as FormArray;
    if (e.target.checked) {
      service.push(new FormControl(e.target.value));
    } else {
      const index = service.controls.findIndex(x => x.value === e.target.value);
      service.removeAt(index);
    }
  }

  submit() {
    console.log(this.serviceFormGroup.value.services);

  }

  getByIdUs() {
    // @ts-ignore
    this.idUs = this.jwt.id;
    console.log("a" + this.idUs)
    // @ts-ignore
    this.us.getById(this.idUs).subscribe(user => {
      this.user = user;

      console.log(this.user)
    });
  }

  // @ts-ignore
  user_Service: IuserService;

  getById(id: number) {

    // @ts-ignore

    this.categoryService.getById(id).subscribe(data => {
      this.user_Service = {service: data, user: this.user}
      // @ts-ignore
      console.log(this.user)
      this.userService.create(this.user_Service).subscribe(() => {

      })
      // this.listServiceSelect.push(data)
      // console.log(this.listServiceSelect)
    })
  }


  // Lấy list dịch vụ đã đăng kí
  getListService() {
    console.log(this.serviceFormGroup.value.services)
    for (let i = 0; i < this.serviceFormGroup.value.services.length; i++) {
      // @ts-ignore
      this.getById(this.serviceFormGroup.value.services[i])
    }
  }




}
